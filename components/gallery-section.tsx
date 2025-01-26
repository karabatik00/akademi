"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react"

const images = [
  {
    src: "https://img1.wsimg.com/isteam/ip/b8b9ffa9-ffde-46b7-8e78-943a82b55f99/6.jpg/:/rs=w:1438,h:958",
    alt: "Alfa VIP Eğitim Sınıf Görünümü 1",
    width: 1438,
    height: 958,
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/b8b9ffa9-ffde-46b7-8e78-943a82b55f99/5.jpg/:/rs=w:1438,h:959",
    alt: "Alfa VIP Eğitim Sınıf Görünümü 2",
    width: 1438,
    height: 959,
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/b8b9ffa9-ffde-46b7-8e78-943a82b55f99/2.jpg/:/rs=w:1438,h:958",
    alt: "Alfa VIP Eğitim Sınıf Görünümü 3",
    width: 1438,
    height: 958,
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/b8b9ffa9-ffde-46b7-8e78-943a82b55f99/adtü%20logosu.jpg/:/rs=w:1438,h:1438",
    alt: "ADTÜ Logosu",
    width: 1438,
    height: 1438,
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/b8b9ffa9-ffde-46b7-8e78-943a82b55f99/4.jpg/:/rs=w:1438,h:1019",
    alt: "Alfa VIP Eğitim Sınıf Görünümü 4",
    width: 1438,
    height: 1019,
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/b8b9ffa9-ffde-46b7-8e78-943a82b55f99/HD%201.png/:/rs=w:1438,h:1438",
    alt: "Alfa VIP Eğitim Logo",
    width: 1438,
    height: 1438,
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const handlePrevious = () => {
    setSelectedImage((current) => (current === 0 ? images.length - 1 : current! - 1))
  }

  const handleNext = () => {
    setSelectedImage((current) => (current === images.length - 1 ? 0 : current! + 1))
  }

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-yellow-100 rounded-full mix-blend-multiply blur-3xl opacity-20" />
        <div className="absolute bottom-1/2 right-1/4 w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-20" />
      </div>

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent mb-4">
            Fotoğraf Galerisi
          </h2>
          <p className="text-xl text-gray-600">Eğitim merkezimizden kareler</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-md hover:shadow-xl transition-shadow"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={90}
                style={{ opacity: 1 }}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJiEkKic0Ly4vLy4vNDQ6OjQ0OjpBQUFBQUFBQUFBQUFBQUFBQUFBQUH/2wBDAR0XFyAeIBogHiAeIiIgKjQqKioqKjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDT/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => setSelectedImage(index)}
                  className="absolute inset-0 flex items-center justify-center text-white"
                >
                  <Maximize2 className="w-8 h-8" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <button
                  className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="w-6 h-6" />
                </button>

                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePrevious()
                  }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="relative w-full max-w-5xl aspect-[4/3]">
                  <Image
                    src={images[selectedImage].src || "/placeholder.svg"}
                    alt={images[selectedImage].alt}
                    fill
                    className="object-contain"
                    quality={100}
                    priority
                  />
                </div>

                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleNext()
                  }}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
