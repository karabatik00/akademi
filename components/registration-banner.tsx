"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function RegistrationBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400" />

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative container mx-auto px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-4xl leading-tight">
            2024-2025 Eğitim Öğretim Yılı Kayıtlarımız Devam Ediyor.
          </h2>

          <p className="text-lg sm:text-xl text-white/90 font-medium max-w-2xl">
            Erken Kayıtlarımız Avantajlarımızı Kaçırmayın.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="/kayit"
              className="group inline-flex items-center px-8 py-4 bg-black text-white rounded-full text-lg font-semibold transition-all duration-300 hover:bg-gray-900"
            >
              Ayrıntıları öğrenin
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

