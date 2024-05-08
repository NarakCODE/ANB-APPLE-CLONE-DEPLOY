const createChapterNavItem = (itemComponents, bgColor, textColor) => {
	return `
      <!-- Chapter Nav Items -->
      <div class="w-full h-auto bg-${bgColor} text-${textColor}">
         <div class="w-full max-w-[1200px] mx-auto py-6 px-4 ">
            <header class="mt-10 flex gap-4 items-center overflow-x-scroll ">
                  <!-- card -->
                  ${itemComponents}
            </header>
         </div>
      </div>
   `;
};

const createItem = (name, svgIcon) => {
	return `
      <!-- item -->
      <div class="w-full">
         <div class="w-[80px] h-auto flex items-center">
            <a href="#" class="flex flex-col gap-1 items-center">
               <img class="w-14 h-14" src="${svgIcon}" />
               <p class="text-xs text-center font-light">${name}</p>
            </a>
         </div>
      </div>
   `;
};

class ChapterNavItemComponent extends HTMLElement {
	connectedCallback() {
		const bgColor = this.getAttribute('bgColor');
		const textColor = this.getAttribute('textColor');
		const itemComponents = Array.from(this.children)
			.map((child) => child.outerHTML)
			.join('');

		this.innerHTML = createChapterNavItem(itemComponents, bgColor, textColor);
	}
}

class ItemComponent extends HTMLElement {
	connectedCallback() {
		const name = this.getAttribute('name');
		const svgIcon = this.getAttribute('svgIcon');

		this.innerHTML = createItem(name, svgIcon);
	}
}

customElements.define('item-component', ItemComponent);
customElements.define('chapter-nav-item-component', ChapterNavItemComponent);
