"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { GraduationCap, Clock, Users, BookOpen } from "lucide-react"

export default function OrtaokulKursuPage() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] lg:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3"
            alt="Ankara Ortaokul Kursu - 5-6-7. Sınıf Eğitimi"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
        </div>

        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Ankara 5-6-7. Sınıf Kursları Ankara
            <span className="block text-yellow-400 mt-4">Ortaokul Kursu Ankara Özel Ders</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Main Content */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-yellow-600 mb-8 text-center">5-6-7. Sınıf Kursları</h2>
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Yaklaşımımız</h3>
              <p className="text-gray-700 leading-relaxed">
                5. sınıf, 6.sınıf ve 7.sınıfın ikinci yarısına kadar helen somut varlıklardan faydalanarak öğrenciler
                Düşünyayla yapılan her etkinlik maksimum düzeyde somutlaştırılır.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Yedinci sınıfın ikinci yarısından sonra soyut işlemler evresine geçeceklerinden somut-soyut bağlantısı
                kurularak ve adım adımlar aşığlanarak somut çalışmalar yapılır.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ruhsal olarak ergenlik dönemine ön hazırlık ve ergenlik bu çağda olacağından bireyler ailesinin
                öğretmenlerinin ve arkadaşlarının ilişkileri titizlikle gözlenip, gerekli önleyici tedbirler alınır ve
                Öğrenme etkinliklerine bu aşıyı hazırlandıkdan sonra başlanır. Yargı ve değer gelişimi(ahlaki gelişim)
                artık mikro çevreden mezo, egzo ve makro çevreye göre de şekilllenmeye başlar, dolayısıyla bu çevrelerde
                ki beyen gelişim ve öğrenmesinde olumlu yada olumsuz etkileri kurumumuzca titizlikle incelenir gerekli
                önlemler alınıp aileler bilgilendirilir.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-8">Bu yaş grubunda derse girecek öğretmenlerde</h3>
              <ul className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Mesleki donanımın üst düzey olması</li>
                <li>Pratik zeka</li>
                <li>Espri gücü</li>
                <li>Özgüven, motivasyon ve konsantrasyon yüksekliği</li>
                <li>Liderlik</li>
                <li>Anadil etkili kullanma</li>
                <li>Genç psikolojisi konusunda üst düzey bilgiye sahip olma</li>
                <li>Dost öğretmen modeli gibi özelliklere dikkat edilir.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Öğrencilerle birebir ilgilenmenin, öğrencinin gelişiminde hızlandırıcı rolünden faydalanılmıştır.
                Öğrencilerin temel eksiklerinin tamamıyla kapatılmasına özen gösterilmiştir. Bu öğrencinin eğitim
                hayatındaki verimini üst düzeye çıkarmaktadır. Öğrenci eksiklerini giderdikçe okulda devam eden
                eğitimden de üst düzeyde faydalanabilmektedir. Ankara Ortaokul Kursu Ankara Özel Ders 5-6-7. Sınıflar
                Kursları
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
                  <h2 className="text-xl font-bold text-yellow-600 mb-2">5-6-7. Sınıf Kursları</h2>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Haftada 12 saat ders</h3>
                  <p className="text-gray-600">
                    5-6-7. Sınıf kursumuz haftanın 4 günü 12 saat ders olmak üzere toplamda 480 saatten oluşan yoğun bir
                    programdır. Ankara Özel Ders Ankara Ortaokul Kursu 5-6-7. Sınıflar Kursları
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
                    8 Kişilik ferah sınıflarımızda özel sınıf çalışmaları yaparak %100 başarı sağlamaktayız. Ankara Özel
                    Ders Ankara Ortaokul Kursu 5-6-7. Sınıflar Kursları
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
                    Güçlü ve Alanında Uzman öğretmen kadromuz ile başarı oranında artışlar sağlamaktayız. Ankara Özel
                    Ders Ankara Ortaokul Kursu 5-6-7. Sınıflar Kursları
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
                    Birebir özel ders ile öğrenciye özgü en uygun öğretim yöntemlerini belirleyerek en kısa sürede
                    öğrencinin bireysel gelişimine katkıda bulunmaktayız. Ankara Özel Ders Ankara Ortaokul Kursu 5-6-7.
                    Sınıflar Kursları
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-4.0.3"
                alt="Ortaokul Öğrencileri"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3"
                alt="Özel Ders"
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
              <div className="text-4xl font-bold text-yellow-600 mb-2">12</div>
              <div className="text-gray-600">Ders Saati</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">480</div>
              <div className="text-gray-600">Toplam Saat</div>
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
              <p className="text-xl text-gray-600 mb-8">Ankara 5-6-7. Sınıf Kursları</p>

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

