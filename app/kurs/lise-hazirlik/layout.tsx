import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lise Hazırlık | Alfa Vip Eğitim",
  description:
    "Ankara Lise Hazırlık Kursu. Uzman kadro ve modern eğitim yöntemleriyle öğrencilerinizi liseye hazırlıyoruz.",
}

export default function LiseHazirlikLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

