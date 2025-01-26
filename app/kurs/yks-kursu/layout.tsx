import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "YKS Hazırlık Kursu (TYT-AYT) | Alfa Vip Eğitim",
  description:
    "Ankara YKS Hazırlık Kursu, TYT ve AYT için özel programlar. Haftada 20 saat ders ve 12 saat etüt ile garantili başarı.",
}

export default function YKSKursuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

