import Events from "@/components/pages-sections/Events";
import Hero from "@/components/pages-sections/Hero";
import Visions from "@/components/pages-sections/Visions";

export default function Home() {
  return (
    <>
      <section className="px-[5rem] py-[1.375rem]">
        <Hero />
      </section> 
      <section className=" bg-black text-white px-[80px]  ">
        <Visions />
        <Events />
      </section>
    </>
  );
}
