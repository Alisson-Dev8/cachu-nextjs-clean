import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MenuHighlights } from "@/components/MenuHighlights";
import { Testimonials } from "@/components/Testimonials";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <MenuHighlights />
        <Testimonials />
      </main>
      <SiteFooter />
    </>
  );
}
