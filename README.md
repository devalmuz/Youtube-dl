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

### 1. Clone repo
```bash
git clone https://github.com/username/yt-downloader-termux.git
cd yt-downloader-termux
```

### 2. Install dependensi
```bash
npm install
```

### 3. Pastikan `yt-dlp` sudah terpasang
#### Termux / Linux:
```bash
pkg install python ffmpeg
pip install -U yt-dlp
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
MIT License © 2025 [Rikaz Muzani](https://github.com/username)
