const createHeaderComponent = (
	imgSrc,
	title,
	description,
	primaryBtnText,
	outlineBtnText,
	bgColor,
	textColor
) => {
	return `
   <header
   class="flex justify-center relative w-full h-[50vh] mt-4 bg-${bgColor} overflow-hidden"
>
   <img
      src="${imgSrc}"
      alt=""
      class="h-full md:object-cover object-cover mt-20"
   />

   <div
      class="absolute z-[22] top-20 text-center text-${textColor} flex flex-col items-center md:gap-4 px-4"
   >
      <h1 class="text-4xl md:text-6xl">${title}</h1>
      <p class="md:text-2xl">${description}</p>
      <div class="flex items-center gap-4 mt-4 md:mt-0">
         <primary-btn-component>${primaryBtnText}</primary-btn-component>

         <outline-btn-component>${outlineBtnText}</outline-btn-component>
      </div>
   </div>
</header>

   `;
};

class HeaderComponent extends HTMLElement {
	connectedCallback() {
		const imgSrc = this.getAttribute('img-src');
		const title = this.getAttribute('title');
		const description = this.getAttribute('description');
		const primaryBtnText = this.getAttribute('primary-btn-text');
		const outlineBtnText = this.getAttribute('outline-btn-text');
		const bgColor = this.getAttribute('background-color');
		const textColor = this.getAttribute('text-color');

		this.innerHTML = createHeaderComponent(
			imgSrc,
			title,
			description,
			primaryBtnText,
			outlineBtnText,
			bgColor,
			textColor
		);
	}
}

customElements.define('header-component', HeaderComponent);
