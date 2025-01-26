"use client"

import { motion } from "framer-motion"
import { ArrowRight, GraduationCap, Calendar, ClipboardCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EnrollmentSection() {
  return (
    <section className="relative overflow-hidden">
      {/* First Banner */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-950 overflow-hidden">
        {/* Tech Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239BA9B4' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                BİRE BİR EĞİTİMDE <br />
                LİDER KURUM
              </h2>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6 rounded-full font-semibold">
                Ayrıntıları öğrenin
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Öğrenci Alma ve Seviye Tespit Sınavı</h1>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div whileHover={{ y: -5 }} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <GraduationCap className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">32 Öğrenci Kontenjanı</h3>
              <p className="text-gray-600">2023 - 2024 eğitim öğretim yılı için sınırlı kontenjan</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <Calendar className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Ocak Ayından İtibaren</h3>
              <p className="text-gray-600">Sınavlarımız Ocak ayından itibaren başlamaktadır</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <ClipboardCheck className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Seviye Tespit</h3>
              <p className="text-gray-600">Kursa alınma yeterliliğine sahip öğrencilerin belirlenmesi</p>
            </motion.div>
          </div>

          <div className="prose prose-lg mx-auto mb-12 text-gray-600">
            <p>
              Kurs Merkezimiz 2023 - 2024 eğitim öğretim yılında 32 özel öğrenci alacaktır. Sınav ile öğrenci alan
              kurumumuzun Ocak ayından itibaren sınavları başlamaktadır. Sınavlarımız burs sınavı değildir. Bu sınavlar
              kursa alınma yeterliliğine sahip öğrencilerin belirlenmesinde kullanılacağı gibi aynı zamanda bir seviye
              tespit sınavıdır. Erken kayıt dönemi indirimlerimiz sınava katılsın veya katılmasın tüm öğrencilerimiz
              için geçerlidir.
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-lg px-8 py-6 rounded-full font-semibold">
              Önkayıt Formu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Second Banner */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239BA9B4' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                YENİ NESİL EĞİTİM
              </h2>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6 rounded-full font-semibold">
                Ayrıntıları öğrenin
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

