const footerLinks = [
	[
		{
			title: 'Shop and Learn',
			links: [
				'Store',
				'Mac',
				'iPad',
				'iPhone',
				'Watch',
				'Vision',
				'AirPods',
				'TV & Home',
				'AirTag',
				'Accessories',
				'Gift Cards',
			],
		},
		{
			title: 'Apple Wallet',
			links: ['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash'],
		},
	],
	[
		{
			title: 'Account',
			links: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com'],
		},
		{
			title: 'Entertainment',
			links: [
				'Apple One',
				'Apple TV+',
				'Apple Music',
				'Apple Arcade',
				'Apple Fitness+',
				'Apple News+',
				'Apple Podcasts',
				'Apple Books',
				'App Store',
				'Apple Store',
			],
		},
	],
	[
		{
			title: 'Apple Store',
			links: [
				'Find a Store',
				'Genius Bar',
				'Today at Apple',
				'Group Reservations',
				'Apple Camp',
				'Apple Store App',
				'Certified Refurbished',
				'Apple Trade In',
				'Financing',
				'Carrier Deals at Apple',
				'Order Status',
				'Shopping Help',
			],
		},
	],

	[
		{
			title: 'For Business',
			links: ['Apple and Business', 'Shop for Business'],
		},
		{
			title: 'For Education',
			links: ['Apple and Education', 'Shop for K-12', 'Shop for College'],
		},
		{
			title: 'For Healthcare',
			links: [
				'Apple in Healthcare',
				'Health on Apple Watch',
				'Health Records on iPhone',
			],
		},
		{
			title: 'For Government',
			links: ['Shop for Government', 'Shop for Veterans and Military'],
		},
	],
	[
		{
			title: 'Apple Values',
			links: [
				'Accessibility',
				'Education',
				'Environment',
				'Inclusion and Diversity',
				'Privacy',
				'Racial Equity and Justice',
				'Supply Chain',
			],
		},
		{
			title: 'About Apple',
			links: [
				'Newsroom',
				'Apple Leadership',
				'Career Opportunities',
				'Investors',
				'Ethics & Compliance',
				'Events',
				'Contact Apple',
			],
		},
	],
];

const createFooterComponent = () => {};

