import { useTranslation } from "react-i18next"

export default function Header() {

  const [t, i18n] = useTranslation("global");

  return (
    <div>
      <p>{t("header.title")}</p>
      <p>{t("header.name-user")}</p>
      <button onClick={()=> i18n.changeLanguage("es")}>ES</button>&nbsp;
      <button onClick={()=> i18n.changeLanguage("en")}>EN</button>
    </div>
  )
}