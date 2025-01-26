import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kurumsal | Alfa Vip Eğitim",
  description:
    "Ankara YKS Kursu ve Üniversite Hazırlık Kursu kurumsal bilgileri. Sistemimiz, kadromuz ve eğitim yaklaşımımız hakkında detaylı bilgi.",
}

export default function KurumsalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

