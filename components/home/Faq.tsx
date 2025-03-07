import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    title: "What is APU Blockchain Club & Cryptocurrency Club (APUBCC)?",
    description:
      "APU Blockchain & Cryptocurrency Club (APUBCC) is a student-run organization at Asia Pacific University (APU) that aims to spread awareness and knowledge about blockchain technology and cryptocurrency. They engage in various activities such as discussions, research, gamification, seminars, workshops, and hackathons to promote understanding and application of blockchain and cryptocurrency.",
  },
  {
    title: "What activities does APUBCC conduct?",
    description:
      "APUBCC conducts a range of activities to spread awareness about blockchain and cryptocurrency. This includes discord channels, discussions, research initiatives, gamification, seminars, workshops, hackathons, and possibly more.",
  },
  {
    title: "What are the benefits of joining APUBCC?",
    description:
      "By joining APUBCC, members can gain insights and knowledge about blockchain and cryptocurrency through various interactive activities and discussions. It provides a platform to connect with like-minded individuals and participate in events that can enhance understanding and skills in the blockchain and cryptocurrency domain.",
  },
  {
    title: "How can I stay updated with APUBCC's activities?",
    description:
      "You can stay updated with the APUBCC's activities by following our social media accounts on Facebook, Twitter, Instagram, LinkedIn, and YouTube. You can also join our Discord server to stay updated with our activities and events.",
  },
];

export default function Faq() {
  return (
    <main className="flex flex-col justify-center gap-7 desktop:flex-row desktop:gap-[5.6875rem]">
      <section className="">
        <hr className="mb-[1.3125rem] h-[0.1875rem] w-[6.25rem] bg-gradient-to-r from-[#F9C646] to-[#F8A02A] desktop:w-[11.875rem]" />

        <h2 className="text-[1.375rem] font-black text-white desktop:text-[2.375rem]">
          Frequently Asked Question
        </h2>
        <p className="text-[0.8125rem] font-semibold text-white desktop:text-[1.3125rem]">
          Answer to some question you might have
        </p>
      </section>

      <section className="w-full px-3">
        <Accordion type="single" collapsible className="text-white">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={String(index)}>
              <AccordionTrigger className="text-left text-[0.75rem] font-black desktop:text-[1.5rem]">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-[0.75rem] font-medium desktop:text-[1.25rem]">
                {item.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
}
