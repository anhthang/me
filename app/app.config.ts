export default defineAppConfig({
  ui: {
    icons: {
      arrowDown: 'solar:arrow-down-line-duotone',
      arrowLeft: 'solar:arrow-left-line-duotone',
      arrowRight: 'solar:arrow-right-line-duotone',
      arrowUp: 'solar:arrow-up-line-duotone',
      check: 'solar:check-line-duotone',
      chevronDoubleLeft: 'solar:double-alt-arrow-left-line-duotone',
      chevronDoubleRight: 'solar:double-alt-arrow-right-line-duotone',
      chevronDown: 'solar:alt-arrow-down-line-duotone',
      chevronLeft: 'solar:alt-arrow-left-line-duotone',
      chevronRight: 'solar:alt-arrow-right-line-duotone',
      chevronUp: 'solar:alt-arrow-up-line-duotone',
      close: 'solar:close-line-duotone',
      external: 'solar:arrow-right-up-line-duotone',
      search: 'solar:magnifer-line-duotone',
      system: 'solar:monitor-line-duotone',
      light: 'solar:sun-2-line-duotone',
      dark: 'solar:moon-line-duotone',
      ellipsis: 'solar:menu-dots-line-duotone',
      file: 'solar:file-line-duotone',
      folder: 'solar:folder-line-duotone',
      folderOpen: 'solar:folder-open-line-duotone',
      loading: 'solar:refresh-circle-line-duotone',
      minus: 'solar:minus-line-duotone',
      plus: 'solar:add-line-duotone',
      upload: 'solar:upload-minimalistic-line-duotone',
      caution: 'solar:danger-circle-line-duotone',
      copy: 'solar:copy-line-duotone',
      copyCheck: 'solar:copy-check-line-duotone',
      error: 'solar:close-circle-line-duotone',
      eye: 'solar:eye-line-duotone',
      eyeOff: 'solar:eye-closed-line-duotone',
      hash: 'solar:hashtag-line-duotone',
      info: 'solar:info-circle-line-duotone',
      menu: 'solar:hamburger-menu-line-duotone',
      panelClose: 'solar:sidebar-close-line-duotone',
      panelOpen: 'solar:sidebar-open-line-duotone',
      reload: 'solar:restart-line-duotone',
      stop: 'solar:stop-line-duotone',
      success: 'solar:check-circle-line-duotone',
      tip: 'solar:lightbulb-line-duotone',
      warning: 'solar:danger-triangle-line-duotone',
      drag: 'solar:grip-vertical-line-duotone',
      star: 'solar:star-line-duotone',
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
      defaultVariants: {
        color: 'neutral',
        variant: 'soft',
      },
    },
    page: {
      slots: {
        center: 'max-w-4xl w-full mx-auto',
      },
    },
    pageGrid: {
      base: 'relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8',
    },
    pageHeader: {
      slots: {
        root: 'border-none',
        title:
          'text-2xl sm:text-3xl bg-gradient-to-r from-red-300 via-pink-400 to-violet-600 dark:from-amber-200 dark:to-rose-400 text-transparent bg-clip-text',
        description: 'text-md',
      },
    },
    pageSection: {
      slots: {
        container: '!px-0 py-4 sm:py-6 lg:py-8',
      },
      variants: {
        orientation: {
          vertical: {
            features: 'lg:grid-cols-2 gap-4',
          },
        },
      },
      compoundVariants: [
        {
          orientation: 'vertical',
          title: true,
          class: {
            body: 'mt-8',
          },
        },
        {
          orientation: 'vertical',
          description: true,
          class: {
            body: 'mt-8',
          },
        },
        {
          orientation: 'vertical',
          body: true,
          class: {
            footer: 'mt-8',
          },
        },
      ],
    },
  },
})
