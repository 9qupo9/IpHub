class EducationArticlesTwo {
    constructor() {
        this.articles = [
            {
                id: 1,
                title: 'IP Portal — Creator’s Guide to Owning Value (Everstake)',
                image: 'EducArticlesTwo/1.png',
                link: 'https://everstake.one/blog/ip-portal-the-creators-guide-to-owning-value'
            },
            {
                id: 2,
                title: 'How to Stake IP Tokens on Story Protocol: Step-by-Step Guide (Everstake)',
                image: 'EducArticlesTwo/2.png',
                link: 'https://everstake.one/blog/how-to-stake-ip-tokens-on-story-protocol-step-by-step-guide'
            },
            {
                id: 3,
                title: 'A Comprehensive Guide to Staking and Securing Story L1 (F5 Nodes)',
                image: 'EducArticlesTwo/3.png',
                link: 'https://blog.f5nodes.com/a-comprehensive-guide-to-staking-and-securing-story-l1/'
            },
            {
                id: 4,
                title: 'How to liquid stake Story Protocol (Cumulo)',
                image: 'EducArticlesTwo/4.png',
                link: 'https://medium.com/cumulo-pro/how-to-liquid-stake-story-protocol-cdacffbf21b4'
            },
            {
                id: 5,
                title: 'StoryHunt DEX — User Guide (Сumulo)',
                image: 'EducArticlesTwo/5.png',
                link: 'https://medium.com/cumulo-pro/storyhunt-dex-user-guide-3b94812f8c37'
            },
             {
                id: 6,
                title: 'RCADE complete remix guide (by Dr strange .ip)',
                image: 'EducArticlesTwo/6.png',
                link: 'https://x.com/web3_assest/status/1990694596469535202'
             },
             {
                 id: 7,
                 title: 'Rcade Complete Remixing Guide (by Paul Shark.IP)',
                 image: 'EducArticlesTwo/7.png',
                 link: 'https://x.com/Paul___Shark/status/1988995987717906836'
             },
             {
                 id: 8,
                 title: 'How to Use PIPERX - Complete Guide (by 𝙷𝚊𝚢𝚡𝚎𝚗)',
                 image: 'EducArticlesTwo/8.png',
                 link: 'https://x.com/hayxenxt/status/1989728232426680439'
             }
        ];
    }

    init() {
        this.renderEducationArticlesContent();
    }

    renderEducationArticlesContent() {
        const networkContainer = document.getElementById('network-info');
        const mainContainer = document.getElementById('main-content');

        if (!networkContainer || !mainContainer) return;

        networkContainer.innerHTML = '';
        mainContainer.innerHTML = '';

        mainContainer.innerHTML = `
            <div class="max-w-7xl mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                    ${this.articles.map(article => this.renderArticleCard(article)).join('')}
                </div>
            </div>
        `;
    }

    renderArticleCard(article) {
        return `
            <div class="w-full min-w-[300px] hover:scale-105 transition-transform duration-300 cursor-pointer h-full flex flex-col" onclick="window.open('${article.link}', '_blank')">
                <div class="Dev overflow-hidden mb-3 w-full flex-shrink-0">
                    <img src="${article.image}" alt="${article.title}" class="w-full h-40 object-cover rounded-lg" onerror="this.src='media/about.png'">
                </div>
                <div class="w-full flex-grow">
                    <h3 class="font-bold text-sm mb-1 leading-tight">
                        ${article.title}
                    </h3>
                    <p class="text-xs leading-relaxed">
                        ${article.subtitle || 'Read more about this topic'}
                    </p>
                </div>
            </div>
        `;
    }
}