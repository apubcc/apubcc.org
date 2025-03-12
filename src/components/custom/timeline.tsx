export function Timeline() {
	const timelineEvents = [
		{
			title: '50+ Events',
			description: 'Hosting diverse events',
		},
		{
			title: '1000+ Members',
			description: 'Growing community of students ',
		},
		{
			title: '20+ Committees',
			description: 'Dedicated teams working across various domains',
		},
		{
			title: '20+ Partners',
			description: 'Collaborations with industry leaders',
		},
	];

	return (
		<div className="flex justify-center lg:hidden">
			<div className="w-full max-w-4xl">
				<div className="relative">
					{/* Timeline events */}
					{timelineEvents.map((event, index) => (
						<div key={index} className="relative mb-5 last:mb-0 xs:mb-10 sm:mb-16 md:mb-20">
							{/* Animated yellow dots with concentric circles */}
							<div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform">
								{/* Largest circle (r=16) with 0.1 opacity - appears last and stays */}
								<div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 animate-[circle-fade-01_1.5s_ease-in-out_infinite] rounded-full bg-[#FBD954] opacity-0"></div>

								{/* Large circle (r=16) with 0.2 opacity - appears third then fades */}
								<div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 animate-[circle-fade-02_1.5s_ease-in-out_infinite] rounded-full bg-[#FBD954] opacity-0"></div>

								{/* Middle circle (r=12) with 0.5 opacity - appears second then fades */}
								<div className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 animate-[circle-fade-05_1.5s_ease-in-out_infinite] rounded-full bg-[#FBD954] opacity-0"></div>

								{/* Smallest circle (r=8) with full opacity - shows immediately */}
								<div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FBD954] opacity-100"></div>
							</div>

							{/* Content container - alternating left and right */}
							<div className="flex items-center">
								{index % 2 === 0 ? (
									// Left side content (even indices: 0, 2)
									<>
										<div className="flex w-1/2 justify-end pr-6">
											<div className="max-w-xs text-right w-10/12">
												<h3 className="mb-2 text-xl font-bold text-white">{event.title}</h3>
												<p className="text-sm text-white/80">{event.description}</p>
											</div>
										</div>
										<div className="w-1/2"></div>
									</>
								) : (
									// Right side content (odd indices: 1, 3)
									<>
										<div className="w-1/2"></div>
										<div className="w-1/2 pl-6">
											<div className="max-w-xs text-left w-10/12">
												<h3 className="mb-2 text-xl font-bold text-white">{event.title}</h3>
												<p className="text-sm text-white/80">{event.description}</p>
											</div>
										</div>
									</>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
