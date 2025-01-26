import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Alfa Vip Eğitim",
  description: "Alfa Vip Eğitim blog yazıları, eğitim haberleri ve öğrenci başarı hikayeleri.",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

