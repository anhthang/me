<template>
  <UPage v-if="page">
    <template #left>
      <div></div>
    </template>

    <UPageHeader
      :title="page.title"
      :description="page.description"
      :links="page.meta.links"
    />

    <UPageBody>
      <ContentRenderer v-if="page.body" :value="page" prose />

      <div class="flex flex-wrap items-center justify-between gap-2">
        <div class="flex gap-2">
          <UBadge
            v-for="tag in page.meta.tags"
            :key="tag"
            color="neutral"
            variant="soft"
          >
            #{{ tag }}
          </UBadge>
        </div>

        <span v-if="updated" class="text-sm text-muted">
          Updated on
          <time :datetime="page.meta.updated">{{ updated }}</time>
        </span>
      </div>

      <USeparator v-if="surround?.filter(Boolean).length" />

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template #right>
      <UContentToc title="Table of Contents" :links="page.body.toc.links" />
    </template>
  </UPage>
</template>

<script setup>
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('posts').path(route.path).first(),
)

const { data: surround } = await useAsyncData(`${route.path}-surround`, () =>
  queryCollectionItemSurroundings('posts', route.path, {
    fields: ['description'],
  }),
)

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

const updated = page.value?.meta?.updated
  ? new Date(page.value.meta.updated).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  : undefined

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title,
  articlePublishedTime: page.value?.meta?.published,
  articleModifiedTime: page.value?.meta?.updated,
})

defineOgImage('Blog', {
  path: route.path.replace(/^\/posts\/\d{4}-\d{2}-\d{2}-/, ''),
  description,
  date: page.value?.meta?.published
    ? new Date(page.value.meta.published).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : undefined,
  // category: page.value?.meta?.tags?.[0],
})
</script>
