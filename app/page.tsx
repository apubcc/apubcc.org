import Achievements from "@/components/home/Achievements";
import Events from "@/components/home/Events";
import Faq from "@/components/home/Faq";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import VisionAndMission from "@/components/home/Visions";

export default function Home() {
  return (
    <>
      <section className="px-[0.875rem] py-[1.8125rem] lg:px-20 lg:py-[1.375rem]">
        <Hero />
      </section> 

      <section className="px-[0.875rem] py-[1.8125rem] lg:px-20 lg:pt-28">
        <Achievements />
      </section>

      <section className="px-7 pt-8 lg:px-20 lg:pt-28">
        <VisionAndMission />
      </section>

      {/* <img src="/Vector.png" alt="some background svg" className="absolute -z-10"/> */}
      <section className="px-7 pt-8 lg:px-20 lg:pt-28">
        <Events />
      </section>

      {/* <img src="/faq-bg.svg" alt="some background svg" className="absolute -z-10"/> */}
      <section className="px-7 pt-8 lg:px-20 lg:pt-28">
        <Faq />
      </section>
      
      <section className="pt-8 lg:pt-28">
        <Footer />
      </section>

    </>
  );
}
