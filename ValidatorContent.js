class ValidatorContent {
    constructor() {
        this.init();
    }

    init() {
        this.renderCombinedNavigation();
        this.renderMainContent();
        this.attachEventListeners();
        this.updateMainContent('overview');
    }



    renderCombinedNavigation() {
        const networkContainer = document.getElementById('network-info');
        if (!networkContainer) return;

        const navButtons = [
            { name: 'Overview', active: true },
            { name: 'Service', active: false },
            { name: 'Endpoints', active: false },
            { name: 'Snapshots', active: false },
            { name: 'Explorers', active: false },
            { name: 'Tools', active: false }
        ];

        networkContainer.innerHTML = `
            <div class="validator-card bg-transparent p-6 mb-6">
            
                <div class="flex flex-wrap justify-start gap-2 mb-6">
                    ${navButtons.map(button => `
                        <button class="px-2 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 min-w-[90px] sm:min-w-[120px] text-center ${button.active ? 'text-purple-300' : 'text-white'} hover:text-gray-300 flex-shrink-0" 
                        style="background-image: url('media/ramp.svg'); background-size: 100% 100%; background-repeat: no-repeat;"
                        data-tab="${button.name.toLowerCase().replace(/\s+/g, '-')}">
                            ${button.name}
                        </button>
                    `).join('')}
                </div>
                
                <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                    <h3 class="text-lg sm:text-xl font-bold text-white">Network: Mainnet (story-1)</h3>
                    <div class="flex items-center gap-2">
                        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span class="text-sm text-gray-300">Online</span>
                    </div>
                </div>
                
                <div class="relative">
                    <input type="text" 
                           placeholder="search by moniker" 
                           id="moniker-search"
                           class="w-full sm:w-48 px-3 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors">
                </div>
            </div>
        `;
    }

    renderMainContent() {
        const mainContainer = document.getElementById('main-content');
        if (!mainContainer) return;

        const storyData = {
            name: 'Story Network Services & Endpoints',
            icon: 'S',
            resources: [
                {
                    name: 'Documentation',
                    url: 'https://docs.story.foundation/introduction'
                },
                {
                    name: 'Website',
                    url: 'https://www.story.foundation'
                },
                {
                    name: 'Github',
                    url: 'https://github.com/storyprotocol'
                },
                {
                    name: 'Linktree',
                    url: 'https://linktr.ee/storyprotocol'
                },
                {
                    name: 'Staking Dashboard',
                    url: 'https://staking.story.foundation'
                }
            ],
            endpoints: [
                {
                    type: 'RPC',
                    url: 'https://mainnet.storyrpc.io'
                },
                {
                    type: 'API',
                    url: 'https://api.storyapis.com'
                },
                {
                    type: 'Chainlist link',
                    url: 'https://chainlist.org/chain/1514'
                }
            ],
            explorers: [
                {
                    name: 'Story Explorer',
                    url: 'https://explorer.story.foundation'
                },
                {
                    name: 'StoryScan',
                    url: 'https://www.storyscan.io/'
                }
            ]
        };

        mainContainer.innerHTML = `
            <div class="validator-card bg-transparent p-6 mb-6">
                <div class="flex items-center gap-3 mb-6">
                    <div class="w-8 h-8 rounded overflow-hidden">
                        <img src="https://pbs.twimg.com/profile_images/1820303986349805569/MKfPfLtz_400x400.jpg" alt="Story" class="w-full h-full object-cover">
                    </div>
                    <span class="text-white font-semibold text-lg">${storyData.name}</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-6">
                    <div>
                        <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Services:</h4>
                        <div class="space-y-3 text-sm">
                            ${storyData.resources.map(resource => `
                                <div class="break-words">
                                    <span class="text-gray-400">• ${resource.name}:</span>
                                    <a href="${resource.url}"
                                        class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">
                                        ${resource.url}
                                    </a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div>
                        <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Endpoints:</h4>
                        <div class="space-y-3 text-sm">
                            ${storyData.endpoints.map(endpoint => `
                                <div class="break-words">
                                    <span class="text-gray-400">• ${endpoint.type}:</span>
                                    <a href="${endpoint.url}"
                                        class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">
                                        ${endpoint.url}
                                    </a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div>
                        <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Explorer:</h4>
                        <div class="space-y-3 text-sm">
                            ${storyData.explorers.map(explorer => `
                                <div class="break-words">
                                    <span class="text-gray-400">•</span>
                                    <a href="${explorer.url}"
                                        class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all underline">
                                        ${explorer.url}
                                    </a>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>

            <div class="validator-card bg-transparent p-6 mb-6">
                <div class="flex items-center gap-3 mb-6">
                    <div class="w-8 h-8 rounded overflow-hidden">
                        <img src="https://pbs.twimg.com/profile_images/1896887737568907264/4-JzLf1a_400x400.jpg" alt="ITRocket" class="w-full h-full object-cover">
                    </div>
                    <span class="text-white font-semibold text-lg">ITRocket</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-6">
                    <div>
                        <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Services:</h4>
                        <div class="space-y-2 text-sm">
                            <div class="break-words">
                                <span class="text-gray-400">•</span>
                                <a href="https://itrocket.net/services/mainnet/story/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://itrocket.net/services/mainnet/story/</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Endpoints (Archive):</h4>
                        <div class="space-y-2 text-sm">
                            <div class="break-words">
                                <span class="text-gray-400">• RPC:</span>
                                <a href="https://story-mainnet-rpc.itrocket.net" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-mainnet-rpc.itrocket.net</a>
                            </div>
                            <div class="break-words">
                                <span class="text-gray-400">• Websocket:</span>
                                <a href="wss://story-mainnet-ws.itrocket.net" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">wss://story-mainnet-ws.itrocket.net</a>
                            </div>
                            <div class="break-words">
                                <span class="text-gray-400">• API:</span>
                                <a href="https://story-mainnet-api.itrocket.net" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-mainnet-api.itrocket.net</a>
                            </div>
                            <div class="break-words">
                                <span class="text-gray-400">• Cosmos REST API (on port 5317):</span>
                                <a href="https://story-mainnet.itrocket.net" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-mainnet.itrocket.net</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">EVM & Tools:</h4>
                        <div class="space-y-2 text-sm">
                            <div class="break-words">
                                <span class="text-gray-400">• JSON RPC:</span>
                                <a href="https://story-mainnet-evm.itrocket.net" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-mainnet-evm.itrocket.net</a>
                            </div>
                            <div class="break-words">
                                <span class="text-gray-400">• Websocket:</span>
                                <a href="wss://story-mainnet-ws.itrocket.net" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">wss://story-mainnet-ws.itrocket.net</a>
                            </div>
                        </div>
                        
                        <h4 class="text-sm font-semibold text-gray-300 mb-3 mt-6 underline">Snapshots:</h4>
                        <div class="space-y-2 text-sm">
                            <div class="break-words">
                                <span class="text-gray-400">•</span>
                                <a href="https://itrocket.net/services/mainnet/story/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://itrocket.net/services/mainnet/story/</a>
                            </div>
                        </div>

                        <h4 class="text-sm font-semibold text-gray-300 mb-3 mt-6 underline">Tools:</h4>
                        <div class="space-y-2 text-sm">
                            <div class="break-words">
                                <span class="text-gray-400">• Validators Performance:</span>
                                <a href="https://itrocket.net/services/mainnet/story/analytics/validators-performance/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">Analytics</a>
                            </div>
                            <div class="break-words">
                                <span class="text-gray-400">• Decentralization Analytics:</span>
                                <a href="https://itrocket.net/services/mainnet/story/decentralization/relayers/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">Analytics</a>
                            </div>
                            <div class="break-words">
                                <span class="text-gray-400">• Public RPC Scanner:</span>
                                <a href="https://itrocket.net/services/mainnet/story/public-rpc/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">Scanner</a>
                            </div>
                            <div class="break-words">
                                <span class="text-gray-400">• Consensus:</span>
                                <a href="https://itrocket.net/services/mainnet/story/analytics/consensus/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">Analytics</a>
                            </div>
                            <div class="break-words">
                                <span class="text-gray-400">• Monitoring Script:</span>
                                <a href="https://itrocket.net/services/mainnet/story/monitoring/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">Script</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="validator-card bg-transparent p-6 mb-6">
                <div class="flex items-center gap-3 mb-6">
                    <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                        <span class="text-sm font-bold text-white">NS</span>
                    </div>
                    <span class="text-white font-semibold text-lg">NodeStake</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-6">
                    <div>
                        <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Service:</h4>
                        <div class="space-y-2 text-sm">
                            <div class="break-words">
                                <span class="text-gray-400">•</span>
                                <a href="https://nodestake.org/story" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://nodestake.org/story</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Endpoints:</h4>
                        <div class="space-y-2 text-sm">
                            <div class="break-words">
                                <span class="text-gray-400">• RPC:</span>
                                <a href="https://rpc.story.nodestake.org:443" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://rpc.story.nodestake.org:443</a>
                            </div>
                            <div class="break-words">
                                <span class="text-gray-400">• gRPC:</span>
                                <a href="grpc.story.nodestake.org:443" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">grpc.story.nodestake.org:443</a>
                            </div>
                            <div class="break-words">
                                <span class="text-gray-400">• API:</span>
                                <a href="https://api.story.nodestake.org:443" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://api.story.nodestake.org:443</a>
                            </div>
                            <div class="break-words">
                                <span class="text-gray-400">• Peer:</span>
                                <a href="https://ss.story.nodestake.org/peers.txt" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://ss.story.nodestake.org/peers.txt</a>
                            </div>
                            <div class="break-words">
                                <span class="text-gray-400">• Seed:</span>
                                <span class="text-blue-400 ml-1 break-all">327fb4151de9f78f29ff10714085e347a4e3c836@rpc.story.nodestake.org:666</span>
                            </div>
                            <div class="break-words">
                                <span class="text-gray-400">• Addrbook:</span>
                                <a href="https://ss.story.nodestake.org/addrbook.json" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://ss.story.nodestake.org/addrbook.json</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Ethereum Virtual Machine (EVM):</h4>
                        <div class="space-y-2 text-sm">
                            <div class="break-words">
                                <span class="text-gray-400">• JSON-RPC:</span>
                                <a href="https://evmrpc.story.nodestake.org" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://evmrpc.story.nodestake.org</a>
                            </div>
                        </div>
                        
                        <h4 class="text-sm font-semibold text-gray-300 mb-3 mt-6 underline">Snapshot:</h4>
                        <div class="space-y-2 text-sm">
                            <div class="break-words">
                                <span class="text-gray-400">•</span>
                                <a href="https://nodestake.org/story" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://nodestake.org/story</a>
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
                button.className = 'px-2 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 min-w-[90px] sm:min-w-[120px] text-center text-purple-300 hover:text-gray-300 flex-shrink-0';
            } else {
                button.className = 'px-2 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 min-w-[90px] sm:min-w-[120px] text-center text-white hover:text-gray-300 flex-shrink-0';
            }
            button.style.cssText = "background-image: url('media/ramp.svg'); background-size: 100% 100%; background-repeat: no-repeat;";
        });

        this.updateMainContent(tabName);
        console.log(`Switched to tab: ${tabName}`);
    }

    updateMainContent(tabName) {
        const mainContainer = document.getElementById('main-content');
        if (!mainContainer) return;

        const storyData = {
            name: 'Story Network Services & Endpoints',
            icon: 'S',
            resources: [
                { name: 'Documentation', url: 'https://docs.story.foundation/introduction' },
                { name: 'Website', url: 'https://www.story.foundation' },
                { name: 'Github', url: 'https://github.com/storyprotocol' },
                { name: 'Linktree', url: 'https://linktr.ee/storyprotocol' },
                { name: 'Staking Dashboard', url: 'https://staking.story.foundation' }
            ],
            endpoints: [
                { type: 'RPC', url: 'https://mainnet.storyrpc.io' },
                { type: 'API', url: 'https://api.storyapis.com' },
                { type: 'Chainlist link', url: 'https://chainlist.org/chain/1514' }
            ],
            explorers: [
                { name: 'Story Explorer', url: 'https://explorer.story.foundation' },
                { name: 'StoryScan', url: 'https://www.storyscan.io/' }
            ]
        };

        const itrocketData = {
            name: 'ITRocket',
            icon: 'IT',
            services: [
                { name: 'Services', url: 'https://itrocket.net/services/mainnet/story/' }
            ],
            endpoints: [
                { type: 'RPC', url: 'https://story-mainnet-rpc.itrocket.net' },
                { type: 'Websocket', url: 'wss://story-mainnet-ws.itrocket.net' },
                { type: 'API', url: 'https://story-mainnet-api.itrocket.net' },
                { type: 'Cosmos REST API (on port 5317)', url: 'https://story-mainnet.itrocket.net' },
                { type: 'JSON RPC', url: 'https://story-mainnet-evm.itrocket.net' }
            ],
            snapshots: [
                { name: 'Snapshots', url: 'https://itrocket.net/services/mainnet/story/' }
            ],
            tools: [
                { name: 'Validators Performance', url: 'https://itrocket.net/services/mainnet/story/analytics/validators-performance/' },
                { name: 'Decentralization Analytics', url: 'https://itrocket.net/services/mainnet/story/decentralization/relayers/' },
                { name: 'Public RPC Scanner', url: 'https://itrocket.net/services/mainnet/story/public-rpc/' },
                { name: 'Consensus', url: 'https://itrocket.net/services/mainnet/story/analytics/consensus/' },
                { name: 'Monitoring Script', url: 'https://itrocket.net/services/mainnet/story/monitoring/' }
            ]
        };

        const nodesGuruData = {
            name: 'Nodes.Guru',
            icon: 'NG',
            explorers: [
                { name: 'Story Explorer', url: 'https://story.explorers.guru' }
            ]
        };

        const nodestakeData = {
            name: 'Nodestake',
            icon: 'NS',
            services: [
                { name: 'Services', url: 'https://nodestake.org/story' }
            ],
            endpoints: [
                { type: 'RPC', url: 'https://rpc.story.nodestake.org' },
                { type: 'API', url: 'https://api.story.nodestake.org' },
                { type: 'gRPC', url: 'https://grpc.story.nodestake.org' },
                { type: 'JSON-RPC', url: 'https://evmrpc.story.nodestake.org' }
            ],
            snapshots: [
                { name: 'Snapshot', url: 'https://nodestake.org/story' }
            ],
            tools: [
                { name: 'Addrbook', url: 'https://ss.story.nodestake.org/addrbook.json' }
            ]
        };

        const nodeStakeData = {
            name: 'NodeStake',
            icon: 'NS',
            services: [
                { name: 'Service', url: 'https://nodestake.org/story' }
            ],
            endpoints: [
                { type: 'RPC', url: 'https://rpc.story.nodestake.org:443' },
                { type: 'gRPC', url: 'grpc.story.nodestake.org:443' },
                { type: 'API', url: 'https://api.story.nodestake.org:443' },
                { type: 'Peer', url: 'https://ss.story.nodestake.org/peers.txt' },
                { type: 'Seed', url: '327fb4151de9f78f29ff10714085e347a4e3c836@rpc.story.nodestake.org:666' },
                { type: 'Addrbook', url: 'https://ss.story.nodestake.org/addrbook.json' }
            ],
            evm: [
                { type: 'JSON-RPC', url: 'https://evmrpc.story.nodestake.org' }
            ],
            snapshots: [
                { name: 'Snapshot', url: 'https://nodestake.org/story' }
            ]
        };

        let content = '';

        switch (tabName) {
            case 'overview':
                content = `
                    <div class="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-6">
                        <div>
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Services:</h4>
                            <div class="space-y-3 text-sm">
                                ${storyData.resources.map(resource => `
                                    <div class="break-words">
                                        <span class="text-gray-400">• ${resource.name}:</span>
                                        <a href="${resource.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${resource.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div>
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Endpoints:</h4>
                            <div class="space-y-3 text-sm">
                                ${storyData.endpoints.map(endpoint => `
                                    <div class="break-words">
                                        <span class="text-gray-400">• ${endpoint.type}:</span>
                                        <a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div>
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Explorer:</h4>
                            <div class="space-y-3 text-sm">
                                ${storyData.explorers.map(explorer => `
                                    <div class="break-words">
                                        <span class="text-gray-400">•</span>
                                        <a href="${explorer.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all underline">${explorer.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>`;
                break;

            case 'service':
                content = `
                    <div class="max-w-2xl">
                        <div class="mb-6">
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Services:</h4>
                            <div class="space-y-3 text-sm">
                                ${storyData.resources.map(resource => `
                                    <div class="break-words">
                                        <span class="text-gray-400">• ${resource.name}:</span>
                                        <a href="${resource.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${resource.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>`;
                break;

            case 'endpoints':
                content = `
                    <div class="max-w-2xl">
                        <div class="mb-6">
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Endpoints:</h4>
                            <div class="space-y-3 text-sm">
                                ${storyData.endpoints.map(endpoint => `
                                    <div class="break-words">
                                        <span class="text-gray-400">• ${endpoint.type}:</span>
                                        <a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>`;
                break;

            case 'snapshots':
                content = `
                    <div class="max-w-2xl">
                        <div class="mb-6">
                            <h4 class="text-sm font-semibold text-gray-300 mb-3">Snapshots:</h4>
                            <p class="text-gray-400 text-sm leading-relaxed">Snapshots are not available through official Story Network resources. Please check community providers for blockchain snapshots.</p>
                        </div>
                    </div>`;
                break;

            case 'explorers':
                content = `
                    <div class="max-w-2xl">
                        <div class="mb-6">
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Explorer:</h4>
                            <div class="space-y-3 text-sm">
                                ${storyData.explorers.map(explorer => `
                                    <div class="break-words">
                                        <span class="text-gray-400">•</span>
                                        <a href="${explorer.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all underline">${explorer.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>`;
                break;

            case 'tools':
                content = `
                    <div class="max-w-2xl">
                        <div class="mb-6">
                            <h4 class="text-sm font-semibold text-gray-300 mb-3">Tools:</h4>
                            <p class="text-gray-400 text-sm leading-relaxed">Additional tools and utilities are available through the official Story Network resources listed in the Service section.</p>
                        </div>
                    </div>`;
                break;



            default:
                content = `<p class="text-gray-400">Select a tab to view content</p>`;
        }

        mainContainer.innerHTML = `
            <div class="validator-card bg-transparent p-6 mb-6">
                <div class="flex items-center gap-3 mb-6">
                    <div class="w-8 h-8 rounded overflow-hidden">
                        <img src="https://pbs.twimg.com/profile_images/1820303986349805569/MKfPfLtz_400x400.jpg" alt="Story" class="w-full h-full object-cover">
                    </div>
                    <span class="text-white font-semibold text-lg">${storyData.name}</span>
                </div>
                ${content}
            </div>

            <div class="validator-card bg-transparent p-6 mb-6">
                <div class="flex items-center gap-3 mb-6">
                    <div class="w-8 h-8 rounded overflow-hidden">
                        <img src="https://pbs.twimg.com/profile_images/1896887737568907264/4-JzLf1a_400x400.jpg" alt="ITRocket" class="w-full h-full object-cover">
                    </div>
                    <span class="text-white font-semibold text-lg">${itrocketData.name}</span>
                </div>
                ${this.getITRocketContent(tabName, itrocketData)}
            </div>

            <div class="validator-card bg-transparent p-6 mb-6">
                <div class="flex items-center gap-3 mb-6">
                    <div class="w-8 h-8 rounded overflow-hidden">
                        <img src="https://pbs.twimg.com/profile_images/1753055196618317824/sZTAPNfK_400x400.png" alt="Nodes.Guru" class="w-full h-full object-cover">
                    </div>
                    <span class="text-white font-semibold text-lg">${nodesGuruData.name}</span>
                </div>
                ${this.getNodesGuruContent(tabName, nodesGuruData)}
            </div>

            <div class="validator-card bg-transparent p-6 mb-6">
                <div class="flex items-center gap-3 mb-6">
                    <div class="w-8 h-8 rounded overflow-hidden">
                        <img src="https://pbs.twimg.com/profile_images/1656150389518139393/XIWb60AJ_400x400.jpg" alt="Nodestake" class="w-full h-full object-cover">
                    </div>
                    <span class="text-white font-semibold text-lg">${nodestakeData.name}</span>
                </div>
                ${this.getNodeStakeContent(tabName, nodeStakeData)}
            </div>
        `;
    }

    getITRocketContent(tabName, itrocketData) {
        switch (tabName) {
            case 'overview':
                return `
                    <div class="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-6">
                        <div>
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Services:</h4>
                            <div class="space-y-2 text-sm">
                                ${itrocketData.services.map(service => `
                                    <div class="break-words">
                                        <span class="text-gray-400">•</span>
                                        <a href="${service.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${service.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div>
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Endpoints:</h4>
                            <div class="space-y-2 text-sm">
                                ${itrocketData.endpoints.slice(0, 3).map(endpoint => `
                                    <div class="break-words">
                                        <span class="text-gray-400">• ${endpoint.type}:</span>
                                        <a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div>
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Tools:</h4>
                            <div class="space-y-2 text-sm">
                                ${itrocketData.tools.slice(0, 3).map(tool => `
                                    <div class="break-words">
                                        <span class="text-gray-400">• ${tool.name}:</span>
                                        <a href="${tool.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${tool.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>`;

            case 'service':
                return `
                    <div class="max-w-2xl">
                        <div class="mb-6">
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Services:</h4>
                            <div class="space-y-2 text-sm">
                                ${itrocketData.services.map(service => `
                                    <div class="break-words">
                                        <span class="text-gray-400">•</span>
                                        <a href="${service.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${service.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>`;

            case 'endpoints':
                return `
                    <div class="max-w-4xl">
                        <div class="mb-6">
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Endpoints (Archive):</h4>
                            <div class="space-y-2 text-sm">
                                ${itrocketData.endpoints.map(endpoint => `
                                    <div class="break-words">
                                        <span class="text-gray-400">• ${endpoint.type}:</span>
                                        <a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>`;

            case 'snapshots':
                return `
                    <div class="max-w-2xl">
                        <div class="mb-6">
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Snapshots:</h4>
                            <div class="space-y-2 text-sm">
                                ${itrocketData.snapshots.map(snapshot => `
                                    <div class="break-words">
                                        <span class="text-gray-400">•</span>
                                        <a href="${snapshot.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${snapshot.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>`;

            case 'tools':
                return `
                    <div class="max-w-4xl">
                        <div class="mb-6">
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Tools:</h4>
                            <div class="space-y-2 text-sm">
                                ${itrocketData.tools.map(tool => `
                                    <div class="break-words">
                                        <span class="text-gray-400">• ${tool.name}:</span>
                                        <a href="${tool.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${tool.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>`;

            case 'explorers':
                return `
                    <div class="max-w-2xl">
                        <div class="mb-6">
                            <p class="text-gray-400 text-sm leading-relaxed">ITRocket does not provide explorer services. Please check other providers or the official Story Network explorers.</p>
                        </div>
                    </div>`;

            default:
                return `
                    <div class="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-6">
                        <div>
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Services:</h4>
                            <div class="space-y-2 text-sm">
                                ${itrocketData.services.map(service => `
                                    <div class="break-words">
                                        <span class="text-gray-400">•</span>
                                        <a href="${service.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${service.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div>
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Endpoints:</h4>
                            <div class="space-y-2 text-sm">
                                ${itrocketData.endpoints.slice(0, 3).map(endpoint => `
                                    <div class="break-words">
                                        <span class="text-gray-400">• ${endpoint.type}:</span>
                                        <a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div>
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Tools:</h4>
                            <div class="space-y-2 text-sm">
                                ${itrocketData.tools.slice(0, 3).map(tool => `
                                    <div class="break-words">
                                        <span class="text-gray-400">• ${tool.name}:</span>
                                        <a href="${tool.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${tool.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>`;
        }
    }

    getNodesGuruContent(tabName, nodesGuruData) {
        switch (tabName) {
            case 'overview':
            case 'explorers':
                return `
                    <div class="max-w-2xl">
                        <div class="mb-6">
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Explorer:</h4>
                            <div class="space-y-2 text-sm">
                                ${nodesGuruData.explorers.map(explorer => `
                                    <div class="break-words">
                                        <span class="text-gray-400">•</span>
                                        <a href="${explorer.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${explorer.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>`;

            case 'service':
            case 'endpoints':
            case 'snapshots':
            case 'tools':
                return `
                    <div class="max-w-2xl">
                        <div class="mb-6">
                            <p class="text-gray-400 text-sm leading-relaxed">Nodes.Guru provides explorer services for Story Network.</p>
                        </div>
                    </div>`;

            default:
                return `
                    <div class="max-w-2xl">
                        <div class="mb-6">
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Explorer:</h4>
                            <div class="space-y-2 text-sm">
                                ${nodesGuruData.explorers.map(explorer => `
                                    <div class="break-words">
                                        <span class="text-gray-400">•</span>
                                        <a href="${explorer.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${explorer.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>`;
        }
    }

    getNodeStakeContent(tabName, nodeStakeData) {
        switch (tabName) {
            case 'overview':
                return `
                    <div class="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-6">
                        <div>
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Service:</h4>
                            <div class="space-y-2 text-sm">
                                ${nodeStakeData.services.map(service => `
                                    <div class="break-words">
                                        <span class="text-gray-400">•</span>
                                        <a href="${service.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${service.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div>
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Endpoints:</h4>
                            <div class="space-y-2 text-sm">
                                ${nodeStakeData.endpoints.slice(0, 4).map(endpoint => `
                                    <div class="break-words">
                                        <span class="text-gray-400">• ${endpoint.type}:</span>
                                        <a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div>
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Ethereum Virtual Machine (EVM):</h4>
                            <div class="space-y-2 text-sm">
                                ${nodeStakeData.evm.map(evm => `
                                    <div class="break-words">
                                        <span class="text-gray-400">• ${evm.type}:</span>
                                        <a href="${evm.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${evm.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                            
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 mt-6 underline">Snapshot:</h4>
                            <div class="space-y-2 text-sm">
                                ${nodeStakeData.snapshots.map(snapshot => `
                                    <div class="break-words">
                                        <span class="text-gray-400">•</span>
                                        <a href="${snapshot.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${snapshot.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>`;

            case 'service':
                return `
                    <div class="max-w-2xl">
                        <div class="mb-6">
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Service:</h4>
                            <div class="space-y-2 text-sm">
                                ${nodeStakeData.services.map(service => `
                                    <div class="break-words">
                                        <span class="text-gray-400">•</span>
                                        <a href="${service.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${service.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>`;

            case 'endpoints':
                return `
                    <div class="max-w-4xl">
                        <div class="mb-6">
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Endpoints:</h4>
                            <div class="space-y-2 text-sm">
                                ${nodeStakeData.endpoints.map(endpoint => `
                                    <div class="break-words">
                                        <span class="text-gray-400">• ${endpoint.type}:</span>
                                        <a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>`;

            case 'snapshots':
                return `
                    <div class="max-w-2xl">
                        <div class="mb-6">
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Snapshot:</h4>
                            <div class="space-y-2 text-sm">
                                ${nodeStakeData.snapshots.map(snapshot => `
                                    <div class="break-words">
                                        <span class="text-gray-400">•</span>
                                        <a href="${snapshot.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${snapshot.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>`;

            case 'explorers':
            case 'tools':
                return `
                    <div class="max-w-2xl">
                        <div class="mb-6">
                            <p class="text-gray-400 text-sm leading-relaxed">NodeStake provides comprehensive infrastructure services for Story Network including RPC, API, and snapshot services.</p>
                        </div>
                    </div>`;

            default:
                return `
                    <div class="max-w-2xl">
                        <div class="mb-6">
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Service:</h4>
                            <div class="space-y-2 text-sm">
                                ${nodeStakeData.services.map(service => `
                                    <div class="break-words">
                                        <span class="text-gray-400">•</span>
                                        <a href="${service.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${service.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>`;
        }
    }

    getNodestakeContent(tabName, nodestakeData) {
        switch (tabName) {
            case 'overview':
                return `
                    <div class="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-6">
                        <div>
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Services:</h4>
                            <div class="space-y-2 text-sm">
                                ${nodestakeData.services.map(service => `
                                    <div class="break-words">
                                        <span class="text-gray-400">•</span>
                                        <a href="${service.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${service.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div>
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Endpoints:</h4>
                            <div class="space-y-2 text-sm">
                                ${nodestakeData.endpoints.slice(0, 3).map(endpoint => `
                                    <div class="break-words">
                                        <span class="text-gray-400">• ${endpoint.type}:</span>
                                        <a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div>
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Snapshots:</h4>
                            <div class="space-y-2 text-sm">
                                ${nodestakeData.snapshots.map(snapshot => `
                                    <div class="break-words">
                                        <span class="text-gray-400">•</span>
                                        <a href="${snapshot.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${snapshot.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>`;

            case 'service':
                return `
                    <div class="max-w-2xl">
                        <div class="mb-6">
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Services:</h4>
                            <div class="space-y-2 text-sm">
                                ${nodestakeData.services.map(service => `
                                    <div class="break-words">
                                        <span class="text-gray-400">•</span>
                                        <a href="${service.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${service.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>`;

            case 'endpoints':
                return `
                    <div class="max-w-4xl">
                        <div class="mb-6">
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Endpoints:</h4>
                            <div class="space-y-2 text-sm">
                                ${nodestakeData.endpoints.map(endpoint => `
                                    <div class="break-words">
                                        <span class="text-gray-400">• ${endpoint.type}:</span>
                                        <a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>`;

            case 'snapshots':
                return `
                    <div class="max-w-2xl">
                        <div class="mb-6">
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Snapshots:</h4>
                            <div class="space-y-2 text-sm">
                                ${nodestakeData.snapshots.map(snapshot => `
                                    <div class="break-words">
                                        <span class="text-gray-400">•</span>
                                        <a href="${snapshot.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${snapshot.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>`;

            case 'tools':
                return `
                    <div class="max-w-2xl">
                        <div class="mb-6">
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Tools:</h4>
                            <div class="space-y-2 text-sm">
                                ${nodestakeData.tools.map(tool => `
                                    <div class="break-words">
                                        <span class="text-gray-400">• ${tool.name}:</span>
                                        <a href="${tool.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${tool.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>`;

            case 'explorers':
                return `
                    <div class="max-w-2xl">
                        <div class="mb-6">
                            <p class="text-gray-400 text-sm leading-relaxed">Nodestake provides infrastructure services for Story Network.</p>
                        </div>
                    </div>`;

            default:
                return `
                    <div class="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-6">
                        <div>
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Services:</h4>
                            <div class="space-y-2 text-sm">
                                ${nodestakeData.services.map(service => `
                                    <div class="break-words">
                                        <span class="text-gray-400">•</span>
                                        <a href="${service.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${service.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div>
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Endpoints:</h4>
                            <div class="space-y-2 text-sm">
                                ${nodestakeData.endpoints.slice(0, 3).map(endpoint => `
                                    <div class="break-words">
                                        <span class="text-gray-400">• ${endpoint.type}:</span>
                                        <a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div>
                            <h4 class="text-sm font-semibold text-gray-300 mb-3 underline">Snapshots:</h4>
                            <div class="space-y-2 text-sm">
                                ${nodestakeData.snapshots.map(snapshot => `
                                    <div class="break-words">
                                        <span class="text-gray-400">•</span>
                                        <a href="${snapshot.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${snapshot.url}</a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>`;
        }
    }

    handleSearch(query) {
        console.log(`Searching for: ${query}`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ValidatorContent();
});