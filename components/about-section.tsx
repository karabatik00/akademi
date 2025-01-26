"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { GraduationCap, Users, BookOpen, Target, UserCheck, Brain } from "lucide-react"

const systemFeatures = [
  {
    title: "Sınav Hazırlık",
    description: "Hedefli, Sistemli, Soru Merkezli Özel ders ortamı ile sınava hazırlık.",
    icon: Target,
  },
  {
    title: "Sıkı Takip",
    description: "Özel çalışmalar sonrası ve aralıklı olarak yapılan deneme sınavları.",
    icon: UserCheck,
  },
  {
    title: "Bire Bir Etüler",
    description: "Planlı düzenli etütler ile konular sizin öğrenme hızınıza göre.",
    icon: BookOpen,
  },
  {
    title: "Özel Çalışma Ortamı",
    description: "Öğrencinin kendi çalışma programı ve ortamı ile verimli çalışma.",
    icon: Brain,
  },
  {
    title: "Kadromuz",
    description: "Uzman, tecrübeli eğitim kadromuz ile kaliteli eğitim.",
    icon: Users,
  },
  {
    title: "Eğitim Koçluğu",
    description: "Kişisel gelişim ve motivasyon desteği ile başarıya ulaşma.",
    icon: GraduationCap,
  },
]

const courseTypes = [
  {
    title: "TYT - YKS HAZIRLIK",
    description: "Üniversite sınavı ve TYT-AYT hazırlık sürecinde özel ders sistemi.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80",
  },
  {
    title: "LGS HAZIRLIK",
    description: "5-7-8.Sınıf öğrencileri için LGS ve ortaokul müfredatına uygun özel ders.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80",
  },
  {
    title: "ÖZEL DERS",
    description: "Bireysel veya küçük gruplar halinde özel ders imkanı.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80",
  },
]

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* About Us */}
        <div className="max-w-6xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
          >
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Hakkımızda</h2>
              <div className="aspect-video relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  alt="Alfa Vip Eğitim"
                  fill
                  className="object-cover"
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <p className="text-gray-600 leading-relaxed text-lg">
                Eğitim sistemimiz ile öğrencilerimizin başarıya ulaşması için en iyi şekilde çalışıyoruz. Uzman kadromuz
                ve modern eğitim yöntemlerimizle öğrencilerimize kaliteli eğitim sunuyoruz.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Course Types */}
        <div className="max-w-6xl mx-auto mb-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {courseTypes.map((course) => (
              <motion.div
                key={course.title}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video relative">
                  <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600">{course.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* System Features */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">Sistemimiz</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {systemFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