class FooterComponent extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
      <footer class="bg-[#fbfbfb] mt-20">
				<div class="max-w-[1100px] mx-auto px-6 py-10 text-xs text-black/50">
					<div class="flex flex-col gap-3">
						<p>
							1. Trade-in values will vary based on the condition, year, and
							configuration of your eligible trade-in device. Not all devices are
							eligible for credit. You must be at least 18 years old to be
							eligible to trade in for credit or for an Apple Gift Card. Trade-in
							value may be applied toward qualifying new device purchase, or added
							to an Apple Gift Card. Actual value awarded is based on receipt of a
							qualifying device matching the description provided when estimate
							was made. Sales tax may be assessed on full value of a new device
							purchase. In-store trade-in requires presentation of a valid photo
							ID (local law may require saving this information). Offer may not be
							available in all stores, and may vary between in-store and online
							trade-in. Some stores may have additional requirements. Apple or its
							trade-in partners reserve the right to refuse or limit quantity of
							any trade-in transaction for any reason. More details are available
							from Apple’s trade-in partner for trade-in and recycling of eligible
							devices. Restrictions and limitations may apply.
						</p>
						<p>
							Available in the U.S. on
							<span class="underline text-black"><a href="">apple.com</a></span
							>, in the Apple Store app, and at Apple Stores.
						</p>
						<p>
							To access and use all Apple Card features and products available
							only to Apple Card users, you must add Apple Card to Wallet on an
							iPhone or iPad that supports and has the latest version of iOS or
							iPadOS. Apple Card is subject to credit approval, available only for
							qualifying applicants in the United States, and issued by Goldman
							Sachs Bank USA, Salt Lake City Branch.
						</p>
						<p>
							If you reside in the U.S. territories, please call Goldman Sachs at
							877-255-5923 with questions about Apple Card.
						</p>
						<p>
							Learn more about how Apple Card applications are evaluated at
							<span class="underline text-black"
								><a href="">support.apple.com/kb/HT209218</a></span
							>.
						</p>
						<p>A subscription is required for Apple TV+.</p>
						<p>
							A subscription is required for Apple Arcade, Apple Fitness+, and
							Apple Music.
						</p>
					</div>
					<hr class="my-6" />
					<div class="grid-cols-5 hidden lg:grid gap-4">
						<!-- Loop through each column -->
						${footerLinks
							.map((column) => {
								return `
									<div class="flex flex-col gap-6 text-black/60">
										<!-- Loop through each list in the column -->
										${column
											.map((list) => {
												return `
													<ul class="flex flex-col gap-2">
														<li><p class="text-black">${list.title}</p></li>
														<!-- Loop through each link in the list and convert to lowercase -->
														${list.links
															.map((link) => {
																return `<li><a href="../pages/${link.toLowerCase()}.html" class="hover:underline">${link}</a></li>`;
															})
															.join('')}
													</ul>
											`;
											})
											.join('')}
									</div>
							`;
							})
							.join('')}
					</div>

					<!-- Accordion component -->
					<div class="divide-y divide-gray-300 lg:hidden">
						<!-- Accordion items -->
						<div x-data="{ expandedIndex: null }" class="py-2">
							${footerLinks
								.map((section, index) => {
									const sectionId = `faqs-title-${index + 1}`;
									const regionId = `faqs-text-${index + 1}`;
									return `
											<h2>
												<button
														id="${sectionId}"
														type="button"
														class="flex items-center justify-between w-full text-left font-semibold py-2"
														@click="expandedIndex = (expandedIndex === ${index} ? null : ${index})"
														:aria-expanded="expandedIndex === ${index}"
														:aria-controls="'${regionId}'"
												>
														<span class="text-xs font-normal text-black">${section[0].title}</span>
														<svg
															class="shrink-0 ml-8"
															width="16"
															height="16"
															xmlns="http://www.w3.org/2000/svg"
														>
															<rect
																y="7"
																width="16"
																height="2"
																rx="1"
																class="transform origin-center transition duration-200 ease-out"
																:class="{'!rotate-180': expandedIndex === ${index}}"
															/>
															<rect
																y="7"
																width="16"
																height="2"
																rx="1"
																class="transform origin-center rotate-90 transition duration-200 ease-out"
																:class="{'!rotate-180': expandedIndex === ${index}}"
															/>
														</svg>
												</button>
											</h2>
											<div
												id="${regionId}"
												role="region"
												aria-labelledby="${sectionId}"
												class="grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out"
												:class="{ 'grid-rows-[1fr] opacity-100': expandedIndex === ${index}, 'grid-rows-[0fr] opacity-0': expandedIndex !== ${index} }"
											>
												<ul class="px-2 overflow-hidden w-full flex flex-col gap-3 text-xs">
														${section
															.map((subSection) =>
																subSection.links
																	.map(
																		(link) =>
																			`<a href="" class="w-full hover:underline">../pages/${link}</a>`
																	)
																	.join('')
															)
															.join('')}
												</ul>
											</div>
										`;
								})
								.join(' ')}
						</div>
				</div>
				





					<p class="mt-14">
						More ways to shop:
						<span
							><a href="" class="text-blue-500 underline"
								>Find an Apple Store</a
							></span
						>
						or
						<span
							><a href="" class="text-blue-500 underline">other retailer</a></span
						>
						near you. Or call 1-800-MY-APPLE.
					</p>
					<hr class="my-6" />

					<div class="flex lg:flex-row flex-col lg:items-center gap-4 justify-between">
						<p>Copyright © 2024 Apple Inc. All rights reserved.</p>
						<div class="divide-x divide-black flex-1 flex-wrap lg:ml-6">
							<span class="px-1">
								<a href="" class="hover:underline">Privacy</a>
							</span>
							<span class="px-1">
								<a href="" class="hover:underline">Terms of Use</a>
							</span>
							<span class="px-1">
								<a href="" class="hover:underline">Sales and Refunds</a>
							</span>
							<span class="px-1">
								<a href="" class="hover:underline">Legal</a>
							</span>
							<span class="px-1">
								<a href="" class="hover:underline">Site Map</a>
							</span>
						</div>
						<a href="" class="hover:underline">United States</a>
					</div>
				</div>
   		</footer>
      `;
	}
}

customElements.define('footer-component', FooterComponent);
