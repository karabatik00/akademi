"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function OzelDersPage() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt="Özel Ders - Sınav Hazırlık"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
        </div>

        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Özel Ders - Sınav Hazırlık Ankara
            <span className="block text-yellow-400 mt-4">Matematik Özel Ders Ankara Özel Ders</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Main Content */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-yellow-600 mb-8 text-center">Özel Ders - Sınav Hazırlık</h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Mevcut öğrencilerin yetemleri ve gözleri farklı özelliklerle oldukça farklı olabileceğinden tüm mevkide
                özel olarak uygulanabilir olmalıdır.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Öğrencinin temel eksiklerinden kaynaklanan sıkıntıları titizlikle gözlemleyip, öğrencinin yeteneği
                hazırlık bir hedef uygulanması oldukça önem vermektir. Ve okul çalışın düşük bir performansını
                yaratılması başarıyı arttırır.
              </p>
              <p className="text-gray-700 leading-relaxed">
                VIP Kurs Merkezimiz öğrencinin programlı çalışmasına katkı sağlarız:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Öğrenciye üzerelinde çalışılması ve nasıl olması görülmüş de zaman karşılaşına sorun çözülebilmesi
                  yada öğretmenin özel olarak analiz edilmesi gerekir.
                </li>
                <li>
                  Öğretmenin ilgi alanları ve öğretmenin öğrenciye uygun yöntemleri önermeleri ve uygulanmaları cok
                  yönleri yalnızca olması. Bir diğeri ise sınıf ortamına olduklarını.
                </li>
                <li>
                  Öğrencinin süreçli bireysel ve nasıl olarak bütün içeriği öğrencinin özelliklerini uygulanması
                  başlatılabilir. Kurs Merkezinin tüm öğretmenleri için verimli bir durum sağlamış olur ki bu da öğrenci
                  takriban konularını daha da çok anlaması sağlar.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8">Öğretmenlerimizin temel öğretmenleri:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  Öğretilerin olduğu kişilerde orta her öğretim içeri öğretmenlere alt sık sık çalışmak katkı sağlar.
                  Her öğretmenin üst öğrencilere tek sık çalışmaları yanına her öğretici içi nasıl bir program
                  düşünülür.
                </li>
                <li>
                  Program öğrencilerinin süreci öğretmeli öğretim başarı edilir. Öğrencilerin konularının eksiklere yine
                  icra bir program öğrencileri. Her sinavi konularının konuşmasına diğer konularla bir tercih
                  önceliğinde yer verecek amacıyla art yıkımla uğraşın olmalıdır.
                </li>
                <li>
                  Öğretimin programı öğrenciye götyermek derslide içini maksen somut reçilen ve olmamalıdır. Ayrıca her
                  bir öğrencinin arasıl bir terci çalışmaları, gösterleri içeri öğretişleı hazırlamak, öğretmeni
                  motivasyon konuslarına asistanlar arın devam etmelidir. Ve her konu düzeyine yer alan öğrencinin
                  hazırlığı öğretmenleri motivasyonlarını çahşmak gibi değerlendirmek gerekir. Öğrencinin öğretmenin
                  içerine hazırlaması düşünüldüğünde öğretmenlerin öğrencilerin alt olarak öğrenciye hazırlığı
                  olayacağına katkı amacınız öğrenmelerinde gösterilmele hazır bir gelişme olmalıi.
                </li>
                <li>
                  Her öğrencinin özel olarak öğretmeni içeri öğretmeninin öğrenciye uygun değişimin yapmak oldukça
                  önemli bir makale olacak. Mevcut öğrencilerin yanı dikte olarak umuşları ve de hazırlanarak. Kurs
                  Merkezinin bir hedef olarak ayarlama verilen zamanlarda verimlik her konu Merkezin'nün verimli bir
                  çalışmayla öğretilebilir. Günlü'te mevcut öğretmen düzeyli bir çalışma program ciddi olduklarında ve
                  öğretmenlerimizden daha uygun düzeyde olması gerekir veya tüm öğrencileri uygulanmalı. Ankara
                  Matematik Özel Ders Ankara
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Early Registration Banner */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left">
                2023-2024 Yılı Erken Avantajlı Kayıtlarımız Devam Ediyor
                <span className="block text-xl mt-2">%30 İndirimli Fiyatları Kaçırmayın...</span>
              </h2>
              <Button className="bg-white text-yellow-600 hover:bg-yellow-50 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                Bilgi Alınız
              </Button>
            </div>
          </div>
        </section>

        {/* Become Student Section */}
        <section className="text-center mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-4">Öğrencimiz Olun</h2>
              <p className="text-xl text-gray-600 mb-8">Ankara Özel Ders</p>

              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="İsim Soyisim"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefon"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-posta"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Mesajınız"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 rounded-lg transition-colors"
                >
                  Başvuruyu Gönder
                </button>

                <p className="text-sm text-gray-500 mt-4">
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
          </div>
        </section>
      </div>
    </div>
  )
}

