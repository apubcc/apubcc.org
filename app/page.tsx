import Achievements from "@/components/home/Achievements";
import Events from "@/components/home/Events";
import Faq from "@/components/home/Faq";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import VisionAndMission from "@/components/home/VisionsMissions";
import ResourcesPage from "./(main)/resources/page";

export default function Home() {
  return (
    <>
      {/* <section className="px-[0.875rem] py-[1.8125rem] md:px-20 lg:py-[1.375rem] max-w-6xl mx-auto">
        <Hero />
      </section> 

      <section className="px-[0.875rem] py-[1.8125rem] md:py-24 lg:px-20 lg:pt-28 max-w-6xl mx-auto">
        <Achievements />
      </section>

      <section className="px-7 pt-8 md:px-20 md:pt-28 max-w-6xl mx-auto">
        <VisionAndMission />
      </section>

      <img src="/Vector.png" alt="some background svg" className="absolute -z-10"/>
      <section className="px-7 pt-8 md:px-20 md:pt-28 max-w-6xl mx-auto">
        <Events />
      </section>

      <img src="/faq-bg.svg" alt="some background svg" className="absolute -z-10"/>
      <section className="px-7 pt-8 md:px-20 md:pt-28 max-w-6xl mx-auto">
        <Faq />
      </section>
      
      <section className="pt-8 md:pt-20 lg:pt-28 max-w-6xl mx-auto">
        <Footer />
      </section> */}
      
      <ResourcesPage/>
    </>
  );
}
