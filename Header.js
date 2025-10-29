function createHeader() {
    return `
        <div class="fixed top-3 md:top-6 left-1/2 transform -translate-x-1/2 z-[9998] w-full max-w-[750px] px-4">
            <header class="bg-gray-900/90 backdrop-blur-md border border-gray-700/50 rounded-2xl py-3 px-4 md:px-6 shadow-2xl shadow-purple-500/10">

                <div class="grid grid-cols-3 items-center lg:hidden">

                    <div class="flex items-center space-x-2">
                        <img src="media/logo.webp" alt="IPHub Logo" class="w-6 h-6 rounded-lg object-contain">
                        <span class="text-white font-semibold text-base">IPHub</span>
                    </div>

                    <div class="flex justify-center">
                        <div class="flex items-center space-x-2 bg-gray-800/60 px-2 py-1.5 rounded-lg border border-gray-600/30">
                            <svg class="w-3 h-3 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 2L3 7v6c0 5.55 3.84 7.74 9 9 5.16-1.26 9-3.45 9-9V7l-7-5zM8 11l-2-2 1.41-1.41L8 8.17l4.59-4.58L14 5l-6 6z" clip-rule="evenodd"/>
                            </svg>
                            <span class="text-gray-300 text-xs font-medium">License 2025</span>
                        </div>
                    </div>

                    <div class="flex items-center justify-end space-x-2">
                        <button id="mobile-menu-btn" class="text-gray-300 hover:text-white transition-colors duration-200">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                        
                        <button class="info-btn text-gray-300 hover:text-white transition-colors duration-200">
                            <svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 9a1 1 0 0 0 0 2v3a1 1 0 0 0 1 1h1a1 0 100-2v-3a1 1 0 0 0-1-1H9z" clip-rule="evenodd"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="hidden lg:flex items-center justify-between">

                    <div class="flex items-center space-x-2">
                        <img src="media/logo.webp" alt="IPHub Logo" class="w-7 h-7 rounded-lg object-contain">
                        <span class="text-white font-semibold text-lg">IPHub</span>
                    </div>

                    <nav class="flex items-center space-x-2">
                        <a href="#" class="text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium">Services</a>
                        <a href="#" class="text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium">Features</a>
                        <a href="#" class="text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium">Pricing</a>
                        <a href="#" class="text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium">Partners</a>
                    </nav>

                    <div class="flex items-center space-x-3">
                        <button class="info-btn text-gray-300 hover:text-white transition-colors duration-200">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 9a1 1 0 0 0 0 2v3a1 1 0 0 0 1 1h1a1 0 100-2v-3a1 1 0 0 0-1-1H9z" clip-rule="evenodd"/>
                            </svg>
                        </button>
                        
                        <div class="flex items-center space-x-2 bg-gray-800/60 px-3 py-2 rounded-lg border border-gray-600/30">
                            <svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 2L3 7v6c0 5.55 3.84 7.74 9 9 5.16-1.26 9-3.45 9-9V7l-7-5zM8 11l-2-2 1.41-1.41L8 8.17l4.59-4.58L14 5l-6 6z" clip-rule="evenodd"/>
                            </svg>
                            <span class="text-gray-300 text-sm font-medium">License 2025</span>
                        </div>
                    </div>
                </div>
                
                <div id="mobile-menu" class="lg:hidden hidden mt-4 pt-4 border-t border-gray-700/50">
                    <nav class="grid grid-cols-2 gap-2">
                        <a href="#" class="text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium">Services</a>
                        <a href="#" class="text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium">Features</a>
                        <a href="#" class="text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium">Pricing</a>
                        <a href="#" class="text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium">Partners</a>
                    </nav>
                </div>
            </header>
        </div>

        <div id="info-modal" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] hidden items-center justify-center p-4">
            <div class="bg-gray-900/98 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 w-full max-w-md shadow-2xl transform transition-all duration-300 scale-95 opacity-0 modal-content relative z-[10000]">
                <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 9a1 1 0 0 0 0 2v3a1 1 0 0 0 1 1h1a1 0 100-2v-3a1 1 0 0 0-1-1H9z" clip-rule="evenodd"/>
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
                        IPHub - это современная платформа для управления ресурсами экосистемы Story. 
                        Здесь вы найдете все необходимые инструменты и сервисы для работы с блокчейном Story.
                    </p>
                    
                    <div class="bg-gray-800/30 rounded-lg p-4 border border-gray-700/30">
                        <h4 class="text-white text-sm font-medium mb-2">Основные возможности:</h4>
                        <ul class="text-gray-400 text-xs md:text-sm space-y-1">
                            <li>• Управление ресурсами блокчейна</li>
                            <li>• Интеграция с экосистемой Story</li>
                            <li>• Современный интерфейс</li>
                        </ul>
                    </div>
                </div>
                
                <div class="mt-6 pt-4 border-t border-gray-700/50 flex items-center justify-between">
                    <p class="text-gray-400 text-xs">Версия 1.0.0</p>
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
