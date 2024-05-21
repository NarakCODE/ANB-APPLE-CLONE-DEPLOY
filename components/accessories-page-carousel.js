const createCaourselDesign = (title, accessoriesData, linkTitle) => {
	return `
         <div class="max-w-[1100px] px-6 mx-auto w-full">
				<h2 class="text-3xl md:text-4xl font-semibold text-center">
					${title}
				</h2>

				<!-- Carousel container -->
				<div class="h-[600px] w-full ">
					<swiper-container
						class="mySwiper w-full h-full flex"
						navigation="true"
						pagination="true"
						keyboard="true"
						mousewheel="true"
						css-mode="true"
					>
               ${accessoriesData
									.map((swiperSlide) => {
										return ` <swiper-slide
                                       class="mx-2 text-center text-lg grid grid-cols-2 gap-2 justify-center items-center "
                                    >
                                    <!-- card -->
                                    ${swiperSlide.swiperItems
																			.map((card) => {
																				return `
                                             <div
                                                class="h-[520px]  flex flex-col justify-between items-center gap-4  bg-[#f5f5f7] rounded-xl md:p-10 p-4"
                                             >
                                                <img
                                                   src="${card.imgUrl}"
                                                   alt=""
                                                   class="w-full h-[266px] object-contain"
                                                />
                                                <!-- card content -->
                                                <div class="max-w-[300px] flex flex-col items-center justify-between gap-4">
                                                   <!-- card colors -->
                                                   <div class="flex justify-center space-x-1 ">
                                                     ${card.colors
																												.map((color) => {
																													return `<span class="w-3 h-3 bg-[${color}] rounded-full shadow-[inset_-12px_-8px_40px_#46464620] border border-black/40"></span>`;
																												})
																												.join(' ')}
                                                   </div>

                                                   <!-- card title -->
                                                   <div class="text-black/80">
                                                      <p class="text-xs text-red-800 font-semibold">${
																												card.new
																											}</p>
                                                      <a
                                                         href="#"
                                                         class="hover:underline hover:text-blue-600 text-sm md:text-base font-semibold"
                                                      >
                                                         ${card.title}
                                                      </a>
                                                      <p class="text-sm mt-10 font-light">${
																												card.price
																											}</p>
                                                   </div>
                                                </div>
                                             </div>
                                       `;
																			})
																			.join(' ')}
                                    
                                 </swiper-slide>`;
									})
									.join('')}
					</swiper-container>
				</div>

           <div class="text-center mt-4">
           <a href="#" class="text-blue-600 hover:underline tracking-wide md:text-md text-sm">${linkTitle} ></a>
           </div>
			</div>
   
   `;
};

class AccessoriesCarouselComponent extends HTMLElement {
	connectedCallback() {
		const title = this.getAttribute('title');
		const accessoriesData = JSON.parse(this.getAttribute('accessories-data'));
		const linkTitle = this.getAttribute('link-title');
		this.innerHTML = createCaourselDesign(title, accessoriesData, linkTitle);
	}
}

customElements.define(
	'accessories-carousel-component',
	AccessoriesCarouselComponent
);
