// Category Carousel
document.addEventListener('DOMContentLoaded', function () {
	const categorySlider = document.querySelector('.category-slider');
	const categoryCards = document.querySelectorAll('.category-card');
	const categoryPrevBtn = document.getElementById('category-prev-btn');
	const categoryNextBtn = document.getElementById('category-next-btn');
	categoryPrevBtn.classList.add('hidden');

	let currentIndex = 0;

	function updateSlider() {
		categorySlider.style.transform = `translateX(${-currentIndex * 164}px)`; // card width 140px + 10px
		categoryPrevBtn.classList.toggle('hidden', currentIndex === 0);
		categoryNextBtn.classList.toggle(
			'hidden',
			currentIndex === categoryCards.length - 1
		);
	}

	function nextSlide() {
		if (currentIndex < categoryCards.length - 1) {
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

	categoryNextBtn.addEventListener('click', nextSlide);
	categoryPrevBtn.addEventListener('click', prevSlide);
});

// The latest. Take a look at what’s new, right now. Carousel
document.addEventListener('DOMContentLoaded', function () {
	const slider = document.querySelector('.slider');
	const cards = document.querySelectorAll('.card');
	const prevBtn = document.getElementById('prevBtn');
	const nextBtn = document.getElementById('nextBtn');
	prevBtn.classList.add('hidden');

	let currentIndex = 0;

	function updateSlider() {
		slider.style.transform = `translateX(${-currentIndex * 424}px)`; // Adjust card width and margin
		// Disable buttons when end of slider reached
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
});

// Help is here. Whenever and however you need it.
document.addEventListener('DOMContentLoaded', function () {
	const serviceSlider = document.querySelector('.service-slider');
	const serviceCards = document.querySelectorAll('.service-card');
	const servicePrevBtn = document.getElementById('service-prev-btn');
	const serviceNextBtn = document.getElementById('service-next-btn');
	servicePrevBtn.classList.add('hidden');

	let currentIndex = 0;

	function updateSlider() {
		serviceSlider.style.transform = `translateX(${-currentIndex * 504}px)`; // card width 480px + 24px
		servicePrevBtn.classList.toggle('hidden', currentIndex === 0);
		serviceNextBtn.classList.toggle(
			'hidden',
			currentIndex === serviceCards.length - 1
		);
	}

	function nextSlide() {
		if (currentIndex < serviceCards.length - 1) {
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

	servicePrevBtn.addEventListener('click', prevSlide);
	serviceNextBtn.addEventListener('click', nextSlide);
});

// The Apple Store difference. Even more reasons to shop with us.
document.addEventListener('DOMContentLoaded', function () {
	const appleStoreSlider = document.querySelector('.appleStore-slider');
	const appleStoreCards = document.querySelectorAll('.appleStore-card');
	const appleStorePrevBtn = document.getElementById('appleStore-prev-btn');
	const appleStoreNextBtn = document.getElementById('appleStore-next-btn');
	appleStorePrevBtn.classList.add('hidden');

	let currentIndex = 0;

	function updateSlider() {
		appleStoreSlider.style.transform = `translateX(${-currentIndex * 337}px)`; // card width 313px + 10px
		appleStorePrevBtn.classList.toggle('hidden', currentIndex === 0);
		appleStoreNextBtn.classList.toggle(
			'hidden',
			currentIndex === appleStoreCards.length - 1
		);
	}

	function nextSlide() {
		if (currentIndex < appleStoreCards.length - 1) {
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

	appleStoreNextBtn.addEventListener('click', nextSlide);
	appleStorePrevBtn.addEventListener('click', prevSlide);
});

// Accessories. Essentials that pair perfectly with your favorite devices.
document.addEventListener('DOMContentLoaded', function () {
	const accessorieSlider = document.querySelector('.accessorie-slider');
	const accessorieCards = document.querySelectorAll('.accessorie-card');
	const accessoriePrevBtn = document.getElementById('accessorie-prev-btn');
	const accessorieNextBtn = document.getElementById('accessorie-next-btn');
	accessoriePrevBtn.classList.add('hidden');

	let currentIndex = 0;

	function updateSlider() {
		accessorieSlider.style.transform = `translateX(${-currentIndex * 337}px)`; // card width 313px + 10px
		accessoriePrevBtn.classList.toggle('hidden', currentIndex === 0);
		accessorieNextBtn.classList.toggle(
			'hidden',
			currentIndex === accessorieCards.length - 1
		);
	}

	function nextSlide() {
		if (currentIndex < accessorieCards.length - 1) {
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

	accessorieNextBtn.addEventListener('click', nextSlide);
	accessoriePrevBtn.addEventListener('click', prevSlide);
});

// Loud and clear. Unparalleled choices for rich, high-quality sound.
document.addEventListener('DOMContentLoaded', function () {
	const loudSlider = document.querySelector('.loud-slider');
	const loudCards = document.querySelectorAll('.loud-card');
	const loudPrevBtn = document.getElementById('loud-prev-btn');
	const loudNextBtn = document.getElementById('loud-next-btn');
	loudPrevBtn.classList.add('hidden');

	let currentIndex = 0;

	function updateSlider() {
		loudSlider.style.transform = `translateX(${-currentIndex * 337}px)`; // card width 313px + 24px
		loudPrevBtn.classList.toggle('hidden', currentIndex === 0);
		loudNextBtn.classList.toggle(
			'hidden',
			currentIndex === loudCards.length - 1
		);
	}

	function nextSlide() {
		if (currentIndex < loudCards.length - 1) {
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

	loudNextBtn.addEventListener('click', nextSlide);
	loudPrevBtn.addEventListener('click', prevSlide);
});

// The Apple experience. Do even more with Apple products and services.
document.addEventListener('DOMContentLoaded', function () {
	const experienceSlider = document.querySelector('.experience-slider');
	const experienceCards = document.querySelectorAll('.experience-card');
	const experiencePrevBtn = document.getElementById('experience-prev-btn');
	const experienceNextBtn = document.getElementById('experience-next-btn');
	experiencePrevBtn.classList.add('hidden');

	let currentIndex = 0;

	function updateSlider() {
		experienceSlider.style.transform = `translateX(${-currentIndex * 504}px)`; // card width 313px + 10px
		experiencePrevBtn.classList.toggle('hidden', currentIndex === 0);
		experienceNextBtn.classList.toggle(
			'hidden',
			currentIndex === experienceCards.length - 1
		);
	}

	function nextSlide() {
		if (currentIndex < experienceCards.length - 1) {
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

	experienceNextBtn.addEventListener('click', nextSlide);
	experiencePrevBtn.addEventListener('click', prevSlide);
});

// Special Stores. Exclusive savings for education, businesses, and more.

document.addEventListener('DOMContentLoaded', function () {
	const specialSlider = document.querySelector('.special-slider');
	const specialCards = document.querySelectorAll('.special-card');
	const specialPrevBtn = document.getElementById('special-prev-btn');
	const specialNextBtn = document.getElementById('special-next-btn');
	specialPrevBtn.classList.add('hidden');

	let currentIndex = 0;

	function updateSlider() {
		specialSlider.style.transform = `translateX(${-currentIndex * 504}px)`; // card width 313px + 24px
		specialPrevBtn.classList.toggle('hidden', currentIndex === 0);
		specialNextBtn.classList.toggle(
			'hidden',
			currentIndex === specialCards.length - 1
		);
	}

	function nextSlide() {
		if (currentIndex < specialCards.length - 1) {
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

	specialNextBtn.addEventListener('click', nextSlide);
	specialPrevBtn.addEventListener('click', prevSlide);
});
