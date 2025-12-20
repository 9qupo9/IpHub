function createHeader() {
    return `
        <div class="fixed top-3 md:top-6 left-1/2 transform -translate-x-1/2 z-[9998] w-full max-w-[750px] px-4">
            <header class="bg-transparent backdrop-blur-md border border-gray-700/50 rounded-2xl py-3 px-4 md:px-6 shadow-2xl shadow-purple-500/10">

                <div class="grid grid-cols-3 items-center lg:hidden">

                    <div class="flex items-center space-x-2">
                        <a href="/" class="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200">
                            <img src="media/logo.webp" alt="IPHub Logo" class="w-6 h-6 rounded-lg object-contain">
                            <span class="text-white font-semibold text-base">IPHub</span>
                        </a>
                    </div>

                    <div class="flex justify-center">
                    </div>

                    <div class="flex items-center justify-end space-x-2">
                        <button id="mobile-menu-btn" class="text-gray-300 hover:text-white transition-colors duration-200">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                        
                        <button class="info-btn text-gray-300 hover:text-white transition-colors duration-200">
                            <img src="media/about.png" alt="About" class="w-6 h-6">
                        </button>
                    </div>
                </div>

                <div class="hidden lg:flex items-center justify-between">

                    <div class="flex items-center space-x-2">
                        <a href="/" class="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200">
                            <img src="media/logo.webp" alt="IPHub Logo" class="w-7 h-7 rounded-lg object-contain">
                            <span class="text-white font-semibold text-lg">IPHub</span>
                        </a>
                    </div>

                    <nav class="flex items-center space-x-6">
                        <a href="validator-content" class="flex items-center justify-center text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium" style="background-image: url('media/ramp.svg'); background-size: 100% 100%; background-repeat: no-repeat;">Validators</a>
                        <a href="developer-content" class="flex items-center justify-center text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium" style="background-image: url('media/ramp.svg'); background-size: 100% 100%; background-repeat: no-repeat;">Developers</a>
                        <a href="community-content" class="flex items-center justify-center text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium" style="background-image: url('media/ramp.svg'); background-size: 100% 100%; background-repeat: no-repeat;">Community</a>
                        <a href="education-about" class="flex items-center justify-center text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium" style="background-image: url('media/ramp.svg'); background-size: 100% 100%; background-repeat: no-repeat;">Educational</a>
                    </nav>

                    <div class="flex items-center space-x-3">
                        <button class="info-btn text-gray-300 hover:text-white transition-colors duration-200">
                            <img src="media/about.png" alt="About" class="w-7 h-7">
                        </button>
                    </div>
                </div>
                
                <div id="mobile-menu" class="lg:hidden hidden mt-4 pt-4 border-t border-gray-700/50">
                    <nav class="grid grid-cols-2 gap-2">
                        <a href="validator-content" class="flex items-center justify-center text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium" style="background-image: url('media/ramp.svg'); background-size: 100% 100%; background-repeat: no-repeat;">Validators</a>
                        <a href="developer-content" class="flex items-center justify-center text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium" style="background-image: url('media/ramp.svg'); background-size: 100% 100%; background-repeat: no-repeat;">Developers</a>
                        <a href="community-content" class="flex items-center justify-center text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium" style="background-image: url('media/ramp.svg'); background-size: 100% 100%; background-repeat: no-repeat;">Community</a>
                        <a href="education-about" class="flex items-center justify-center text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium" style="background-image: url('media/ramp.svg'); background-size: 100% 100%; background-repeat: no-repeat;">Educational</a>
                    </nav>
                </div>
            </header>
        </div>

        <div id="info-modal" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] hidden items-center justify-center p-4">
            <div class="bg-gray-900/98 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 w-full max-w-md shadow-2xl transform transition-all duration-300 scale-95 opacity-0 modal-content relative z-[10000]">
                <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                                <circle cx="10" cy="10" r="8"/>
                                <circle cx="10" cy="6" r="1" fill="currentColor"/>
                                <path d="M10 9v5" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <h3 class="text-white text-lg md:text-xl font-semibold">About IPHub</h3>
                    </div>
                    <button id="close-modal" class="text-gray-400 hover:text-white transition-colors duration-200 p-1 hover:bg-gray-800/50 rounded-lg">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                
                <div class="space-y-4">
                    <p class="text-gray-300 text-sm md:text-base leading-relaxed">
                        IPHub is your centralized navigation hub for the Story ecosystem, combining all the necessary tools, services, and resources. 
                        We create a transparent and structured environment for every participant.
                    </p>
                    
                    <div class="bg-gray-800/30 rounded-lg p-4 border border-gray-700/30">
                        <h4 class="text-white text-sm font-medium mb-2">Key Features:</h4>
                        <ul class="text-gray-400 text-xs md:text-sm space-y-1">
                            <li>• Integration: Comprehensive support for Story developers, validators, and the community.</li>
                            <li>• Usability: A structured and intuitive platform designed for effortless navigation.</li>
                            <li>• Education: Access to educational materials, guides, and up-to-date news for continuous growth.</li>
                        </ul>
                    </div>
                </div>
                
                <div class="mt-6 pt-4 border-t border-gray-700/50 flex items-center justify-between">
                    <p class="text-gray-400 text-xs">Version 1.0.0</p>
                    <p class="text-gray-400 text-xs">© 2025 IPHub</p>
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function () {
    const headerRoot = document.getElementById('header-root');
    if (headerRoot) {
        headerRoot.innerHTML = createHeader();

        const infoBtns = document.querySelectorAll('.info-btn');
        const modal = document.getElementById('info-modal');
        const closeBtn = document.getElementById('close-modal');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        infoBtns.forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                modal.style.zIndex = '999999';
                modal.classList.remove('hidden');
                modal.classList.add('flex');

                setTimeout(() => {
                    const modalContent = modal.querySelector('.modal-content');
                    modalContent.style.zIndex = '1000000';
                    modalContent.classList.remove('scale-95', 'opacity-0');
                    modalContent.classList.add('scale-100', 'opacity-100');
                }, 10);
            });
        });

        function closeModal() {
            const modalContent = modal.querySelector('.modal-content');
            modalContent.classList.remove('scale-100', 'opacity-100');
            modalContent.classList.add('scale-95', 'opacity-0');

            setTimeout(() => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }, 300);
        }

        closeBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                closeModal();
            }
        });

        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.addEventListener('click', function (e) {
                e.stopPropagation();
            });
        }

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', function () {
                mobileMenu.classList.toggle('hidden');
            });
        }
    }
});
