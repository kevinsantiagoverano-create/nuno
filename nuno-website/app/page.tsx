import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Hero } from "@/components/sections/Hero";
import { Capabilities } from "@/components/sections/Capabilities";
import { Problems } from "@/components/sections/Problems";
import { Services } from "@/components/sections/Services";
import { Solutions } from "@/components/sections/Solutions";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Differentials } from "@/components/sections/Differentials";
import { Technologies } from "@/components/sections/Technologies";
import { CtaSection } from "@/components/sections/CtaSection";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <Hero />
        <Capabilities />
        <Problems />
        <Services />
        <Solutions />
        <Portfolio />
        <Process />
        <Differentials />
        <Technologies />
        <CtaSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
