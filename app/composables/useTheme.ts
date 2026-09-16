const theme = ref<'dark' | 'light'>('dark')

export function useTheme() {
  function apply(value: 'dark' | 'light') {
    theme.value = value
    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme', value)
      localStorage.setItem('sghm-theme', value)
    }
  }

  function init() {
    if (!import.meta.client) return
    const saved = localStorage.getItem('sghm-theme')
    apply(saved === 'light' ? 'light' : 'dark')
  }

  function toggle() {
    apply(theme.value === 'dark' ? 'light' : 'dark')
  }

  return { theme, init, toggle }
}
