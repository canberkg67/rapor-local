import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LoginButton } from "@/components/LoginButton";
import { Button } from "@/components/ui/button";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar user={session?.user} />

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Rapor Yükleme Sayfasına Hoşgeldiniz!</h1>
        <p className="text-lg mb-6 text-muted-foreground">
          Burada PDF dosyası olarak raporlarını yükleyebilirsiniz.
        </p>

        {!session ? <LoginButton /> : (
          <Button asChild variant="secondary">
            <a href="/dashboard">Dashboard'a git.</a>
          </Button>
        )}
      </main>

      <Footer />
    </div>
  );
}
