class DeveloperArticlesTwo {
    constructor() {
        this.DevelArticlesTwo = [
            {
                id: 1,
                title: 'Programmable IP: Ushering in the Onchain Renaissance: Blockchain\'s next major use case',
                image: 'DevelArticlesTwo/ip.png',
                link: 'https://www.story.foundation/blog/programmable-ip'
            },
            {
                id: 2,
                title: 'From Prototype to Possibility: What we built in Story\'s internal hackathon',
                image: 'DevelArticlesTwo/hack.png',
                link: 'https://www.story.foundation/blog/from-prototype-to-possibility'
            },
            {
                id: 3,
                title: 'IP Licensing 101: How IP moves from static ownership to scalable value creation',
                image: 'DevelArticlesTwo/101.png',
                link: 'https://www.story.foundation/blog/ip-licensing-101'
            },
            {
                id: 4,
                title: 'Story Network Postmortem: Bug Bounty Criticals Seamlessly Patched',
                image: 'DevelArticlesTwo/net.png',
                link: 'https://www.story.foundation/blog/story-network-postmortem'
            },
            {
                id: 5,
                title: 'Surreal World Assets: A Virtual Buildathon on the Future of IP and RWAs',
                image: 'DevelArticlesTwo/world.png',
                link: 'https://www.story.foundation/blog/surreal-world-assets-buildathon'
            },
            {
                id: 6,
                title: 'Claude\'s MCP Comes to Story: Enabling AI agents with IP',
                image: 'DevelArticlesTwo/ipgreen.png',
                link: 'https://www.story.foundation/blog/claudes-mcp-comes-to-story'
            },
            {
                id: 7,
                title: 'External Royalty Policy Guide',
                image: 'DevelArticlesTwo/external.png',
                link: 'https://www.story.foundation/blog/external-royalty-policy-guide'
            },
            {
                id: 8,
                title: 'Introducing IP Vault: Secure, Confidential, Programmable Access to Onchain IP Data',
                image: 'DevelArticlesTwo/vault.png',
                link: 'https://www.story.foundation/blog/introducing-ip-vault'
            },
            {
                id: 9,
                title: 'Ethereum: The Pectra Era by Luganodes',
                image: 'DevelArticlesTwo/pectra.png',
                link: 'https://www.luganodes.com/blog/ethereum-pectra-eip/'
            },
            {
                id: 10,
                title: 'Fully Homomorphic Encryption (FHE) on the Blockchain: A Step-by-Step Tutorial for Developers by TokenMinds Team',
                image: 'DevelArticlesTwo/comp.png',
                link: 'https://tokenminds.co/blog/knowledge-base/a-step-by-step-tutorial-for-fully-homomorphic-encryption-(fhe)-on-the-blockchain'
            },
            {
                id: 11,
                title: 'Surreal World Assets Buildathon (Cumulo)',
                image: 'DevelArticlesTwo/skip.png',
                link: 'https://medium.com/cumulo-pro/surreal-world-assets-buildathon-b4375f6a07ac'
            },

        ];
    }

    init() {
        console.log('UsefulArticles init() called');
        this.renderDevelArticlesTwoContent();
    }

    renderDevelArticlesTwoContent() {
        console.log('renderDevelArticlesTwoContent() called');
        const networkContainer = document.getElementById('network-info');
        const mainContainer = document.getElementById('main-content');

        if (!networkContainer || !mainContainer) {
            console.error('Required containers not found:', { networkContainer, mainContainer });
            return;
        }

        networkContainer.innerHTML = '';
        mainContainer.innerHTML = '';

        mainContainer.innerHTML = `
            <div class="max-w-7xl mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                    ${this.DevelArticlesTwo.map(article => this.renderArticleCard(article)).join('')}
                </div>
            </div>
        `;
    }

    renderArticleCard(article) {
        return `
            <div class="w-full min-w-[300px] hover:scale-105 transition-transform duration-300 cursor-pointer h-full flex flex-col" onclick="window.open('${article.link}', '_blank')">
                <div class="developer-card bg-transparent overflow-hidden mb-3 w-full flex-shrink-0">
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