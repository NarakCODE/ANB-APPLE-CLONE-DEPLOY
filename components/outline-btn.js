const createOutlineBtn = (text) => {
	return `<button
   class="bg-transparent text-blue-600 hover:text-white hover:bg-blue-500 rounded-full md:px-6 px-4 py-2 md:text-base text-sm  border border-blue-600 hover:border-blue-500"
>
   ${text}
</button>`;
};

class OutlineBtnComponent extends HTMLElement {
	connectedCallback() {
		const text = this.textContent.trim();
		this.innerHTML = createOutlineBtn(text);
	}
}

customElements.define('outline-btn-component', OutlineBtnComponent);
