import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { AiFillTikTok, AiFillInstagram } from 'react-icons/ai';
import { FaFacebook, FaYoutube } from 'react-icons/fa';

const footerItems = {
	general: [
		{
			title: 'General',
			items: ['Vision & Mission', 'Partners', 'Our Team', 'FAQ', 'Contact Us'],
			link: ['/#vision-mission', '/partners', '/#our-team', '/#faq', '/contact-us'],
		},
	],
	resources: [
		{
			title: 'Resources',
			items: ['Substack', 'GitHub', 'Job Board'],
			link: [
				'https://apubcc.substack.com/',
				'https://github.com/apubcc',
				'https://jobs.apubcc.org',
			],
		},
	],
};

const Icons = [
	{
		icon: <FaLinkedin className="h-5 w-5" color="black" />,
		link: 'https://linkedin.com/company/apubcc',
	},
	{
		icon: <AiFillTikTok className="h-5 w-5" color="black" />,
		link: 'https://tiktok.com/@apubcc',
	},
	{
		icon: <FaFacebook className="h-5 w-5" color="black" />,
		link: 'https://facebook.com/apubcc',
	},
	{
		icon: <AiFillInstagram className="h-5 w-5" color="black" />,
		link: 'https://instagram.com/apubcc',
	},
	{
		icon: <FaYoutube className="h-5 w-5" color="black" />,
		link: 'https://youtube.com/@apubcc',
	},
	{
		icon: <FaXTwitter className="h-5 w-5" color="black" />,
		link: 'https://twitter.com/apubcc',
	},
];

export default function Footer() {
	return (
		<>
			<FooterDesktop />
			<FooterMobile />
		</>
	);
}

function FooterDesktop() {
	return (
		<footer
			className="mt-12 hidden -mx-4 sm:-mx-6 sm:px-6 lg:-mx-[5rem] lg:px-[5rem] xl:-mx-[10rem] xl:px-[10rem] min-[1440px]:-mx-[15rem] min-[1440px]:px-[15rem] 2xl:-mx-[20rem] 2xl:px-[20rem] 3xl:-mx-[25rem] 3xl:px-[25rem] px-4 py-[1.5rem] h-[90svh] flex-col justify-end sm:mt-0 w-screen lg:flex lg:items-end lg:h-[60svh]"
			style={{
				background: 'linear-gradient(180deg, rgba(238, 145, 89, 0.00) 17.28%, #F16007 74.52%)',
			}}
		>
			<main className="flex gap-5 flex-col pt-[1.875rem] lg:grid lg:grid-cols-4 lg:gap-10 lg:w-full lg:pb-10">
				<div className="sm:w-1/2 lg:w-full lg:h-[6.875rem] lg:col-span-2 lg:flex lg:flex-col lg:gap-10">
					<div className="bg-black rounded-2xl w-[20.375rem] h-[6.875rem]">
						<img
							src="/apubcc-horizontal.png"
							alt="logo"
							className="w-full h-full object-contain"
						/>
					</div>
					<p className="w-2/3">For collaboration please contact info@apubcc.org</p>

					<div className="flex gap-2">
						{Icons.map((icon) => (
							<div key={icon.link} className="rounded-full w-[2rem] h-[2rem] relative">
								<a
									href={icon.link}
									className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#FF2200]"
									target="_blank"
									rel="noopener noreferrer"
								>
									{icon.icon}
								</a>
							</div>
						))}
					</div>
				</div>
				{Object.entries(footerItems).map(([key, items]) => (
					<div key={key} className="lg:pt-10 lg:flex lg:flex-col lg:items-end">
						{items.map((item, index) => (
							<div key={index} className="lg:flex lg:flex-col lg:gap-6">
								<h1 className="text-[#FF2200] text-xl font-bold lg:text-2xl">{item.title}</h1>
								<ul className="flex flex-col gap-2">
									{item.items.map((i) => (
										<li key={i} className="text-sm font-bold lg:text-base">
											<a href={item.link[index]} target="_blank" rel="noopener noreferrer">
												{i}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				))}
			</main>
		</footer>
	);
}

function FooterMobile() {
	return (
		<footer
			className="mt-12 -mx-4 sm:-mx-6 sm:px-6 lg:-mx-[5rem] lg:px-[5rem] xl:-mx-[10rem] xl:px-[10rem] min-[1440px]:-mx-[15rem] min-[1440px]:px-[15rem] 2xl:-mx-[20rem] 2xl:px-[20rem] 3xl:-mx-[25rem] 3xl:px-[25rem] px-4 py-[1.5rem] h-[90svh] flex flex-col justify-end sm:mt-0 w-screen lg:hidden"
			style={{
				background: 'linear-gradient(180deg, rgba(238, 145, 89, 0.00) 17.28%, #F16007 74.52%)',
			}}
		>
			<div className="bg-black rounded-2xl w-2/3 sm:w-1/2 lg:w-1/2 lg:h-[6.875rem]">
				<img src="/apubcc-horizontal.png" alt="logo" className="w-full h-full object-contain" />
			</div>

			<main className="flex gap-5 flex-col pt-[1.875rem] lg:flex-row">
				{Object.entries(footerItems).map(([key, items]) => (
					<div key={key}>
						{items.map((item, index) => (
							<div key={index}>
								<h1 className="text-[#FF2200] text-xl font-bold">{item.title}</h1>
								<ul className="flex flex-col gap-2">
									{item.items.map((item) => (
										<li key={item} className="text-sm font-bold">
											{item}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				))}

				<p className="">For collaboration please contact info@apubcc.org</p>

				<div className="flex gap-2">
					{Icons.map((icon) => (
						<div key={icon.link} className="rounded-full w-[2rem] h-[2rem] relative">
							<a
								href={icon.link}
								className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#FF2200]"
								target="_blank"
								rel="noopener noreferrer"
							>
								{icon.icon}
							</a>
						</div>
					))}
				</div>
			</main>
		</footer>
	);
}
