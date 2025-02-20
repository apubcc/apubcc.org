import Lenis from "@/components/custom/lenis";
import Achievements from "@/components/home/Achievements";
import Events from "@/components/home/Events";
import Faq from "@/components/home/Faq";
import Footer from "@/components/home/Footer";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import VisionAndMission from "@/components/home/VisionsMissions";

export default function Home() {
  return (
    <Lenis>
      <section
        id="hero-section"
        className="min-h-[100svh] px-[0.875rem] py-[1.8125rem] md:px-20 lg:px-52 lg:py-[3rem]"
      >
        <Hero />
      </section>

      <section
        id="achievements-section"
        className="min-h-[100svh] w-full px-[0.875rem] py-[1.8125rem] md:py-20"
      >
        <Achievements />
      </section>

      <section
        id="vision-mission-section"
        className="min-h-[100svh] px-7 md:px-20 lg:px-52"
      >
        <VisionAndMission />
      </section>

      <img
        src="/Vector.png"
        alt="some background svg"
        className="absolute -z-10"
      />
      <div className="min-h-[100svh]">
        <section
          id="events-section"
          className="relative z-10 min-h-[10svh] px-7 md:px-20 lg:px-52"
        >
          <Events />
        </section>
        <section id="gallery-section" className="px-7 md:px-20 lg:px-52">
          <Gallery />
        </section>
      </div>

      <img
        src="/faq-bg.svg"
        alt="some background svg"
        className="absolute -z-10"
      />
      <section id="faq-section" className="px-7 md:px-20 lg:px-52">
        <Faq />
      </section>

      <section
        id="footer-section"
        className="flex min-h-[80svh] items-end justify-center bg-gradient-to-b from-[rgba(238,145,89,0)] from-[17.28%] to-[#F16109] to-[73%] lg:px-20"
      >
        <Footer />
      </section>
    </Lenis>
  );
}
