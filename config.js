// config.js - Đặt file này cùng thư mục với index.html
const CONFIG = {
  PASSWORD_HASH: "8f3e...your_sha256_hash_here...", // Thay bằng hash thật
  TELEGRAM_BOT_TOKEN: "YOUR_BOT_TOKEN_HERE",
  TELEGRAM_CHAT_ID: "YOUR_CHAT_ID_HERE",
  SITE_NAME: "JUNE - Shadowrocket & Locket"
};

// Hàm hash đơn giản (SHA256)
async function hashPassword(pw) {
  const msgUint8 = new TextEncoder().encode(pw);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2,'0')).join('');
}
