import Header from "../components/header"
import chingiti from "../assets/chingit.png"
import education from "../assets/education.webp"
import pharmacyImage from "../assets/pharmacy.jpg"
import presidentImg from "../assets/president.jpg"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import ContactSection from "./footer"
// import i18n from "@/i18n"

interface PharmacyType {
    title: string,
    treatmentTitle: string,
    preventionTitle: string,
    additionalServicesTitle: string,
    treatment: string[],
    prevention: string[],
    additionalServices: string[],
}
interface PresidentType {
  name: string,
  title: string,
  organization: string,
  accreditationNumber: string,
  previousPositions: string[]
}

export default function AboutUs() {
    const [lang, setLang] = useState<string>("");
    const { t } = useTranslation();
    const services = t("aboutUsPage.mahadra.services", { returnObjects: true }) as string[]
    const traningServices = t("aboutUsPage.traning.services", { returnObjects: true }) as string[]
    const pharmacy = t("aboutUsPage.pharmacy", { returnObjects: true }) as PharmacyType
    const president = t("aboutUsPage.president", {returnObjects: true}) as PresidentType
    return (
        <div className="min-h-screen bg-gray-50">
            <Header setLang={setLang} />
            <main className="max-w-4xl mx-auto px-4 py-8"
                style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
            >
                <section className="mb-12">
                    <h1 className="text-5xl font-bold text-indigo-900 mb-6">
                        {t("aboutUsPage.goals.title")}
                    </h1>
                    <p className="text-lg leading-relaxed text-gray-700">
                        {t("aboutUsPage.goals.description")}
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-indigo-800 mb-6">
                        {t("aboutUsPage.mahadra.header")}
                    </h2>
                    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                        <img
                            src={chingiti}
                            className="w-full h-64 object-cover object-center"
                            alt="Chinguetti Mahadra School"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-4">
                                {/* This school will teach the following: */}
                                {t("aboutUsPage.mahadra.title")}
                            </h3>
                            <ul className="space-y-3 list-disc pl-5 text-gray-700">
                                {services.map((item: string) =>
                                    <li>
                                        {item}
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-indigo-800 mb-6">
                        {t("aboutUsPage.education.title")}
                    </h2>
                    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                        <p className="text-lg leading-relaxed text-gray-700">
                            {t("aboutUsPage.education.description")}
                        </p>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-indigo-800 mb-6">
                        {t("aboutUsPage.traning.header")}
                    </h2>
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <img
                            src={education}
                            className="w-full h-64 object-cover object-center"
                            alt="Training and Education"
                        />
                        <div className="p-6">
                            <p>
                                {t("aboutUsPage.traning.title")}
                            </p>
                            <ul className="space-y-3 list-disc mt-3 text-gray-700">
                                {traningServices.map((item: string) =>
                                    <li>{item}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h1 className="text-5xl font-bold text-indigo-900 mb-6">Association's pharmacy</h1>
                    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                        <img
                            src={pharmacyImage}
                            className="w-full h-64 object-cover object-center"
                            alt="Pharmacy Services"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-4">{pharmacy.title}</h3>

                            <h4 className="text-lg font-medium mt-4 mb-2">{pharmacy.treatmentTitle}</h4>
                            <ul className="space-y-3 list-disc pl-5 text-gray-700">
                                {pharmacy.treatment.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>

                            <h4 className="text-lg font-medium mt-4 mb-2">{pharmacy.preventionTitle}</h4>
                            <ul className="space-y-3 list-disc pl-5 text-gray-700">
                                {pharmacy.prevention.map((item: string, index: number) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>

                            <h4 className="text-lg font-medium mt-4 mb-2">{pharmacy.additionalServicesTitle}</h4>
                            <ul className="space-y-3 list-disc pl-5 text-gray-700">
                                {pharmacy.additionalServices.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                    <h2 className="text-3xl font-bold text-indigo-800 mb-6 px-6 pt-6">Association President</h2>
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 p-6">
                            <img
                                src={presidentImg}
                                alt="President"
                                className="w-full rounded-lg shadow-md"
                            />
                            <div className="mt-4">
                                <h3 className="text-xl font-bold">{president.name}</h3>
                                <p className="text-gray-600">{president.title}</p>
                                <p className="text-sm text-gray-500 mt-2">Accreditation Number: {president.accreditationNumber}</p>
                            </div>
                        </div>

                        <div className="md:w-2/3 p-6">
                            <h4 className="text-lg font-semibold mb-3">Previous Positions:</h4>
                            <ul className="space-y-2 list-disc pl-5 text-gray-700">
                                {president.previousPositions.map((position: string, index: number) => (
                                    <li key={index}>{position}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <ContactSection />
        </div>
    )
}