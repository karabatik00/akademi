"use client"

import { ArrowRight } from "lucide-react"

export function AnnouncementBanner() {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 relative overflow-hidden">
      {/* Mobile Design */}
      <div className="sm:hidden px-4 py-4 flex flex-col items-center gap-3">
        <h2 className="text-center font-semibold text-base text-white px-2">
          ÜNİVERSİTE SINAVINA BİZİMLE HAZIRLANMAYA NE DERSİNİZ?
        </h2>
        <a
          href="tel:05551734876"
          className="inline-flex items-center justify-center w-full max-w-[200px] gap-2 px-6 py-2.5 bg-white rounded-full text-yellow-600 font-bold text-base hover:bg-yellow-50 transition-all transform hover:scale-105 shadow-lg"
        >
          ERKEN KAYIT
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>

      {/* Desktop Design */}
      <div className="hidden sm:block px-4 py-3">
        <div className="container mx-auto flex items-center justify-center gap-6">
          <p className="text-white font-semibold text-base">ÜNİVERSİTE SINAVINA BİZİMLE HAZIRLANMAYA NE DERSİNİZ?</p>
          <a
            href="tel:05551734876"
            className="flex items-center gap-2 px-5 py-2 bg-white rounded-full text-yellow-600 font-bold text-base transition-colors duration-300 ease-in-out hover:bg-yellow-50 hover:text-yellow-700 shadow-md"
          >
            ERKEN KAYIT
            <ArrowRight className="h-4 w-4 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  )
}

