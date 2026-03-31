#  Rapor Yükleme Sayfası Demosu

Bir şirkette çalışan insanların Gmail hesapları üzerinden giriş yapıp raporlarını pdf uzantılı olarak yükleyebileceği bir sayfadır. Sadece sistemde kaydı olan maillerin girişinin yapılması sağlanabilmektedir.

**Kurulum**
- npm install ile modülleri yükleyin.
- npm prisma generate ile prismayı aktifleştirin.
- npm run dev ile serverı başlatın.
---
**Eklenmesi Gereken Kısımlar**
- .env.example'ın adını .env yapın.
- .env dosyasına keylerinizi ekleyin.
- DATABASE_URL= Bu kısma veritabanı bağlantınızı ekleyin. Örnek:Postgres için Neon.
- AUTH_SECRET= Bu kısma auth işlemleri için gereken NextAuth keyinizi ekleyin.
- GOOGLE_CLIENT_ID= Google Providerı kullanmak için gereklidir.Google Console Cloud'da Yeni Oauth Projesi yaratıldıktan sonra elde edilir.
- GOOGLE_CLIENT_SECRET= Yukarıdaki gibi Google Cloud Console'dan elde edilir.
- lib/auth.js kısmında const allowedEmails = [
    ...
  ]; kısmına giriş izni verilecek gmail hesaplarını tırnak içinde ekleyin.Bunun sayesinde izin verilmeyen gmail hesaplarının sisteme girişi mümkün olmamaktadır.
- Proje Vercel gibi bir sitede deploy edilecekse pdf dosyalarını saklanması için Vercel Blob kullanılabilir. Metadata ise Neon gibi veritabanlarında tutulabilir.  

  ---

**Kullanılanlar**
- Nextjs App Router
- Tailwind+ShadCN
- Prisma+Postgresql+Neon
- NextAuth-Google Provider
- Vercel

**Çalışan Örnek**

- https://rapor-vercel.vercel.app/