import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Özel Ders | Alfa Vip Eğitim",
  description:
    "Ankara Özel Ders ve Matematik Özel Ders. Birebir özel ders ve kişiye özel programlar ile maksimum verim.",
}

export default function OzelDersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

