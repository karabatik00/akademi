import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bize Ulaşın | Alfa Vip Eğitim",
  description:
    "Alfa Vip Eğitim ile iletişime geçin. Adresimiz: Kızılay, Atatürk Bulvarı no 127 D: kat 3, Çankaya/Ankara. Telefon: 0555 173 48 76",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

