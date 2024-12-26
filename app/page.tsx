import Achievements from "@/components/pages-sections/Achievements";
import Events from "@/components/pages-sections/Events";
import Faq from "@/components/pages-sections/Faq";
import Footer from "@/components/pages-sections/Footer";
import Hero from "@/components/pages-sections/Hero";
import Visions from "@/components/pages-sections/Visions";

export default function Home() {
  return (
    <>
      <section className="px-[0.875rem] py-[1.8125rem] lg:px-20 lg:py-[1.375rem]">
        <Hero />
      </section> 

      <section className="px-[0.875rem] py-[1.8125rem] lg:px-20 lg:pt-28">
        <Achievements />
      </section>

      {/* <section className="px-20 pt-28">
        <Visions />
      </section> */}

      {/* <img src="/Vector.png" alt="some background svg" className="absolute -z-10"/>
      <section className="px-20 pt-28">
        <Events />
      </section> */}

      {/* <img src="/faq-bg.svg" alt="some background svg" className="absolute -z-10"/>
      <section className="pt-28 px-20">
        <Faq />
      </section> */}
      
      {/* <section className="pt-28">
        <Footer />
      </section> */}

    </>
  );
}
