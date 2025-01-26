"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

interface Review {
  id: string
  author: string
  date: string
  rating: number
  text: string
  avatar: string
}

const contactInfo = {
  address: "Meşrutiyet, Karanfil Sk. No:30, 06420 Çankaya/Ankara",
  phone: "+90 555 173 48 76",
  email: "info@alfavipegitim.com",
  rating: 5.0,
  totalReviews: 4,
}

export function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch("/api/reviews")
        if (!response.ok) {
          throw new Error("Failed to fetch reviews")
        }
        const data = await response.json()
        setReviews(data)
      } catch {
        setError("Failed to load reviews. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchReviews()
  }, [])

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-100 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-200 rounded-full mix-blend-multiply blur-3xl opacity-30 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-1">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Map and Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg border-8 border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.4034857290083!2d32.85464237677354!3d39.91679527932711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34fe6a69737ff%3A0xc7cdc00bd5379d14!2sAlfa%20Vip%20E%C4%9Fitim!5e0!3m2!1str!2str!4v1706228132317!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">
                      <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{contactInfo.rating}</div>
                    <div className="text-sm text-gray-500">{contactInfo.totalReviews} değerlendirme</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 text-gray-400" />
                    <a href={`tel:${contactInfo.phone}`} className="text-gray-600 hover:text-yellow-600">
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 text-gray-400" />
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-yellow-600">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <a
                  href="https://goo.gl/maps/8Z9Z9Z9Z9Z9Z9Z9Z9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-medium"
                >
                  Google Maps'te görüntüle
                  <div className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Reviews */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Değerlendirmeler</h2>

              {isLoading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
                </div>
              ) : error ? (
                <div className="text-red-500 text-center">{error}</div>
              ) : (
                <div className="space-y-6">
                  {reviews.map((review, index) => (
                    <motion.div
                      key={review.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <Image
                          src={review.avatar || "/placeholder.svg"}
                          alt={review.author}
                          width={48}
                          height={48}
                          className="rounded-full object-cover bg-gray-100"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(review.author)}&background=FEF9C3&color=854D0E`
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                          <p className="text-gray-600 mb-2">{review.text.replace(/"/g, "&quot;")}</p>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-gray-900">{review.author}</p>
                              <p className="text-sm text-gray-500">{review.date}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              <a
                href="https://www.google.com/maps/place/Alfa+Vip+E%C4%9Fitim/@39.9167953,32.8546424,17z/data=!3m1!4b1!4m6!3m5!1s0x14d34fe6a69737ff:0xc7cdc00bd5379d14!8m2!3d39.9167953!4d32.8546424!16s%2Fg%2F11sht1b75s?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-medium"
              >
                Tüm değerlendirmeleri görüntüle
                <div className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
