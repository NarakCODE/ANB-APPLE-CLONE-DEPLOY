const createPromotionBarComponent = (text, link, href, bgColor, textColor) => {
	return `
      <div
         class="w-full text-center bg-[${bgColor}] text-[${textColor}] md:text-sm text-xs flex items-center py-4 justify-center px-6"
      >
      ${text}
      <a href="${href}" class="text-blue-500 flex items-center">
         ${link}
         <span
            ><svg
               class="size-4"
               fill="none"
               width="800px"
               height="800px"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M9 6L15 12L9 18"
                  stroke="rgb(59 130 246)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
               /></svg></span
      ></a>
      </div>
   `;
};

class PromotionBarComponent extends HTMLElement {
	connectedCallback() {
		const text = this.getAttribute('text');
		const link = this.getAttribute('link');
		const href = this.getAttribute('href');
		const bgColor = this.getAttribute('bgColor');
		const textColor = this.getAttribute('textColor');
		this.innerHTML = createPromotionBarComponent(
			text,
			link,
			href,
			bgColor,
			textColor
		);
	}
}

customElements.define('promotion-bar-component', PromotionBarComponent);
