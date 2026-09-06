# Bussion

Kurumsal veri analizi ve raporlama platformunun mobil uyumlu tanıtım sitesi.

[Canlı site](https://edapktzl.github.io/bussion-platform/)

## Yerelde çalıştırma

Node.js 22 ile:

```sh
npm ci
npm run dev
```

Site `http://localhost:3000` adresinde açılır.

## Proje yapısı

- `app/`: Ana sayfa, genel stiller ve sayfa ayarları.
- `components/`: Navbar ve hero bileşenleri.
- `.github/workflows/pages.yml`: GitHub Pages yayın akışı.

## Kontrol ve yayın

```sh
npm run lint
npm run build
```

Derleme statik siteyi `out/` klasörüne oluşturur. `main` dalına gönderilen
değişiklikler GitHub Actions üzerinden kontrol edilir ve GitHub Pages'te yayınlanır.
Yayın sırasında alt dizin yolu `PAGES_BASE_PATH` ile ayarlanır.

Bağımlılıklar, derleme çıktıları ve yerel ayar dosyaları GitHub'a gönderilmez.
