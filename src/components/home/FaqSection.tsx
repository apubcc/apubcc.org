'use client';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

type FaqItem = {
	question: string;
	answer: string;
};

const faqItems: FaqItem[] = [
	{
		question: 'What is APU Blockchain Club & Cryptocurrency Club (APUBCC)?',
		answer:
			'APU Blockchain & Cryptocurrency Club (APUBCC) is a student-run organization at Asia Pacific University (APU) that aims to spread awareness and knowledge about blockchain technology and cryptocurrency. They engage in various activities such as discussions, research, gamification, seminars, workshops, and hackathons to promote understanding and application of blockchain and cryptocurrency.',
	},
	{
		question: 'What activities does APUBCC conduct?',
		answer:
			'APUBCC conducts a range of activities to spread awareness about blockchain and cryptocurrency. This includes discord channels, discussions, research initiatives, gamification, seminars, workshops, hackathons, and possibly more.',
	},
	{
		question: 'What are the benefits of joining APUBCC?',
		answer:
			'By joining APUBCC, members can gain insights and knowledge about blockchain and cryptocurrency through various interactive activities and discussions. It provides a platform to connect with like-minded individuals and participate in events that can enhance understanding and skills in the blockchain and cryptocurrency domain.',
	},
	{
		question: "How can I stay updated with APUBCC's activities?",
		answer:
			"You can stay updated with the APUBCC's activities by following our social media accounts on Facebook, Twitter, Instagram, LinkedIn, and YouTube. You can also join our Discord server to stay updated with our activities and events.",
	},
];

export default function FaqSection() {
	return (
		<section id="faq" className="container mt-[4rem] sm:mt-[6rem] lg:flex lg:gap-[3rem]">
			<div className="flex flex-col gap-[1rem]">
				<div
					className="w-[6.25rem] h-[0.1875rem] rounded-full lg:w-[10rem] lg:h-[0.3rem]"
					style={{
						background: 'linear-gradient(90deg, #F9C646 0%, #F8A02A 100%)',
					}}
				/>
				<h2 className="text-[1.375rem] font-black lg:text-[2.375rem]">
					Frequently Asked Questions
				</h2>
				<p className="text-sm lg:text-xl">Answer to some question you might have</p>
			</div>

			<main className="z-10 lg:w-[70%]">
				<Accordion type="single" collapsible>
					{faqItems.map((item, index) => (
						<AccordionItem key={index} value={`item-${index}`} className="px-4">
							<AccordionTrigger className="font-black lg:text-2xl">
								{item.question}
							</AccordionTrigger>
							<AccordionContent className="lg:text-base">{item.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</main>
		</section>
	);
}
