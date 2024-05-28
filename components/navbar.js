let dropdownIndex = 0;
class NavbarComponent extends HTMLElement {
	connectedCallback() {
		let bgColor = this.getAttribute('bgColor');
		let textColor = this.getAttribute('textColor');
		let fixed = this.getAttribute('fixed');

		const navItems = [
			{
				name: 'Store',
				url: 'store.html',
				dropdown: [
					{
						category: 'Shop',
						items: [
							'Shop the Latest',
							'Mac',
							'iPad',
							'iPhone',
							'Apple Watch',
							'Apple Vision Pro',
							'Accessories',
						],
						compare: 'Compare your Mac',
						why: 'Why not Mac',
					},
					{
						category: 'Quick Links',
						items: [
							'Find a Store',
							'Order Status',
							'Apple Trade In',
							'Financing',
						],
					},
					{
						category: 'Shop Special Stores',
						items: [
							'Certified Refurbished',
							'Education',
							'Business',
							'Veterans and Military',
							'Government',
						],
					},
				],
			},
			{
				name: 'Mac',
				url: 'mac.html',
				dropdown: [
					{
						category: 'Shop',
						items: [
							'Shop the Latest',
							'Mac',
							'iPad',
							'iPhone',
							'Apple Watch',
							'Apple Vision Pro',
							'Accessories',
						],
						compare: 'Compare Mac',
						why: 'What Mac Does?',
					},
					{
						category: 'Quick Links',
						items: [
							'Find a Store',
							'Order Status',
							'Apple Trade In',
							'Financing',
						],
					},
					{
						category: 'Shop Special Stores',
						items: [
							'Certified Refurbished',
							'Education',
							'Business',
							'Veterans and Military',
							'Government',
						],
					},
				],
			},
			{
				name: 'iPad',
				url: 'ipad.html',
				dropdown: [
					{
						category: 'Shop',
						items: [
							'Shop the Latest',
							'Mac',
							'iPad',
							'iPhone',
							'Apple Watch',
							'Apple Vision Pro',
							'Accessories',
						],
					},
					{
						category: 'Quick Links',
						items: [
							'Find a Store',
							'Order Status',
							'Apple Trade In',
							'Financing',
						],
					},
					{
						category: 'Shop Special Stores',
						items: [
							'Certified Refurbished',
							'Education',
							'Business',
							'Veterans and Military',
							'Government',
						],
					},
				],
			},
			{
				name: 'iPhone',
				url: 'iphone.html',
				dropdown: [
					{
						category: 'Shop',
						items: [
							'Shop the Latest',
							'Mac',
							'iPad',
							'iPhone',
							'Apple Watch',
							'Apple Vision Pro',
							'Accessories',
						],
					},
					{
						category: 'Quick Links',
						items: [
							'Find a Store',
							'Order Status',
							'Apple Trade In',
							'Financing',
						],
					},
					{
						category: 'Shop Special Stores',
						items: [
							'Certified Refurbished',
							'Education',
							'Business',
							'Veterans and Military',
							'Government',
						],
					},
				],
			},
			{
				name: 'Watch',
				url: 'watch.html',
				dropdown: [
					{
						category: 'Shop',
						items: [
							'Shop the Latest',
							'Mac',
							'iPad',
							'iPhone',
							'Apple Watch',
							'Apple Vision Pro',
							'Accessories',
						],
					},
					{
						category: 'Quick Links',
						items: [
							'Find a Store',
							'Order Status',
							'Apple Trade In',
							'Financing',
						],
					},
					{
						category: 'Shop Special Stores',
						items: [
							'Certified Refurbished',
							'Education',
							'Business',
							'Veterans and Military',
							'Government',
						],
					},
				],
			},
			{
				name: 'Vision',
				url: 'vision.html',
				dropdown: [
					{
						category: 'Shop',
						items: [
							'Shop the Latest',
							'Mac',
							'iPad',
							'iPhone',
							'Apple Watch',
							'Apple Vision Pro',
							'Accessories',
						],
					},
					{
						category: 'Quick Links',
						items: [
							'Find a Store',
							'Order Status',
							'Apple Trade In',
							'Financing',
						],
					},
					{
						category: 'Shop Special Stores',
						items: [
							'Certified Refurbished',
							'Education',
							'Business',
							'Veterans and Military',
							'Government',
						],
					},
				],
			},
			{
				name: 'AirPods',
				url: 'airpods.html',
				dropdown: [
					{
						category: 'Shop',
						items: [
							'Shop the Latest',
							'Mac',
							'iPad',
							'iPhone',
							'Apple Watch',
							'Apple Vision Pro',
							'Accessories',
						],
					},
					{
						category: 'Quick Links',
						items: [
							'Find a Store',
							'Order Status',
							'Apple Trade In',
							'Financing',
						],
					},
					{
						category: 'Shop Special Stores',
						items: [
							'Certified Refurbished',
							'Education',
							'Business',
							'Veterans and Military',
							'Government',
						],
					},
				],
			},
			{
				name: 'TV & Home',
				url: 'tvhome.html',
				dropdown: [
					{
						category: 'Shop',
						items: [
							'Shop the Latest',
							'Mac',
							'iPad',
							'iPhone',
							'Apple Watch',
							'Apple Vision Pro',
							'Accessories',
						],
					},
					{
						category: 'Quick Links',
						items: [
							'Find a Store',
							'Order Status',
							'Apple Trade In',
							'Financing',
						],
					},
					{
						category: 'Shop Special Stores',
						items: [
							'Certified Refurbished',
							'Education',
							'Business',
							'Veterans and Military',
							'Government',
						],
					},
				],
			},
			{
				name: 'Entertainment',
				url: 'entertainment.html',
				dropdown: [
					{
						category: 'Shop',
						items: [
							'Shop the Latest',
							'Mac',
							'iPad',
							'iPhone',
							'Apple Watch',
							'Apple Vision Pro',
							'Accessories',
						],
					},
					{
						category: 'Quick Links',
						items: [
							'Find a Store',
							'Order Status',
							'Apple Trade In',
							'Financing',
						],
					},
					{
						category: 'Shop Special Stores',
						items: [
							'Certified Refurbished',
							'Education',
							'Business',
							'Veterans and Military',
							'Government',
						],
					},
				],
			},
			{
				name: 'Accessories',
				url: 'accessories.html',
				dropdown: [
					{
						category: 'Shop',
						items: [
							'Shop the Latest',
							'Mac',
							'iPad',
							'iPhone',
							'Apple Watch',
							'Apple Vision Pro',
							'Accessories',
						],
					},
					{
						category: 'Quick Links',
						items: [
							'Find a Store',
							'Order Status',
							'Apple Trade In',
							'Financing',
						],
					},
					{
						category: 'Shop Special Stores',
						items: [
							'Certified Refurbished',
							'Education',
							'Business',
							'Veterans and Military',
							'Government',
						],
					},
				],
			},
			{
				name: 'Support',
				url: 'support.html',
				dropdown: [
					{
						category: 'Shop',
						items: [
							'Shop the Latest',
							'Mac',
							'iPad',
							'iPhone',
							'Apple Watch',
							'Apple Vision Pro',
							'Accessories',
						],
					},
					{
						category: 'Quick Links',
						items: [
							'Find a Store',
							'Order Status',
							'Apple Trade In',
							'Financing',
						],
					},
					{
						category: 'Shop Special Stores',
						items: [
							'Certified Refurbished',
							'Education',
							'Business',
							'Veterans and Military',
							'Government',
						],
					},
				],
			},
		];

		let dropdownHTML = '';

		if (navItems.length > 0) {
			let firstNavItem = navItems[dropdownIndex];
			dropdownHTML = firstNavItem.dropdown
				.map((item, index) => {
					if (index === 0) {
						return `
							<ul class="text-xl font-semibold flex flex-col gap-2">
								<li class="font-light text-xs text-gray-500 my-1">${item.category}</li>
								${item.items
									.map(
										(link) =>
											`<li class=""><a href="../pages/${link.toLowerCase()}.html">${link}</a></li>`
									)
									.join('')}
								<li class="mt-3 text-xs ">${item.compare}</li>
								<li class="text-xs ">${item.why}</li>
							</ul>
						`;
					} else {
						return `
							<div class="flex items-start gap-8">
								<ul class="text-xs font-semibold flex flex-col gap-2">
									<li class="font-light text-gray-500 my-3">${item.category}</li>
									${item.items.map((link) => `<li><a href="${link}">${link}</a></li>`).join('')}
								</ul>
							</div>
						`;
					}
				})
				.join('');
		}

		let navHTML = navItems
			.map(
				(item) => `
            <li id="hover-btn">
                  <a class="py-3 text-${textColor}/80 hover:text-${textColor}" href="../pages/${item.url}">${item.name}</a>
            </li>
         `
			)
			.join('');

		this.innerHTML = `
         <nav id="navbar-container"
			class=" w-full  ${
				fixed ? fixed : 'fixed'
			} py-2 top-0 left-0 bg-${bgColor}/90 text-black backdrop-blur-sm z-[999] border-b shadow-sm border-${bgColor} duration-500 transition-all ease-in-out overflow-hidden text-${textColor} ">
            <div
               class="max-w-[1100px] mx-auto px-6 flex items-center justify-between"
            >
               <div class="flex items-center justify-between w-full text-xs gap-6">
                 <div>
                     <a href="../index.html">
                     <svg class="size-5" width="800px" height="800px" viewBox="-1.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
                     <title>apple [#173]</title>
                     <desc>Created with Sketch.</desc>
                     <defs>
                 
                 </defs>
                     <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                         <g id="Dribbble-Light-Preview" transform="translate(-102.000000, -7439.000000)" fill="${textColor}">
                             <g id="icons" transform="translate(56.000000, 160.000000)">
                                 <path d="M57.5708873,7282.19296 C58.2999598,7281.34797 58.7914012,7280.17098 58.6569121,7279 C57.6062792,7279.04 56.3352055,7279.67099 55.5818643,7280.51498 C54.905374,7281.26397 54.3148354,7282.46095 54.4735932,7283.60894 C55.6455696,7283.69593 56.8418148,7283.03894 57.5708873,7282.19296 M60.1989864,7289.62485 C60.2283111,7292.65181 62.9696641,7293.65879 63,7293.67179 C62.9777537,7293.74279 62.562152,7295.10677 61.5560117,7296.51675 C60.6853718,7297.73474 59.7823735,7298.94772 58.3596204,7298.97372 C56.9621472,7298.99872 56.5121648,7298.17973 54.9134635,7298.17973 C53.3157735,7298.17973 52.8162425,7298.94772 51.4935978,7298.99872 C50.1203933,7299.04772 49.0738052,7297.68074 48.197098,7296.46676 C46.4032359,7293.98379 45.0330649,7289.44985 46.8734421,7286.3899 C47.7875635,7284.87092 49.4206455,7283.90793 51.1942837,7283.88393 C52.5422083,7283.85893 53.8153044,7284.75292 54.6394294,7284.75292 C55.4635543,7284.75292 57.0106846,7283.67793 58.6366882,7283.83593 C59.3172232,7283.86293 61.2283842,7284.09893 62.4549652,7285.8199 C62.355868,7285.8789 60.1747177,7287.09489 60.1989864,7289.62485" id="apple-[#173]">
                 
                 </path>
                             </g>
                         </g>
                     </g>
                 </svg>
                     </a>
                  </div>
                  <ul class="md:flex justify-between items-center mt-1 w-full hidden">
                     ${navHTML}
                  </ul>
                  <div class="flex gap-4">
                     <button>
                        <span
                           class="material-symbols-outlined text-[20px] text-${textColor}/80 hover:text-${textColor}"
                        >
                           search
                        </span>
                     </button>

                     <button>
                        <span
                           class="material-symbols-outlined text-[20px] text-${textColor}/80 hover:text-${textColor}"
                        >
                           shopping_bag
                        </span>
                     </button>

                     <button class="md:hidden flex relative items-center z-[110]" id="menu-btn">
                        <svg id="open-icon" class="size-7" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M20 7L4 7" stroke="${textColor}" stroke-width="1.5" stroke-linecap="round"/>
                           <path d="M20 12L4 12" stroke="${textColor}" stroke-width="1.5" stroke-linecap="round"/>
                           <path d="M20 17L4 17" stroke="${textColor}" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>

                        <svg id="close-icon" class="size-7 hidden" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect width="24" height="24" fill="none"/>
                           <path d="M7 17L16.8995 7.10051" stroke="${textColor}" stroke-linecap="round" stroke-linejoin="round"/>
                           <path d="M7 7.00001L16.8995 16.8995" stroke="${textColor}" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                     </button>
                  
                  </div>
               </div>
            </div>

            

            <!-- Store dropdown container -->
            <div id="dropdown-list" class="w-full  fixed opacity-0 pointer-events-none top-9 pt-8 pb-16 -translate-y-4 duration-300">
               <div class="max-w-[1100px] px-6 mx-auto flex flex-wrap gap-x-20 gap-y-10 text-${textColor}/80">
                  ${dropdownHTML}
               </div>
            </div>
         </nav>

         <!-- Overlay background -->
         <div
            id="overlay-bg"
            class="z-[50] fixed top-0 left-0 right-0 opacity-0 pointer-events-none bottom-0 w-full h-screen bg-${bgColor}/60 backdrop-blur-lg duration-500"
         ></div>

                  <!-- Responsive hamburger list -->
						<div
							id="menu-list"
							class="fixed md:hidden  top-0 left-0 w-full h-0 bg-${bgColor} z-[101]  bg-${bgColor} origin-top duration-500 backdrop-blur-md"
						>
							<div
								class="text-${textColor} px-12 flex flex-col mt-14 text-2xl gap-3 font-semibold opacity-0 pointer-events-none duration-500"
								id="list-container"
							>
								${navItems
									.map(
										(item) => `
									<a href="../pages/${item.url}" class="flex items-center justify-between group">
										${item.name}
										<span class="material-symbols-outlined group-hover:block hidden">
											chevron_right
										</span>
									</a>
								`
									)
									.join('')}
							</div>
						</div>

      `;
	}
}

