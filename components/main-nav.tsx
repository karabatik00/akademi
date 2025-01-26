"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface NavItem {
  title: string
  href: string
  items?: NavItem[]
}

const navItems: NavItem[] = [
  {
    title: "Ana Sayfa",
    href: "/",
  },
  {
    title: "Kurslar",
    href: "#",
    items: [
      {
        title: "Özel Ders",
        href: "/kurs/ozel-ders",
      },
      {
        title: "Grup Dersi",
        href: "/kurs/grup-dersi",
      },
      {
        title: "YKS Kursu (TYT-AYT)",
        href: "/kurs/yks-kursu",
      },
      {
        title: "9-10-11. Sınıf Kursları",
        href: "/kurs/lise-hazirlik",
      },
      {
        title: "LGS Hazırlık Kursu",
        href: "/kurs/lgs-hazirlik",
      },
      {
        title: "5-6-7. Sınıf Kursları",
        href: "/kurs/ortaokul",
      },
    ],
  },
  {
    title: "Kurumsal",
    href: "/kurumsal",
  },
  {
    title: "Bize Ulaşın",
    href: "/bize-ulasin",
  },
  {
    title: "Blog",
    href: "/blog",
  },
]

export function MainNav() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isCoursesOpen, setIsCoursesOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
      setIsCoursesOpen(false) // Reset courses menu when main menu closes
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Close menus when route changes
  React.useEffect(() => {
    setIsOpen(false)
    setIsCoursesOpen(false)
  }, [pathname])

  return (
    <nav className="flex items-center">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-2">
        {navItems.map((item) => {
          if (item.items) {
            return (
              <div key={item.title} className="relative group">
                <button
                  className={`flex items-center px-4 py-2 rounded-md text-base font-medium transition-colors ${
                    pathname.startsWith("/kurs")
                      ? "text-yellow-600 bg-yellow-50"
                      : "text-gray-700 hover:text-yellow-600 hover:bg-yellow-50"
                  }`}
                >
                  {item.title}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-lg shadow-lg p-2">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={`block px-4 py-2.5 text-sm rounded-md transition-colors ${
                          pathname === subItem.href
                            ? "bg-yellow-50 text-yellow-600"
                            : "text-gray-600 hover:bg-yellow-50 hover:text-yellow-600"
                        }`}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-md text-base font-medium transition-colors ${
                pathname === item.href
                  ? "text-yellow-600 bg-yellow-50"
                  : "text-gray-700 hover:text-yellow-600 hover:bg-yellow-50"
              }`}
            >
              {item.title}
            </Link>
          )
        })}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <Menu className="h-7 w-7 text-gray-600" />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 z-50 bg-white lg:hidden flex flex-col h-screen overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <div className="text-xl font-medium text-gray-900">Menü</div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-2">
              <div className="flex flex-col">
                {navItems.map((item) => {
                  if (item.items) {
                    return (
                      <div key={item.title}>
                        <button
                          onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                          className="flex items-center justify-between w-full px-6 py-3 text-base text-gray-600 hover:text-yellow-600"
                        >
                          <span className="font-medium">{item.title}</span>
                          <ChevronDown
                            className={`h-5 w-5 transition-transform ${isCoursesOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        <AnimatePresence>
                          {isCoursesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className={`block px-10 py-3 text-base ${
                                    pathname === subItem.href
                                      ? "text-yellow-600"
                                      : "text-gray-600 hover:text-yellow-600"
                                  }`}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  }

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-6 py-3 text-base font-medium ${
                        pathname === item.href ? "text-yellow-600" : "text-gray-600 hover:text-yellow-600"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
