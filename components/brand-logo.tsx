import Link from "next/link"

export function BrandLogo() {
  return (
    <Link href="/" className="flex items-center gap-4 group">
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl transform rotate-45 group-hover:rotate-[135deg] transition-transform duration-500" />
        <div className="absolute inset-0 bg-white rounded-xl transform rotate-45 scale-[0.85] group-hover:rotate-[135deg] transition-transform duration-500" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold bg-gradient-to-br from-yellow-500 to-yellow-700 bg-clip-text text-transparent">
            A
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-br from-gray-700 to-gray-900 bg-clip-text text-transparent">
          ALFA VIP EĞİTİM
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 font-medium">Başarıya Giden Yol</p>
      </div>
    </Link>
  )
}

