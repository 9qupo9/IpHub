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
                <div class="mb-4">
                    <h3 class="text-sm font-medium text-white">Network: Mainnet (story-1)</h3>
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
                
                <!-- Search Input Field -->
                <div class="mb-6 relative">
                    <div class="relative inline-block">
                        <input 
                            type="text" 
                            id="moniker-search" 
                            placeholder="Search by moniker" 
                            class="pl-8 pr-3 py-2 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                            style="background: #0C0A13; border: 1px solid rgba(147, 51, 234, 0.5); font-family: 'Source Code Pro', monospace; font-size: 12px; width: 180px;"
                        />
                        <svg class="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>

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


        const searchInput = document.getElementById('moniker-search');
        if (searchInput) {
            // Handle search input
            searchInput.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });

            // Handle keyboard shortcuts
            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    e.target.value = '';
                    this.handleSearch('');
                    e.target.blur();
                }
            });

            // Handle focus/blur for better UX
            searchInput.addEventListener('focus', (e) => {
                e.target.style.borderColor = 'rgba(147, 51, 234, 0.8)';
            });

            searchInput.addEventListener('blur', (e) => {
                e.target.style.borderColor = 'rgba(147, 51, 234, 0.5)';
            });
        }
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

        // Clear search input when switching tabs
        const searchInput = document.getElementById('moniker-search');
        if (searchInput) {
            searchInput.value = '';
        }

        this.updateMainContent(tabName);
        console.log(`Switched to tab: ${tabName}`);
    }

    updateMainContent(tabName) {
        const unifiedContainer = document.getElementById('unified-content-container');
        if (!unifiedContainer) return;

        // Remove search results info when updating content
        const existingInfo = document.querySelector('.search-results-info');
        if (existingInfo) {
            existingInfo.remove();
        }

        const storyData = {
            name: 'Story Network',
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

        const nodersData = {
            name: 'NODERS',
            icon: 'icon/Node.png',
            services: [
                { name: 'Service', url: 'https://noders.services/mainnet/story' }
            ],
            endpoints: [
                { type: 'RPC', url: 'https://story-rpc.noders.services' },
                { type: 'EVM RPC', url: 'https://story-jsonrpc.noders.services' },
                { type: 'API', url: 'https://story-api.noders.services' }
            ],
            snapshots: [
                { name: 'Snapshot', url: 'https://noders.services/mainnet/story/snapshot' }
            ],
            tools: [
                { name: 'Story Community App', url: 'https://ipstoryhub.org/' },
                { name: 'Explorer', url: 'https://ipstoryhub.org/explorer' },
                { name: 'State Sync', url: 'https://noders.services/mainnet/story/statesync' }
            ]
        };

        const cosmicValidatorData = {
            name: 'Cosmic Validator',
            icon: 'https://pbs.twimg.com/profile_images/1541402359313715201/9pa-PIcH_400x400.jpg',
            services: [
                { name: 'Service', url: 'https://github.com/CosmicValidator/Story-Mainnet/' }
            ],
            endpoints: [
                { type: 'RPC', url: 'https://story-rpc.cosmicvalidator.com' },
                { type: 'EVM RPC', url: 'https://story-evm.cosmicvalidator.com' },
                { type: 'Websocket (Cosmos)', url: 'wss://story-rpc.cosmicvalidator.com/websocket' },
                { type: 'Websocket (EVM)', url: 'wss://story-evm-wss.cosmicvalidator.com' },
                { type: 'API', url: 'https://story-api.cosmicvalidator.com' }
            ],
            snapshots: [
                { name: 'Snapshot', url: 'https://story-mainnet.cosmicvalidator.com' }
            ]
        };

        const originStakeData = {
            name: 'OriginStake',
            icon: 'https://pbs.twimg.com/profile_images/1985606662628237312/PiYrd4um_400x400.jpg',
            tools: [
                { name: 'Ipworld.io Dashboard', url: 'https://ipworld.io/' },
                { name: 'RPC Scanner', url: 'https://ipworld.io/rpc-api' }
            ]
        };

        const f5NodesData = {
            name: 'F5 Nodes',
            icon: 'https://pbs.twimg.com/profile_images/1575613984887250948/bPfx_Owd_400x400.jpg',
            tools: [
                { name: 'Nodes Wiki', url: 'https://wiki.f5nodes.com/story/' },
                { name: 'Endpoints Ninja', url: 'https://story.endpoints.ninja' }
            ]
        };

        const endorphineStakeData = {
            name: 'Endorphine Stake',
            icon: 'https://pbs.twimg.com/profile_images/1930686066031243264/XKxlTuYH_400x400.jpg',
            tools: [
                { name: 'BuzzNodes validator monitoring tool', url: 'https://story.buzznodes.com' }
            ]
        };

        const tttVnData = {
            name: 'TTT_VN',
            icon: 'https://pbs.twimg.com/profile_images/1965029538062299136/D_ZHbWnm_400x400.jpg',
            services: [
                { name: 'Service', url: 'https://services.tienthuattoan.com/mainnet/story' }
            ],
            endpoints: [
                { type: 'RPC', url: 'https://story-rpc.tienthuattoan.com' },
                { type: 'EVM RPC', url: 'https://story-evm.tienthuattoan.com' },
                { type: 'Websocket (EVM)', url: 'wss://story-wss.tienthuattoan.com' },
                { type: 'API', url: 'https://story-api.tienthuattoan.com' },
                { type: 'Seed', url: '0e491ac607418e875a67b107fb24378b2d848eca@story-rpc.tienthuattoan.com:29656' }
            ],
            snapshots: [
                { name: 'Snapshot', url: 'https://services.tienthuattoan.com/mainnet/story/snapshot' }
            ],
            tools: [
                { name: 'Public RPC', url: 'https://services.tienthuattoan.com/mainnet/story/public-rpc' },
                { name: 'Decentralization Map', url: 'https://services.tienthuattoan.com/mainnet/story/map' }
            ]
        };

        const cumuloData = {
            name: 'Cumulo',
            icon: 'https://pbs.twimg.com/profile_images/1758239625229787136/8IiYwfvO_400x400.jpg',
            services: [
                { name: 'Service', url: 'https://cumulo.pro/services/story/' }
            ],
            endpoints: [
                { type: 'RPC', url: 'https://rpc.story.cumulo.me' },
                { type: 'EVM RPC', url: 'https://evm.story.cumulo.me' },
                { type: 'gRPC', url: 'grpc.story.cumulo.me' },
                { type: 'Websocket (EVM)', url: 'wss://evm-story.cumulo.org.es' },
                { type: 'API', url: 'https://api.story.cumulo.me' },
                { type: 'Peer', url: 'a6d49faf6e1200cade89cb6260c878c38b153c9a@109.228.57.155:26646' }
            ],
            snapshots: [],
            tools: [
                { name: 'Story Metrics and Grafana Dashboard', url: 'https://github.com/Cumulo-pro/Story_protocol/tree/main/monitoring' },
                { name: 'Peer scanner', url: 'https://cumulo.pro/services/story/peerscan' },
                { name: 'Public RPC Scanner (Cosmos)', url: 'https://cumulo.pro/services/story/rpcscan' },
                { name: 'Public RPC Scanner (EVM)', url: 'https://cumulo.pro/services/story/rpc_scan_evm' },
                { name: 'Validator resources', url: 'https://cumulo.pro/services/story/resources' }
            ]
        };

        const krewsData = {
            name: 'Krews',
            icon: 'https://pbs.twimg.com/profile_images/1910482660792655872/SPVpEwoa_400x400.jpg',
            services: [
                { name: 'Service', url: 'https://story-dashboard.krews.xyz/story/validators' }
            ],
            endpoints: [
                { type: 'RPC', url: 'https://story-rpc.krews.xyz' },
                { type: 'EVM RPC', url: 'https://story-evm-rpc.krews.xyz' },
                { type: 'Websocket (Cosmos)', url: 'wss://story-rpc.krews.xyz/websocket' },
                { type: 'Websocket (EVM)', url: 'wss://story-ws-evm.krews.xyz' },
                { type: 'API', url: 'https://story-api.krews.xyz' }
            ],
            snapshots: [
                { name: 'Snapshot', url: 'https://story-dashboard.krews.xyz/story/snapshots' }
            ],
            tools: [
                { name: 'Decentralization', url: 'https://story-dashboard.krews.xyz/story/decentralization' },
                { name: 'Weekly Status', url: 'https://story-dashboard.krews.xyz/story/validator-status' },
                { name: 'Explorer', url: 'https://story-dashboard.krews.xyz/story/validators' }
            ]
        };

        const grandValleyData = {
            name: 'Grand Valley',
            icon: 'icon/Grand.png',
            services: [
                { name: 'Service', url: 'https://github.com/hubofvalley/Valley-of-Story-Mainnet/tree/main/resources' }
            ],
            endpoints: [
                { type: 'RPC', url: 'https://lightnode-rpc-mainnet-story.grandvalleys.com' },
                { type: 'EVM RPC', url: 'https://lightnode-json-rpc-mainnet-story.grandvalleys.com' },
                { type: 'Websocket (Cosmos)', url: 'wss://lightnode-rpc-mainnet-story.grandvalleys.com/websocket' },
                { type: 'Websocket (EVM)', url: 'wss://lightnode-wss-mainnet-story.grandvalleys.com' },
                { type: 'API', url: 'https://lightnode-api-mainnet-story.grandvalleys.com' }
            ],
            snapshots: [
                { name: 'Snapshot', url: 'https://github.com/hubofvalley/Valley-of-Story-Mainnet/blob/main/resources/apply_snapshot.sh' }
            ],
            tools: [
                { name: 'Valley Of Story', url: 'https://github.com/hubofvalley/Valley-of-Story-Mainnet/blob/main/resources/valleyofStory.sh' }
            ]
        };

        const jNodeData = {
            name: 'J•Node',
            icon: 'https://pbs.twimg.com/profile_images/1855090480507502592/m1e03F65_400x400.jpg',
            services: [
                { name: 'Service', url: 'https://j-node.net/services/guide?network=story&guide=installation' }
            ],
            endpoints: [
                { type: 'RPC', url: 'https://story-rpc.j-node.net' },
                { type: 'EVM RPC', url: 'https://story-evm-rpc.j-node.net' },
                { type: 'Websocket (Cosmos)', url: 'wss://story-rpc.j-node.net/websocket' },
                { type: 'Websocket (EVM)', url: 'wss://story-rpc.j-node.net/websocket' },
                { type: 'API', url: 'https://story-api.j-node.net' }
            ],
            snapshots: [
                { name: 'Snapshot', url: 'https://j-node.net/services/guide?network=story&guide=snapshot' }
            ],
            tools: []
        };

        const mandragoraData = {
            name: 'Mandragora',
            icon: 'https://pbs.twimg.com/profile_images/1581191562444275712/4a8YQ-LS_400x400.jpg',
            services: [
                { name: 'Service', url: 'https://hackmd.io/@WLJTk-wKcusa2QMBavDTQ/r1Mc-eWnAstory-Protocol---Mandragoras-Infrastructure-services' }
            ],
            endpoints: [
                { type: 'RPC', url: 'https://story-rpc.mandragora.io' },
                { type: 'Websocket (Cosmos)', url: 'wss://story-rpc.mandragora.io/websocket' },
                { type: 'Websocket (EVM)', url: 'wss://story-mainnet-evmwss.mandragora.io' },
                { type: 'API', url: 'https://story-api.mandragora.io' },
                { type: 'Peer', url: '9d56213f3e278ee8c0aae5aab4aee670add33f03@story-peer.mandragora.io:26656' }
            ],
            snapshots: [
                { name: 'Pruned', url: 'https://hackmd.io/@mandragora/story-mainnet?s=text=37453A1189%3A0%3A17641013063AExpU3w' },
                { name: 'Archival', url: 'https://hackmd.io/@mandragora/story-mainnet?s=text=229353A11063%0%3A176410130634Aed2Aq' }
            ],
            tools: [
                { name: 'Lost my Validator', url: 'https://hackmd.io/@mandragora/story-mainnet?s=text=37453A1189%3A0%3A176410130634AExpU3w' }
            ]
        };

        const spiderNodeData = {
            name: 'Spider Node',
            icon: 'https://pbs.twimg.com/profile_images/1915845863827771393/4ciFgkaD_400x400.jpg',
            services: [
                { name: 'Service', url: 'https://spidernode.net/docs/story/service' }
            ],
            endpoints: [
                { type: 'RPC', url: 'https://story-cosmos-rpc.spidernode.net' },
                { type: 'EVM RPC', url: 'https://story-evm-rpc.spidernode.net' },
                { type: 'API', url: 'https://story-api-mainnet.spidernode.net' }
            ],
            snapshots: [
                { name: 'Snapshot', url: 'https://spidernode.net/docs/story/snapshot' }
            ],
            tools: []
        };

        const synergyNodesData = {
            name: 'Synergy Nodes',
            icon: 'https://pbs.twimg.com/profile_images/1505590144543657984/KASRyaAA_400x400.png',
            services: [
                { name: 'Service', url: 'https://www.synergynodes.com/service/story' }
            ],
            endpoints: [
                { type: 'RPC', url: 'https://story-rpc.synergynodes.com/' },
                { type: 'EVM RPC', url: 'https://story-evm.synergynodes.com/' },
                { type: 'API', url: 'https://story-api.synergynodes.com/' },
                { type: 'Seed', url: 'eac361la167e7b621e267e3282c2cbf3feb56e59@story-seed.synergynodes.com:26656' }
            ],
            snapshots: [
                { name: 'Snapshot', url: 'https://www.synergynodes.com/service/story' }
            ],
            tools: [
                { name: 'State Sync', url: 'https://www.synergynodes.com/service/story' }
            ]
        };

        const silentData = {
            name: 'Silent',
            icon: 'https://pbs.twimg.com/profile_images/1543610597123624960/9y06O-4w_400x400.jpg',
            services: [
                { name: 'Service', url: 'https://services.silentvalidator.com/docs/category/story' }
            ],
            endpoints: [
                { type: 'RPC', url: 'https://rpc.story.silentvalidator.com' },
                { type: 'EVM RPC', url: 'https://evm-rpc.story.silentvalidator.com' },
                { type: 'gRPC', url: 'grpc.story.silentvalidator.com:443' },
                { type: 'API', url: 'https://api.story.silentvalidator.com' }
            ],
            snapshots: [
                { name: 'Pruned Snapshots', url: 'https://services.silentvalidator.com/docs/mainnets/story/snapshots/Pruned-Snapshots' }
            ],
            tools: [
                { name: 'Story Ansible', url: 'https://services.silentvalidator.com/docs/mainnets/story/Tools#story-ansible' },
                { name: 'Story Node Finder', url: 'https://services.silentvalidator.com/docs/mainnets/story/Tools#story-ansible' },
                { name: 'Story Grafana Dashboard', url: 'https://services.silentvalidator.com/docs/mainnets/story/Tools#story-grafana-dashboard' }
            ]
        };

        const proNodes75Data = {
            name: 'pro-nodes75',
            icon: 'https://pbs.twimg.com/profile_images/1558787415430598658/WC2ARzZk_400x400.png',
            services: [
                { name: 'Service', url: 'https://services.node75.org/chains/story-mainnet' }
            ],
            endpoints: [
                { type: 'RPC', url: 'https://rpc-archive.story.node75.org' },
                { type: 'EVM RPC', url: 'https://evm-rpc-archive.story.node75.org' },
                { type: 'Peer', url: 'c1f8a737d23f025c9f632619c9f5fdca6acba753@peer.story.node75.org:27136' },
                { type: 'Seed', url: '86bd5cb6e762f673f1706e5889e039d5406b4b90@seed.story.node75.org:35816' }
            ],
            snapshots: [
                { name: 'Snapshot', url: 'https://snap.story.node75.org/' }
            ],
            tools: [
                { name: 'Story node monitoring', url: 'https://github.com/the-node75/mon_story' }
            ]
        };

        const stakemeData = {
            name: 'STAKEME',
            icon: 'https://pbs.twimg.com/profile_images/1900464628510916608/q5ORe5G0_400x400.jpg',
            services: [
                { name: 'Service', url: 'https://storyscan.app/labs' }
            ],
            endpoints: [
                { type: 'RPC', url: 'https://story-rpc.stakeme.pro:443' },
                { type: 'EVM RPC', url: 'https://story-evm-rpc.stakeme.pro:443' },
                { type: 'API', url: 'https://story-rest.stakeme.pro:443' },
                { type: 'Peer', url: 'ee5386dd25b97cba63234f8a76aca9b6dcb3f157@story-peer.stakeme.pro:26656' },
                { type: 'Seed', url: 'c1d973eea1b2c637777ab32783b3d37f2b52ba36@b1.storypc.io:52656' }
            ],
            snapshots: [
                { name: 'Snapshot', url: 'https://storyscan.app/labs?page=snapshots' }
            ],
            tools: [
                { name: 'Explorer', url: 'https://storyscan.app' },
                { name: 'Consensus', url: 'https://storyscan.app/utilities?tab=consensus' },
                { name: 'Uptime', url: 'https://storyscan.app/utilities?tab=uptime' },
                { name: 'API', url: 'https://storyscan.app/utilities?tab=api' },
                { name: 'Node Decentralization', url: 'https://storyscan.app/network' }
            ]
        };

        const croutonDigitalData = {
            name: 'CroutonDigital',
            icon: 'https://pbs.twimg.com/profile_images/1801634644242161664/cUZv67VT_400x400.jpg',
            services: [
                { name: 'Service', url: 'https://crouton.digital/services/mainnets/storyprotocol' }
            ],
            endpoints: [
                { type: 'RPC', url: 'https://story-mainnet-cosmos-rpc.crouton.digital' },
                { type: 'EVM RPC', url: 'https://story-mainnet-evm-rpc.crouton.digital' },
                { type: 'Websocket (Cosmos)', url: 'wss://story-mainnet-cosmos-ws.crouton.digital/websocket' },
                { type: 'Websocket (EVM)', url: 'wss://story-mainnet-evm-ws.crouton.digital' }
            ],
            snapshots: [
                { name: 'Snapshot', url: 'https://crouton.digital/services/mainnets/storyprotocol' }
            ],
            tools: []
        };

        let content = '';

        switch (tabName) {
            case 'overview':
                content = `
                    <!-- Story Network Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1999628458800861186/ZU_lIdNS_400x400.jpg" alt="Story" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Story Network</span>
                        </div>

                        <div class="space-y-6">
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Services:</h4>
                                <div class="space-y-2 text-sm">
                                    ${storyData.resources.map(resource => `
                                        <div class="break-words">
                                            <span class="text-white">• ${resource.name}:</span>
                                            <a href="${resource.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${resource.url}</a>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Endpoints:</h4>
                                <div class="space-y-2 text-sm">
                                    ${storyData.endpoints.map(endpoint => `
                                        <div class="break-words">
                                            <span class="text-white">• ${endpoint.type}:</span>
                                            <a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Explorer:</h4>
                                <div class="space-y-2 text-sm">
                                    ${storyData.explorers.map(explorer => `
                                        <div class="break-words">
                                            <span class="text-white">•</span>
                                            <a href="${explorer.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${explorer.url}</a>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- ITRocket Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1896887737568907264/4-JzLf1a_400x400.jpg" alt="ITRocket" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">ITRocket</span>
                        </div>

                        <div class="space-y-6">
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Services:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://itrocket.net/services/mainnet/story/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://itrocket.net/services/mainnet/story/</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Endpoints (Archive):</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• RPC:</span>
                                        <a href="https://story-mainnet-rpc.itrocket.net" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-mainnet-rpc.itrocket.net</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Websocket:</span>
                                        <a href="wss://story-mainnet-ws.itrocket.net" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">wss://story-mainnet-ws.itrocket.net</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• API:</span>
                                        <a href="https://story-mainnet-api.itrocket.net" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-mainnet-api.itrocket.net</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Cosmos REST API (on port 5317):</span>
                                        <a href="https://story-mainnet.itrocket.net" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-mainnet.itrocket.net</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Ethereum Virtual Machine (EVM):</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• JSON RPC:</span>
                                        <a href="https://story-mainnet-evm.itrocket.net" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-mainnet-evm.itrocket.net</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Websocket:</span>
                                        <a href="wss://story-mainnet-ws.itrocket.net" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">wss://story-mainnet-ws.itrocket.net</a>
                                    </div>
                                </div>
                                
                                <h4 class="text-sm font-semibold text-white mb-3 mt-6">Snapshots:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://itrocket.net/services/mainnet/story/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://itrocket.net/services/mainnet/story/</a>
                                    </div>
                                </div>

                                <h4 class="text-sm font-semibold text-white mb-3 mt-6">Tools:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Validators Performance:</span>
                                        <a href="https://itrocket.net/services/mainnet/story/analytics/validators-performance/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://itrocket.net/services/mainnet/story/analytics/validators-performance/</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Decentralization Analytics:</span>
                                        <a href="https://itrocket.net/services/mainnet/story/decentralization/relayers/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://itrocket.net/services/mainnet/story/decentralization/relayers/</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Public RPC Scanner:</span>
                                        <a href="https://itrocket.net/services/mainnet/story/public-rpc/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://itrocket.net/services/mainnet/story/public-rpc/</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Consensus:</span>
                                        <a href="https://itrocket.net/services/mainnet/story/analytics/consensus/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://itrocket.net/services/mainnet/story/analytics/consensus/</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Monitoring Script:</span>
                                        <a href="https://itrocket.net/services/mainnet/story/monitoring/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://itrocket.net/services/mainnet/story/monitoring/</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Nodes.Guru Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1753055196618317824/sZTAPNfK_400x400.png" alt="Nodes.Guru" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Nodes.Guru</span>
                        </div>

                        <div class="space-y-6">
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Explorer:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://story.explorers.guru" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story.explorers.guru</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- NodeStake Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1656150389518139393/XIWb60AJ_400x400.jpg" alt="NodeStake" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">NodeStake</span>
                        </div>

                        <div class="space-y-6">
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Service:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://nodestake.org/story" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://nodestake.org/story</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Endpoints:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• RPC:</span>
                                        <a href="https://rpc.story.nodestake.org:443" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://rpc.story.nodestake.org:443</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• gRPC:</span>
                                        <a href="grpc.story.nodestake.org:443" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">grpc.story.nodestake.org:443</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• API:</span>
                                        <a href="https://api.story.nodestake.org:443" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://api.story.nodestake.org:443</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Peer:</span>
                                        <a href="https://ss.story.nodestake.org/peers.txt" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://ss.story.nodestake.org/peers.txt</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Seed:</span>
                                        <span class="text-blue-400 ml-1 break-all">327fb4151de9f78f29ff10714085e347a4e3c836@rpc.story.nodestake.org:666</span>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Addrbook:</span>
                                        <a href="https://ss.story.nodestake.org/addrbook.json" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://ss.story.nodestake.org/addrbook.json</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Ethereum Virtual Machine (EVM):</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• JSON-RPC:</span>
                                        <a href="https://evmrpc.story.nodestake.org" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://evmrpc.story.nodestake.org</a>
                                    </div>
                                </div>
                                
                                <h4 class="text-sm font-semibold text-white mb-3 mt-6">Snapshot:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">•</span>   
                                        <a href="https://nodestake.org/story" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://nodestake.org/story</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- NODERS Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-10 h-10 rounded overflow-hidden">
                                <img src="icon/Node.png" alt="NODERS" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">NODERS</span>
                        </div>

                        <div class="space-y-6">
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Service:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://noders.services/mainnet/story" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://noders.services/mainnet/story</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Endpoints (Archive):</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• RPC:</span>
                                        <a href="https://story-rpc.noders.services" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-rpc.noders.services</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• EVM RPC:</span>
                                        <a href="https://story-jsonrpc.noders.services" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-jsonrpc.noders.services</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• API:</span>
                                        <a href="https://story-api.noders.services" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-api.noders.services</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Snapshot:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://noders.services/mainnet/story/snapshot" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://noders.services/mainnet/story/snapshot</a>
                                    </div>
                                </div>

                                <h4 class="text-sm font-semibold text-white mb-3 mt-6">Tools:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Story Community App:</span>
                                        <a href="https://ipstoryhub.org/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://ipstoryhub.org/</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Explorer:</span>
                                        <a href="https://ipstoryhub.org/explorer" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://ipstoryhub.org/explorer</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• State Sync:</span>
                                        <a href="https://noders.services/mainnet/story/statesync" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://noders.services/mainnet/story/statesync</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Cosmic Validator Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1541402359313715201/9pa-PIcH_400x400.jpg" alt="Cosmic Validator" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Cosmic Validator</span>
                        </div>

                        <div class="space-y-6">
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Service:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://github.com/CosmicValidator/Story-Mainnet/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://github.com/CosmicValidator/Story-Mainnet/</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Endpoints (Archive):</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• RPC:</span>
                                        <a href="https://story-rpc.cosmicvalidator.com" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-rpc.cosmicvalidator.com</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• EVM RPC:</span>
                                        <a href="https://story-evm.cosmicvalidator.com" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-evm.cosmicvalidator.com</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Websocket (Cosmos):</span>
                                        <a href="wss://story-rpc.cosmicvalidator.com/websocket" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">wss://story-rpc.cosmicvalidator.com/websocket</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Websocket (EVM):</span>
                                        <a href="wss://story-evm-wss.cosmicvalidator.com" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">wss://story-evm-wss.cosmicvalidator.com</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• API:</span>
                                        <a href="https://story-api.cosmicvalidator.com" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-api.cosmicvalidator.com</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Snapshot:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://story-mainnet.cosmicvalidator.com" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-mainnet.cosmicvalidator.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- OriginStake Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1997936517147435008/Tdv4S7XU_400x400.jpg" alt="OriginStake" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">OriginStake</span>
                        </div>

                        <div class="space-y-6">
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Tools:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Ipworld.io Dashboard:</span>
                                        <a href="https://ipworld.io/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://ipworld.io/</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• RPC Scanner:</span>
                                        <a href="https://ipworld.io/rpc-api" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://ipworld.io/rpc-api</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- F5 Nodes Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1575613984887250948/bPfx_Owd_400x400.jpg" alt="F5 Nodes" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">F5 Nodes</span>
                        </div>

                        <div class="space-y-6">
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Tools:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Nodes Wiki:</span>
                                        <a href="https://wiki.f5nodes.com/story/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://wiki.f5nodes.com/story/</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Endpoints Ninja:</span>
                                        <a href="https://story.endpoints.ninja" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story.endpoints.ninja</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Endorphine Stake Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1930686066031243264/XKxlTuYH_400x400.jpg" alt="Endorphine Stake" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Endorphine Stake</span>
                        </div>

                        <div class="space-y-6">
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Tools:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• BuzzNodes validator monitoring tool:</span>
                                        <a href="https://story.buzznodes.com" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story.buzznodes.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <!-- TTT_VN Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1965029538062299136/D_ZHbWnm_400x400.jpg" alt="TTT_VN" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">TTT_VN</span>
                        </div>

                        <div class="space-y-6">
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Service:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://services.tienthuattoan.com/mainnet/story" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://services.tienthuattoan.com/mainnet/story</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Endpoints (Archive):</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• RPC:</span>
                                        <a href="https://story-rpc.tienthuattoan.com" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-rpc.tienthuattoan.com</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• EVM RPC:</span>
                                        <a href="https://story-evm.tienthuattoan.com" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-evm.tienthuattoan.com</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Websocket (EVM):</span>
                                        <a href="wss://story-wss.tienthuattoan.com" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">wss://story-wss.tienthuattoan.com</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• API:</span>
                                        <a href="https://story-api.tienthuattoan.com" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-api.tienthuattoan.com</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Seed:</span>
                                        <span class="text-blue-400 ml-1 break-all">0e491ac607418e875a67b107fb24378b2d848eca@story-rpc.tienthuattoan.com:29656</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Snapshot:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://services.tienthuattoan.com/mainnet/story/snapshot" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://services.tienthuattoan.com/mainnet/story/snapshot</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Tools:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Public RPC:</span>
                                        <a href="https://services.tienthuattoan.com/mainnet/story/public-rpc" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://services.tienthuattoan.com/mainnet/story/public-rpc</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Decentralization Map:</span>
                                        <a href="https://services.tienthuattoan.com/mainnet/story/map" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://services.tienthuattoan.com/mainnet/story/map</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Cumulo Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1758239625229787136/8IiYwfvO_400x400.jpg" alt="Cumulo" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Cumulo</span>
                        </div>

                        <div class="space-y-6">
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Service:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://cumulo.pro/services/story/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://cumulo.pro/services/story/</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Endpoints (Archive):</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• RPC:</span>
                                        <a href="https://rpc.story.cumulo.me" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://rpc.story.cumulo.me</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• EVM RPC:</span>
                                        <a href="https://evm.story.cumulo.me" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://evm.story.cumulo.me</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• gRPC:</span>
                                        <a href="grpc.story.cumulo.me" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">grpc.story.cumulo.me</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Websocket (EVM):</span>
                                        <a href="wss://evm-story.cumulo.org.es" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">wss://evm-story.cumulo.org.es</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• API:</span>
                                        <a href="https://api.story.cumulo.me" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://api.story.cumulo.me</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Peer:</span>
                                        <span class="text-blue-400 ml-1 break-all">a6d49faf6e1200cade89cb6260c878c38b153c9a@109.228.57.155:26646</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Tools:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Story Metrics and Grafana Dashboard:</span>
                                        <a href="https://github.com/Cumulo-pro/Story_protocol/tree/main/monitoring" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://github.com/Cumulo-pro/Story_protocol/tree/main/monitoring</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Peer scanner:</span>
                                        <a href="https://cumulo.pro/services/story/peerscan" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://cumulo.pro/services/story/peerscan</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Public RPC Scanner (Cosmos):</span>
                                        <a href="https://cumulo.pro/services/story/rpcscan" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://cumulo.pro/services/story/rpcscan</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Public RPC Scanner (EVM):</span>
                                        <a href="https://cumulo.pro/services/story/rpc_scan_evm" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://cumulo.pro/services/story/rpc_scan_evm</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Validator resources:</span>
                                        <a href="https://cumulo.pro/services/story/resources" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://cumulo.pro/services/story/resources</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Krews Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1910482660792655872/SPVpEwoa_400x400.jpg" alt="Krews" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Krews</span>
                        </div>

                        <div class="space-y-6">
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Service:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://story-dashboard.krews.xyz/story/validators" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-dashboard.krews.xyz/story/validators</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Endpoints (Archive):</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• RPC:</span>
                                        <a href="https://story-rpc.krews.xyz" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-rpc.krews.xyz</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• EVM RPC:</span>
                                        <a href="https://story-evm-rpc.krews.xyz" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-evm-rpc.krews.xyz</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Websocket (Cosmos):</span>
                                        <a href="wss://story-rpc.krews.xyz/websocket" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">wss://story-rpc.krews.xyz/websocket</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Websocket (EVM):</span>
                                        <a href="wss://story-ws-evm.krews.xyz" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">wss://story-ws-evm.krews.xyz</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• API:</span>
                                        <a href="https://story-api.krews.xyz" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-api.krews.xyz</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Snapshot:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://story-dashboard.krews.xyz/story/snapshots" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-dashboard.krews.xyz/story/snapshots</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Tools:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Decentralization:</span>
                                        <a href="https://story-dashboard.krews.xyz/story/decentralization" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-dashboard.krews.xyz/story/decentralization</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Weekly Status:</span>
                                        <a href="https://story-dashboard.krews.xyz/story/validator-status" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-dashboard.krews.xyz/story/validator-status</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Explorer:</span>
                                        <a href="https://story-dashboard.krews.xyz/story/validators" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-dashboard.krews.xyz/story/validators</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Spider Node Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1915845863827771393/4ciFgkaD_400x400.jpg" alt="Spider Node" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Spider Node</span>
                        </div>

                        <div class="space-y-6">
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Service:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://spidernode.net/docs/story/service" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://spidernode.net/docs/story/service</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Endpoints (Archive):</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• RPC:</span>
                                        <a href="https://story-cosmos-rpc.spidernode.net" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-cosmos-rpc.spidernode.net</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• EVM RPC:</span>
                                        <a href="https://story-evm-rpc.spidernode.net" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-evm-rpc.spidernode.net</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• API:</span>
                                        <a href="https://story-api-mainnet.spidernode.net" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-api-mainnet.spidernode.net</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Snapshot:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://spidernode.net/docs/story/snapshot" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://spidernode.net/docs/story/snapshot</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Synergy Nodes Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1505590144543657984/KASRyaAA_400x400.png" alt="Synergy Nodes" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Synergy Nodes</span>
                        </div>

                        <div class="space-y-6">
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Service:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://www.synergynodes.com/service/story" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://www.synergynodes.com/service/story</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Endpoints (Archive):</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• RPC:</span>
                                        <a href="https://story-rpc.synergynodes.com/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-rpc.synergynodes.com/</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• EVM RPC:</span>
                                        <a href="https://story-evm.synergynodes.com/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-evm.synergynodes.com/</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• API:</span>
                                        <a href="https://story-api.synergynodes.com/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-api.synergynodes.com/</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Seed:</span>
                                        <span class="text-blue-400 ml-1">eac361la167e7b621e267e3282c2cbf3feb56e59@story-seed.synergynodes.com:26656</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Snapshot:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://www.synergynodes.com/service/story" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://www.synergynodes.com/service/story</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Tools:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• State Sync:</span>
                                        <a href="https://www.synergynodes.com/service/story" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://www.synergynodes.com/service/story</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Silent Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1543610597123624960/9y06O-4w_400x400.jpg" alt="Silent" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Silent</span>
                        </div>

                        <div class="space-y-6">
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Service:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://services.silentvalidator.com/docs/category/story" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://services.silentvalidator.com/docs/category/story</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Endpoints (Archive):</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• RPC:</span>
                                        <a href="https://rpc.story.silentvalidator.com" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://rpc.story.silentvalidator.com</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• EVM RPC:</span>
                                        <a href="https://evm-rpc.story.silentvalidator.com" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://evm-rpc.story.silentvalidator.com</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• gRPC:</span>
                                        <span class="text-blue-400 ml-1">grpc.story.silentvalidator.com:443</span>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• API:</span>
                                        <a href="https://api.story.silentvalidator.com" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://api.story.silentvalidator.com</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Snapshot:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Pruned Snapshots:</span>
                                        <a href="https://services.silentvalidator.com/docs/mainnets/story/snapshots/Pruned-Snapshots" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://services.silentvalidator.com/docs/mainnets/story/snapshots/Pruned-Snapshots</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Tools:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Story Ansible:</span>
                                        <a href="https://services.silentvalidator.com/docs/mainnets/story/Tools#story-ansible" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://services.silentvalidator.com/docs/mainnets/story/Tools#story-ansible</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Story Node Finder:</span>
                                        <a href="https://services.silentvalidator.com/docs/mainnets/story/Tools#story-ansible" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://services.silentvalidator.com/docs/mainnets/story/Tools#story-ansible</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Story Grafana Dashboard:</span>
                                        <a href="https://services.silentvalidator.com/docs/mainnets/story/Tools#story-grafana-dashboard" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://services.silentvalidator.com/docs/mainnets/story/Tools#story-grafana-dashboard</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- pro-nodes75 Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1558787415430598658/WC2ARzZk_400x400.png" alt="pro-nodes75" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">pro-nodes75</span>
                        </div>

                        <div class="space-y-6">
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Service:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://services.node75.org/chains/story-mainnet" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://services.node75.org/chains/story-mainnet</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Endpoints (Archive):</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• RPC:</span>
                                        <a href="https://rpc-archive.story.node75.org" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://rpc-archive.story.node75.org</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• EVM RPC:</span>
                                        <a href="https://evm-rpc-archive.story.node75.org" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://evm-rpc-archive.story.node75.org</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Peer:</span>
                                        <span class="text-blue-400 ml-1">c1f8a737d23f025c9f632619c9f5fdca6acba753@peer.story.node75.org:27136</span>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Seed:</span>
                                        <span class="text-blue-400 ml-1">86bd5cb6e762f673f1706e5889e039d5406b4b90@seed.story.node75.org:35816</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Snapshot:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://snap.story.node75.org/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://snap.story.node75.org/</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Tools:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Story node monitoring:</span>
                                        <a href="https://github.com/the-node75/mon_story" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://github.com/the-node75/mon_story</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- STAKEME -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1900464628510916608/q5ORe5G0_400x400.jpg" alt="STAKEME" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">STAKEME</span>
                        </div>

                        <div class="space-y-6">
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Services:</h4>
                                <div class="space-y-2 text-sm">
                                    ${stakemeData.services.map(service => `
                                        <div class="break-words">
                                            <span class="text-white">• ${service.name}:</span>
                                            <a href="${service.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${service.url}</a>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Endpoints (Archive):</h4>
                                <div class="space-y-2 text-sm">
                                    ${stakemeData.endpoints.map(endpoint => `
                                        <div class="break-words">
                                            <span class="text-white">• ${endpoint.type}:</span>
                                            ${endpoint.type === 'Peer' || endpoint.type === 'Seed' ?
                        `<span class="text-blue-400 ml-1">${endpoint.url}</span>` :
                        `<a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>`
                    }
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Snapshots:</h4>
                                <div class="space-y-2 text-sm">
                                    ${stakemeData.snapshots.map(snapshot => `
                                        <div class="break-words">
                                            <span class="text-white">• ${snapshot.name}:</span>
                                            <a href="${snapshot.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${snapshot.url}</a>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Tools:</h4>
                                <div class="space-y-2 text-sm">
                                    ${stakemeData.tools.map(tool => `
                                        <div class="break-words">
                                            <span class="text-white">• ${tool.name}:</span>
                                            <a href="${tool.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${tool.url}</a>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CroutonDigital -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1801634644242161664/cUZv67VT_400x400.jpg" alt="CroutonDigital" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">CroutonDigital</span>
                        </div>

                        <div class="space-y-6">
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Services:</h4>
                                <div class="space-y-2 text-sm">
                                    ${croutonDigitalData.services.map(service => `
                                        <div class="break-words">
                                            <span class="text-white">• ${service.name}:</span>
                                            <a href="${service.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${service.url}</a>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Endpoints (Archive):</h4>
                                <div class="space-y-2 text-sm">
                                    ${croutonDigitalData.endpoints.map(endpoint => `
                                        <div class="break-words">
                                            <span class="text-white">• ${endpoint.type}:</span>
                                            <a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Snapshots:</h4>
                                <div class="space-y-2 text-sm">
                                    ${croutonDigitalData.snapshots.map(snapshot => `
                                        <div class="break-words">
                                            <span class="text-white">• ${snapshot.name}:</span>
                                            <a href="${snapshot.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${snapshot.url}</a>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Grand Valley -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-10 h-10">
                                <img src="icon/Grand.png" alt="Grand Valley" class="w-10 h-10 rounded">
                            </div>
                            <span class="text-white font-semibold text-lg">Grand Valley</span>
                        </div>

                        <div class="space-y-6">
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Service:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://github.com/hubofvalley/Valley-of-Story-Mainnet/tree/main/resources" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://github.com/hubofvalley/Valley-of-Story-Mainnet/tree/main/resources</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Endpoints (Archive):</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• RPC:</span>
                                        <a href="https://lightnode-rpc-mainnet-story.grandvalleys.com" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://lightnode-rpc-mainnet-story.grandvalleys.com</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• EVM RPC:</span>
                                        <a href="https://lightnode-json-rpc-mainnet-story.grandvalleys.com" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://lightnode-json-rpc-mainnet-story.grandvalleys.com</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Websocket (Cosmos):</span>
                                        <a href="wss://lightnode-rpc-mainnet-story.grandvalleys.com/websocket" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">wss://lightnode-rpc-mainnet-story.grandvalleys.com/websocket</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Websocket (EVM):</span>
                                        <a href="wss://lightnode-wss-mainnet-story.grandvalleys.com" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">wss://lightnode-wss-mainnet-story.grandvalleys.com</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• API:</span>
                                        <a href="https://lightnode-api-mainnet-story.grandvalleys.com" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://lightnode-api-mainnet-story.grandvalleys.com</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Snapshot:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://github.com/hubofvalley/Valley-of-Story-Mainnet/blob/main/resources/apply_snapshot.sh" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://github.com/hubofvalley/Valley-of-Story-Mainnet/blob/main/resources/apply_snapshot.sh</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Tools:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Valley Of Story:</span>
                                        <a href="https://github.com/hubofvalley/Valley-of-Story-Mainnet/blob/main/resources/valleyofStory.sh" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://github.com/hubofvalley/Valley-of-Story-Mainnet/blob/main/resources/valleyofStory.sh</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- J•Node -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1855090480507502592/m1e03F65_400x400.jpg" alt="J•Node" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">J•Node</span>
                        </div>

                        <div class="space-y-6">
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Service:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://j-node.net/services/guide?network=story&guide=installation" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://j-node.net/services/guide?network=story&guide=installation</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Endpoints (Archive):</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• RPC:</span>
                                        <a href="https://story-rpc.j-node.net" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-rpc.j-node.net</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• EVM RPC:</span>
                                        <a href="https://story-evm-rpc.j-node.net" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-evm-rpc.j-node.net</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Websocket (Cosmos):</span>
                                        <a href="wss://story-rpc.j-node.net/websocket" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">wss://story-rpc.j-node.net/websocket</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Websocket (EVM):</span>
                                        <a href="wss://story-rpc.j-node.net/websocket" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">wss://story-rpc.j-node.net/websocket</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• API:</span>
                                        <a href="https://story-api.j-node.net" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-api.j-node.net</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Snapshot:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://j-node.net/services/guide?network=story&guide=snapshot" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://j-node.net/services/guide?network=story&guide=snapshot</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Mandragora -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1581191562444275712/4a8YQ-LS_400x400.jpg" alt="Mandragora" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Mandragora</span>
                        </div>

                        <div class="space-y-6">
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Service:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">•</span>
                                        <a href="https://hackmd.io/@WLJTk-wKcusa2QMBavDTQ/r1Mc-eWnAstory-Protocol---Mandragoras-Infrastructure-services" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://hackmd.io/@WLJTk-wKcusa2QMBavDTQ/r1Mc-eWnAstory-Protocol---Mandragoras-Infrastructure-services</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Endpoints (Archive):</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• RPC:</span>
                                        <a href="https://story-rpc.mandragora.io" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-rpc.mandragora.io</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Websocket (Cosmos):</span>
                                        <a href="wss://story-rpc.mandragora.io/websocket" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">wss://story-rpc.mandragora.io/websocket</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Websocket (EVM):</span>
                                        <a href="wss://story-mainnet-evmwss.mandragora.io" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">wss://story-mainnet-evmwss.mandragora.io</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• API:</span>
                                        <a href="https://story-api.mandragora.io" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-api.mandragora.io</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Peer:</span>
                                        <span class="text-blue-400 ml-1 break-all">9d56213f3e278ee8c0aae5aab4aee670add33f03@story-peer.mandragora.io:26656</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Snapshots:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Pruned:</span>
                                        <a href="https://hackmd.io/@mandragora/story-mainnet?s=text=37453A1189%3A0%3A17641013063AExpU3w" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://hackmd.io/@mandragora/story-mainnet?s=text=37453A1189%3A0%3A17641013063AExpU3w</a>
                                    </div>
                                    <div class="break-words">
                                        <span class="text-white">• Archival:</span>
                                        <a href="https://hackmd.io/@mandragora/story-mainnet?s=text=229353A11063%0%3A176410130634Aed2Aq" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://hackmd.io/@mandragora/story-mainnet?s=text=229353A11063%0%3A176410130634Aed2Aq</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-sm font-semibold text-white mb-3">Tools:</h4>
                                <div class="space-y-2 text-sm">
                                    <div class="break-words">
                                        <span class="text-white">• Lost my Validator:</span>
                                        <a href="https://hackmd.io/@mandragora/story-mainnet?s=text=37453A1189%3A0%3A176410130634AExpU3w" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://hackmd.io/@mandragora/story-mainnet?s=text=37453A1189%3A0%3A176410130634AExpU3w</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;

            case 'service':
                content = `
                    <!-- Story Network Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1820303986349805569/MKfPfLtz_400x400.jpg" alt="Story" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Story Network Services</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${storyData.resources.map(resource => `
                                <div class="break-words">
                                    <span class="text-white">• ${resource.name}:</span>
                                    <a href="${resource.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${resource.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- ITRocket Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1896887737568907264/4-JzLf1a_400x400.jpg" alt="ITRocket" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">ITRocket Services</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            <div class="break-words">
                                <span class="text-white">•</span>
                                <a href="https://itrocket.net/services/mainnet/story/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://itrocket.net/services/mainnet/story/</a>
                            </div>
                        </div>
                    </div>

                    <!-- NodeStake Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1656150389518139393/XIWb60AJ_400x400.jpg" alt="NodeStake" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">NodeStake Services</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            <div class="break-words">
                                <span class="text-white">•</span>
                                <a href="https://nodestake.org/story" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://nodestake.org/story</a>
                            </div>
                        </div>
                    </div>

                    <!-- NODERS Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-10 h-10 rounded overflow-hidden">
                                <img src="icon/Node.png" alt="NODERS" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">NODERS Services</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            <div class="break-words">
                                <span class="text-white">•</span>
                                <a href="https://noders.services/mainnet/story" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://noders.services/mainnet/story</a>
                            </div>
                        </div>
                    </div>

                    <!-- Cosmic Validator Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1541402359313715201/9pa-PIcH_400x400.jpg" alt="Cosmic Validator" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Cosmic Validator Services</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            <div class="break-words">
                                <span class="text-white">•</span>
                                <a href="https://github.com/CosmicValidator/Story-Mainnet/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://github.com/CosmicValidator/Story-Mainnet/</a>
                            </div>
                        </div>
                    </div>

                    <!-- TTT_VN Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1965029538062299136/D_ZHbWnm_400x400.jpg" alt="TTT_VN" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">TTT_VN Services</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            <div class="break-words">
                                <span class="text-white">•</span>
                                <a href="https://services.tienthuattoan.com/mainnet/story" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://services.tienthuattoan.com/mainnet/story</a>
                            </div>
                        </div>
                    </div>

                    <!-- Cumulo Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1758239625229787136/8IiYwfvO_400x400.jpg" alt="Cumulo" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Cumulo Services</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            <div class="break-words">
                                <span class="text-white">•</span>
                                <a href="https://cumulo.pro/services/story/" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://cumulo.pro/services/story/</a>
                            </div>
                        </div>
                    </div>

                    <!-- Krews Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1910482660792655872/SPVpEwoa_400x400.jpg" alt="Krews" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Krews Services</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            <div class="break-words">
                                <span class="text-white">•</span>
                                <a href="https://story-dashboard.krews.xyz/story/validators" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">https://story-dashboard.krews.xyz/story/validators</a>
                            </div>
                        </div>
                    </div>

                    <!-- Grand Valley Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-10 h-10">
                                <img src="icon/Grand.png" alt="Grand Valley" class="w-10 h-10 rounded">
                            </div>
                            <span class="text-white font-semibold text-lg">Grand Valley Services</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${grandValleyData.services.map(service => `
                                <div class="break-words">
                                    <span class="text-white">• ${service.name}:</span>
                                    <a href="${service.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${service.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- J•Node Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1855090480507502592/m1e03F65_400x400.jpg" alt="J•Node" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">J•Node Services</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${jNodeData.services.map(service => `
                                <div class="break-words">
                                    <span class="text-white">• ${service.name}:</span>
                                    <a href="${service.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${service.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Mandragora Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1581191562444275712/4a8YQ-LS_400x400.jpg" alt="Mandragora" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Mandragora Services</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${mandragoraData.services.map(service => `
                                <div class="break-words">
                                    <span class="text-white">• ${service.name}:</span>
                                    <a href="${service.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${service.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Spider Node Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1915845863827771393/4ciFgkaD_400x400.jpg" alt="Spider Node" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Spider Node Services</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${spiderNodeData.services.map(service => `
                                <div class="break-words">
                                    <span class="text-white">•</span>
                                    <a href="${service.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${service.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Synergy Nodes Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1505590144543657984/KASRyaAA_400x400.png" alt="Synergy Nodes" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Synergy Nodes Services</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${synergyNodesData.services.map(service => `
                                <div class="break-words">
                                    <span class="text-white">• ${service.name}:</span>
                                    <a href="${service.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${service.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Silent Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1543610597123624960/9y06O-4w_400x400.jpg" alt="Silent" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Silent Services</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${silentData.services.map(service => `
                                <div class="break-words">
                                    <span class="text-white">• ${service.name}:</span>
                                    <a href="${service.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${service.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- pro-nodes75 Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1558787415430598658/WC2ARzZk_400x400.png" alt="pro-nodes75" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">pro-nodes75 Services</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${proNodes75Data.services.map(service => `
                                <div class="break-words">
                                    <span class="text-white">• ${service.name}:</span>
                                    <a href="${service.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${service.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- STAKEME Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1900464628510916608/q5ORe5G0_400x400.jpg" alt="STAKEME" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">STAKEME Services</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${stakemeData.services.map(service => `
                                <div class="break-words">
                                    <span class="text-white">• ${service.name}:</span>
                                    <a href="${service.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${service.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- CroutonDigital Services -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1801634644242161664/cUZv67VT_400x400.jpg" alt="CroutonDigital" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">CroutonDigital Services</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${croutonDigitalData.services.map(service => `
                                <div class="break-words">
                                    <span class="text-white">• ${service.name}:</span>
                                    <a href="${service.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${service.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
                break;

            case 'endpoints':
                content = `
                    <!-- Story Network Endpoints -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1820303986349805569/MKfPfLtz_400x400.jpg" alt="Story" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Story Network Endpoints</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${storyData.endpoints.map(endpoint => `
                                <div class="break-words">
                                    <span class="text-white">• ${endpoint.type}:</span>
                                    <a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- ITRocket Endpoints -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1896887737568907264/4-JzLf1a_400x400.jpg" alt="ITRocket" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">ITRocket Endpoints</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${itrocketData.endpoints.map(endpoint => `
                                <div class="break-words">
                                    <span class="text-white">• ${endpoint.type}:</span>
                                    <a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- NodeStake Endpoints -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1656150389518139393/XIWb60AJ_400x400.jpg" alt="NodeStake" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">NodeStake Endpoints</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${nodestakeData.endpoints.map(endpoint => `
                                <div class="break-words">
                                    <span class="text-white">• ${endpoint.type}:</span>
                                    ${endpoint.type === 'Seed' ?
                        `<span class="text-blue-400 ml-1 break-all">${endpoint.url}</span>` :
                        `<a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>`
                    }
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- NODERS Endpoints -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-10 h-10 rounded overflow-hidden">
                                <img src="icon/Node.png" alt="NODERS" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">NODERS Endpoints</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${nodersData.endpoints.map(endpoint => `
                                <div class="break-words">
                                    <span class="text-white">• ${endpoint.type}:</span>
                                    <a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Cosmic Validator Endpoints -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1541402359313715201/9pa-PIcH_400x400.jpg" alt="Cosmic Validator" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Cosmic Validator Endpoints</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${cosmicValidatorData.endpoints.map(endpoint => `
                                <div class="break-words">
                                    <span class="text-white">• ${endpoint.type}:</span>
                                    <a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- TTT_VN Endpoints -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1965029538062299136/D_ZHbWnm_400x400.jpg" alt="TTT_VN" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">TTT_VN Endpoints</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${tttVnData.endpoints.map(endpoint => `
                                <div class="break-words">
                                    <span class="text-white">• ${endpoint.type}:</span>
                                    ${endpoint.type === 'Seed' ?
                            `<span class="text-blue-400 ml-1 break-all">${endpoint.url}</span>` :
                            `<a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>`
                        }
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Cumulo Endpoints -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1758239625229787136/8IiYwfvO_400x400.jpg" alt="Cumulo" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Cumulo Endpoints</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${cumuloData.endpoints.map(endpoint => `
                                <div class="break-words">
                                    <span class="text-white">• ${endpoint.type}:</span>
                                    ${endpoint.type === 'Peer' ?
                                `<span class="text-blue-400 ml-1 break-all">${endpoint.url}</span>` :
                                `<a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>`
                            }
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Krews Endpoints -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1910482660792655872/SPVpEwoa_400x400.jpg" alt="Krews" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Krews Endpoints</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${krewsData.endpoints.map(endpoint => `
                                <div class="break-words">
                                    <span class="text-white">• ${endpoint.type}:</span>
                                    <a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Grand Valley Endpoints -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-10 h-10">
                                <img src="icon/Grand.png" alt="Grand Valley" class="w-10 h-10 rounded">
                            </div>
                            <span class="text-white font-semibold text-lg">Grand Valley Endpoints</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${grandValleyData.endpoints.map(endpoint => `
                                <div class="break-words">
                                    <span class="text-white">• ${endpoint.type}:</span>
                                    <a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- J•Node Endpoints -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1855090480507502592/m1e03F65_400x400.jpg" alt="J•Node" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">J•Node Endpoints</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${jNodeData.endpoints.map(endpoint => `
                                <div class="break-words">
                                    <span class="text-white">• ${endpoint.type}:</span>
                                    <a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Mandragora Endpoints -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1581191562444275712/4a8YQ-LS_400x400.jpg" alt="Mandragora" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Mandragora Endpoints</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${mandragoraData.endpoints.map(endpoint => `
                                <div class="break-words">
                                    <span class="text-white">• ${endpoint.type}:</span>
                                    ${endpoint.type === 'Peer' ?
                                    `<span class="text-blue-400 ml-1 break-all">${endpoint.url}</span>` :
                                    `<a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>`
                                }
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Spider Node Endpoints -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1915845863827771393/4ciFgkaD_400x400.jpg" alt="Spider Node" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Spider Node Endpoints</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${spiderNodeData.endpoints.map(endpoint => `
                                <div class="break-words">
                                    <span class="text-white">• ${endpoint.type}:</span>
                                    <a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Synergy Nodes Endpoints -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1505590144543657984/KASRyaAA_400x400.png" alt="Synergy Nodes" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Synergy Nodes Endpoints</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${synergyNodesData.endpoints.map(endpoint => `
                                <div class="break-words">
                                    <span class="text-white">• ${endpoint.type}:</span>
                                    ${endpoint.type === 'Seed' ?
                                        `<span class="text-blue-400 ml-1">${endpoint.url}</span>` :
                                        `<a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>`
                                    }
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Silent Endpoints -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1543610597123624960/9y06O-4w_400x400.jpg" alt="Silent" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Silent Endpoints</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${silentData.endpoints.map(endpoint => `
                                <div class="break-words">
                                    <span class="text-white">• ${endpoint.type}:</span>
                                    ${endpoint.type === 'gRPC' ?
                                            `<span class="text-blue-400 ml-1">${endpoint.url}</span>` :
                                            `<a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>`
                                        }
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- pro-nodes75 Endpoints -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1558787415430598658/WC2ARzZk_400x400.png" alt="pro-nodes75" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">pro-nodes75 Endpoints</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${proNodes75Data.endpoints.map(endpoint => `
                                <div class="break-words">
                                    <span class="text-white">• ${endpoint.type}:</span>
                                    ${endpoint.type === 'Peer' || endpoint.type === 'Seed' ?
                                                `<span class="text-blue-400 ml-1">${endpoint.url}</span>` :
                                                `<a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>`
                                            }
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- STAKEME Endpoints -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1900464628510916608/q5ORe5G0_400x400.jpg" alt="STAKEME" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">STAKEME Endpoints</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${stakemeData.endpoints.map(endpoint => `
                                <div class="break-words">
                                    <span class="text-white">• ${endpoint.type}:</span>
                                    ${endpoint.type === 'Peer' || endpoint.type === 'Seed' ?
                                                    `<span class="text-blue-400 ml-1">${endpoint.url}</span>` :
                                                    `<a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>`
                                                }
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- CroutonDigital Endpoints -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1801634644242161664/cUZv67VT_400x400.jpg" alt="CroutonDigital" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">CroutonDigital Endpoints</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${croutonDigitalData.endpoints.map(endpoint => `
                                <div class="break-words">
                                    <span class="text-white">• ${endpoint.type}:</span>
                                    <a href="${endpoint.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${endpoint.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
                break;

            case 'snapshots':
                content = `
                    <!-- ITRocket Snapshots -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1896887737568907264/4-JzLf1a_400x400.jpg" alt="ITRocket" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">ITRocket Snapshots</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${itrocketData.snapshots.map(snapshot => `
                                <div class="break-words">
                                    <span class="text-white">•</span>
                                    <a href="${snapshot.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${snapshot.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- NodeStake Snapshots -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1656150389518139393/XIWb60AJ_400x400.jpg" alt="NodeStake" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">NodeStake Snapshots</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${nodestakeData.snapshots.map(snapshot => `
                                <div class="break-words">
                                    <span class="text-white">•</span>
                                    <a href="${snapshot.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${snapshot.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- NODERS Snapshots -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-10 h-10 rounded overflow-hidden">
                                <img src="icon/Node.png" alt="NODERS" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">NODERS Snapshots</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${nodersData.snapshots.map(snapshot => `
                                <div class="break-words">
                                    <span class="text-white">•</span>
                                    <a href="${snapshot.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${snapshot.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Cosmic Validator Snapshots -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1541402359313715201/9pa-PIcH_400x400.jpg" alt="Cosmic Validator" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Cosmic Validator Snapshots</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${cosmicValidatorData.snapshots.map(snapshot => `
                                <div class="break-words">
                                    <span class="text-white">•</span>
                                    <a href="${snapshot.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${snapshot.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- TTT_VN Snapshots -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1965029538062299136/D_ZHbWnm_400x400.jpg" alt="TTT_VN" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">TTT_VN Snapshots</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${tttVnData.snapshots.map(snapshot => `
                                <div class="break-words">
                                    <span class="text-white">•</span>
                                    <a href="${snapshot.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${snapshot.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Cumulo Snapshots -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1758239625229787136/8IiYwfvO_400x400.jpg" alt="Cumulo" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Cumulo Snapshots</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${cumuloData.snapshots.map(snapshot => `
                                <div class="break-words">
                                    <span class="text-white">•</span>
                                    <a href="${snapshot.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${snapshot.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Krews Snapshots -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1910482660792655872/SPVpEwoa_400x400.jpg" alt="Krews" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Krews Snapshots</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${krewsData.snapshots.map(snapshot => `
                                <div class="break-words">
                                    <span class="text-white">•</span>
                                    <a href="${snapshot.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${snapshot.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Grand Valley Snapshots -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-10 h-10">
                                <img src="icon/Grand.png" alt="Grand Valley" class="w-10 h-10 rounded">
                            </div>
                            <span class="text-white font-semibold text-lg">Grand Valley Snapshots</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${grandValleyData.snapshots.map(snapshot => `
                                <div class="break-words">
                                    <span class="text-white">• ${snapshot.name}:</span>
                                    <a href="${snapshot.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${snapshot.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- J•Node Snapshots -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden flex items-center justify-center bg-blue-500 text-white font-bold text-xs">
                                JN
                            </div>
                            <span class="text-white font-semibold text-lg">J•Node Snapshots</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${jNodeData.snapshots.map(snapshot => `
                                <div class="break-words">
                                    <span class="text-white">• ${snapshot.name}:</span>
                                    <a href="${snapshot.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${snapshot.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Mandragora Snapshots -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1581191562444275712/4a8YQ-LS_400x400.jpg" alt="Mandragora" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Mandragora Snapshots</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${mandragoraData.snapshots.map(snapshot => `
                                <div class="break-words">
                                    <span class="text-white">• ${snapshot.name}:</span>
                                    <a href="${snapshot.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${snapshot.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Spider Node Snapshots -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1915845863827771393/4ciFgkaD_400x400.jpg" alt="Spider Node" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Spider Node Snapshots</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${spiderNodeData.snapshots.map(snapshot => `
                                <div class="break-words">
                                    <span class="text-white">•</span>
                                    <a href="${snapshot.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${snapshot.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Synergy Nodes Snapshots -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1505590144543657984/KASRyaAA_400x400.png" alt="Synergy Nodes" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Synergy Nodes Snapshots</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${synergyNodesData.snapshots.map(snapshot => `
                                <div class="break-words">
                                    <span class="text-white">• ${snapshot.name}:</span>
                                    <a href="${snapshot.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${snapshot.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Silent Snapshots -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1543610597123624960/9y06O-4w_400x400.jpg" alt="Silent" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Silent Snapshots</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${silentData.snapshots.map(snapshot => `
                                <div class="break-words">
                                    <span class="text-white">• ${snapshot.name}:</span>
                                    <a href="${snapshot.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${snapshot.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- pro-nodes75 Snapshots -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1558787415430598658/WC2ARzZk_400x400.png" alt="pro-nodes75" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">pro-nodes75 Snapshots</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${proNodes75Data.snapshots.map(snapshot => `
                                <div class="break-words">
                                    <span class="text-white">• ${snapshot.name}:</span>
                                    <a href="${snapshot.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${snapshot.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- STAKEME Snapshots -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1900464628510916608/q5ORe5G0_400x400.jpg" alt="STAKEME" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">STAKEME Snapshots</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${stakemeData.snapshots.map(snapshot => `
                                <div class="break-words">
                                    <span class="text-white">• ${snapshot.name}:</span>
                                    <a href="${snapshot.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${snapshot.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- CroutonDigital Snapshots -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1801634644242161664/cUZv67VT_400x400.jpg" alt="CroutonDigital" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">CroutonDigital Snapshots</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${croutonDigitalData.snapshots.map(snapshot => `
                                <div class="break-words">
                                    <span class="text-white">• ${snapshot.name}:</span>
                                    <a href="${snapshot.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${snapshot.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
                break;

            case 'explorers':
                content = `
                    <!-- Story Network Explorers -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1820303986349805569/MKfPfLtz_400x400.jpg" alt="Story" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Story Network Explorers</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${storyData.explorers.map(explorer => `
                                <div class="break-words">
                                    <span class="text-white">•</span>
                                    <a href="${explorer.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${explorer.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Nodes.Guru Explorers -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1753055196618317824/sZTAPNfK_400x400.png" alt="Nodes.Guru" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Nodes.Guru Explorers</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${nodesGuruData.explorers.map(explorer => `
                                <div class="break-words">
                                    <span class="text-white">•</span>
                                    <a href="${explorer.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${explorer.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
                break;

            case 'tools':
                content = `
                    <!-- ITRocket Tools -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1896887737568907264/4-JzLf1a_400x400.jpg" alt="ITRocket" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">ITRocket Tools</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${itrocketData.tools.map(tool => `
                                <div class="break-words">
                                    <span class="text-white">• ${tool.name}:</span>
                                    <a href="${tool.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${tool.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- NODERS Tools -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-10 h-10 rounded overflow-hidden">
                                <img src="icon/Node.png" alt="NODERS" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">NODERS Tools</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${nodersData.tools.map(tool => `
                                <div class="break-words">
                                    <span class="text-white">• ${tool.name}:</span>
                                    <a href="${tool.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${tool.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- OriginStake Tools -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1985606662628237312/PiYrd4um_400x400.jpg" alt="OriginStake" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">OriginStake Tools</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${originStakeData.tools.map(tool => `
                                <div class="break-words">
                                    <span class="text-white">• ${tool.name}:</span>
                                    <a href="${tool.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${tool.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- F5 Nodes Tools -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1575613984887250948/bPfx_Owd_400x400.jpg" alt="F5 Nodes" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">F5 Nodes Tools</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${f5NodesData.tools.map(tool => `
                                <div class="break-words">
                                    <span class="text-white">• ${tool.name}:</span>
                                    <a href="${tool.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${tool.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Endorphine Stake Tools -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1930686066031243264/XKxlTuYH_400x400.jpg" alt="Endorphine Stake" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Endorphine Stake Tools</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${endorphineStakeData.tools.map(tool => `
                                <div class="break-words">
                                    <span class="text-white">• ${tool.name}:</span>
                                    <a href="${tool.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${tool.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- TTT_VN Tools -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1965029538062299136/D_ZHbWnm_400x400.jpg" alt="TTT_VN" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">TTT_VN Tools</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${tttVnData.tools.map(tool => `
                                <div class="break-words">
                                    <span class="text-white">• ${tool.name}:</span>
                                    <a href="${tool.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${tool.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Cumulo Tools -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1758239625229787136/8IiYwfvO_400x400.jpg" alt="Cumulo" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Cumulo Tools</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${cumuloData.tools.map(tool => `
                                <div class="break-words">
                                    <span class="text-white">• ${tool.name}:</span>
                                    <a href="${tool.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${tool.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Krews Tools -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1910482660792655872/SPVpEwoa_400x400.jpg" alt="Krews" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Krews Tools</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${krewsData.tools.map(tool => `
                                <div class="break-words">
                                    <span class="text-white">• ${tool.name}:</span>
                                    <a href="${tool.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${tool.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Grand Valley Tools -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-10 h-10">
                                <img src="icon/Grand.png" alt="Grand Valley" class="w-10 h-10 rounded">
                            </div>
                            <span class="text-white font-semibold text-lg">Grand Valley Tools</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${grandValleyData.tools.map(tool => `
                                <div class="break-words">
                                    <span class="text-white">• ${tool.name}:</span>
                                    <a href="${tool.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${tool.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Mandragora Tools -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1581191562444275712/4a8YQ-LS_400x400.jpg" alt="Mandragora" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Mandragora Tools</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${mandragoraData.tools.map(tool => `
                                <div class="break-words">
                                    <span class="text-white">• ${tool.name}:</span>
                                    <a href="${tool.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${tool.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Synergy Nodes Tools -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1505590144543657984/KASRyaAA_400x400.png" alt="Synergy Nodes" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Synergy Nodes Tools</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${synergyNodesData.tools.map(tool => `
                                <div class="break-words">
                                    <span class="text-white">• ${tool.name}:</span>
                                    <a href="${tool.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${tool.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Silent Tools -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1543610597123624960/9y06O-4w_400x400.jpg" alt="Silent" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">Silent Tools</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${silentData.tools.map(tool => `
                                <div class="break-words">
                                    <span class="text-white">• ${tool.name}:</span>
                                    <a href="${tool.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${tool.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- pro-nodes75 Tools -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1558787415430598658/WC2ARzZk_400x400.png" alt="pro-nodes75" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">pro-nodes75 Tools</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${proNodes75Data.tools.map(tool => `
                                <div class="break-words">
                                    <span class="text-white">• ${tool.name}:</span>
                                    <a href="${tool.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${tool.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- STAKEME Tools -->
                    <div class="validator-card bg-transparent p-6 mb-6">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-8 h-8 rounded overflow-hidden">
                                <img src="https://pbs.twimg.com/profile_images/1900464628510916608/q5ORe5G0_400x400.jpg" alt="STAKEME" class="w-full h-full object-cover">
                            </div>
                            <span class="text-white font-semibold text-lg">STAKEME Tools</span>
                        </div>
                        <div class="space-y-2 text-sm">
                            ${stakemeData.tools.map(tool => `
                                <div class="break-words">
                                    <span class="text-white">• ${tool.name}:</span>
                                    <a href="${tool.url}" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-all">${tool.url}</a>
                                </div>
                            `).join('')}
                        </div>
                    </div>


                `;
                break;
        }

        unifiedContainer.innerHTML = content;
    }

    handleSearch(query) {
        const activeTab = document.querySelector('[data-tab].text-purple-300')?.dataset.tab || 'overview';
        const container = document.getElementById('unified-content-container');

        if (!container) return;

        if (!query.trim()) {
            this.updateMainContent(activeTab);
            return;
        }

        const searchLower = query.toLowerCase();
        const cards = container.querySelectorAll('.validator-card');
        let visibleCount = 0;

        // Clear previous highlights
        cards.forEach(card => {
            this.clearHighlights(card);
        });

        cards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            const cardTitle = card.querySelector('.text-lg')?.textContent.toLowerCase() || '';

            // Enhanced search: check title, service names, URLs, and general content
            const shouldShow = cardText.includes(searchLower) ||
                cardTitle.includes(searchLower) ||
                this.searchInLinks(card, searchLower);

            if (shouldShow) {
                card.style.display = 'block';
                card.style.opacity = '1';
                this.highlightSearchTerm(card, query);
                visibleCount++;
            } else {
                card.style.display = 'none';
                card.style.opacity = '0.5';
            }
        });

        // Show search results info
        this.showSearchResults(visibleCount, query, activeTab);

        console.log(`Found ${visibleCount} results for: "${query}" in ${activeTab} tab`);
    }

    searchInLinks(card, searchTerm) {
        const links = card.querySelectorAll('a');
        return Array.from(links).some(link =>
            link.textContent.toLowerCase().includes(searchTerm) ||
            link.href.toLowerCase().includes(searchTerm)
        );
    }

    showSearchResults(count, query, tab) {
        // Remove existing search info
        const existingInfo = document.querySelector('.search-results-info');
        if (existingInfo) {
            existingInfo.remove();
        }

        if (query.trim()) {
            const container = document.getElementById('unified-content-container');
            const searchInfo = document.createElement('div');
            searchInfo.className = 'search-results-info mb-4 p-3 rounded-lg';
            searchInfo.style.cssText = 'background: rgba(147, 51, 234, 0.1); border: 1px solid rgba(147, 51, 234, 0.3);';
            searchInfo.innerHTML = `
                <div class="text-sm text-white">
                    <span class="font-medium">${count} results found</span> for 
                    <span class="text-purple-300">"${query}"</span> in 
                    <span class="text-purple-300">${tab}</span> section
                </div>
            `;
            container.insertBefore(searchInfo, container.firstChild);
        }
    }

    highlightSearchTerm(element, searchTerm) {
        if (!searchTerm.trim()) return;

        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        const textNodes = [];
        let node;

        while (node = walker.nextNode()) {
            if (node.nodeValue.toLowerCase().includes(searchTerm.toLowerCase())) {
                textNodes.push(node);
            }
        }

        textNodes.forEach(textNode => {
            const parent = textNode.parentNode;
            if (parent.tagName === 'MARK') return; // Already highlighted

            const text = textNode.nodeValue;
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            const highlightedText = text.replace(regex, '<mark style="background-color: #fbbf24; color: #000;">$1</mark>');

            if (highlightedText !== text) {
                const wrapper = document.createElement('span');
                wrapper.innerHTML = highlightedText;
                parent.replaceChild(wrapper, textNode);
            }
        });
    }

    clearHighlights(element) {
        const marks = element.querySelectorAll('mark');
        marks.forEach(mark => {
            const parent = mark.parentNode;
            parent.replaceChild(document.createTextNode(mark.textContent), mark);
            parent.normalize();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ValidatorContent();
});
