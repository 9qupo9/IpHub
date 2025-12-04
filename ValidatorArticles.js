class ValidatorArticles {
    constructor() {
        this.ValidArticles = [
            {
                id: 1,
                title: 'Node Maintenance on Story Protocol: Best Practices from Everstake',
                image: 'ValidArticles/perfomance.png',
                link: 'https://everstake.one/blog/node-maintenance-on-story-protocol-best-practices-from-everstake',
            },
            {
                id: 2,
                title: 'Integration Solution for secp256k1 Support',
                image: 'ValidArticles/cart.png',
                link: 'https://forum.story.foundation/t/integration-solution-for-secp256k1-support/37106',
            },
            {
                id: 3,
                title: 'Story Network Update: From Launch to Chapter 2',
                image: 'ValidArticles/network.png',
                link: 'https://www.story.foundation/blog/story-network-update'
            },
            {
                id: 4,
                title: 'Upgrading to Pectra: Story\'s Geth Fork will soon incorporate Ethereum\'s latest EIPs',
                image: 'ValidArticles/upgrade.png',
                link: 'https://www.story.foundation/blog/upgrading-to-pectra'
            },
            {
                id: 5,
                title: 'Story Protocol: Tokenomics & Staking Highlights',
                image: 'ValidArticles/locked.png',
                link: 'https://everstake.one/blog/story-protocol-tokenomics-staking-highlights'
            },
            {
                id: 6,
                title: 'Using Cosmovisor in Story Protocol: a Guide',
                image: 'ValidArticles/master.png',
                link: 'https://everstake.one/blog/using-cosmovisor-in-story-protocol-a-guide'
            },
            {
                id: 7,
                title: 'Private Key Encryption for Validators',
                image: 'ValidArticles/privat.png',
                link: 'https://www.story.foundation/blog/private-key-encryption-for-validators'
            },
            {
                id: 8,
                title: 'The Big Bang Block: A new era of staking rewards',
                image: 'ValidArticles/block.png',
                link: 'https://www.story.foundation/blog/big-bang-block'
            },
            {
                id: 9,
                title: 'Story Network Postmortem: Bug Bounty Criticals Seamlessly Patched',
                image: 'ValidArticles/story.png',
                link: 'https://www.story.foundation/blog/story-network-postmortem'
            },
            {
                id: 10,
                title: 'Technical Roadmap Update: A closer look at the path ahead',
                image: 'ValidArticles/black.png',
                link: 'https://www.story.foundation/blog/story-technical-roadmap'
            }
        ];
    }

    init() {
        this.renderValidArticlesContent();
    }

    renderValidArticlesContent() {
        const networkContainer = document.getElementById('network-info');
        const mainContainer = document.getElementById('main-content');

        if (!networkContainer || !mainContainer) return;

        networkContainer.innerHTML = '';
        mainContainer.innerHTML = '';

        mainContainer.innerHTML = `
            <div class="max-w-7xl mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                    ${this.ValidArticles.map(article => this.renderArticleCard(article)).join('')}
                </div>
            </div>
        `;
    }

    renderArticleCard(article) {
        return `
            <div class="w-full min-w-[300px] hover:scale-105 transition-transform duration-300 cursor-pointer h-full flex flex-col" onclick="window.open('${article.link}', '_blank')">
                <div class="validator-card-transparent bg-transparent overflow-hidden mb-3 w-full flex-shrink-0">
                    <img src="${article.image}" alt="${article.title}" class="w-full h-40 object-cover rounded-lg" onerror="this.src='media/about.png'">
                </div>
                <div class="w-full flex-grow">
                    <h3 class="text-white font-bold text-sm mb-1 leading-tight">
                        ${article.title}
                    </h3>
                    <p class="text-gray-400 text-xs leading-relaxed">
                        ${article.subtitle || 'Read more about this topic'}
                    </p>
                </div>
            </div>
        `;
    }
}