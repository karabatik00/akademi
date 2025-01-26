"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ErrorBoundary } from "react-error-boundary"

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="text-red-500 p-4">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

export default function KurumsalPage() {
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    // Simulating an asynchronous operation that might throw an error
    const fetchData = async () => {
      try {
        // Your async operations here
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An unknown error occurred"))
      }
    }

    fetchData()
  }, [])

  if (error) {
    return <ErrorFallback error={error} />
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-yellow-100 rounded-full mix-blend-multiply blur-3xl opacity-30" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-30" />
        </div>

        <div className="relative">
          {/* Hero Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h1
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent mb-6"
                >
                  Hakkımızda | Ankara YKS Kursu
                </h1>
              </div>
            </div>
          </section>

          {/* Content Sections */}
          <div className="space-y-32 pb-24">
            {/* Kurumsal Section */}
            <section>
              <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                  <div
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3"
                      alt="Öğrenciler sınıfta"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div
                    className="space-y-6"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Kurumsal</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Alfa Vip Eğitim olarak, öğrencilerimizin &quot;Başarı Yolculuğunda&quot; yanlarında olmaktan gurur duyuyoruz.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Vizyonumuz, Atatürk İlke ve İnkılaplarına bağlı, çağın gereklerine uyum sağlayabilen, analitik düşünebilen, sorgulayan ve araştıran bireyler yetiştirmektir.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Misyonumuz, öğrencilerimizin akademik başarılarını artırmak için &quot;Birebir Özel Ders&quot; imkanı sağlamaktır.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Sistemimiz Section */}
            <section>
              <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                  <div
                    className="space-y-6 lg:order-2"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Sistemimiz</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Alfa Vip Eğitim'de her öğrenci özeldir. Sıcak ve samimi bir eğitim ortamında, her öğrencimizin
                      bireysel ihtiyaçlarını göz önünde bulundurarak kişiye özel eğitim programları hazırlıyoruz.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Sistemimizin temelinde düzenli takip ve sürekli gelişim var. Birebir özel ders imkanları, detaylı
                      konu analizleri ve özel çalışma programlarıyla öğrencilerimizin akademik gelişimini adım adım
                      izliyor ve destekliyoruz. Modern eğitim teknolojilerini kullanarak, klasik eğitim yöntemlerini
                      yenilikçi yaklaşımlarla birleştiriyoruz.
                    </p>
                  </div>
                  <div
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl lg:order-1"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3"
                      alt="Öğrenciler işbirliği içinde çalışırken"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Kadromuz Section */}
            <section>
              <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                  <div
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3"
                      alt="Öğretmen Kadromuz"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div
                    className="space-y-6"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Kadromuz</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Alanında uzman ve deneyimli öğretmen kadromuz, eğitimin kalbini oluşturuyor. Her bir öğretmenimiz,
                      kendi alanında üstün başarılara imza atmış, öğrenci psikolojisini anlayan ve modern eğitim
                      tekniklerini ustaca kullanan profesyonellerdir.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Sürekli gelişim ilkesiyle hareket eden öğretmenlerimiz, düzenli olarak mesleki gelişim eğitimleri
                      alarak, en güncel öğretim yöntemlerini ve teknolojilerini sınıflarına taşıyorlar. Yüzlerce
                      başarılı öğrencimiz ve velilerimizden aldığımız olumlu geri bildirimler, kadromuzun kalitesinin en
                      büyük göstergesidir.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Kişiye Özel Programlar Section */}
            <section>
              <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                  <div
                    className="space-y-6 lg:order-2"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Kişiye özel programlar sunuyoruz</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Her öğrencinin öğrenme stili, hızı ve potansiyeli benzersizdir. Bu nedenle, standart eğitim
                      programları yerine, her öğrencimiz için özel olarak tasarlanmış, kişiselleştirilmiş eğitim
                      planları hazırlıyoruz.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Düzenli yapılan ölçme-değerlendirme çalışmaları ve birebir danışmanlık görüşmeleriyle,
                      öğrencilerimizin gelişimini yakından takip ediyor, gerektiğinde programlarında ince ayarlar
                      yaparak maksimum verimi hedefliyoruz. Bu yaklaşım, her öğrencimizin kendi hızında ilerlemesine ve
                      potansiyelini tam anlamıyla ortaya çıkarmasına olanak sağlıyor.
                    </p>
                  </div>
                  <div
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl lg:order-1"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3"
                      alt="Birebir Eğitim"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* İşimizi Severek Yapıyoruz Section */}
            <section>
              <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                  <div
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3"
                      alt="Mutlu Öğretmen"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div
                    className="space-y-6"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">İşimizi severek yapıyoruz</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Eğitim bizim için sadece bir meslek değil, bir tutku. İnanıyoruz ki, gerçek başarı ancak sevgiyle
                      ve tutkuyla yapılan işlerde ortaya çıkar. Bu nedenle öncelikli hedefimiz, öğrencilerimize sadece
                      akademik bilgi aktarmak değil, aynı zamanda öğrenme sevgisi ve başarma tutkusu aşılamaktır.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Öğrencilerimizle kurduğumuz samimi ve güvene dayalı ilişki, onların derse olan ilgisini artırıyor
                      ve öğrenme sürecini keyifli bir yolculuğa dönüştürüyor. Çünkü biliyoruz ki, seven öğrenir, öğrenen
                      başarır ve başaran mutlu olur.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  )
}
