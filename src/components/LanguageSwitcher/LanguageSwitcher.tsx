import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>{t("language.english")}</button>
      <button onClick={() => changeLanguage('pl')}>{t("language.polish")}</button>
      <button onClick={() => changeLanguage('de')}>{t("language.german")}</button>
      <button onClick={() => changeLanguage('nl')}>{t("language.dutch")}</button>
    </div>
  );
}