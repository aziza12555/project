import type { TFunction } from "i18next";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

export const carouselImg = {
  img: "https://kfc.com.uz/admin/files/5586.jpg",
  img2: "https://kfc.com.uz/admin/files/5587.jpg",
  img3: "https://kfc.com.uz/admin/files/5412.jpg",
}

export const phone = "+998 (78) 129 70 00";

export const socials = [
  { icon: FaFacebook, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaTelegram, href: "#" },
];

export const getInfoLinks = (t: TFunction) => [
  { label: t("footer.infoLinks.history"), href: "#" },
  { label: t("footer.infoLinks.ingredients"), href: "#" },
  { label: t("footer.infoLinks.allergens"), href: "#" },
  { label: t("footer.infoLinks.stores"), href: "#" },
  { label: t("footer.infoLinks.halal"), href: "#" }
]

export const getHelpLinks = (t: TFunction) => [
  { label: t("footer.helpLinks.contact"), href: "#" },
  { label: t("footer.helpLinks.jobs"), href: "#" },
  { label: t("footer.helpLinks.terms"), href: "#" }
]

export const getAccountLinks = (t: TFunction) => [
  { label: t("footer.accountLinks.login"), href: "#" },
  { label: t("footer.accountLinks.register"), href: "#" },
  { label: t("footer.accountLinks.forgotPassword"), href: "#" }
]

