import { AnnouncementBanner } from "./announcement-banner"
import { BrandLogo } from "./brand-logo"
import { MainNav } from "./main-nav"

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <AnnouncementBanner />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 sm:h-24 items-center justify-between">
          <BrandLogo />
          <MainNav />
        </div>
      </div>
    </header>
  )
}

