"use client"

import { motion } from "framer-motion"
import { Quote, Heart } from "lucide-react"

const testimonials = [
  {
    name: "Selin Buran",
    text: "Çok memnun olduğum ve severek derslerine girdiğim bir kurum, sizlerle beraber ilgilenip aynı zamanda koçluk da yapan bir yer, hocaları tecrübeli, anlatımları gayet eğlenceli ve anlayışlı. Mutlaka tavsiye ederim. ❤️",
  },
  {
    name: "Ahmet Talha Güzel",
    text: "Matematik öğrenmek istiyorsanız kendinizi Seyhan hoca ve ekibine bırakmanız yeterli. Sizi anlayan, dinleyen ve yanınızda olduğunu hissettiren bir kurum. Her şey için teşekkürler hocam.",
  },
  {
    name: "Hanifi Hayıroğlu",
    text: "Sınavlar matematikçisiz olmaz matematiği gerçekten öğrenmek istiyorum diyorsanız Matematik Kurs Merkezi bu işte usta Hocaları çok iyi tavsiye ederim. Merkezi konumu ile kolay ulaşım. Matematiği sevdiren öğretmenler. Temiz ortam. Gayet memnun kaldım",
  },
  {
    name: "Mehmet Emin Kırkpınar",
    text: "Çok tecrübeli kurs merkezi hocalar çok güzel ders anlatıyor",
  },
  {
    name: "Ali Yılmaz",
    text: "Gerçek hedefi olan kişiler tercih etmeli eğer hedefiniz varsa zaman kaybetmeden düşünün derim",
  },
  {
    name: "Oğuz",
    text: "Güleçkin hocamıza emeklerinden dolayı çok müteşekkirim, best şahsen çok memnunum size de tavsiye ederim.",
  },
  {
    name: "Çağrı Yılmaz",
    text: "Çok kaliteli bir yer. Hem başarıyı hem de samimiyeti arıyorsanız hiç zaman kaybetmeden bu kuruma başvurmalısınız... İlgi ve alakaları için ayrıca teşekkür ederim",
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-yellow-100 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-yellow-200 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Ebeveynler, öğrenciler ve</h2>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
            uzmanlar tavsiye ediyor.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Quote className="w-10 h-10 text-yellow-500 rotate-180" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">Öğrenci</p>
                </div>
                {testimonial.text.includes("❤️") && <Heart className="w-5 h-5 text-red-500 fill-red-500" />}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
