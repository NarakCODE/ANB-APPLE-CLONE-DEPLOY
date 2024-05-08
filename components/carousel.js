const createCardHtml = (
	item,
	card,
	cardWidth,
	cardHeight,
	cardDesignClass,
	carouselId
) => {
	switch (carouselId) {
		case '1':
			return `
               <div class="${cardDesignClass} ${card} flex-[0_0_${cardWidth}px] h-[${cardHeight}px] ">
                   <!-- Card content here for carousel 1 ipad -->
                   <img
                       src="${item.imgUrl}"
                       class="w-full h-full object-cover"
                       alt=""
                   />
                   <div class="p-8 absolute left-0 top-0 text-${item.textColor}">
                       <p class="text-xs tracking-wider font-semibold">${item.subTitle}</p>
                       <h2 class="mt-2 font-semibold text-[26px]">${item.title}</h2>
                   </div>
               </div>
           `;
		case '2':
			return `
               <div class=" ${cardDesignClass} ${card} flex-[0_0_${cardWidth}px] h-[${cardHeight}px] ">
						<img src="${item.imgUrl}" class="w-12 object-contain" />
						<h2 class="text-3xl font-semibold max-w-[90%] w-full">${item.title}</h2>
						<h2 class="text-md text-gray-800 max-w-[80%] w-full">${item.subTitle}</h2>

						<button class="absolute right-6 bottom-6 w-10 h-10 bg-black rounded-full text-slate-300 flex items-center justify-center text-2xl">+</button>
						</div>
           `;
		case '3':
			return `
				<div class="${cardDesignClass} ${card} flex-[0_0_${cardWidth}px] h-[${cardHeight}px] ">
					<!-- Card content here for carousel 1 iphone -->
					<img
						src="${item.imgUrl}"
						class="w-full h-full object-cover"
						alt=""
					/>
					<div class="p-8 absolute left-0 top-0 text-${item.textColor}">
						<p class="text-xs tracking-wider font-semibold">${item.subTitle}</p>
						<h2 class="mt-2 font-semibold text-[26px]">${item.title}</h2>
					</div>
				</div>
           `;
		case '4':
			return `
				<div class="${cardDesignClass} ${card} flex-[0_0_${cardWidth}px] h-[${cardHeight}px] ">
					<!-- Card content here for carousel 1 iphone -->
					<img
						src="${item.imgUrl}"
						class="w-full h-full object-cover"
						alt=""
					/>
					<div class="p-8 absolute left-0 top-0 text-${item.textColor}">
						<p class="text-xs tracking-wider font-semibold">${item.subTitle}</p>
						<h2 class="mt-2 font-semibold text-[26px]">${item.title}</h2>
						<p class="mt-2 font-semibold text-[16px]">${item.description}</p>
						
					</div>
				</div>
           `;
		default:
			return '';
	}
};

const createCarouselComponent = (
	carouselConfig,
	containerId,
	cardDesignClass
) => {
	const {
		carouselTitle,
		cardArray,
		sliderContainer,
		slider,
		card,
		prevBtn,
		nextBtn,
		cardWidth,
		cardHeight,
		carouselId,
	} = carouselConfig;

	const container = document.getElementById(containerId);

	container.innerHTML = `
        <div class='mt-10 '>
          <div class="flex items-center relative w-full group">
            <div class="${sliderContainer} relative w-full">
              <div
                class="${slider} flex h-[100%] gap-4 transition-transform duration-[0.5s] ease-[ease] overflow-visible"
              >
                ${cardArray
									.map(
										(item) => ` ${createCardHtml(
											item,
											card,
											cardWidth,
											cardHeight,
											cardDesignClass,
											carouselId
										)}


                `
									)
									.join('')}
              </div>
            </div>

            <button
              id="${prevBtn}"
              class="absolute hidden z-10 scale-[90%] group-hover:scale-[115%] opacity-0 group-hover:opacity-100 duration-500 bg-[#d6d6d68e] hover:bg-[#e3e3e380] text-[white] cursor-pointer w-12 h-12 rounded-full left-[0px] flex items-center justify-center"
            >
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/chevron-right-icon.png"
                alt=""
                class="w-3 rotate-180"
              />
            </button>
            <button
              id="${nextBtn}"
              class="absolute  z-10 scale-[90%] group-hover:scale-[115%] opacity-0 group-hover:opacity-100 duration-500 bg-[#d6d6d68e] hover:bg-[#e3e3e380] text-[white] cursor-pointer w-12 h-12 rounded-full  right-[0px] flex items-center justify-center"
            >
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/chevron-right-icon.png"
                alt=""
                class="w-3"
              />
            </button>
          </div>
        </div>
      `;
};