customElements.define('navbar-component', NavbarComponent);
let menuBtn = document.getElementById('menu-btn');
let menuList = document.getElementById('menu-list');
let listContainer = document.getElementById('list-container');
let closeIcon = document.getElementById('close-icon');
let openIcon = document.getElementById('open-icon');

menuBtn.addEventListener('click', () => {
	menuList.classList.toggle('h-screen');
	listContainer.classList.toggle('opacity-100');
	listContainer.classList.toggle('pointer-events-auto');
	closeIcon.classList.toggle('hidden');
	openIcon.classList.toggle('hidden');
});

let hoverMenuBtns = document.querySelectorAll('#hover-btn');

let navbarContainer = document.querySelector('#navbar-container');
let dropdownList = document.querySelector('#dropdown-list');
let overlayBg = document.querySelector('#overlay-bg');

hoverMenuBtns.forEach((hoverBtn, index) => {
	hoverBtn.addEventListener('mouseenter', () => {
		navbarContainer.classList.remove('h-10');
		navbarContainer.classList.add('h-[500px]');
		dropdownIndex = index;

		overlayBg.classList.add('pointer-events-auto');
		overlayBg.classList.add('opacity-100');
		dropdownList.classList.remove('pointer-events-none');
		dropdownList.classList.remove('opacity-0');
		dropdownList.classList.remove('-translate-y-4');
		dropdownList.classList.add('pointer-events-auto');
		dropdownList.classList.add('opacity-100');
		dropdownList.classList.add('-translate-y-0');
	});
	navbarContainer.addEventListener('mouseleave', () => {
		navbarContainer.classList.add('h-10');
		navbarContainer.classList.remove('h-[500px]');

		overlayBg.classList.remove('pointer-events-auto');
		overlayBg.classList.remove('opacity-100');
		dropdownList.classList.add('pointer-events-none');
		dropdownList.classList.add('opacity-0');
		dropdownList.classList.add('-translate-y-4');
		dropdownList.classList.remove('pointer-events-auto');
		dropdownList.classList.remove('opacity-100');
		dropdownList.classList.remove('-translate-y-0');
	});
});
