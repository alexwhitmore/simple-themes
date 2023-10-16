let themeValue

import { getPreferTheme, setPreference } from '../src/theme-toggle'

describe('Theme toggle', () => {
  beforeAll(() => {
    const localStorageMock = (function () {
      let store = {}
      return {
        getItem(key) {
          return store[key] || null
        },
        setItem(key, value) {
          store[key] = value.toString()
        },
        clear() {
          store = {}
        },
      }
    })()

    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    })
  })

  beforeEach(() => {
    localStorage.clear()
  })

  test('getPreferTheme should return the correct theme', () => {
    expect(getPreferTheme()).toBe('light')
    localStorage.setItem('theme', 'dark')
    expect(getPreferTheme()).toBe('dark')
  })

  test('setPreference should set the correct theme in localStorage', () => {
    themeValue = 'dark'
    setPreference(themeValue)
    expect(localStorage.getItem('theme')).toBe('dark')
    themeValue = 'light'
    setPreference(themeValue)
    expect(localStorage.getItem('theme')).toBe('light')
  })
})
