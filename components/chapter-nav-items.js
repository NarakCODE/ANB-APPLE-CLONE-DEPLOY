const createChapterNavItem = (itemComponents, bgColor, textColor) => {
	return `
      <!-- Chapter Nav Items -->
      <div class="w-full h-auto bg-${bgColor} text-${textColor}">
         <div class="w-full max-w-[1000px] mx-auto py-6 px-4">
            <header class="mt-10 flex gap-10 items-center ">
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
      <div>
         <div class="h-auto flex items-center">
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
