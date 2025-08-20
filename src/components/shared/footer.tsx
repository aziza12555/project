import { getAccountLinks, getHelpLinks, getInfoLinks, phone, socials } from "@/constants"
import { FiPhone } from "react-icons/fi"
import { useTranslation } from "react-i18next"

const Footer = () => {
  const { t } = useTranslation()

  const infoLinks = getInfoLinks(t)
  const helpLinks = getHelpLinks(t)
  const accountLinks = getAccountLinks(t)

  return (
    <footer className="relative bg-white mt-25">
      <div className="relative border-t">
        <img
          className="absolute left-1/2 -translate-x-1/2 -top-12 bg-white px-4 h-25"
          src="https://kfc.com.uz/admin/files/4279.svg"
          alt="KFC Logo"
        />
      </div>

      <div className="max-w-7xl mt-12 mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <p className="flex items-center justify-center md:justify-start gap-2 text-red-600 font-semibold">
            <FiPhone className="text-xl" /> {phone}
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            {socials.map((item, i) => (
              <a key={i} href={item.href}>
                <item.icon className="text-2xl text-gray-700 hover:text-red-600" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4">{t("footer.info")}</h3>
          <ul className="space-y-2 text-gray-700">
            {infoLinks.map((item, i) => (
              <li key={i}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">{t("footer.help")}</h3>
          <ul className="space-y-2 text-gray-700">
            {helpLinks.map((item, i) => (
              <li key={i}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">{t("footer.account")}</h3>
          <ul className="space-y-2 text-gray-700">
            {accountLinks.map((item, i) => (
              <li key={i}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-red-600 text-white py-4 flex flex-col md:flex-row items-center justify-between px-6">
        <p>{t("footer.privacy")}</p>
        <p className="text-sm">{t("footer.copyright")}</p>
        <img
          src="https://kfc.com.uz/dist/images/template2/powered-by-fimble.svg"
          alt="Fimble"
        />
      </div>

      <a
        href="#top"
        className="fixed bottom-8 right-6 w-12 h-12 bg-red-600 text-white flex items-center justify-center rounded-full shadow-lg hover:bg-red-700 transition"
      >
        ↑
      </a>
    </footer>
  )
}

export default Footer
