import Header from "@/components/Header";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Specialties from "@/sections/Specialties";
import Support from "@/sections/Support";
import Bio from "@/sections/Bio";
import FAQ from "@/sections/FAQ";
import Office from "@/sections/Office";
import Background from "@/sections/Background";
import CTA from "@/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Intro />
      <Specialties />
      <Support />
      <Bio />
      <FAQ />
      <Office />
      <Background />
      <CTA />
      <Footer />
    </main>
  );
}
