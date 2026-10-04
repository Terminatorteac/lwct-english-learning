# Bloom — İngilizce çalışma dashboard'u

Herkesin kendi seviyesinde çalışabilmesi için A1–B2 seviye seçimi, günlük hedef, 12 örnek alıştırma, 12 kelime kartı ve tarayıcıda saklanan ilerleme sunan ilk prototip.

`dist/index.html` dosyasını bir tarayıcıda açın veya `dist` klasörünü statik HTTP sunucusuyla servis edin. Derleme ya da paket kurulumu gerekmez. Yazı tipleri yüklenemezse sistem yazı tipi kullanılır.

Bu sürümde hesap sistemi ve cihazlar arası eşitleme yoktur. Aynı tarayıcı profili tek çalışma alanı kullanır. Günlük tamamlanma, her seviyedeki her alıştırma için günde bir kez sayılır. Daha yüksek hedefler farklı seviyelerden alıştırmalarla tamamlanabilir. İçerik örnek niteliğindedir; tam bir dil kursu değildir.

Sonraki aşamalar: içerik havuzunu genişletme, kullanıcı hesapları, kişiye göre kalıcı veri, aralıklı kelime tekrarı, dinleme ve konuşma pratiği. GitHub deposu bu aşamada bağlanmamıştır.

## Bağlam ve alt menü güncellemesi
Ana Sayfa, Çeviri, Kelimeler ve İstatistik için sabit alt menü eklendi. Take, run ve light sözcüklerinin toplam 8 kullanımı ayrı kimliklerle takip edilir. Önceki kelime kayıtları korunur; bağlam öğrenildi olarak otomatik sayılmaz. Çeviri yalnızca arayüzde listelenen 8 örnek cümleyi destekler, harici çeviri servisi bağlı değildir. Mobil güvenli alan boşluğu ve azaltılmış hareket tercihi desteklenir. Gerçek iOS/Android cihaz testi henüz yapılmamıştır.

## LWCT güncellemesi
Uygulama adı Learning with cafer teacher olarak değiştirildi; LWCT SVG logosu eklendi. dictionary.js Free Dictionary API üzerinden İngilizce kelime araması yapar. Tanımlar, mevcut örnekler, fonetik bilgi ve varsa ses gösterilir. Kaynak ve lisans bağlantıları korunur. Kullanıcı seçtiği anlamı cihazına kaydedebilir. Son 30 farklı sorguya kadar yerel önbellek tutulur; ağ hatasında eski kayıt varsa kullanılır. Serbest Türkçe cümle çevirisi bu sürüme bağlı değildir. Sözlük kodunun sözdizimi doğrulandı; bu ortamdan canlı uç noktaya bağlantı kurulamadığından canlı sorgu doğrulanamadı.

## Canlı bağlantı doğrulaması
Ağ erişimi sağlandıktan sonra Node fetch ile take (65 tanım), run (63 tanım) ve light (48 tanım) sorguları HTTP 200 döndürdü. API Access-Control-Allow-Origin: * başlığını sunuyor. PowerShell istemcisinde Windows güvenlik paketi kaynaklı TLS hatası oluştu; sertifika denetimi kapatılmadan Node üzerinden bağlantı başarılı oldu. Bazı ek istekler zaman aşımına uğradı; servis sürekliliği garanti edilmez. Tarayıcı içindeki uçtan uca arama ayrıca doğrulanmalıdır.
