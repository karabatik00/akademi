"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MapPin, Phone, ArrowRight } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden">
      {/* Top Wave Decoration */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-full transform translate-y-1/2"
        >
          <path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor" className="text-yellow-400/10" />
        </svg>
      </div>

      <div className="relative bg-gradient-to-b from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Alfa Vip Eğitim | Ankara Üniversite Hazırlık Kursu
                </h2>
                <p className="text-yellow-100 font-medium">Bire Bir Eğitimde Lider Kurum</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <p className="text-white">Meşrutiyet, Karanfil Sk. No:30, 06420 Çankaya/Ankara</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white flex-shrink-0" />
                  <div className="space-y-1">
                    <a href="tel:05551734876" className="text-white hover:text-yellow-100 block">
                      0555 173 48 76
                    </a>
                    <a href="tel:05075065250" className="text-white hover:text-yellow-100 block">
                      0507 506 52 50
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-yellow-50 leading-relaxed">
                Alfa Vip Eğitim sahip olduğu sıcak aile ortamı ile sınavlara hazırlık süreçlerinde öğrencilerimizin sıkı
                takibi, birebir özel ders imkanlarını, çizgi altı çalışmalarını ve özel çalışma ortamlarını ilgiyle
                takip etmekte ve oluşturmaktadır. Sınavlara Kurs Merkezimiz aracılığı ile hazırlanın, başarıya bir adım
                daha yaklaşın.
              </p>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Kurslarımız</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/kurs/yks-kursu"
                        className="text-yellow-50 hover:text-white transition-colors flex items-center gap-1 group"
                      >
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        YKS Kursu (TYT-AYT)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/kurs/lise-hazirlik"
                        className="text-yellow-50 hover:text-white transition-colors flex items-center gap-1 group"
                      >
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        9-10-11. Sınıf Kursları
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/kurs/lgs-hazirlik"
                        className="text-yellow-50 hover:text-white transition-colors flex items-center gap-1 group"
                      >
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        LGS Hazırlık Kursu
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/kurs/ortaokul"
                        className="text-yellow-50 hover:text-white transition-colors flex items-center gap-1 group"
                      >
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        5-6-7. Sınıf Kursları
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/kurs/ozel-ders"
                        className="text-yellow-50 hover:text-white transition-colors flex items-center gap-1 group"
                      >
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        Özel Ders
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Kurumsal</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/kurumsal"
                        className="text-yellow-50 hover:text-white transition-colors flex items-center gap-1 group"
                      >
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        Hakkımızda
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/bize-ulasin"
                        className="text-yellow-50 hover:text-white transition-colors flex items-center gap-1 group"
                      >
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        İletişim
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className="text-yellow-50 hover:text-white transition-colors flex items-center gap-1 group"
                      >
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-yellow-300/20">
                <p className="text-yellow-100 text-sm">
                  Telif Hakkı © {new Date().getFullYear()} Alfa Vip Eğitim - Tüm Hakları Saklıdır.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
