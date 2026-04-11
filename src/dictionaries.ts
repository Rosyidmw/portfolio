const dictionaries: Record<string, () => Promise<any>> = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  id: () => import('./dictionaries/id.json').then((module) => module.default),
}

export const getDictionary = async (locale: 'en' | 'id') => dictionaries[locale]?.() ?? dictionaries.en()
