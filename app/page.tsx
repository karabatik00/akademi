import { HeroSection } from "@/components/hero-section"
import { RegistrationBanner } from "@/components/registration-banner"
import { AboutSection } from "@/components/about-section"
import { VideoSection } from "@/components/video-section"
import { EnrollmentSection } from "@/components/enrollment-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ReviewsSection } from "@/components/reviews-section"
import { BecomeStudentSection } from "@/components/become-student-section"
import { GallerySection } from "@/components/gallery-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <RegistrationBanner />
      <AboutSection />
      <VideoSection />
      <EnrollmentSection />
      <TestimonialsSection />
      <BecomeStudentSection />
      <GallerySection />
      <ReviewsSection />
    </main>
  )
}

