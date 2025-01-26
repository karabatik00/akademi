import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "5-6-7. Sınıf Kursları | Alfa Vip Eğitim",
  description:
    "Ankara Ortaokul Kursu ve Özel Ders. Haftada 12 saat ders ile garantili başarı. 5., 6. ve 7. sınıf öğrencileri için özel programlar.",
}

export default function OrtaokulKursuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

