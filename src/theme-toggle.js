const primaryColorScheme = ''

function getPreferTheme() {
  const currentTheme = localStorage.getItem('theme')

  if (currentTheme) return currentTheme

  if (primaryColorScheme) return primaryColorScheme

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

let themeValue = getPreferTheme()
function setPreference(themeValue) {
  localStorage.setItem('theme', themeValue)
  reflectPreference()
}

function reflectPreference() {
  document.firstElementChild.setAttribute('data-theme', themeValue)

  document.querySelector('#theme-btn')?.setAttribute('aria-label', themeValue)

  const body = document.body
  if (body) {
    const computedStyles = window.getComputedStyle(body)
    const bgColor = computedStyles.backgroundColor

    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute('content', bgColor)
  }
}

reflectPreference()

window.onload = () => {
  function setThemeFeature() {
    reflectPreference()

    document.querySelector('#theme-btn')?.addEventListener('click', () => {
      themeValue = themeValue === 'light' ? 'dark' : 'light'
      setPreference(themeValue)
    })
  }

  setThemeFeature()
  // document.addEventListener('astro:after-swap', setThemeFeature)
}

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({ matches: isDark }) => {
    themeValue = isDark ? 'dark' : 'light'
    setPreference()
  })

// Commenting out because it's causing a failure in Astro
// export { getPreferTheme, setPreference, themeValue }
