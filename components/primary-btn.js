const createPrimaryBtn = (text) => {
	return `<button
   class="bg-blue-600 hover:bg-blue-500 rounded-full md:px-6 px-4 py-2 md:text-base text-sm border border-blue-600 hover:border-blue-500 text-white"

	>
   ${text}
</button>`;
};

class PrimaryBtnComponent extends HTMLElement {
	connectedCallback() {
		const text = this.textContent.trim();
		this.innerHTML = createPrimaryBtn(text);
	}
}

customElements.define('primary-btn-component', PrimaryBtnComponent);

