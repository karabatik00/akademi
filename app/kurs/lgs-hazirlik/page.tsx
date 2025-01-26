"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { GraduationCap, Clock, Users, BookOpen } from "lucide-react"

export default function LGSHazirlikPage() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3"
            alt="LGS Hazırlık Kursu - Öğrenciler Sınıfta"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
        </div>

        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Ankara LGS Hazırlık Kursu Ankara LGS
            <span className="block text-yellow-400 mt-4">Özel Ders Matematik Özel Ders</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Main Content */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-yellow-600 mb-8 text-center">LGS Hazırlık Kursu</h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Öğrencileri sınava hazırlık sürecinde öğrencilerimizin başarıya ulaşması için en iyi şekilde
                çalışıyoruz. Uzman kadromuz ve modern eğitim yöntemlerimizle öğrencilerimize kaliteli eğitim sunuyoruz.
                Öğrencilerimizin başarıya ulaşması için her türlü imkanı sağlıyoruz.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Sınava hazırlık sürecinde öğrencilerimizin başarıya ulaşması için en iyi şekilde çalışıyoruz. Uzman
                kadromuz ve modern eğitim yöntemlerimizle öğrencilerimize kaliteli eğitim sunuyoruz. Öğrencilerimizin
                başarıya ulaşması için her türlü imkanı sağlıyoruz.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Öğrencilerimizin başarıya ulaşması için her türlü imkanı sağlıyoruz. "Yenilikçi başarılı" öğrencilerimiz
                ve öğretmenlerimiz okulu başarılarını artırmaya yönelik olası öğretmenler sürecindirmelerde. Yeni nesil
                sorular ve öğrencileri artırarak ve programlara başarılarını artık hale getirip düşünür ve başarılara
                programı sağlarız. Alt konu LGS Özel Ders Matematik Özel Ders.
              </p>
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

        {/* Course Features */}
        <section className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-bold text-yellow-600 mb-2">LGS Hazırlık Kursu</h2>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Haftada 15 saat ders 3 saat etüt</h3>
                  <p className="text-gray-600">
                    Üniversiteye hazırlık kursumuz haftada 4 günü 15 saat ders ve 3 saat etüt uygulanan özenli konu
                    takipli TYT/deneme sınavları ile programlı. Ankara LGS Özel Ders Matematik Özel Ders
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Gerçek Butik Kurs</h3>
                  <p className="text-gray-600">
                    8 kişilik butik sınıflarımızda özel sınıf uygulanan öğrencili %100 başarılı sağlanmakta... Ankara
                    LGS Özel Ders Matematik Özel Ders Ankara LGS Özel Ders
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Uzman Öğretmen Kadrosu</h3>
                  <p className="text-gray-600">
                    Güçlü ve deneyimli konuda öğretmen kadromuz ile başarılı sonuçlar alınır öğrencilerimiz... Ankara
                    LGS Hazırlık Kursu Ankara LGS Özel Ders Matematik Özel Ders
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Birebir Özel Ders Kişiye Özel Programlar</h3>
                  <p className="text-gray-600">
                    Butik sınıf ders ile öğrenciye uygun tek tek uygun öğretici yöntemlerle hazırlanarak ve konu konuda
                    öğrencinin bireysel gelişmelerle katkı da bulunmaktayız. Ankara LGS Hazırlık Kursu Matematik Özel
                    Ders Ankara LGS Özel Ders
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3"
                alt="LGS Hazırlık Öğrencileri Ders Çalışırken"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3"
                alt="LGS Matematik Dersi"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">15</div>
              <div className="text-gray-600">Ders Saati</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">3</div>
              <div className="text-gray-600">Etüt Saati</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">8</div>
              <div className="text-gray-600">Kişilik Sınıflar</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">%100</div>
              <div className="text-gray-600">Başarı Oranı</div>
            </div>
          </div>
        </section>

        {/* Become Student Section */}
        <section className="text-center mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-4">Öğrencimiz Olun</h2>
              <p className="text-xl text-gray-600 mb-8">Ankara LGS Hazırlık Kursu</p>

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

