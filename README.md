# Localhost İçin Rapor Yükleme Sayfası Testi

Bir şirkette çalışan insanların Gmail hesapları üzerinden giriş yapıp raporlarını pdf olarak yükleyebileceği bir sitedir.Sadece sistemde kaydı olan maillerin girişinin yapılması sağlanabilmektedir.
---
**Kurulum**
- npm install ile modülleri yükleyin.
- npm prisma generate ile prismayı aktifleştirin.
- npm run dev ile serverı başlatın.
---
**Eklenmesi Gereken Kısımlar**
- .env.example'ın adını .env yapın.
- .env dosyasına keylerinizi ekleyin.
- DATABASE_URL= Bu kısma veritabanı bağlantınızı ekleyin.Mesela Postgres.
- AUTH_SECRET= Bu kısma NextAuth keyinizi ekleyin.
- GOOGLE_CLIENT_ID= Google Providerı kullanmak için gereklidir.Google Console Cloud'da Yeni Oauth Projesi yaratıldıktan sonra elde edilir.
- GOOGLE_CLIENT_SECRET= Yukarıdaki gibi üretilir.
- lib/auth.js kısmında const allowedEmails = [
    ...
  ]; kısmına giriş izni verilecek gmail hesaplarını tırnak içinde ekleyin.