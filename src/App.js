import React, { useEffect } from "react";
import Flag from "react-world-flags";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import GlobeIcon from "./components/GlobeIcon";
import { languages } from "./config/languages";

function App() {
  const { t } = useTranslation();
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find(
    (language) => language.code === currentLanguageCode
  );

  const releaseDate = new Date("2024-09-22");
  const timeDifference = new Date() - releaseDate;
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t('app_title')
  }, [currentLanguage, t]);

  return (
    <div className="container">
      <div className="d-flex justify-content-end">
        <div className="dropdown">
          <button
            className="btn btn-link dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <GlobeIcon />
          </button>
          <ul className="dropdown-menu">
             <li>
              <span class="dropdown-item-text">{t('language') }</span>
             </li>
            {languages.map(({ code, name, country_code }) => (
              <li key={country_code}>
                <button
                  className="dropdown-item"
                  onClick={() => i18next.changeLanguage(code)}
                  disabled={code === currentLanguageCode}
                >
                  <Flag
                    code={country_code}
                    style={{
                      width: "20px",
                      marginRight: "10px",
                      opacity: code === currentLanguageCode ? 0.5 : 1,
                    }}
                  />
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="d-flex flex-column align-items-start">
        <h1 className="font-weight-normal mb-3">{t("welcome_message")}</h1>
        <p>{t("days_since_release", { number_of_days })}</p>
      </div>
    </div>
  );
}

export default App;