class CarouselComponent extends HTMLElement {
	connectedCallback() {
		const carouselConfig = JSON.parse(this.getAttribute('carouselConfig'));
		const containerId = this.getAttribute('containerId');
		const cardDesignClass = this.getAttribute('cardDesignClass'); // Check if this value is correct
		createCarouselComponent(carouselConfig, containerId, cardDesignClass);
		this.setupCarousel(carouselConfig);
	}

	setupCarousel(config) {
		const slider = document.querySelector(`.${config.slider}`);
		const cards = document.querySelectorAll(`.${config.card}`);
		const prevBtn = document.getElementById(config.prevBtn);
		const nextBtn = document.getElementById(config.nextBtn);
		let currentIndex = 0;

		function updateSlider() {
			slider.style.transform = `translateX(${
				-currentIndex * (parseInt(config.cardWidth) + 16)
			}px)`;

			prevBtn.classList.toggle('hidden', currentIndex === 0);
			nextBtn.classList.toggle('hidden', currentIndex === cards.length - 1);
		}

		function nextSlide() {
			if (currentIndex < cards.length - 1) {
				currentIndex++;
				updateSlider();
			}
		}

		function prevSlide() {
			if (currentIndex > 0) {
				currentIndex--;
				updateSlider();
			}
		}

		nextBtn.addEventListener('click', nextSlide);
		prevBtn.addEventListener('click', prevSlide);
	}
}

customElements.define('carousel-component', CarouselComponent);

