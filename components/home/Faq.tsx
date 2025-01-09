import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    title: "What is APU Blockchain Club & Cryptocurrency Club (APUBCC)?",
    description: "APU Blockchain & Cryptocurrency Club (APUBCC) is a student-run organization at Asia Pacific University (APU) that aims to spread awareness and knowledge about blockchain technology and cryptocurrency. They engage in various activities such as discussions, research, gamification, seminars, workshops, and hackathons to promote understanding and application of blockchain and cryptocurrency."
  },
  {
    title: "What activities does APUBCC conduct?",
    description: "APUBCC conducts a range of activities to spread awareness about blockchain and cryptocurrency. This includes discord channels, discussions, research initiatives, gamification, seminars, workshops, hackathons, and possibly more."
  },
  {
    title: "What are the benefits of joining APUBCC?",
    description: "By joining APUBCC, members can gain insights and knowledge about blockchain and cryptocurrency through various interactive activities and discussions. It provides a platform to connect with like-minded individuals and participate in events that can enhance understanding and skills in the blockchain and cryptocurrency domain."
  },
  {
    title: "How can I stay updated with APUBCC's activities?",
    description: "You can stay updated with the APUBCC's activities by following our social media accounts on Facebook, Twitter, Instagram, LinkedIn, and YouTube. You can also join our Discord server to stay updated with our activities and events."
  }
]

export default function Faq() {
  return (
    <main className="flex justify-center flex-col lg:flex-row gap-7 lg:gap-[5.6875rem]">
      <section className="">
        <hr className="mb-[1.3125rem] bg-gradient-to-r from-[#F9C646] to-[#F8A02A] w-[6.25rem] lg:w-[11.875rem] h-[0.1875rem]"/>

        <h2 className="text-[1.375rem] lg:text-[2.375rem] font-black text-white">Frequently Asked Question</h2>
        <p className="text-white text-[0.8125rem] lg:text-[1.3125rem] font-semibold">Answer to some question you might have</p>
      </section>

      <section className="w-full h-[19.875rem]">
        <Accordion type="single" collapsible className="text-white">
          {
            faqItems.map((item, index) => (
              <AccordionItem key={index} value={String(index)}>
                <AccordionTrigger className="font-black text-[0.75rem] text-left lg:text-[1.5rem]">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="font-medium text-[0.75rem] lg:text-[1.25rem]">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))
          }
        </Accordion>
      </section>
    </main>
  )
}