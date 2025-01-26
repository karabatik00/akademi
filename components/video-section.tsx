"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Play, Maximize2 } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Transform values for parallax and fade effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  // Handle navbar visibility
  useEffect(() => {
    const header = document.querySelector("header") as HTMLElement
    if (!header) return

    const currentRef = sectionRef.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        header.style.transform = entry.isIntersecting ? "translateY(-100%)" : "translateY(0)"
        header.style.transition = "transform 0.3s ease-in-out"
      },
      { threshold: 0.1 },
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  // Handle fullscreen
  const toggleFullscreen = () => {
    if (!videoContainerRef.current) return

    if (!isFullscreen) {
      if (videoContainerRef.current.requestFullscreen) {
        videoContainerRef.current.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[120vh] bg-gradient-to-b from-yellow-400 via-yellow-400 to-blue-900 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-yellow-300 rounded-full blur-3xl opacity-40 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-yellow-600 rounded-full blur-3xl opacity-30 animate-pulse" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <div className="relative pt-20 pb-40">
          <motion.div style={{ y, opacity, scale }} className="max-w-7xl mx-auto">
            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-16 space-y-4"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">ALFA VİP EĞİTİM</h2>
              <p className="text-2xl md:text-3xl text-white/90 font-medium">Yeni Nesil Eğitim</p>
            </motion.div>

            {/* Phone Frame */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative max-w-[360px] mx-auto"
              style={{
                transform: "translateY(20%)",
              }}
            >
              <div
                ref={videoContainerRef}
                className={`relative rounded-[3rem] overflow-hidden bg-black p-4 shadow-[0_0_100px_rgba(0,0,0,0.2)] ${
                  isFullscreen ? "rounded-none p-0" : ""
                }`}
              >
                {/* Status Bar (hidden in fullscreen) */}
                {!isFullscreen && (
                  <div className="absolute top-0 inset-x-0 h-7 bg-black z-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-4 bg-black rounded-full" />
                  </div>
                )}

                {/* Video Container */}
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-black">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 p-[2px] rounded-2xl">
                    <div className="absolute inset-0 bg-black rounded-2xl">
                      {!isPlaying ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button
                            onClick={() => setIsPlaying(true)}
                            className="group relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/20"
                          >
                            <Play className="w-8 h-8 text-white fill-white transition-transform group-hover:scale-110" />
                            <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
                          </button>
                          <div
                            className="absolute inset-0 bg-center bg-cover"
                            style={{
                              backgroundImage: `url(${process.env.NEXT_PUBLIC_BLOB_URL}/2nkaH.png)`,
                            }}
                          />
                        </div>
                      ) : (
                        <div className="relative w-full h-full">
                          <iframe
                            src="https://player.vimeo.com/video/859869656?h=3604b3a553&autoplay=1&title=0&portrait=0&byline=0&badge=0"
                            className="w-full h-full"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                          />
                          <button
                            onClick={toggleFullscreen}
                            className="absolute bottom-4 right-4 p-2 rounded-lg bg-black/50 hover:bg-black/70 transition-colors"
                          >
                            <Maximize2 className="w-5 h-5 text-white" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Home Indicator (hidden in fullscreen) */}
                {!isFullscreen && (
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full" />
                )}
              </div>

              {/* Enhanced Reflection Effect (hidden in fullscreen) */}
              {!isFullscreen && (
                <div className="absolute -bottom-10 left-4 right-4">
                  <div className="h-20 bg-black/20 blur-2xl rounded-full transform scale-x-[0.85] opacity-70" />
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
