class ValidatorContent {
    constructor() {
        this.init();
    }

    init() {
        this.renderCombinedNavigation();
        this.renderMainContent();
        this.attachEventListeners();
    }



    renderCombinedNavigation() {
        const networkContainer = document.getElementById('network-info');
        if (!networkContainer) return;

        const navButtons = [
            { name: 'Overview', active: true },
            { name: 'Service Endpoints', active: false },
            { name: 'Snapshots', active: false },
            { name: 'Explorers', active: false },
            { name: 'Tools', active: false },
            { name: 'All', active: false }
        ];

        networkContainer.innerHTML = `
            <div class="validator-card p-6 mb-6">
            
                <div class="flex flex-wrap justify-start gap-3 mb-6">
                    ${navButtons.map(button => `
                        <button class="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 w-[140px] text-center text-white hover:text-gray-300" 
                        style="background-image: url('media/ramp.svg'); background-size: 100% 100%; background-repeat: no-repeat;"
                        data-tab="${button.name.toLowerCase().replace(/\s+/g, '-')}">
                            ${button.name}
                        </button>
                    `).join('')}
                </div>
                
                <div class="flex items-center gap-4 mb-4">
                    <h3 class="text-xl font-bold text-white">Network: Mainnet (story-1)</h3>
                    <div class="flex items-center gap-2">
                        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span class="text-sm text-gray-300">Online</span>
                    </div>
                </div>
                
                <div class="relative">
                    <input type="text" 
                           placeholder="search by moniker" 
                           id="moniker-search"
                           class="w-48 px-3 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors">
                </div>
            </div>
        `;
    }

    renderMainContent() {
        const mainContainer = document.getElementById('main-content');
        if (!mainContainer) return;

        const itRocketData = {
            name: 'ITRocket',
            icon: 'IT',
            services: {
                url: 'https://itrocket.net/services/mainnet/story/'
            },
            endpoints: [
                {
                    type: 'RPC',
                    url: 'https://story-mainnet-rpc.itrocket.net'
                },
                {
                    type: 'Websocket',
                    url: 'wss://story-mainnet-rpc.itrocket.net/websocket'
                },
                {
                    type: 'API',
                    url: 'https://story-mainnet-api.itrocket.net'
                },
                {
                    type: 'Custom REST API (20 req/s max)',
                    url: 'https://api.story-mainnet.itrocket.net'
                }
            ],
            evm: [
                {
                    type: 'JSON RPC',
                    url: 'https://story-mainnet-evm.itrocket.net:443'
                },
                {
                    type: 'Websocket',
                    url: 'wss://story-mainnet-evm.itrocket.net'
                }
            ],
            snapshots: {
                url: 'https://itrocket.net/services/mainnet/story/'
            },
            tools: [
                {
                    name: 'Validators Performance',
                    url: 'https://itrocket.net/services/mainnet/story/analytics/validators-performance/'
                },
                {
                    name: 'Decentralization Analytics',
                    url: 'https://itrocket.net/services/mainnet/story/decentralization/'
                },
                {
                    name: 'Public RPC Scanner',
                    url: 'https://itrocket.net/services/mainnet/story/public-rpc/'
                },
                {
                    name: 'Consensus',
                    url: 'https://itrocket.net/services/mainnet/story/analytics/consensus/'
                },
                {
                    name: 'Monitoring Script',
                    url: 'https://itrocket.net/services/mainnet/story/monitoring/'
                }
            ]
        };

        mainContainer.innerHTML = `
            <div class="validator-card p-6 mb-6">
                <div class="flex items-center gap-3 mb-6">
                    <div class="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                        <span class="text-sm font-bold text-black">${itRocketData.icon}</span>
                    </div>
                    <span class="text-white font-semibold text-lg">${itRocketData.name}</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <div class="mb-6">
                            <h4 class="text-sm font-semibold text-gray-300 mb-3">Services:</h4>
                            <a href="${itRocketData.services.url}"
                                class="text-blue-400 hover:text-blue-300 text-sm block transition-colors">
                                ${itRocketData.services.url}
                            </a>
                        </div>

                        <div class="mb-6">
                            <h4 class="text-sm font-semibold text-gray-300 mb-3">Endpoints (Archive):</h4>
                            <div class="space-y-2 text-sm">
                                ${itRocketData.endpoints.map(endpoint => `
                                    <div>
                                        <span class="text-gray-400">• ${endpoint.type}:</span>
                                        <a href="${endpoint.url}"
                                            class="text-blue-400 hover:text-blue-300 ml-1 transition-colors block md:inline">
                                            ${endpoint.url}
                                        </a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <div class="mb-6">
                            <h4 class="text-sm font-semibold text-gray-300 mb-3">Ethereum Virtual Machine (EVM):</h4>
                            <div class="space-y-2 text-sm">
                                ${itRocketData.evm.map(evm => `
                                    <div>
                                        <span class="text-gray-400">• ${evm.type}:</span>
                                        <a href="${evm.url}"
                                            class="text-blue-400 hover:text-blue-300 ml-1 transition-colors block md:inline">
                                            ${evm.url}
                                        </a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="mb-6">
                            <h4 class="text-sm font-semibold text-gray-300 mb-3">Snapshots:</h4>
                            <a href="${itRocketData.snapshots.url}"
                                class="text-blue-400 hover:text-blue-300 text-sm transition-colors">
                                ${itRocketData.snapshots.url}
                            </a>
                        </div>

                        <div>
                            <h4 class="text-sm font-semibold text-gray-300 mb-3">Tools:</h4>
                            <div class="space-y-2 text-sm">
                                ${itRocketData.tools.map(tool => `
                                    <div>
                                        <span class="text-gray-400">• ${tool.name}:</span>
                                        <a href="${tool.url}"
                                            class="text-blue-400 hover:text-blue-300 ml-1 transition-colors block md:inline">
                                            ${tool.url}
                                        </a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    attachEventListeners() {
        const navButtons = document.querySelectorAll('[data-tab]');
        navButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleTabSwitch(e.target.dataset.tab);
            });
        });

