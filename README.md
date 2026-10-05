# Learning with cafer teacher · LWCT

Türkçe arayüzlü, A1–C2 seviyelerinde bağlam odaklı İngilizce çalışma uygulaması.

[Uygulamayı aç](https://terminatorteac.github.io/lwct-english-learning/)

Ana Sayfa, Kelime, İstatistik, İş İngilizcesi, Bilimsel Literatür, Günlük İngilizce ve 10 bin kelimelik sıklık kataloğu bulunur. Seviye seçimi günlük alıştırmaları ve konu kartlarını değiştirir. Kelime sıklık listesi doğrulanmış CEFR düzeyleri taşımaz.

## Sözlük

- 34.975 başlıklı FreeDict İngilizce–Türkçe sözlük, uygulamanın kendi dosyalarından yüklenir.
- 7.298 kayıtlık İngilizce paket, WordNet tanımlarını ve örneklerini içerir; `you` kaydı LWCT öğrenme notudur.
- 10 bin listedeki 7.519 kayıt, iki paketten en az birinde doğrudan bulunur. Ek LWCT notları ve yalın biçim önerileri de vardır. Tam kapsama iddiası yoktur; özel isimler, altyazı parçaları ve bazı çekimler bulunmayabilir.
- İngilizce tanım düğmesi yerel paketi açar. Güncel tanım ve ses için ayrı, isteğe bağlı çevrim içi arama bulunur. Dış servisin hatası yerel sonuçları silmez.
- Kelimeler birden çok anlama gelebilir. Türkçe kaynak eski yazımlar içerebilir. Konu kartlarında anlam, örnek cümleye göre gösterilir.

## Telefonda kullanım

Safari ile uygulamayı açıp Paylaş → Ana Ekrana Ekle seçeneğini kullanın. İlk çevrim içi yükleme tamamlanınca sözlük bölümünde **Sözlük çevrimdışına hazır** görünür. Uygulama ve iki sözlük paketi önbelleğe alınır. Ses kayıtları internet gerektirebilir.

İlerleme bu cihazın tarayıcısında saklanır; hesap ve cihazlar arası eşitleme yoktur. Site verilerini silmek veya tarayıcının depolamayı temizlemesi, ilerlemeyi ve çevrimdışı önbelleği kaldırabilir.

## Yayın ve kaynaklar

GitHub Pages ana dalın kök dizinini yayımlar. `index.html` uygulama kodunu içerir; `dictionary-data.json` ve `english-data.json` sözlük paketleridir. `sw.js` çevrimdışı önbelleği yönetir. Yeni paketlerde önbellek sürümü artırılmalıdır.

Veri kaynakları, kapsam, dönüşümler ve lisanslar [DICTIONARY-SOURCES.md](DICTIONARY-SOURCES.md) içinde açıklanır. Türkçe veri GPL-2.0-or-later, İngilizce veri WordNet lisansına tabidir; lisans dosyaları dağıtıma dahildir.

Doğrulama: kelime listesinden arama, Türkçe/İngilizce paket sonuçları, bağlam örnekleri, yalın biçim önerileri, bulunamayan kelime, hizmet hatası, eski isteğin yeni sonucu ezmemesi, kayıtlı sonuç ve çevrimdışı önbellek davranışları test edildi. Gerçek iOS cihazında test henüz yapılmadı.
