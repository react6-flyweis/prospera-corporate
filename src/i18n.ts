// biome-ignore lint/style/noExportedImports: Re-exporting i18n for configuration
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation module names
const translationModules = ["common", "home", "people"];

// Function to dynamically load translations for a language.
// Returns an object keyed by module name so we can register each module
// as its own i18next namespace (e.g. 'people'), matching useTranslation("people").
export const loadLanguageResources = async (languageCode: string) => {
  const modules: Record<string, unknown> = {};

  try {
    await Promise.all(
      translationModules.map(async (module) => {
        try {
          const translation = await import(
            `./locales/${languageCode}/${module}.json`
          );
          // store per-module data under the module name
          modules[module] = translation.default || translation;
        } catch {
          modules[module] = {};
        }
      })
    );

    return modules;
  } catch {
    return {};
  }
};

// Initial empty resources
const resources = {
  en: { translation: {} },
  //   fr: { translation: {} },
  //   es: { translation: {} },
};

export const languages = [
  { code: "en", name: "English (UK)", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
];

// Get saved language from localStorage or default to 'en'
const savedLanguage = localStorage.getItem("language") || "en";

// Initialize i18n
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: savedLanguage, // use saved language or default
    // you can use the i18n.changeLanguage function to change the language later on.
    fallbackLng: "en", // fallback language if a translation is not found for the current language

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

// Load initial translations for the saved language
loadLanguageResources(savedLanguage).then((modules) => {
  // Register each module as its own namespace so callers can use useTranslation(moduleName)
  Object.keys(modules).forEach((moduleName) => {
    try {
      i18n.addResourceBundle(
        savedLanguage,
        moduleName,
        modules[moduleName] as any,
        true,
        true
      );
    } catch (e) {
      // ignore per-module failures and continue
    }
  });
});

// Function to change language with dynamic loading
export const changeLanguageWithLoading = async (languageCode: string) => {
  const modules = await loadLanguageResources(languageCode);
  Object.keys(modules).forEach((moduleName) => {
    try {
      i18n.addResourceBundle(
        languageCode,
        moduleName,
        modules[moduleName] as any,
        true,
        true
      );
    } catch (e) {
      // ignore and continue
    }
  });
  await i18n.changeLanguage(languageCode);
  localStorage.setItem("language", languageCode);
};

export default i18n;
