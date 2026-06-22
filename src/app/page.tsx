import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { ProductShowcase } from "@/components/sections/work/ProductShowcase";
import { Experience } from "@/components/sections/Experience";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Services />
        <ProductShowcase />
        <Experience />
        <SuccessStories />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
