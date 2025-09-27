const chalk = require("chalk");
const readlineSync = require("readline-sync");
const fs = require("fs");
const { spawn } = require("child_process");

// Fungsi download pakai yt-dlp + progress
function downloadYtDlp(url, format, isPlaylist = false) {
  return new Promise((resolve, reject) => {
    const folder = "yt-downloader";
    if (!fs.existsSync(folder)) fs.mkdirSync(folder);

    const out = `${folder}/%(title)s.%(ext)s`;
    const playlistFlag = isPlaylist ? "" : "--no-playlist";
    const args = ["-f", format, "-o", out, playlistFlag, url].filter(Boolean);

    const yt = spawn("yt-dlp", args);

    yt.stdout.on("data", (data) => {
      const line = data.toString();
      // Cari pattern progress
      const match = line.match(/\[download\]\s+(\d{1,3}\.\d)%/);
      if (match) {
        process.stdout.write(`\r📥 Sedang download: ${match[1]}%   `);
      }
    });

    yt.stderr.on("data", (data) => {
      console.error("\n⚠️ yt-dlp:", data.toString());
    });

    yt.on("close", (code) => {
      if (code === 0) {
        console.log("\n✅ Download selesai!");
        resolve();
      } else {
        reject(new Error(`yt-dlp exited with code ${code}`));
      }
    });
  });
}

async function start() {
  console.log(chalk.cyan(`${chalk.red("- - SANSEKAI - -")}
Youtube mp4/mp3 Downloader
Created by Yusril (Refurbished by Rikaz)
${chalk.red("- - SANSEKAI - -")}\n`));

  console.log(`${chalk.cyan("MENU")}
1. Youtube Downloader Mp3
2. Youtube Downloader Mp4
3. Youtube Playlist Downloader Mp3
4. Youtube Playlist Downloader Mp4
5. Youtube Search With Query Downloader Mp3
6. Youtube Search With Query Downloader Mp4\n`);

  const pilihan = readlineSync.questionInt(
    chalk.yellow("- Mau pilih menu nomor berapa?: ")
  );

  try {
    if (pilihan === 1) {
      const linknya = readlineSync.question(
        chalk.yellow("- Masukkan link youtubenya: ")
      );
      console.log(chalk.yellow("\nLagi proses download...\n"));
      await downloadYtDlp(linknya, "bestaudio");
    } else if (pilihan === 2) {
      const linknya = readlineSync.question(
        chalk.yellow("- Masukkan link youtubenya: ")
      );
      console.log(chalk.yellow("\nLagi proses download...\n"));
      await downloadYtDlp(linknya, "best");
    } else if (pilihan === 3) {
      const linknya = readlineSync.question(
        chalk.yellow("- Masukkan link playlist youtubenya: ")
      );
      console.log(chalk.yellow("\nLagi proses download playlist (mp3)...\n"));
      await downloadYtDlp(linknya, "bestaudio", true);
    } else if (pilihan === 4) {
      const linknya = readlineSync.question(
        chalk.yellow("- Masukkan link playlist youtubenya: ")
      );
      console.log(chalk.yellow("\nLagi proses download playlist (mp4)...\n"));
      await downloadYtDlp(linknya, "best", true);
    } else if (pilihan === 5) {
      const query = readlineSync.question(
        chalk.yellow("- Masukkan query youtubenya: ")
      );
      console.log(chalk.yellow("\nCari dan download hasil pertama (mp3)...\n"));
      await downloadYtDlp(`ytsearch1:${query}`, "bestaudio");
    } else if (pilihan === 6) {
      const query = readlineSync.question(
        chalk.yellow("- Masukkan query youtubenya: ")
      );
      console.log(chalk.yellow("\nCari dan download hasil pertama (mp4)...\n"));
      await downloadYtDlp(`ytsearch1:${query}`, "best");
    } else {
      console.log(chalk.red("❌ Pilihannya cuma 1 - 6"));
    }
  } catch (err) {
    console.log(chalk.red("❌ Error:"), err.message);
  }
}

start();