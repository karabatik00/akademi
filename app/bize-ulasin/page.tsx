"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Clock, Mail, MessageCircle, Send, ArrowRight } from "lucide-react"
import Image from "next/image"

const workingHours = [
  { day: "Pzt", hours: "09:00 – 17:00" },
  { day: "Sal", hours: "09:00 – 17:00" },
  { day: "Çar", hours: "09:00 – 17:00" },
  { day: "Per", hours: "09:00 – 17:00" },
  { day: "Cum", hours: "09:00 – 17:00" },
  { day: "Cmt", hours: "Kapalı" },
  { day: "Paz", hours: "Kapalı" },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Bize Ulaşın</h1>
              <p className="text-xl text-gray-600">
                Velilerimize değer veriyoruz. Mesai saatleri içinde bizi dilediğiniz zaman ziyaret edebilirsiniz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-12"
              >
                {/* Business Info */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h2 className="text-2xl font-bold text-yellow-600 mb-6">
                    Üniversite Hazırlık Kursu - Alfa Vip Eğitim
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-600 leading-relaxed">
                          Kızılay, Atatürk Bulvarı no 127 D: kat 3, Çankaya/Ankara, Türkiye
                        </p>
                        <a
                          href="https://www.google.com/maps/dir//Atat%C3%BCrk+Blv+No:127+kat+3,+Me%C5%9Frutiyet,+06420+%C3%87ankaya%2FAnkara/@39.9168928,32.7725012,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14d34faa1f03eb07:0xd3d0a2e5ae134825!2m2!1d32.8549021!2d39.916922"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-yellow-600 hover:text-yellow-700 font-medium mt-2 inline-block"
                        >
                          Yol tarifi al →
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-6 h-6 text-yellow-500" />
                      <a href="tel:05551734876" className="text-gray-600 hover:text-yellow-600">
                        0555 173 48 76
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="w-6 h-6 text-yellow-500" />
                      <a href="mailto:info@alfavipegitim.com" className="text-gray-600 hover:text-yellow-600">
                        info@alfavipegitim.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-6 h-6 text-yellow-500" />
                    <h2 className="text-2xl font-bold text-gray-900">Çalışma Saatleri</h2>
                  </div>
                  <div className="space-y-4">
                    {workingHours.map((schedule) => (
                      <div key={schedule.day} className="flex items-center justify-between">
                        <span className="text-gray-600 font-medium">{schedule.day}</span>
                        <span className="text-gray-900">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced WhatsApp Button */}
                <div className="text-center sm:text-left">
                  <a
                    href="https://wa.me/905551734876"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#25D366]/20 group"
                  >
                    <MessageCircle className="w-6 h-6 transition-transform group-hover:scale-110" />
                    <span>Bize WhatsApp Üzerinden Ulaşın</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="h-full min-h-[600px]"
              >
                <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100 h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.4034857290083!2d32.85464237677354!3d39.91679527932711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34fe6a69737ff%3A0xc7cdc00bd5379d14!2sAlfa%20Vip%20E%C4%9Fitim!5e0!3m2!1str!2str!4v1706228132317!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: "1rem" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Admission Section */}
      <section className="pb-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Image Section */}
                <div className="relative h-[300px] md:h-full min-h-[400px]">
                  <Image
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3"
                    alt="Öğrenci Alma ve Seviye Tespit Sınavı"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12">
                  <div className="max-w-xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Öğrenci Alma ve Seviye Tespit Sınavı Ankara Üniversite Hazırlık Kursu
                    </h2>
                    <p className="text-gray-600 mb-8">
                      Kurs Merkezimiz 2023 - 2024 eğitim öğretim yılında özel öğrenci alacaktır. Sınav ile öğrenci alan
                      kurumumuzun Ocak ayından itibaren sınavları başlamaktadır. Sınavlarımız burs sınavı değildir. Bu
                      sınavlar kursa alınma yeterliliğine sahip öğrencilerin belirlenmesinde kullanılacağı gibi aynı
                      zamanda bir seviye tespit sınavıdır.
                    </p>

                    <div className="space-y-6">
                      <form className="space-y-4">
                        <input
                          type="text"
                          placeholder="İsim"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
                        />
                        <input
                          type="tel"
                          placeholder="Telefon"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
                        />
                        <input
                          type="email"
                          placeholder="E-posta"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
                        />
                        <textarea
                          placeholder="Mesaj"
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all resize-none"
                        ></textarea>

                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg px-8 py-4 font-semibold text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                        >
                          Başvuruyu Gönder
                          <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </button>
                      </form>

                      <p className="text-sm text-gray-500 text-center">
                        Bu site, reCAPTCHA ile korunur, Google{" "}
                        <a href="#" className="text-yellow-600 hover:underline">
                          Gizlilik Politikası
                        </a>{" "}
                        ve{" "}
                        <a href="#" className="text-yellow-600 hover:underline">
                          Hizmet Koşulları
                        </a>{" "}
                        geçerlidir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
