# Stiqr Landing Page - Quick Access

Landing page modern untuk aplikasi Stiqr dengan fitur quick access yang memudahkan pengunjung untuk melakukan aksi cepat seperti registrasi, chat WhatsApp, dan melihat demo.

## 🚀 Fitur

- **Quick Access Buttons**: Tiga tombol utama untuk aksi cepat
  - Daftar Stiqr (dengan form registrasi)
  - Chat WhatsApp (langsung membuka WhatsApp)
  - Lihat Demo 30 Detik
- **Design Modern**: Desain responsif dengan tema orange yang menarik
- **Animasi Smooth**: Animasi halus saat scroll dan hover
- **Modal Interaktif**: Modal untuk quick access ke berbagai fitur
- **Responsive**: Tampilan optimal di desktop, tablet, dan mobile

## 📁 Struktur File

```
landingQuickAccess/
├── index.html      # Struktur HTML landing page
├── styles.css      # Styling dan desain
├── script.js       # JavaScript untuk interaktivitas
└── README.md       # Dokumentasi
```

## 🛠️ Cara Menggunakan

1. **Buka file `index.html`** di browser web Anda
   - Bisa langsung double-click file `index.html`
   - Atau buka melalui web server lokal

2. **Untuk development dengan live server** (opsional):
   ```bash
   # Menggunakan Python
   python -m http.server 8000
   
   # Menggunakan Node.js (http-server)
   npx http-server
   
   # Menggunakan PHP
   php -S localhost:8000
   ```

3. Buka browser dan akses `http://localhost:8000`

## ⚙️ Kustomisasi

### Mengubah Nomor WhatsApp

Edit file `script.js`, cari baris:
```javascript
const phoneNumber = '6281234567890'; // Ganti dengan nomor WhatsApp Stiqr yang sebenarnya
```

Ganti dengan nomor WhatsApp yang benar (format: 62xxxxxxxxxx tanpa + dan spasi).

### Menambahkan Video Demo

Edit file `script.js`, di fungsi `handleDemo()`, ganti bagian placeholder video dengan embed YouTube/Vimeo:

```javascript
// Contoh embed YouTube
<iframe width="100%" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```

### Mengubah Warna Tema

Edit file `styles.css`, ubah variabel CSS di bagian `:root`:
```css
:root {
    --primary-orange: #FF6B35;
    --primary-blue: #4A90E2;
    --primary-green: #27AE60;
    /* ... */
}
```

## 📱 Fitur Quick Access

1. **Daftar Stiqr - Gratis**
   - Membuka modal dengan form registrasi
   - Form validasi dan submit handling

2. **Chat WhatsApp Sekarang**
   - Langsung membuka WhatsApp dengan pesan template
   - Fallback modal jika WhatsApp tidak terbuka

3. **Lihat Demo 30 Detik**
   - Modal dengan placeholder untuk video demo
   - Informasi tentang fitur-fitur Stiqr

## 🎨 Teknologi yang Digunakan

- **HTML5**: Struktur semantik
- **CSS3**: Modern styling dengan CSS Grid, Flexbox, dan Animations
- **JavaScript (Vanilla)**: Interaktivitas tanpa framework
- **Google Fonts**: Font Inter untuk typography modern

## 📝 Catatan

- Pastikan koneksi internet untuk load Google Fonts
- Nomor WhatsApp perlu diganti dengan nomor yang sebenarnya
- Video demo perlu ditambahkan embed code yang sesuai
- Form registrasi saat ini hanya menampilkan alert, perlu diintegrasikan dengan backend

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

Proyek ini dibuat untuk keperluan landing page Stiqr.

