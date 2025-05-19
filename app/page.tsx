// app/page.tsx
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import BuiltForAI from "@/components/built-for-ai";
import BuiltForScale from "@/components/built-for-scale";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <BuiltForAI />
      <BuiltForScale />
      <FAQSection />
      <Footer />
    </main>
  );
}