const carouselConfigs = [
	{
		carouselId: '1',
		carouselTitle: 'Carousel 1',
		cardArray: [
			{
				textColor: 'white',
				subTitle: 'Getting Started',
				title: 'Easy to use. Easy to start',
				imgUrl:
					'https://www.apple.com/v/mac/home/bz/images/overview/consider/mac_ease__bvgkz2zdltxy_xlarge.jpg ',
			},
			{
				textColor: 'white',
				subTitle: 'Getting Started 2',
				title: 'Easy to use. Easy to start 2',
				imgUrl:
					'https://www.apple.com/v/mac/home/bz/images/overview/consider/mac_performance__dh5hyac1zf8m_xlarge.jpg',
			},
			{
				textColor: 'black',
				subTitle: 'Getting Started 2',
				title: 'Easy to use. Easy to start 2',
				imgUrl:
					'https://www.apple.com/v/mac/home/bz/images/overview/consider/mac_iphone__gh1tblkt6bqm_xlarge.jpg',
			},
			{
				textColor: 'black',
				subTitle: 'Getting Started 2',
				title: 'Easy to use. Easy to start 2',
				imgUrl:
					'https://www.apple.com/v/mac/home/bz/images/overview/consider/mac_compatibility__cu59oukz81ci_large.jpg',
			},
			{
				textColor: 'white',
				subTitle: 'Getting Started 2',
				title: 'Easy to use. Easy to start 2',
				imgUrl:
					'https://www.apple.com/v/mac/home/bz/images/overview/consider/mac_security__gfwda10khdym_large.jpg',
			},
			{
				textColor: 'black',
				subTitle: 'Getting Started 2',
				title: 'Easy to use. Easy to start 2',
				imgUrl:
					'https://www.apple.com/v/mac/home/bz/images/overview/consider/mac_durability__epiwcuk7zkeq_large.jpg',
			},
			{
				textColor: 'black',
				subTitle: 'Getting Started 2',
				title: 'Easy to use. Easy to start 2',
				imgUrl:
					'https://www.apple.com/v/mac/home/bz/images/overview/consider/mac_values__c9gck9qi4kia_large.jpg',
			},
		],
		sliderContainer: 'slider-container-1',
		slider: 'slider-1',
		card: 'card-1',
		prevBtn: 'prev-btn-1',
		nextBtn: 'next-btn-1',
		cardWidth: '344',
		cardHeight: '628',
		cardDesignClass:
			'relative rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-[#fff] hover:scale-[101%] duration-500 cursor-pointer overflow-hidden',
	},
	{
		carouselId: '2',
		carouselTitle: 'Carousel 2',
		cardArray: [
			{
				subTitle:
					'When you choose to check out with Apple Card Monthly Installments.',
				title: 'Pay over time, interest-free.',
				imgUrl:
					'https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_apple_card__fa68csvawtei_large.png',
			},
			{
				subTitle: 'Getting Started 2',
				title: 'Apple Card Monthly Installments',
				imgUrl:
					'https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_trade_in__ca5f20mux4b6_large.png',
			},
			{
				subTitle:
					'When you choose to check out with Apple Card Monthly Installments.',
				title: 'Pay over time, interest-free.',
				imgUrl:
					'https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_customize__b6w4i5ax89py_large.png',
			},
			{
				subTitle: 'Getting Started 2',
				title: 'Apple Card Monthly Installments',
				imgUrl:
					'https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_delivery__fyzranm9416y_large.png',
			},
			{
				subTitle: 'Getting Started 2',
				title: 'Apple Card Monthly Installments',
				imgUrl:
					'https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_specialist_alt__fht15dmiclei_large.png',
			},
			{
				subTitle: 'Getting Started 2',
				title: 'Apple Card Monthly Installments',
				imgUrl:
					'https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_person__bayst2x5jyya_large.png',
			},
			{
				subTitle: 'Getting Started 2',
				title: 'Apple Card Monthly Installments',
				imgUrl:
					'https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_asa__urbsp7b9ktuq_large.png',
			},
			// Add more cards if needed
		],
		sliderContainer: 'slider-container-2',
		slider: 'slider-2',
		card: 'card-2',
		prevBtn: 'prev-btn-2',
		nextBtn: 'next-btn-2',
		cardWidth: '372',
		cardHeight: '295',
		cardDesignClass:
			'relative flex flex-col items-start gap-4 bg-white rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-[#fff] hover:scale-[101%] duration-500 cursor-pointer overflow-hidden p-6 ',
	},
	// Add more carousel configurations here...
	// IPHONE PAGE
	{
		carouselId: '3',
		carouselTitle: 'Carousel 3',
		cardArray: [
			{
				textColor: 'white',
				subTitle: 'Advanced Cameras',
				title: 'Selfie-takers. Movie-makers. Boundary-breakers.',
				imgUrl:
					'https://www.apple.com/v/iphone/home/bu/images/overview/consider/camera__cerpczobiwwi_large.jpg',
			},
			{
				textColor: 'white',
				subTitle: 'Apple-Designed Chips',
				title: 'The kind of fast you can feel.',
				imgUrl:
					'https://www.apple.com/v/iphone/home/bu/images/overview/consider/chip__cpj93oio1oya_large.jpg',
			},
			{
				textColor: 'white',
				subTitle: 'Battery',
				title: 'The power of great battery life.',
				imgUrl:
					'https://www.apple.com/v/iphone/home/bu/images/overview/consider/battery__f9km4l6jlv6u_large.jpg',
			},
			{
				textColor: 'white',
				subTitle: 'Innovation',
				title: 'Beautiful and durable, by design.',
				imgUrl:
					'https://www.apple.com/v/iphone/home/bu/images/overview/consider/innovation__b03hhgj3xx9e_large.jpg',
			},
			{
				textColor: 'white',
				subTitle: 'Personalize Your iPhone',
				title: 'Make it you. Through and through.',
				imgUrl:
					'https://www.apple.com/v/iphone/home/bu/images/overview/consider/personalize__f51wh6aiosya_large.jpg',
			},
			{
				textColor: 'white',
				subTitle: 'Peace of Mind',
				title: 'Helpful safety features. Just in case.',
				imgUrl:
					'https://www.apple.com/v/iphone/home/bu/images/overview/consider/safety__d9zsvrorjfcm_large.jpg',
			},
			{
				textColor: 'white',
				subTitle: 'Privacy',
				title: 'Just where you want it.',
				imgUrl:
					'https://www.apple.com/v/iphone/home/bu/images/overview/consider/privacy__cum61s425o6e_large.jpg',
			},
			{
				textColor: 'black',
				subTitle: 'Environment',
				title: 'Recycle. Reuse. Repeat.',
				imgUrl:
					'https://www.apple.com/v/iphone/home/bu/images/overview/consider/environment__d1g8uhlvrccy_large.jpg',
			},
		],
		sliderContainer: 'slider-container-3',
		slider: 'slider-3',
		card: 'card-3',
		prevBtn: 'prev-btn-3',
		nextBtn: 'next-btn-3',
		cardWidth: '405',
		cardHeight: '775',
		cardDesignClass:
			' relative rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-[#fff] hover:scale-[101%] duration-500 cursor-pointer overflow-hidden',
	},
	{
		carouselId: '4',
		carouselTitle: 'Carousel 4',
		cardArray: [
			{
				textColor: 'black',
				subTitle: 'Apple Trade In',
				title: 'Save With Apple Trade In',
				description:
					'Get $170-$630 in credit toward iPhone 15 or iPhone 15 Pro when you trade in iPhone 11 or higher.',
				imgUrl:
					'https://www.apple.com/v/iphone/home/bu/images/overview/incentive/apple_trade_in__cyu6hvjcoxqq_large.jpg',
			},
			{
				textColor: 'black',
				subTitle: 'Apple Card',
				title: 'Pay over time, interest-free.',
				description:
					'When you choose to check out with Apple Card Monthly Installments.',
				imgUrl:
					'https://www.apple.com/v/iphone/home/bu/images/overview/incentive/apple_card__bkmaxfjg05ua_large.jpg',
			},
			{
				textColor: 'black',
				subTitle: 'Battery',
				title: 'iPhone carrier deals. Right here at Apple. For as low as $0.',
				description:
					'Includes trade-in and carrier credits. AT&T: up to $700. T-Mobile: up to $500. Verizon: up to $500. Sprint: up to $400.',
				imgUrl:
					'https://www.apple.com/v/iphone/home/bu/images/overview/incentive/carrier_deals__fhry3uquobqm_large.jpg',
			},
			{
				textColor: 'black',
				subTitle: 'Innovation',
				title: 'Beautiful and durable, by design.',
				description:
					'Get $170-$630 in credit toward iPhone 15 or iPhone 15 Pro when you trade in iPhone 11 or higher.',
				imgUrl:
					'https://www.apple.com/v/iphone/home/bu/images/overview/incentive/delivery__fzf6y3qyc7u6_large.jpg',
			},

			{
				textColor: 'black',
				subTitle: 'Peace of Mind',
				title: 'Helpful safety features. Just in case.',
				description:
					'Get $170-$630 in credit toward iPhone 15 or iPhone 15 Pro when you trade in iPhone 11 or higher.',
				imgUrl:
					'https://www.apple.com/v/iphone/home/bu/images/overview/incentive/support__fqabq872w8q6_large.jpg',
			},
			{
				textColor: 'white',
				subTitle: 'Privacy',
				title: 'Just where you want it.',
				description:
					'Get $170-$630 in credit toward iPhone 15 or iPhone 15 Pro when you trade in iPhone 11 or higher.',
				imgUrl:
					'https://www.apple.com/v/iphone/home/bu/images/overview/consider/privacy__cum61s425o6e_large.jpg',
			},
			{
				textColor: 'black',
				subTitle: 'Environment',
				title: 'Recycle. Reuse. Repeat.',
				description:
					'Get $170-$630 in credit toward iPhone 15 or iPhone 15 Pro when you trade in iPhone 11 or higher.',
				imgUrl:
					'https://www.apple.com/v/iphone/home/bu/images/overview/incentive/personal_session__lzxzvh66vuq2_large.jpg',
			},
		],
		sliderContainer: 'slider-container-4',
		slider: 'slider-4',
		card: 'card-4',
		prevBtn: 'prev-btn-4',
		nextBtn: 'next-btn-4',
		cardWidth: '372',
		cardHeight: '480',
		cardDesignClass:
			' relative rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-[#fff] hover:scale-[101%] duration-500 cursor-pointer overflow-hidden',
	},

	// Watch page
	{
		carouselId: '3',
		carouselTitle: 'Carousel 5',
		cardArray: [
			{
				textColor: 'white',
				subTitle: 'Fitness',
				title: 'Every move counts',

				imgUrl:
					'https://www.apple.com/v/watch/bl/images/overview/consider/feature_fitness__bqrhzxk45liu_large.jpg',
			},
			{
				textColor: 'white',
				subTitle: 'Healh',
				title: 'Pay over time, internet-free.',

				imgUrl:
					'https://www.apple.com/v/watch/bl/images/overview/consider/feature_health__b8l8jg8aa0b6_large.jpg',
			},
			{
				textColor: 'black',
				subTitle: 'Connectivity',
				title: 'The right call for staying in touch.',

				imgUrl:
					'https://www.apple.com/v/watch/bl/images/overview/consider/feature_connectivity__k68bkgj3a6ie_large.jpg',
			},
			{
				textColor: 'black',
				subTitle: 'Safty',
				title: 'Good help is easy to find.',

				imgUrl:
					'https://www.apple.com/v/watch/bl/images/overview/consider/feature_safety__c5gr3nzfh20y_large.jpg',
			},

			{
				textColor: 'black',
				subTitle: 'Apple Watch + iPhone',
				title: 'Dynamic duo.',

				imgUrl:
					'https://www.apple.com/v/watch/bl/images/overview/consider/feature_watch_and_iphone__co3lxacgl3qu_large.jpg',
			},
			{
				textColor: 'white',
				subTitle: 'Personalization',
				title: 'Make it you-nique.',

				imgUrl:
					'https://www.apple.com/v/watch/bl/images/overview/consider/feature_personalization__fdz9dgc5afma_large.jpg',
			},
			{
				textColor: 'black',
				subTitle: 'Family Setup for Apple Watch',
				title: "Great for kids who don't have an iPhone yet.",

				imgUrl:
					'https://www.apple.com/v/watch/bl/images/overview/consider/feature_family_setup__ghz0t0it1hay_large.jpg',
			},
		],
		sliderContainer: 'slider-container-5',
		slider: 'slider-5',
		card: 'card-5',
		prevBtn: 'prev-btn',
		nextBtn: 'next-btn',
		cardWidth: '372',
		cardHeight: '680',
		cardDesignClass:
			' relative rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-[#fff] hover:scale-[101%] duration-500 cursor-pointer overflow-hidden',
	},
];

// Render carousel components
carouselConfigs.forEach((config, index) => {
	const containerId = `carouselContainer${index + 1}`;
	const carouselElement = document.createElement('carousel-component');
	carouselElement.setAttribute('carouselConfig', JSON.stringify(config));
	carouselElement.setAttribute('containerId', containerId);
	carouselElement.setAttribute('cardDesignClass', config.cardDesignClass); // Make sure this attribute is set
	document.body.appendChild(carouselElement);
});
