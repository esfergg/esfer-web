import i18next from "i18next";

import style from "./LanguageSelector.module.css";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "us",
  },
  {
    code: "pt",
    name: "Português",
    country_code: "br",
  },
];

const LanguageSelector = () => {
  var currentLanguage = i18next.language;

  return (
    <label
      className={style.selector}
      onClick={() => {
        if (currentLanguage === languages[0].code)
          i18next.changeLanguage(languages[1].code);
        else i18next.changeLanguage(languages[0].code);
      }}
    >
      {currentLanguage.toUpperCase()}
    </label>
  );
};

export default LanguageSelector;
