import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "LGS Hazırlık Kursu | Alfa Vip Eğitim",
  description:
    "Ankara LGS Hazırlık Kursu ve Matematik Özel Ders. Haftada 15 saat ders ve 3 saat etüt ile garantili başarı.",
}

export default function LGSHazirlikLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

