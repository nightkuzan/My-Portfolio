import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { en, type Dict } from './en'
import { th } from './th'

/**
 * Language switching.
 *
 * Both dictionaries ship in the entry bundle rather than being loaded on
 * demand. They are a few kilobytes of text each, and lazy-loading them
 * would mean the page flashes English before the visitor's own language
 * arrives — a worse trade than the bytes.
 *
 * Adding a language is one file plus one line in LANGS. `Dict` is derived
 * from the English copy, so the compiler will list anything missing.
 */

export const LANGS: Record<string, Dict> = { en, th }
export type LangCode = keyof typeof LANGS

const STORE_KEY = 'lang'

function initialLang(): string {
  if (typeof window === 'undefined') return 'en'

  // An explicit choice always wins over what the browser guesses.
  const saved = window.localStorage.getItem(STORE_KEY)
  if (saved && saved in LANGS) return saved

  // `?lang=th` so a link can be shared in a particular language.
  const asked = new URLSearchParams(window.location.search).get('lang')
  if (asked && asked in LANGS) return asked

  for (const tag of navigator.languages ?? [navigator.language]) {
    const base = tag.toLowerCase().split('-')[0]
    if (base in LANGS) return base
  }
  return 'en'
}

type Ctx = { lang: string; t: Dict; setLang: (code: string) => void }

const I18nContext = createContext<Ctx>({ lang: 'en', t: en, setLang: () => {} })

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState(initialLang)
  const t = LANGS[lang] ?? en

  const setLang = useCallback((code: string) => {
    if (!(code in LANGS)) return
    setLangState(code)
    try {
      window.localStorage.setItem(STORE_KEY, code)
    } catch {
      // Private browsing with storage denied. The choice still applies to
      // this visit; it just will not be remembered.
    }
  }, [])

  // Everything a screen reader or a search engine reads about the page's
  // language lives outside React's tree, so it has to be pushed there.
  useEffect(() => {
    document.documentElement.lang = t.htmlLang
    document.title = t.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.meta.description)
  }, [t])

  const value = useMemo(() => ({ lang, t, setLang }), [lang, t, setLang])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  return useContext(I18nContext)
}
