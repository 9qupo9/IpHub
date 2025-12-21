class DeveloperContent {
    constructor() {
        this.init();
    }

    init() {
        this.renderCombinedNavigation();
        this.renderMainContent();
        this.attachEventListeners();
        this.updateMainContent('resources');
    }

    renderCombinedNavigation() {
        const networkContainer = document.getElementById('network-info');
        if (!networkContainer) return;

        const navButtons = [
            { name: 'Resources', active: true },
            { name: 'Endpoints', active: false },
            { name: 'SDK', active: false },
            { name: 'Explorers', active: false },
            { name: 'Faucet', active: false }
        ];

        networkContainer.innerHTML = `
            <div class="developer bg-transparent p-6 mb-6" style="font-family: 'Source Code Pro', monospace;">
                <div class="mb-4">
                    <h3 class="text-sm font-medium text-gray-400">Select the section you need:</h3>
                </div>
                
                <div class="flex flex-wrap gap-0.5 mb-6 -ml-2">
                    ${navButtons.map(button => `
                        <button class="px-2 py-2 font-medium rounded-lg transition-all duration-300 min-w-[90px] sm:min-w-[120px] text-center ${button.active ? 'text-purple-300' : 'text-white'} hover:text-gray-300 flex-shrink-0" 
                        style="background-image: url('media/ramp.svg'); background-size: 100% 100%; background-repeat: no-repeat; font-family: 'Source Code Pro', monospace; font-size: 10.71px;"
                        data-tab="${button.name.toLowerCase().replace(/\s+/g, '-')}">
                            ${button.name}
                        </button>
                    `).join('')}
                </div>
                
                <div id="unified-content-container" class="mt-6">
                </div>
            </div>
        `;
    }

    renderMainContent() {
        const mainContainer = document.getElementById('main-content');
        if (!mainContainer) return;
        mainContainer.innerHTML = '';
    }

    attachEventListeners() {
        const navButtons = document.querySelectorAll('[data-tab]');
        navButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleTabSwitch(e.target.dataset.tab);
            });
        });


    }

    handleTabSwitch(tabName) {
        const navButtons = document.querySelectorAll('[data-tab]');
        navButtons.forEach(button => {
            if (button.dataset.tab === tabName) {
                button.className = 'px-2 py-2 font-medium rounded-lg transition-all duration-300 min-w-[90px] sm:min-w-[120px] text-center text-purple-300 hover:text-gray-300 flex-shrink-0';
            } else {
                button.className = 'px-2 py-2 font-medium rounded-lg transition-all duration-300 min-w-[90px] sm:min-w-[120px] text-center text-white hover:text-gray-300 flex-shrink-0';
            }
            button.style.cssText = "background-image: url('media/ramp.svg'); background-size: 100% 100%; background-repeat: no-repeat; font-family: 'Source Code Pro', monospace; font-size: 10.71px;";
        });

        this.updateMainContent(tabName);
        console.log(`Switched to tab: ${tabName}`);
    }

    updateMainContent(tabName) {
        const unifiedContainer = document.getElementById('unified-content-container');
        if (!unifiedContainer) return;

        let content = '';

        switch (tabName) {
            case 'resources':
                content = `
                    <div class="developer bg-transparent p-6 mb-6" style="font-family: 'Source Code Pro', monospace;">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3 underline">General:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Website:</span>
                                        <a href="https://www.story.foundation" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://www.story.foundation</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Linktree:</span>
                                        <a href="https://linktr.ee/storyprotocol" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://linktr.ee/storyprotocol</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• LinkedIn:</span>
                                        <a href="https://www.linkedin.com/company/story-foundation" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://www.linkedin.com/company/story-foundation</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Youtube:</span>
                                        <a href="https://www.youtube.com/@StoryProt" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://www.youtube.com/@StoryProt</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Blog:</span>
                                        <a href="https://www.story.foundation/blog" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://www.story.foundation/blog</a>
                                    </div>
                                </div>

                                <h4 class="text-sm font-semibold text-white mb-3 mt-6 underline">For developers:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Documentation:</span>
                                        <a href="https://docs.story.foundation/introduction" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://docs.story.foundation/introduction</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Github:</span>
                                        <a href="https://github.com/storyprotocol" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/storyprotocol</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Whitepaper:</span>
                                        <a href="https://www.story.foundation/whitepaper.pdf" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://www.story.foundation/whitepaper.pdf</a>
                                    </div>
                                </div>

                                <h4 class="text-sm font-semibold text-white mb-3 mt-6 underline">Build & Learn:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Surreal World Assets Buildathon:</span>
                                        <a href="https://surrealism.lu.ma/build-hub" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://surrealism.lu.ma/build-hub</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Surreal World Assets Buildathon Season 2:</span>
                                        <a href="https://www.encode.club/surrealism-2" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://www.encode.club/surrealism-2</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Story Grant Application:</span>
                                        <a href="https://www.story.foundation/grants" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://www.story.foundation/grants</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Luma Story:</span>
                                        <a href="https://lu.ma/storyprotocol" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://lu.ma/storyprotocol</a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3 underline">Community:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Story Discord:</span>
                                        <a href="https://discord.gg/storyprotocol" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://discord.gg/storyprotocol</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Developer Discord:</span>
                                        <a href="https://discord.gg/story-builders" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://discord.gg/story-builders</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Twitter(X) Story:</span>
                                        <a href="https://x.com/StoryProtocol" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://x.com/StoryProtocol</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Twitter(X) Story Engineers:</span>
                                        <a href="https://x.com/StoryEng" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://x.com/StoryEng</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Forum:</span>
                                        <a href="https://forum.story.foundation" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://forum.story.foundation</a>
                                    </div>
                                </div>

                                <h4 class="text-sm font-semibold text-white mb-3 mt-6 underline">Official Platform:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• IP Portal:</span>
                                        <a href="https://app.test.story.foundation" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://app.test.story.foundation</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Staking Dashboard (Mainnet):</span>
                                        <a href="https://staking.story.foundation" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://staking.story.foundation</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Staking Dashboard (Testnet):</span>
                                        <a href="https://testnet.staking.story.foundation" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://testnet.story.foundation</a>
                                    </div>
                                </div>

                                <h4 class="text-sm font-semibold text-white mb-3 mt-6 underline">Other:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Ecosystem:</span>
                                        <a href="https://www.story.foundation/ecosystem" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://www.story.foundation/ecosystem</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Story Ecosystem Careers:</span>
                                        <a href="https://www.story.foundation/careers" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://www.story.foundation/careers</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Brand Kit:</span>
                                        <a href="https://www.story.foundation/brand-kit" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://www.story.foundation/brand-kit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
                break;

            case 'endpoints':
                content = `
                    <div class="developer bg-transparent p-6 mb-6" style="font-family: 'Source Code Pro', monospace;">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1999628458800861186/ZU_lIdNS_400x400.jpg" alt="Story" class="w-full h-full object-cover">
                            </div>
                            <h3 class="text-lg font-semibold text-white">Story Mainnet Network</h3>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3 underline">Network Info:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Status:</span>
                                        <a href="https://status.story.foundation" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://status.story.foundation</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Chain ID:</span>
                                        <span class="text-gray-300 ml-1">story-1</span>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Currency Symbol:</span>
                                        <span class="text-gray-300 ml-1">IP</span>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Chainlist Link:</span>
                                        <a href="https://chainlist.org/chain/1514" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://chainlist.org/chain/1514</a>
                                    </div>
                                </div>

                                <h4 class="text-sm font-semibold text-white mb-3 mt-6 underline">RPC Endpoints:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">Docs:</span>
                                        <a href="https://docs.story.foundation/network/connect/mainnet#resources" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://docs.story.foundation/network/connect/mainnet#resources</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://mainnet.storyrpc.io" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://mainnet.storyrpc.io</a>
                                        <span class="text-gray-400 ml-1">(Official)</span>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://rpc.ankr.com/story_mainnet" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://rpc.ankr.com/story_mainnet</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://www.owlstake.com/api/story" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://www.owlstake.com/api/story</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://tenderly.co/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://tenderly.co/</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://story-mainnet.g.alchemy.com/v2/{{ALCHEMY_API_KEY}}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://story-mainnet.g.alchemy.com/v2/{{ALCHEMY_API_KEY}}</a>
                                    </div>
                                </div>

                                <h4 class="text-sm font-semibold text-white mb-3 mt-6 underline">API Endpoints:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">Docs:</span>
                                        <a href="https://docs.story.foundation/api-reference/protocol/introduction" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://docs.story.foundation/api-reference/protocol/introduction</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Story:</span>
                                        <a href="https://api.storyapis.com" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://api.storyapis.com</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Blockscout API:</span>
                                        <a href="https://docs.story.foundation/api-reference/blockscout-api" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://docs.story.foundation/api-reference/blockscout-api</a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3 underline">Other:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Engine API JSON-RPC (EL/CL):</span>
                                        <a href="https://docs.story.foundation/network/learn/node-software/engine-api" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://docs.story.foundation/network/learn/node-software/engine-api</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• WebSocket:</span>
                                        <a href="https://docs.story.foundation/network/participate/validators/operate-your-node#enabling-rpc-http-and-websocket-in-geth" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://docs.story.foundation/network/participate/validators/operate-your-node#enabling-rpc-http-and-websocket-in-geth</a>
                                    </div>
                                </div>

                                <h4 class="text-sm font-semibold text-white mb-3 mt-6 underline">Node Software:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Story Node Software:</span>
                                        <a href="https://docs.story.foundation/network/learn/node-software" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://docs.story.foundation/network/learn/node-software</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Story Geth Client:</span>
                                        <a href="https://github.com/piplabs/story-geth" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/piplabs/story-geth</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Consensus Client (CometBFT):</span>
                                        <a href="https://github.com/cometbft/cometbft" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/cometbft/cometbft</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Genesis json:</span>
                                        <a href="https://github.com/piplabs/story/blob/main/client/genutil/testdata/genesis.json#4" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/piplabs/story/blob/main/client/genutil/testdata/genesis.json#4</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="developer bg-transparent p-6 mb-6" style="font-family: 'Source Code Pro', monospace;">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1999628458800861186/ZU_lIdNS_400x400.jpg" alt="Story" class="w-full h-full object-cover">
                            </div>
                            <h3 class="text-lg font-semibold text-white">Story Aeneid Testnet</h3>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3 underline">Network Info:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Status:</span>
                                        <a href="https://status.story.foundation" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://status.story.foundation</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Chain ID:</span>
                                        <span class="text-gray-300 ml-1">aeneid</span>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Currency Symbol:</span>
                                        <span class="text-gray-300 ml-1">IP</span>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Chainlist Link:</span>
                                        <a href="https://chainlist.org/chain/1315" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://chainlist.org/chain/1315</a>
                                    </div>
                                </div>

                                <h4 class="text-sm font-semibold text-white mb-3 mt-6 underline">RPC Endpoints:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">Docs:</span>
                                        <a href="https://docs.story.foundation/network/connect/aeneid#rpc" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://docs.story.foundation/network/connect/aeneid#rpc</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://aeneid.storyrpc.io" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://aeneid.storyrpc.io</a>
                                        <span class="text-gray-400 ml-1">(Official)</span>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://rpc.ankr.com/story_aeneid_testnet" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://rpc.ankr.com/story_aeneid_testnet</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://www.owlstake.com/api/story" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://www.owlstake.com/api/story</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://tenderly.co/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://tenderly.co/</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://story-aeneid.g.alchemy.com/v2/{{ALCHEMY_API_KEY}}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://story-aeneid.g.alchemy.com/v2/{{ALCHEMY_API_KEY}}</a>
                                    </div>
                                </div>

                                <h4 class="text-sm font-semibold text-white mb-3 mt-6 underline">API Endpoints:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">Docs:</span>
                                        <a href="https://docs.story.foundation/api-reference/protocol/introduction" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://docs.story.foundation/api-reference/protocol/introduction</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://staging-api.storyprotocol.net" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://staging-api.storyprotocol.net</a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3 underline">Other:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Engine API JSON-RPC (EL/CL):</span>
                                        <a href="https://docs.story.foundation/network/learn/node-software/engine-api" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://docs.story.foundation/network/learn/node-software/engine-api</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• WebSocket:</span>
                                        <a href="https://docs.story.foundation/network/participate/validators/operate-your-node#enabling-rpc-http-and-websocket-in-geth" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://docs.story.foundation/network/participate/validators/operate-your-node#enabling-rpc-http-and-websocket-in-geth</a>
                                    </div>
                                </div>

                                <h4 class="text-sm font-semibold text-white mb-3 mt-6 underline">Node Software:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Story Node Software:</span>
                                        <a href="https://docs.story.foundation/network/learn/node-software" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://docs.story.foundation/network/learn/node-software</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Story Geth Client:</span>
                                        <a href="https://github.com/piplabs/story-geth" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/piplabs/story-geth</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Consensus Client (CometBFT):</span>
                                        <a href="https://github.com/cometbft/cometbft" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/cometbft/cometbft</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Genesis json:</span>
                                        <a href="https://github.com/piplabs/story/blob/aeneid/client/genutil/testdata/genesis.json#4" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/piplabs/story/blob/aeneid/client/genutil/testdata/genesis.json#4</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
                break;

            case 'sdk':
                content = `
                    <div class="developer bg-transparent p-6 mb-6" style="font-family: 'Source Code Pro', monospace;">
                        <div class="space-y-6">
                        <div>
                            <h4 class="text-sm font-semibold text-white mb-3 underline">SDK & Libraries:</h4>
                            <div class="space-y-2 text-sm">
                                <div class="break-words">
                                    <span class="text-white">• Quickstart:</span>
                                    <a href="https://docs.story.foundation/quickstart/story-network-infra" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://docs.story.foundation/quickstart/story-network-infra</a>
                                </div>
                                <div class="break-words">
                                    <span class="text-white">• TypeScript SDK:</span>
                                    <a href="https://github.com/storyprotocol/sdk" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/storyprotocol/sdk</a>
                                </div>
                                <div class="break-words">
                                    <span class="text-white">• Python SDK:</span>
                                    <a href="https://github.com/storyprotocol/python-sdk" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/storyprotocol/python-sdk</a>
                                </div>
                                <div class="break-words">
                                    <span class="text-white">• SPICE:</span>
                                    <a href="https://github.com/storyprotocol/spice" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/storyprotocol/spice</a>
                                </div>
                                <div class="break-words">
                                    <span class="text-white">• Public Domain IP:</span>
                                    <a href="https://github.com/storyprotocol/public-domain-ip" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/storyprotocol/public-domain-ip</a>
                                </div>
                                <div class="break-words">
                                    <span class="text-white">• Public Domain Beta:</span>
                                    <a href="https://github.com/storyprotocol/public-domain-beta" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/storyprotocol/public-domain-beta</a>
                                </div>
                                <div class="break-words">
                                    <span class="text-white">• SDK EoF Tests:</span>
                                    <a href="https://github.com/storyprotocol/sdk-eof-tests" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/storyprotocol/sdk-eof-tests</a>
                                </div>
                            </div>

                            <h4 class="text-sm font-semibold text-white mb-3 mt-6 underline">Smart Contracts:</h4>
                            <div class="space-y-2 text-sm">
                                <div class="break-words">
                                    <span class="text-white">• Protocol Core:</span>
                                    <a href="https://github.com/storyprotocol/protocol-core" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/storyprotocol/protocol-core</a>
                                </div>
                                <div class="break-words">
                                    <span class="text-white">• Protocol Periphery:</span>
                                    <a href="https://github.com/storyprotocol/protocol-periphery" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/storyprotocol/protocol-periphery</a>
                                </div>
                                <div class="break-words">
                                    <span class="text-white">• Solidity Template:</span>
                                    <a href="https://github.com/storyprotocol/solidity-template" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/storyprotocol/solidity-template</a>
                                </div>
                                <div class="break-words">
                                    <span class="text-white">• Splits Contract:</span>
                                    <a href="https://github.com/storyprotocol/splits-liquid" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/storyprotocol/splits-liquid</a>
                                </div>
                                <div class="break-words">
                                    <span class="text-white">• Splits Liquid:</span>
                                    <a href="https://github.com/storyprotocol/splits-liquid" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/storyprotocol/splits-liquid</a>
                                </div>
                            </div>

                            <h4 class="text-sm font-semibold text-white mb-3 mt-6 underline">Templates:</h4>
                            <div class="space-y-2 text-sm">
                                <div class="break-words">
                                    <span class="text-white">• Story Boilerplate:</span>
                                    <a href="https://github.com/storyprotocol/story-protocol-boilerplate" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/storyprotocol/story-protocol-boilerplate</a>
                                </div>
                                <div class="break-words">
                                    <span class="text-white">• Hackathon Scaffold:</span>
                                    <a href="https://github.com/storyprotocol/hackathon-scaffold-app" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/storyprotocol/hackathon-scaffold-app</a>
                                </div>
                                <div class="break-words">
                                    <span class="text-white">• Solidity Template:</span>
                                    <a href="https://github.com/storyprotocol/solidity-template" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/storyprotocol/solidity-template</a>
                                </div>
                                <div class="break-words">
                                    <span class="text-white">• React Tutorial:</span>
                                    <a href="https://github.com/storyprotocol/tutorial-react" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/storyprotocol/tutorial-react</a>
                                </div>
                                <div class="break-words">
                                    <span class="text-white">• Ideas:</span>
                                    <a href="https://github.com/storyprotocol/ideas" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/storyprotocol/ideas</a>
                                </div>
                                <div class="break-words">
                                    <span class="text-white">• Dapp Workflows:</span>
                                    <a href="https://github.com/storyprotocol/dapp-workflows" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/storyprotocol/dapp-workflows</a>
                                </div>
                                <div class="break-words">
                                    <span class="text-white">• Geth tests:</span>
                                    <a href="https://github.com/storyprotocol/geth-tests" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/storyprotocol/geth-tests</a>
                                </div>
                                <div class="break-words">
                                    <span class="text-white">• Create+ Deployer:</span>
                                    <a href="https://github.com/storyprotocol/create+-deployer" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/storyprotocol/create+-deployer</a>
                                </div>
                            </div>

                            <h4 class="text-sm font-semibold text-white mb-3 mt-6 underline">Explorers:</h4>
                            <div class="space-y-2 text-sm">
                                <div class="break-words">
                                    <span class="text-white">• Protocol Explorer App:</span>
                                    <a href="https://github.com/storyprotocol/protocol-explorer-app" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/storyprotocol/protocol-explorer-app</a>
                                </div>
                                <div class="break-words">
                                    <span class="text-white">• Alpha Memori Explorer:</span>
                                    <a href="https://github.com/storyprotocol/alpha-memori-explorer-app" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://github.com/storyprotocol/alpha-memori-explorer-app</a>
                                </div>
                            </div>
                        </div>
                    </div>`;
                break;

            case 'explorers':
                content = `
                    <div class="developer bg-transparent p-6 mb-6" style="font-family: 'Source Code Pro', monospace;">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1999628458800861186/ZU_lIdNS_400x400.jpg" alt="Story" class="w-full h-full object-cover">
                            </div>
                            <h3 class="text-lg font-semibold text-white">Story Mainnet Network</h3>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3 underline">Explorers (Official):</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Blockscout Explorer:</span>
                                        <a href="https://storyscan.io" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://storyscan.io</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• IP Explorer:</span>
                                        <a href="https://explorer.story.foundation" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://explorer.story.foundation</a>
                                    </div>
                                </div>

                                <h4 class="text-sm font-semibold text-white mb-3 mt-6 underline">Explorers (Community):</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Stakeme:</span>
                                        <a href="https://storyscan.app" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://storyscan.app</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Nodes Guru:</span>
                                        <a href="https://story.explorers.guru" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://story.explorers.guru</a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3 underline">Dashboards (Official):</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Story:</span>
                                        <a href="https://staking.story.foundation" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://staking.story.foundation</a>
                                    </div>
                                </div>

                                <h4 class="text-sm font-semibold text-white mb-3 mt-6 underline">Dashboards (Community):</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Kroma:</span>
                                        <a href="https://story-dashboard.kroma.xyz/story" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://story-dashboard.kroma.xyz/story</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• OriginStake:</span>
                                        <a href="https://ipworld.io/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://ipworld.io/</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="developer bg-transparent p-6 mb-6" style="font-family: 'Source Code Pro', monospace;">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1999628458800861186/ZU_lIdNS_400x400.jpg" alt="Story" class="w-full h-full object-cover">
                            </div>
                            <h3 class="text-lg font-semibold text-white">Story Aeneid Testnet</h3>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3 underline">Explorers (Official):</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Blockscout Explorer:</span>
                                        <a href="https://aeneid.storyscan.io" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://aeneid.storyscan.io</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• IP Explorer:</span>
                                        <a href="https://aeneid.explorer.story.foundation" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://aeneid.explorer.story.foundation</a>
                                    </div>
                                </div>

                                <h4 class="text-sm font-semibold text-white mb-3 mt-6 underline">Explorers (Community):</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Stakeme:</span>
                                        <a href="https://aeneid.storyscan.app" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://aeneid.storyscan.app</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Nodes Guru:</span>
                                        <a href="https://testnet.story.explorers.guru" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://testnet.story.explorers.guru</a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3 underline">Dashboards (Official):</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Story:</span>
                                        <a href="https://aeneid.staking.story.foundation" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://aeneid.staking.story.foundation</a>
                                    </div>
                                </div>

                                <h4 class="text-sm font-semibold text-white mb-3 mt-6 underline">Dashboards (Community):</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Kroma:</span>
                                        <a href="https://story-dashboard.kroma.xyz/story-aeneid/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://story-dashboard.kroma.xyz/story-aeneid/</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• OriginStake:</span>
                                        <a href="https://ipworld.io/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://ipworld.io/</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
                break;
            case 'faucet':
                content = `
                    <div class="developer bg-transparent p-6 mb-6" style="font-family: 'Source Code Pro', monospace;">
                        <div class="flex items-center gap-3 mb-6">
                        <div class="w-8 h-8 rounded overflow-hidden">
                            <img src="https://pbs.twimg.com/profile_images/1999628458800861186/ZU_lIdNS_400x400.jpg" alt="Story" class="w-full h-full object-cover">
                        </div>
                        <h3 class="text-lg font-semibold text-white">Story Aeneid Testnet</h3>
                    </div>
                    <div>
                        <h4 class="text-sm font-semibold text-white mb-3 underline">Faucet List:</h4>
                        <div class="space-y-2 text-sm">
                            <div>
                                <span class="text-white">• Official Faucet:</span>
                                <a href="https://aeneid.faucet.story.foundation" class="text-blue-400 hover:text-blue-300 transition-colors ml-1">https://aeneid.faucet.story.foundation</a>
                                <span class="text-gray-400 ml-2">(10 IP)</span>
                            </div>
                            <div>
                                <span class="text-white">• Google Cloud Faucet:</span>
                                <a href="https://cloud.google.com/application/web3/faucet/story/aeneid" class="text-blue-400 hover:text-blue-300 transition-colors ml-1">https://cloud.google.com/application/web3/faucet/story/aeneid</a>
                                <span class="text-gray-400 ml-2">(10 IP)</span>
                            </div>
                        </div>
                    </div>`;
                break;

            default:
                content = `<p class="text-gray-400">Select a tab to view content</p>`;
        }

        unifiedContainer.innerHTML = content;
    }


}
