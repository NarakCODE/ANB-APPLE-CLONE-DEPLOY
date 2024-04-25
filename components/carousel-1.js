// const createCarouselComponent = (titleProps) => {
// 	const allSentences = titleProps.split('.');

// 	return `<section class="mt-14">
//             <header class="w-10/12 mx-auto flex items-center space-x-4 my-5">
//                <h2 class="text-black text-[26px] font-semibold">${
// 									allSentences[0]
// 								}. <span class="text-gray-500">${allSentences[1]}.</span></h2>
//             </header>
//             <div class="flex items-center relative">
//                <div class="absolute left-8 z-10">
//                   <button
//                      onclick="next()"
//                      class="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg"
//                   >
//                      <
//                   </button>
//                </div>
//                <div id="sliderContainer" class="w-10/12 mx-auto">
//                   <ul
//                      id="slider"
//                      class="flex w-full h-[500px] gap-4 transition-margin duration-700"
//                   >
//                   ${cardArray
// 										.map((card, index) => {
// 											let additionalClass = '';
// 											if (index === 1 || index === 4 || index === 9) {
// 												additionalClass = 'text-white';
// 											}
// 											return `
//                            <li class="w-[400px] h-full ${additionalClass}">
//                               <div class="relative rounded-2xl w-[400px] h-full overflow-hidden shadow-lg">
//                                     <div class="absolute left-0 top-0 px-6 pt-6 w-full flex flex-col gap-2">
//                                        <p class="uppercase text-gray-500 font-semibold text-sm">
//                                           ${card.subTitle}
//                                        </p>
//                                        <h1 class="text-[28px] font-semibold leading-8">
//                                           ${card.title}
//                                        </h1>
//                                        <p>
//                                           ${card.description}
//                                        </p>
//                                     </div>
//                                     <img src="${card.imgUrl}" class="w-full h-full object-cover" alt="">
//                               </div>
//                            </li>
//                         `;
// 										})
// 										.join(' ')}
//                   </ul>
//                </div>
//                <div class="absolute right-8 z-10">
//                   <button
//                      onclick="prev()"
//                      class="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg"
//                   >
//                      >
//                   </button>
//                </div>
//             </div>
//          </section>`;
// };

// class CarouselComponent extends HTMLElement {
// 	connectedCallback() {
// 		const titleProps = this.getAttribute('titleProps');

// 		this.innerHTML = createCarouselComponent(titleProps);
// 	}
// }

// customElements.define('carousel-component', CarouselComponent);