        const searchInput = document.getElementById('moniker-search');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });
        }
    }



    handleTabSwitch(tabName) {
        const navButtons = document.querySelectorAll('[data-tab]');
        navButtons.forEach(button => {
            if (button.dataset.tab === tabName) {
                button.className = 'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 w-[140px] text-center text-purple-300 hover:text-gray-300';
            } else {
                button.className = 'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 w-[140px] text-center text-white hover:text-gray-300';
            }
            button.style.cssText = "background-image: url('media/ramp.svg'); background-size: 100% 100%; background-repeat: no-repeat;";
        });

        this.updateMainContent(tabName);
        console.log(`Switched to tab: ${tabName}`);
    }

    updateMainContent(tabName) {
        const mainContainer = document.getElementById('main-content');
        if (!mainContainer) return;

        const itRocketData = {
            name: 'ITRocket',
            icon: 'IT',
            services: { url: 'https://itrocket.net/services/mainnet/story/' },
            endpoints: [
                { type: 'RPC', url: 'https://story-mainnet-rpc.itrocket.net' },
                { type: 'Websocket', url: 'wss://story-mainnet-rpc.itrocket.net/websocket' },
                { type: 'API', url: 'https://story-mainnet-api.itrocket.net' },
                { type: 'Custom REST API (20 req/s max)', url: 'https://api.story-mainnet.itrocket.net' }
            ],
            evm: [
                { type: 'JSON RPC', url: 'https://story-mainnet-evm.itrocket.net:443' },
                { type: 'Websocket', url: 'wss://story-mainnet-evm.itrocket.net' }
            ],
            snapshots: { url: 'https://itrocket.net/services/mainnet/story/' },
            tools: [
                { name: 'Validators Performance', url: 'https://itrocket.net/services/mainnet/story/analytics/validators-performance/' },
                { name: 'Decentralization Analytics', url: 'https://itrocket.net/services/mainnet/story/decentralization/' },
                { name: 'Public RPC Scanner', url: 'https://itrocket.net/services/mainnet/story/public-rpc/' },
                { name: 'Consensus', url: 'https://itrocket.net/services/mainnet/story/analytics/consensus/' },
                { name: 'Monitoring Script', url: 'https://itrocket.net/services/mainnet/story/monitoring/' }
            ]
        };

        let content = '';

        switch (tabName) {
            case 'overview':
                content = `
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <div class="mb-6">
                                <h4 class="text-sm font-semibold text-gray-300 mb-3">Services:</h4>
                                <a href="${itRocketData.services.url}" class="text-blue-400 hover:text-blue-300 text-sm block transition-colors">${itRocketData.services.url}</a>
                            </div>
                            <div class="mb-6">
                                <h4 class="text-sm font-semibold text-gray-300 mb-3">Endpoints (Archive):</h4>
                                <div class="space-y-2 text-sm">
                                    ${itRocketData.endpoints.slice(0, 2).map(endpoint => `
                                        <div><span class="text-gray-400">• ${endpoint.type}:</span>
                                        <a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 ml-1 transition-colors block md:inline">${endpoint.url}</a></div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="mb-6">
                                <h4 class="text-sm font-semibold text-gray-300 mb-3">Snapshots:</h4>
                                <a href="${itRocketData.snapshots.url}" class="text-blue-400 hover:text-blue-300 text-sm transition-colors">${itRocketData.snapshots.url}</a>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-gray-300 mb-3">Tools:</h4>
                                <div class="space-y-2 text-sm">
                                    ${itRocketData.tools.slice(0, 2).map(tool => `
                                        <div><span class="text-gray-400">• ${tool.name}:</span>
                                        <a href="${tool.url}" class="text-blue-400 hover:text-blue-300 ml-1 transition-colors block md:inline">${tool.url}</a></div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>`;
                break;

            case 'service-endpoints':
                content = `
                    <div class="space-y-6">
                        <div class="mb-6">
                            <h4 class="text-sm font-semibold text-gray-300 mb-3">Endpoints (Archive):</h4>
                            <div class="space-y-2 text-sm">
                                ${itRocketData.endpoints.map(endpoint => `
                                    <div><span class="text-gray-400">• ${endpoint.type}:</span>
                                    <a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 ml-1 transition-colors block md:inline">${endpoint.url}</a></div>
                                `).join('')}
                            </div>
                        </div>
                        <div class="mb-6">
                            <h4 class="text-sm font-semibold text-gray-300 mb-3">Ethereum Virtual Machine (EVM):</h4>
                            <div class="space-y-2 text-sm">
                                ${itRocketData.evm.map(evm => `
                                    <div><span class="text-gray-400">• ${evm.type}:</span>
                                    <a href="${evm.url}" class="text-blue-400 hover:text-blue-300 ml-1 transition-colors block md:inline">${evm.url}</a></div>
                                `).join('')}
                            </div>
                        </div>
                    </div>`;
                break;

            case 'snapshots':
                content = `
                    <div class="space-y-6">
                        <div class="mb-6">
                            <h4 class="text-sm font-semibold text-gray-300 mb-3">Snapshots:</h4>
                            <a href="${itRocketData.snapshots.url}" class="text-blue-400 hover:text-blue-300 text-sm transition-colors">${itRocketData.snapshots.url}</a>
                            <p class="text-gray-400 text-sm mt-2">Download the latest blockchain snapshots to quickly sync your node with the Story network.</p>
                        </div>
                    </div>`;
                break;

            case 'explorers':
                content = `
                    <div class="space-y-6">
                        <div class="mb-6">
                            <h4 class="text-sm font-semibold text-gray-300 mb-3">Block Explorers:</h4>
                            <div class="space-y-2 text-sm">
                                <div><span class="text-gray-400">• Story Explorer:</span>
                                <a href="https://explorer.story.foundation" class="text-blue-400 hover:text-blue-300 ml-1 transition-colors block md:inline">https://explorer.story.foundation</a></div>
                                <div><span class="text-gray-400">• ITRocket Explorer:</span>
                                <a href="https://mainnet.itrocket.net/story" class="text-blue-400 hover:text-blue-300 ml-1 transition-colors block md:inline">https://mainnet.itrocket.net/story</a></div>
                            </div>
                        </div>
                    </div>`;
                break;

            case 'tools':
                content = `
                    <div class="space-y-6">
                        <div>
                            <h4 class="text-sm font-semibold text-gray-300 mb-3">Validator Tools:</h4>
                            <div class="space-y-2 text-sm">
                                ${itRocketData.tools.map(tool => `
                                    <div><span class="text-gray-400">• ${tool.name}:</span>
                                    <a href="${tool.url}" class="text-blue-400 hover:text-blue-300 ml-1 transition-colors block md:inline">${tool.url}</a></div>
                                `).join('')}
                            </div>
                        </div>
                    </div>`;
                break;

            case 'all':
                content = `
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <div class="mb-6">
                                <h4 class="text-sm font-semibold text-gray-300 mb-3">Services:</h4>
                                <a href="${itRocketData.services.url}" class="text-blue-400 hover:text-blue-300 text-sm block transition-colors">${itRocketData.services.url}</a>
                            </div>
                            <div class="mb-6">
                                <h4 class="text-sm font-semibold text-gray-300 mb-3">Endpoints (Archive):</h4>
                                <div class="space-y-2 text-sm">
                                    ${itRocketData.endpoints.map(endpoint => `
                                        <div><span class="text-gray-400">• ${endpoint.type}:</span>
                                        <a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 ml-1 transition-colors block md:inline">${endpoint.url}</a></div>
                                    `).join('')}
                                </div>
                            </div>
                            <div class="mb-6">
                                <h4 class="text-sm font-semibold text-gray-300 mb-3">Ethereum Virtual Machine (EVM):</h4>
                                <div class="space-y-2 text-sm">
                                    ${itRocketData.evm.map(evm => `
                                        <div><span class="text-gray-400">• ${evm.type}:</span>
                                        <a href="${evm.url}" class="text-blue-400 hover:text-blue-300 ml-1 transition-colors block md:inline">${evm.url}</a></div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="mb-6">
                                <h4 class="text-sm font-semibold text-gray-300 mb-3">Snapshots:</h4>
                                <a href="${itRocketData.snapshots.url}" class="text-blue-400 hover:text-blue-300 text-sm transition-colors">${itRocketData.snapshots.url}</a>
                            </div>
                            <div class="mb-6">
                                <h4 class="text-sm font-semibold text-gray-300 mb-3">Block Explorers:</h4>
                                <div class="space-y-2 text-sm">
                                    <div><span class="text-gray-400">• Story Explorer:</span>
                                    <a href="https://explorer.story.foundation" class="text-blue-400 hover:text-blue-300 ml-1 transition-colors block md:inline">https://explorer.story.foundation</a></div>
                                    <div><span class="text-gray-400">• ITRocket Explorer:</span>
                                    <a href="https://mainnet.itrocket.net/story" class="text-blue-400 hover:text-blue-300 ml-1 transition-colors block md:inline">https://mainnet.itrocket.net/story</a></div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-gray-300 mb-3">Validator Tools:</h4>
                                <div class="space-y-2 text-sm">
                                    ${itRocketData.tools.map(tool => `
                                        <div><span class="text-gray-400">• ${tool.name}:</span>
                                        <a href="${tool.url}" class="text-blue-400 hover:text-blue-300 ml-1 transition-colors block md:inline">${tool.url}</a></div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>`;
                break;

            default:
                content = `<p class="text-gray-400">Select a tab to view content</p>`;
        }

        mainContainer.innerHTML = `
            <div class="validator-card p-6 mb-6">
                <div class="flex items-center gap-3 mb-6">
                    <div class="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                        <span class="text-sm font-bold text-black">${itRocketData.icon}</span>
                    </div>
                    <span class="text-white font-semibold text-lg">${itRocketData.name}</span>
                </div>
                ${content}
            </div>
        `;
    }

    handleSearch(query) {
        console.log(`Searching for: ${query}`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ValidatorContent();
});