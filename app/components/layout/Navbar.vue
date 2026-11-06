<template>
  <UNavigationMenu
    orientation="horizontal"
    :items="[left, middle, right]"
    class="border-b border-neutral-200 dark:border-neutral-800"
    :ui="{
      linkLabel: 'hidden md:block',
      linkLeadingIcon: 'group-data-[active]:text-error',
    }"
  />

  <UModal v-model:open="isOpen">
    <template #content>
      <UCommandPalette
        :groups="groups"
        icon="solar:magnifer-line-duotone"
        @update:model-value="onCommandClick"
      />
    </template>
  </UModal>
</template>

<script setup>
const appConfig = useAppConfig()
const colorMode = useColorMode()
const route = useRoute()

const isOpen = useState('open-cmd', () => false)

const toggleCmd = () => {
  isOpen.value = !isOpen.value
}

// The active route's icon switches from line-duotone to bold-duotone
const isActive = (to) =>
  to === '/'
    ? route.path === '/'
    : route.path === to || route.path.startsWith(`${to}/`)

const navIcon = (name, active) =>
  `solar:${name}-${active ? 'bold' : 'line'}-duotone`

const pages = [
  { label: 'Projects', to: '/projects', icon: 'folder-with-files' },
  { label: 'Posts', to: '/posts', icon: 'notes' },
  { label: 'Uses', to: '/uses', icon: 'bag-heart' },
  { label: 'About', to: '/about', icon: 'user-circle' },
]

const left = computed(() => [
  {
    to: '/',
    active: isActive('/'),
    icon: navIcon('home-2', isActive('/')),
  },
])

const middle = computed(() =>
  pages.map(({ icon, ...page }) => ({
    ...page,
    active: isActive(page.to),
    icon: navIcon(icon, isActive(page.to)),
  })),
)

const right = computed(() => [
  {
    icon: 'solar:command-line-duotone',
    class: 'cursor-pointer',
    onSelect: () => {
      toggleCmd()
    },
  },
])

// command palette
const groups = computed(() => [
  {
    id: 'links',
    label: 'Go to',
    items: [
      ...pages.map(({ icon, ...page }) => ({
        ...page,
        icon: navIcon(icon, false),
      })),
      {
        label: 'Now',
        to: '/now',
        icon: 'solar:pulse-2-line-duotone',
      },
    ],
  },
  {
    id: 'theme',
    label: 'Theme',
    items: [
      {
        label: 'System',
        value: 'system',
        icon: appConfig.ui.icons.system,
        disabled: colorMode.preference === 'system',
      },
      {
        label: 'Light',
        value: 'light',
        icon: appConfig.ui.icons.light,
        disabled: colorMode.preference === 'light',
      },
      {
        label: 'Dark',
        value: 'dark',
        icon: appConfig.ui.icons.dark,
        disabled: colorMode.preference === 'dark',
      },
    ],
  },
  {
    id: 'contact',
    label: 'Contact',
    items: [
      {
        label: 'bui at anhthang dot org',
        to: 'mailto:bui@anhthang.org',
        icon: 'solar:letter-line-duotone',
      },
      {
        label: 'Buy Me a Coffee',
        to: 'https://www.buymeacoffee.com/anhthang',
        target: '_blank',
        icon: 'solar:cup-hot-line-duotone',
      },
    ],
  },
])

const onCommandClick = (command) => {
  if (!command.to) {
    colorMode.preference = command.value
  }

  toggleCmd()
}

defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: toggleCmd,
  },
})
</script>
