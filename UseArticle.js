class UsefulArticles {
    constructor() {
        this.useart = [
            {
                id: 1,
                title: 'Programmable IP: Ushering in the Onchain Renaissance: Blockchain\'s next major use case',
                image: 'useart/ip.png',
                link: 'https://www.figma.com/exit?url=https%3A%2F%2Fwww.story.foundation%2Fblog%2Fprogrammable-ip',
            },
            {
                id: 2,
                title: 'From Prototype to Possibility: What we built in Story\'s internal hackathon',
                image: 'useart/hack.png',
                link: 'https://www.figma.com/exit?url=https%3A%2F%2Fwww.story.foundation%2Fblog%2Ffrom-prototype-to-possibility',
            },
            {
                id: 3,
                title: 'IP Licensing 101: How IP moves from static ownership to scalable value creation',
                image: 'useart/101.png',
                link: 'https://www.figma.com/exit?url=https%3A%2F%2Fwww.story.foundation%2Fblog%2Fip-licensing-101'
            },
            {
                id: 4,
                title: 'Story Network Postmortem: Bug Bounty Criticals Seamlessly Patched',
                image: 'useart/net.png',
                link: 'https://www.figma.com/exit?url=https%3A%2F%2Fwww.story.foundation%2Fblog%2Fstory-network-postmortem'
            },
            {
                id: 5,
                title: 'Surreal World Assets: A Virtual Buildathon on the Future of IP and RWAs',
                image: 'useart/world.png',
                link: 'https://www.figma.com/exit?url=https%3A%2F%2Fwww.story.foundation%2Fblog%2Fsurreal-world-assets-buildathon'
            },
            {
                id: 6,
                title: 'Claude\'s MCP Comes to Story: Enabling AI agents with IP',
                image: 'useart/ipgreen.png',
                link: 'https://www.figma.com/exit?url=https%3A%2F%2Fwww.story.foundation%2Fblog%2Fclaudes-mcp-comes-to-story'
            },
            {
                id: 7,
                title: 'External Royalty Policy Guide',
                image: 'useart/external.png',
                link: 'https://www.figma.com/exit?url=https%3A%2F%2Fwww.story.foundation%2Fblog%2Fexternal-royalty-policy-guide'
            },
            {
                id: 8,
                title: 'Introducing IP Vault: Secure, Confidential, Programmable Access to Onchain IP Data',
                image: 'useart/vault.png',
                link: 'https://www.figma.com/exit?url=https%3A%2F%2Fwww.story.foundation%2Fblog%2Fintroducing-ip-vault'
            },
            {
                id: 9,
                title: 'Ethereum: The Pectra Era by Luganodes',
                image: 'useart/pectra.png',
                link: 'https://www.figma.com/exit?url=https%3A%2F%2Fwww.luganodes.com%2Fblog%2Fethereum-pectra-eip%2F'
            },
            {
                id: 10,
                title: 'Fully Homomorphic Encryption (FHE) on the Blockchain: A Step-by-Step Tutorial for Developers by TokenMinds Team',
                image: 'useart/comp.png',
                link: 'https://www.figma.com/exit?url=https%3A%2F%2Ftokenminds.co%2Fblog%2Fknowledge-base%2Fa-step-by-step-tutorial-for-fully-homomorphic-encryption-(fhe)-on-the-blockchain'
            }

        ];
    }

    init() {
        console.log('UsefulArticles init() called');
        this.renderuseartContent();
    }

    renderuseartContent() {
        console.log('renderuseartContent() called');
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
                    ${this.useart.map(article => this.renderArticleCard(article)).join('')}
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