import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// DOCS https://react.i18next.com/guides/quick-start
// Init 14.2.2020
// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      headerText: "Simple image gallery",
      pageTitle: "ReactJS based image gallery",
      pageDescription:
        "Searching for a new laptop online is basically forcing your current computer to dig its own grave.",
      loaderTitle: "Wellcome to image gallery",
      loaderText: "..loading images",
      imageViewerClose: "Close",
      imageViewerDefaultTitle:
        "accusamus beatae ad facilis cum similique accusamus beatae ad facilis cum similique qui sunt",
      buttonText: "show gallery",
      text404: "Sorry can not find content!"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
