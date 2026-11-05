<template>
  <UNavigationMenu
    orientation="horizontal"
    :items="[right]"
    class="border-t border-neutral-200 dark:border-neutral-800 justify-center"
    :ui="{
      // hide first child (left items) on mobile using arbitrary selector
      root: '[&>div:first-child]:hidden md:[&>div:first-child]:block',
      linkLabel: 'hidden group-hover:block lowercase',
      linkLabelExternalIcon: 'hidden',
    }"
  />
</template>

<script setup>
const right = [
  {
    label: 'GitHub',
    to: 'https://github.com/anhthang',
    target: '_blank',
    icon: 'simple-icons:github',
  },
  {
    label: 'LinkedIn',
    to: 'https://www.linkedin.com/in/buianhthang/',
    target: '_blank',
    icon: 'simple-icons:linkedin',
  },
  {
    label: 'Mastodon',
    to: 'https://mastodon.social/@anhthang',
    target: '_blank',
    icon: 'simple-icons:mastodon',
  },
  {
    label: 'Bluesky',
    to: 'https://bsky.app/profile/anhthang.org',
    target: '_blank',
    icon: 'simple-icons:bluesky',
  },
  {
    label: 'Instagram',
    to: 'https://www.instagram.com/anhthangbui',
    target: '_blank',
    icon: 'simple-icons:instagram',
  },
  {
    label: 'Buy Me a Coffee',
    to: 'https://www.buymeacoffee.com/anhthang',
    target: '_blank',
    icon: 'simple-icons:buymeacoffee',
  },
]
</script>
