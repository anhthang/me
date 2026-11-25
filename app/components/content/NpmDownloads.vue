<template>
  <div class="not-prose my-6 rounded-lg border border-default p-4">
    <div class="mb-4 flex flex-wrap items-baseline justify-between gap-2">
      <ULink
        :to="`https://www.npmjs.com/package/${name}`"
        target="_blank"
        class="flex items-center gap-2 font-semibold text-highlighted"
      >
        <UIcon name="simple-icons:npm" class="size-4 text-[#cb3837]" />
        {{ name }}
      </ULink>
      <span v-if="weeks.length" class="text-sm text-muted">
        {{ format(total) }} downloads in the last year ·
        {{ format(weeks.at(-1).downloads) }} last week
      </span>
    </div>

    <USkeleton v-if="status === 'pending'" class="h-40 w-full" />

    <p v-else-if="!weeks.length" class="text-sm text-muted">
      Download stats are unavailable right now.
    </p>

    <svg
      v-else
      :viewBox="`0 0 ${width} ${height + 20}`"
      class="w-full text-primary"
      role="img"
      :aria-label="`Weekly npm downloads of ${name} in the last year`"
    >
      <line
        :x1="0"
        :x2="width"
        :y1="height"
        :y2="height"
        class="stroke-(--ui-border)"
      />
      <path :d="area" fill="currentColor" fill-opacity="0.15" />
      <path
        :d="line"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linejoin="round"
      />
      <rect
        v-for="(week, i) in weeks"
        :key="week.start"
        :x="i * step - step / 2"
        :y="0"
        :width="step"
        :height="height"
        fill="transparent"
      >
        <title>
          Week of {{ week.start }}: {{ format(week.downloads) }} downloads
        </title>
      </rect>
      <text
        v-for="tick in ticks"
        :key="tick.label"
        :x="tick.x"
        :y="height + 16"
        text-anchor="middle"
        class="fill-(--ui-text-muted) text-[11px]"
      >
        {{ tick.label }}
      </text>
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})

const width = 640
const height = 140

const { data, status } = await useFetch(
  `https://api.npmjs.org/downloads/range/last-year/${props.name}`,
  { key: `npm-downloads-${props.name}`, lazy: true },
)

// Sum the daily counts into weeks, dropping the partial week at the start
const weeks = computed(() => {
  const days = data.value?.downloads ?? []
  const offset = days.length % 7
  const result = []
  for (let i = offset; i < days.length; i += 7) {
    const chunk = days.slice(i, i + 7)
    result.push({
      start: chunk[0].day,
      downloads: chunk.reduce((sum, day) => sum + day.downloads, 0),
    })
  }
  return result
})

const total = computed(() =>
  (data.value?.downloads ?? []).reduce((sum, day) => sum + day.downloads, 0),
)

const step = computed(() => width / Math.max(weeks.value.length - 1, 1))

const points = computed(() => {
  const max = Math.max(...weeks.value.map((week) => week.downloads), 1)
  return weeks.value.map((week, i) => [
    i * step.value,
    height - (week.downloads / max) * (height - 8),
  ])
})

const line = computed(() =>
  points.value
    .map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`)
    .join(''),
)

const area = computed(() =>
  points.value.length ? `${line.value}L${width},${height}L0,${height}Z` : '',
)

// Spelled out rather than toLocaleDateString, whose output differs between
// the server's ICU and the browser's and breaks hydration
const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

// One label per quarter, at the first week of the month
const ticks = computed(() => {
  const result = []
  let lastMonth
  weeks.value.forEach((week, i) => {
    const date = new Date(week.start)
    const month = date.getUTCMonth()
    if (month === lastMonth) return
    lastMonth = month
    if (i < 2 || i > weeks.value.length - 3 || month % 3) return
    result.push({
      x: i * step.value,
      label: `${MONTHS[month]} ${date.getUTCFullYear()}`,
    })
  })
  return result
})

const format = (value) => value.toLocaleString('en-US')
</script>
