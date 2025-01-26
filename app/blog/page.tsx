"use client"

import { motion } from "framer-motion"

export default function BlogPage() {
  return (
    <div className="min-h-[50vh] bg-gray-50/50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center p-8"
      >
        <h1 className="text-2xl text-gray-600 font-medium">Gönderiler kısa süre içinde gelecek!</h1>
      </motion.div>
    </div>
  )
}

