"use server"

import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2, "İsim en az 2 karakter olmalıdır"),
  phone: z.string().min(10, "Geçerli bir telefon numarası giriniz"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalıdır"),
})

export async function submitContactForm(formData: FormData) {
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    message: formData.get("message"),
  })

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors }
  }

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { success: true }
}

