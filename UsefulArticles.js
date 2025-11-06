class UsefulArticles {
    constructor() {
        this.articles = [
            {
                id: 1,
                title: 'Node Maintenance on Story Protocol: Best Practices from Everstake',
                subtitle: '',
                description: '',
                image: 'articles/perfomance.png'
            },
            {
                id: 2,
                title: 'Integration Solution for secp256k1 Support',
                subtitle: '',
                description: '',
                image: 'articles/table.png'
            },
            {
                id: 3,
                title: 'Story Network Update: From Launch to Chapter 2',
                subtitle: '',
                description: '',
                image: 'articles/network.png'
            },
            {
                id: 4,
                title: 'Upgrading to Pectra: Story\'s Geth Fork will soon incorporate Ethereum\'s latest EIPs',
                subtitle: '',
                description: '',
                image: 'articles/network.png'
            },
            {
                id: 5,
                title: 'Story Protocol: Tokenomics & Staking Highlights',
                subtitle: '',
                description: '',
                image: 'articles/locked.png'
            }
        ];
    }

    init() {
        this.renderArticlesContent();
    }

    renderArticlesContent() {
        const networkContainer = document.getElementById('network-info');
        const mainContainer = document.getElementById('main-content');

        if (!networkContainer || !mainContainer) return;

        networkContainer.innerHTML = '';
        mainContainer.innerHTML = '';

        mainContainer.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                ${this.articles.map(article => this.renderArticleCard(article)).join('')}
            </div>
        `;
    }

    renderArticleCard(article) {
        return `
            <div class="w-full hover:scale-105 transition-transform duration-300 cursor-pointer h-full flex flex-col">
                <div class="validator-card bg-transparent overflow-hidden mb-3 w-full flex-shrink-0">
                    <img src="${article.image}" alt="${article.title}" class="w-full h-52 object-cover rounded-lg">
                </div>
                <div class="w-full flex-grow">
                    <h3 class="text-white font-bold text-sm mb-1 leading-tight">
                        ${article.title}
                    </h3>
                    <p class="text-gray-400 text-xs leading-relaxed">
                        ${article.subtitle}
                    </p>
                </div>
            </div>
        `;
    }
}