"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GraduationCap, Clock, Users, BookOpen } from "lucide-react"

export default function YKSKursuPage() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2671&auto=format&fit=crop"
            alt="YKS Hazırlık Kursu"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
        </div>

        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Ankara YKS Hazırlık Kursu
            <span className="block text-yellow-400 mt-4">TYT AYT Kursu</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Üniversite Sınav Hazırlık */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-yellow-600 mb-8 text-center">Üniversite Sınav Hazırlık</h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Yükseköğretime geçmek isteyenlerin her öğrenci için özenle hazırlanmış, tek tek uygulanabilir. Standart
                bir programın tüm öğrencilere tek tek uygulanması; pek çok öğrenci için üzücü bir program olabilecektir.
                Program uygulanırken özenli öğrenciye genel düzeyin altında kalabilir.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Kendi özel programını uygulamak isteyen öğrenciler için özel programlar hazırlanır. Öğrencinin
                karşılanamayan diğer kurslarla da tercih olanaklarını göz önüne almasak bir çalışma olanağı
                sağlayacaktır. Öğrencilerin programı uğraşması ve gelişmeme durukları belki yapılan sınavlar hariç hiç
                de önemsenme alanı içinde kalmıyor.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Öğrencinin geçmiş bir sınav yaklamasını, giderek artan gelişmiş hazırlıkları, öğrencinin önemsenmesi
                karşısında kurs olarak özel ilgimiz olacaktır. TYT AYT başarı artışına yön birlikte.
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

        {/* YKS Hazırlıkta */}
        <section className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">YKS Hazırlıkta</h2>
                  <h3 className="text-lg font-semibold text-yellow-600 mb-3">Haftada 20 saat ders 12 saat etüt</h3>
                  <p className="text-gray-600">
                    Üniversiteye Hazırlık kursumuz haftada 8 günü 20 saat ders ve 12 saat etüt uygulanan özenli konu
                    takipli haftalık TYT/AYT deneme sınavları ile programlı.
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
                    8 kişilik butik sınıflarımızda uygulanan 20 saat dersler ile tüm sınıflar aynı seviyede işlerler.
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
                    Kendi ve tecrübeli konuda öğretmen kadromuz ile başarılı sonuçlar alınır öğrencilerimiz.
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
                    öğrencinin bireysel gelişmelerle katkı da bulunmaktayız.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop"
                alt="Öğrenci Çalışma"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2670&auto=format&fit=crop"
                alt="Sınıf Ortamı"
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
              <div className="text-4xl font-bold text-yellow-600 mb-2">20+</div>
              <div className="text-gray-600">Ders Saati</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">12+</div>
              <div className="text-gray-600">Etüt Saati</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">8</div>
              <div className="text-gray-600">Kişilik Sınıflar</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">%98</div>
              <div className="text-gray-600">Başarı Oranı</div>
            </div>
          </div>
        </section>

        {/* Become Student Section */}
        <section className="text-center mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-4">Öğrencimiz Olun</h2>
              <p className="text-xl text-gray-600 mb-8">Ankara YKS Hazırlık Kursu - Ankara Üniversite Hazırlık Kursu</p>

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
