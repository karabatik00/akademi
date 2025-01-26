"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://www.bogaziciders.com/media/k2/items/cache/e0a70f72bdae9885bfc32d7cd19a26a1_XL.jpg"
          alt="Alfa Vip Eğitim Sınıf Ortamı"
          fill
          className="object-cover"
          priority
          quality={100}
          onLoad={(event) => {
            const target = event.target as HTMLImageElement;
            if (target.src.indexOf('data:image/gif;base64') < 0) {
              target.style.opacity = '1';
            }
          }}
          style={{ opacity: 0, transition: 'opacity 0.5s' }}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJiEkKic0Ly4vLy4vNDQ6OjQ0OjpBQUFBQUFBQUFBQUFBQUFBQUFBQUH/2wBDAR0XFyAeIBogHiAeIiIgKjQqKioqKjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDT/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
      </div>

      {/* Single Uniform Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Main Heading - Mobile Optimized */}
          <h1 className="flex flex-col gap-4 sm:gap-6">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Alfa Vip Eğitim Kurumları
            </span>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-yellow-400 leading-tight">
              Ankara Üniversite Hazırlık Kursu | YKS Kursu
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/90 font-medium max-w-2xl mx-auto">
            Bire bir eğitimde lider kurum.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-4"
          >
            <Link
              href="/iletisim"
              className="group inline-flex items-center px-8 py-3.5 text-lg font-semibold text-yellow-600 bg-white rounded-full hover:bg-yellow-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              İletişim Kurun
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
