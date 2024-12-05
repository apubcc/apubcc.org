import Events from "@/components/pages-sections/Events";
import Visions from "@/components/pages-sections/Visions";

export default function Home() {
  return (
    <>
      <section className=" bg-black text-white px-[80px]  ">
        <Visions />
        <Events />
      </section>
    </>
  );
}
