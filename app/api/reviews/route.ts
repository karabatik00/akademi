import { NextResponse } from "next/server"

// This is a mock function. In a real-world scenario, you'd integrate with Google's API
async function fetchGoogleReviews() {
  // Simulating an API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return [
    {
      id: "1",
      author: "Yunus Emre Gençelik",
      date: "17.11.2023",
      rating: 5,
      text: "Güzel (Translated by Google) Beautiful",
      avatar: "https://lh3.googleusercontent.com/a/ACg8ocJYLGmXUbJKR4aqXQJEeHUmkD9mHJjEk_mEXyXY=s120-c-rp-mo-br100",
    },
    {
      id: "2",
      author: "Eyşan Mesutli",
      date: "21.09.2023",
      rating: 5,
      text: "Alfa Vip Eğitim sizinle tanışmamız bir lütuftur bizi...",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVPPPQEYPXYZEYZEYZEYZEYZEYZEYZEYZEYZEY=s120-c-rp-mo-br100",
    },
    {
      id: "3",
      author: "Ülkü Yıldız",
      date: "20.09.2023",
      rating: 5,
      text: "Başarılı ve emek verilmiş bir kadro ve sistem iyiki yolum...",
      avatar: "https://lh3.googleusercontent.com/a/ACg8ocLxRwXKXnDrPUoqt-YICQPPEznkRVPtGtXLJGGE=s120-c-rp-mo-br100",
    },
  ]
}

export async function GET() {
  try {
    const reviews = await fetchGoogleReviews()
    return NextResponse.json(reviews)
  } catch (error) {
    console.error("Error fetching Google reviews:", error)
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 })
  }
}

