import { useTranslation } from "react-i18next"
import { Button } from "../ui/button"

const Card = () => {
  const { t } = useTranslation()

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto space-y-10 mt-10">
        <h1 className="bg-[#e4002b] text-white px-6 py-2 rounded-3xl text-center text-xl flex items-center justify-center mx-auto w-fit">
          {t("card.seeAllOffers")}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative w-full h-auto rounded-xl overflow-hidden">
            <img
              src="https://kfc.com.uz/admin/files/4274.jpeg"
              alt="Taklif 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-6">
              <h1 className="text-3xl md:text-2xl font-extrabold text-white mb-4 drop-shadow-lg">
                {t("card.first.title")}
              </h1>
              <p className="text-white text-lg md:text-xl max-w-2xl mb-6 leading-relaxed">
                {t("card.first.description")}
              </p>
              <Button className="bg-[#e4002b] hover:bg-[#c20025] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105">
                {t("card.first.button")}
              </Button>
            </div>
          </div>

          <div className="relative w-full h-auto rounded-xl overflow-hidden">
            <img
              src="https://kfc.com.uz/admin/files/4308.jpeg"
              alt="Taklif 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-6">
              <h1 className="text-3xl md:text-2xl font-extrabold text-white mb-4 drop-shadow-lg">
                {t("card.second.title")}
              </h1>
              <p className="text-white text-lg md:text-xl max-w-2xl mb-6 leading-relaxed">
                {t("card.second.description")}
              </p>
              <Button className="bg-[#e4002b] hover:bg-[#c20025] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105">
                {t("card.second.button")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
