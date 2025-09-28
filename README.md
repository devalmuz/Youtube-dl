# 🎵 YouTube Audio Downloader (Termux/Node.js)

Downloader sederhana untuk mengambil audio dari YouTube menggunakan [`yt-dlp`](https://github.com/yt-dlp/yt-dlp).  
Didesain agar mudah dipakai di **Termux** ataupun **Linux/Windows** dengan Node.js.

---

## ✨ Fitur
- Download audio dengan **yt-dlp** otomatis.
- Progress bar persentase `0% → 100%`.
- Output file otomatis disimpan di folder `yt-downloader/`.
- Error handling + fallback dari `ytdl-core` ke `yt-dlp`.

---

## 📦 Instalasi

### 1. Install git
```bash
pkg install git
```

### 2. Clone repo
```bash
git clone https://github.com/devalmuz/Youtube-dl
cd Youtube-dl
```

### 3. Install dependensi
```bash
npm install
```

### 4. Pastikan `yt-dlp` sudah terpasang
#### Termux / Linux:
```bash
pkg install python ffmpeg
pip install -U yt-dlp
```
### 5. Pastikan juga termux mendapatkan izin penyimpanan

```bash
termux-setup-storage
```

#### Windows (PowerShell):
```powershell
winget install yt-dlp
```

---

## 🚀 Cara Pakai
Jalankan script:
```bash
node index.js
```

Masukkan URL YouTube:
```
Masukkan link YouTube: https://youtu.be/xxxxxx
```

File hasil download akan tersimpan di folder:
```
yt-downloader/
```

---

## 📂 Struktur Project
```
yt-downloader-termux/
 ├─ index.js        # script utama
 ├─ package.json    # config project + dependensi
 └─ README.md       # dokumentasi
```

---

## ⚖️ Lisensi
MIT License © 2025 [Rikaz Muzani](https://github.com/devalmuz)
