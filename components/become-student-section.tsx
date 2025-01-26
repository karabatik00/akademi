"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export function BecomeStudentSection() {
  const [isPending, setIsPending] = useState(false)
  const [errors, setErrors] = useState<Record<string, string[]>>({})

  async function handleSubmit(formData: FormData) {
    setIsPending(true)
    setErrors({})

    try {
      const result = await submitContactForm(formData)

      if (result.error) {
        setErrors(result.error)
        toast.error("Lütfen tüm alanları doğru şekilde doldurunuz.")
      } else {
        toast.success("Başvurunuz başarıyla gönderildi!")
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      }
    } catch (error) {
      toast.error("Bir hata oluştu. Lütfen tekrar deneyiniz.")
    } finally {
      setIsPending(false)
    }
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-yellow-100 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-blue-100 rounded-full blur-3xl opacity-30" />
        </div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent mb-4">
              Öğrencimiz Olun
            </h2>
            <p className="text-xl text-gray-600">Ankara YKS Hazırlık Kursu - Ankara Üniversite Hazırlık Kursu</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              <form id="contact-form" action={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Input
                    type="text"
                    name="name"
                    placeholder="İsim Soyisim"
                    className="h-12"
                    disabled={isPending}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-sm text-red-500">
                      {errors.name[0]}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Telefon"
                    className="h-12"
                    disabled={isPending}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-sm text-red-500">
                      {errors.phone[0]}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Input
                    type="email"
                    name="email"
                    placeholder="E-posta"
                    className="h-12"
                    disabled={isPending}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-sm text-red-500">
                      {errors.email[0]}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Textarea
                    name="message"
                    placeholder="Mesajınız"
                    className="min-h-[120px] resize-none"
                    disabled={isPending}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-sm text-red-500">
                      {errors.message[0]}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full h-12 text-base bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Gönderiliyor...
                      </>
                    ) : (
                      "Başvuruyu Gönder"
                    )}
                  </Button>
                </div>

                <p className="text-center text-sm text-gray-500">
                  Bu site, reCAPTCHA ile korunur, Google{" "}
                  <a href="#" className="text-yellow-600 hover:underline">
                    Gizlilik Politikası
                  </a>{" "}
                  ve{" "}
                  <a href="#" className="text-yellow-600 hover:underline">
                    Hizmet Koşulları
                  </a>{" "}
                  geçerlidir.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

