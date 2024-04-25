class NavbarComponent extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
         <nav class="w-full sticky top-0 left-0 bg-white/80 backdrop-blur-md z-[99]">
            <div
               class="max-w-[1100px] mx-auto px-6 py-2 border-b flex items-center justify-between"
            >
               <div class="flex items-center justify-between w-full text-xs gap-6">
                  <a href="home.html">
                     <img class="w-4" src="../assets/apple-logo.png" alt="" />
                  </a>
                  <ul class="md:flex justify-between items-center w-full hidden">
                     <li>
                        <a class="py-3 text-black/60 hover:text-black" href="store.html"
                           >Store</a
                        >
                     </li>
                     <li>
                        <a class="py-3 text-black/60 hover:text-black" href="mac.html"
                           >Mac</a
                        >
                     </li>
                     <li>
                        <a class="py-3 text-black/60 hover:text-black" href="ipad.html"
                           >iPad</a
                        >
                     </li>
                     <li>
                        <a class="py-3 text-black/60 hover:text-black" href="iphone.html"
                           >iPhone</a
                        >
                     </li>
                     <li>
                        <a class="py-3 text-black/60 hover:text-black" href="store.html"
                           >Watch</a
                        >
                     </li>
                     <li>
                        <a class="py-3 text-black/60 hover:text-black" href="store.html"
                           >Vision</a
                        >
                     </li>
                     <li>
                        <a class="py-3 text-black/60 hover:text-black" href="store.html"
                           >AirPods</a
                        >
                     </li>
                     <li>
                        <a class="py-3 text-black/60 hover:text-black" href="store.html"
                           >TV & Home</a
                        >
                     </li>
                     <li>
                        <a class="py-3 text-black/60 hover:text-black" href="store.html"
                           >Entertainment</a
                        >
                     </li>
                     <li>
                        <a class="py-3 text-black/60 hover:text-black" href="store.html"
                           >Accessories</a
                        >
                     </li>
                     <li>
                        <a class="py-3 text-black/60 hover:text-black" href="store.html"
                           >Support</a
                        >
                     </li>
                  </ul>
                  <div class="flex gap-4">
                     <button>
                        <span
                           class="material-symbols-outlined text-[20px] text-black/60 hover:text-black"
                        >
                           search
                        </span>
                     </button>

                     <button>
                        <span
                           class="material-symbols-outlined text-[20px] text-black/60 hover:text-black"
                        >
                           shopping_bag
                        </span>
                     </button>
                     <button class="md:hidden flex relative z-[50]" id="menu-btn">
                        <span class="material-symbols-outlined"> menu </span>
                     </button>

                     <!-- drop down hamburger -->
                     <div
                        id="menu-list"
                        class="fixed top-0 left-0 w-full h-0 bg-white z-[49] origin-top duration-500 backdrop-blur-md"
                     >
                        <div
                           class="px-12 flex flex-col mt-14 text-2xl gap-3 font-semibold opacity-0 pointer-events-none duration-500"
                           id="list-container"
                        >
                           <a href="" class="flex items-center justify-between group"
                              >Store
                              <span
                                 class="material-symbols-outlined group-hover:block hidden"
                              >
                                 chevron_right
                              </span></a
                           >

                           <a href="" class="flex items-center justify-between group"
                              >Store
                              <span
                                 class="material-symbols-outlined group-hover:block hidden"
                              >
                                 chevron_right
                              </span></a
                           >

                           <a href="" class="flex items-center justify-between group"
                              >Store
                              <span
                                 class="material-symbols-outlined group-hover:block hidden"
                              >
                                 chevron_right
                              </span></a
                           >

                           <a href="" class="flex items-center justify-between group"
                              >Store
                              <span
                                 class="material-symbols-outlined group-hover:block hidden"
                              >
                                 chevron_right
                              </span></a
                           >

                           <a href="" class="flex items-center justify-between group"
                              >Store
                              <span
                                 class="material-symbols-outlined group-hover:block hidden"
                              >
                                 chevron_right
                              </span></a
                           >

                           <a href="" class="flex items-center justify-between group"
                              >Store
                              <span
                                 class="material-symbols-outlined group-hover:block hidden"
                              >
                                 chevron_right
                              </span></a
                           >

                           <a href="" class="flex items-center justify-between group"
                              >Store
                              <span
                                 class="material-symbols-outlined group-hover:block hidden"
                              >
                                 chevron_right
                              </span></a
                           >

                           <a href="" class="flex items-center justify-between group"
                              >Store
                              <span
                                 class="material-symbols-outlined group-hover:block hidden"
                              >
                                 chevron_right
                              </span></a
                           >
                           <a href="" class="flex items-center justify-between group"
                              >Store
                              <span
                                 class="material-symbols-outlined group-hover:block hidden"
                              >
                                 chevron_right
                              </span></a
                           >

                           <a href="" class="flex items-center justify-between group"
                              >Store
                              <span
                                 class="material-symbols-outlined group-hover:block hidden"
                              >
                                 chevron_right
                              </span></a
                           >

                           <a href="" class="flex items-center justify-between group"
                              >Store
                              <span
                                 class="material-symbols-outlined group-hover:block hidden"
                              >
                                 chevron_right
                              </span></a
                           >
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </nav>
      `;
	}
}

customElements.define('navbar-component', NavbarComponent);

let menuBtn = document.getElementById('menu-btn');
let menuList = document.getElementById('menu-list');
let listContainer = document.getElementById('list-container');
menuBtn.addEventListener('click', () => {
	menuList.classList.toggle('h-screen');
	listContainer.classList.toggle('opacity-100');
	listContainer.classList.toggle('pointer-events-auto');
});
