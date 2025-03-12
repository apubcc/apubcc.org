'use client';

export default function VisionMissionSection() {
	return (
		<section id="vision-mission" className="relative container mt-[4rem] xs:mt-0 sm:h-[70svh]">
			<img src="/vm-bg.svg" alt="vm background" className="w-full h-full hidden lg:block" />
			<article className="flex flex-col gap-[1.875rem] lg:absolute lg:top-[-8rem]">
				<h2 className="text-[#ECD164] text-[1.375rem] font-black lg:text-[2.1875rem]">Vision</h2>
				<div className="relative lg:flex lg:flex-row-reverse lg:justify-between lg:items-end">
					<img
						src="/vision-img.png"
						alt="vision image - picture taken in audi four"
						className="vision h-[7.5625rem] w-[11.9375rem] rounded-2xl ml-3 lg:h-[15rem] lg:w-[23rem] lg:-mr-10"
					/>
					<p className="text-justify lg:text-right lg:w-[43%]">
						To be the leading student hub in Malaysia that gather Web3 talents and empower students
						to contribute their unique skills sets and creativity to the growth of the blockchain
						ecosystem locally and globally. A progressive platform where students ideas are
						exchanged, visions are shared and projects are supported and nurtured by various means.
					</p>
				</div>
			</article>

			<article className="flex flex-col gap-[1.875rem] lg:absolute lg:bottom-[-3rem]">
				<div className="flex justify-between pt-10 pl-5 lg:justify-end">
					<svg
						className="lg:hidden block"
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="18"
						viewBox="0 0 40 18"
						fill="none"
					>
						<rect x="0.5" y="0.5" width="17" height="17" rx="2.5" stroke="#F6AC37" />
						<rect x="29.5" y="5.5" width="10" height="10" rx="2.5" stroke="#F5992B" />
					</svg>
					<h2 className="text-[#EB6701] text-[1.375rem] font-black text-right lg:text-[2.1875rem]">
						Mission
					</h2>
				</div>
				<div className="relative lg:flex lg:justify-between lg:items-end">
					<img
						src="/mission-img.png"
						alt="mission image - picture taken in audi three"
						className="mission h-[7.5625rem] w-[11.9375rem] rounded-2xl mr-3 lg:h-[15rem] lg:w-[23rem] lg:-ml-10"
					/>
					<p className="text-justify lg:text-right lg:w-[43%]">
						To establish a community platform that offers blockchain education, support and
						mentorship that eventually leads to creating more potential use cases of blockchain
						technology. We are building a community with diverse course backgrounds and connecting
						industry partners with students to open more doors. We aim to implement practical
						learning, build significant projects together and educate members with "Gen Z style" of
						modules.
					</p>
				</div>
			</article>
		</section>
	);
}
