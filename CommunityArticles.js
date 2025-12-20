class CommunityArticles {
    constructor() {
        this.articles = [
            {
                id: 1,
                title: 'Programmable IP: Ushering in the Onchain Renaissance: Blockchain\'s next major use case',
                image: 'ComArticles/1.png',
                link: 'https://www.story.foundation/blog/programmable-ip'
            },
            {
                id: 2,
                title: 'Story’s Chapter 2 — AI-Native Infrastructure for the $80T IP Economy',
                image: 'ComArticles/2.png',
                link: 'https://www.story.foundation/blog/story-chapter-2'
            },
            {
                id: 3,
                title: 'Explore the Story Application Ecosystem: Unlocking New Potential for Tokenized IP (OriginStake)',
                image: 'ComArticles/3.png',
                link: 'https://ipworld.io/blog/explore-the-story-application-ecosystem-unlocking-new-potential-for-tokenized-ip-'
            },
            {
                id: 4,
                title: 'How Story Protocol is Building the IP Wave',
                image: 'ComArticles/4.png',
                link: 'https://validatus.medium.com/how-story-protocol-is-building-the-ip-wave-c883018363ea'
            },
            {
                id: 5,
                title: 'H1 2025 in Story Protocol — Ecosystem Growth (Everstake)',
                image: 'ComArticles/5.png',
                link: 'https://everstake.one/blog/h1-2025-in-story-protocol'
            },
            {
                id: 6,
                title: 'Poseidon — A Catalyst of the Next-Gen Data Economy (Everstake)',
                image: 'ComArticles/6.png',
                link: 'https://everstake.one/blog/poseidon-a-catalyst-of-the-next-gen-data-economy'
            },
            {
                id: 7,
                title: ' IP Portal — Creator’s Guide (Everstake)',
                image: 'ComArticles/7.png',
                link: 'https://everstake.one/blog/ip-portal-the-creators-guide-to-owning-value'
            },
            {
                id: 8,
                title: 'Case Study: Emergence — AI-Driven Franchise Development',
                image: 'ComArticles/8.png',
                link: 'https://validatus.medium.com/how-story-protocol-is-building-the-ip-wave-c883018363ea'
            },
            {
                id: 9,
                title: 'Case Study: Verio — On-Chain IP Ownership Validation',
                image: 'ComArticles/9.png',
                link: 'https://www.story.foundation/blog/case-study-verio-on-story'
            },
            {
                id: 10,
                title: 'Case Study: ip.world on Story',
                image: 'ComArticles/10.png',
                link: 'https://www.story.foundation/blog/case-study-ip-world-on-story'
            },
            {
                id: 11,
                title: 'The Infinite Horizon: Inside the Visual World of the Origin Summit',
                image: 'ComArticles/11.png',
                link: 'https://www.story.foundation/blog/origin-summit-design'
            },
            {
                id: 12,
                title: 'Origin Summit: Where K-Pop, Crypto & IP Converged',
                image: 'ComArticles/12.png',
                link: 'https://www.story.foundation/blog/origin-summit-design'
            },
            {
                id: 13,
                title: 'Story at ETHDenver 2025',
                image: 'ComArticles/13.png',
                link: 'https://www.story.foundation/blog/story-at-ethdenver-2025'
            },
            {
                id: 14,
                title: 'Story × OKX Ventures Announce $10M Startup Fund',
                image: 'ComArticles/14.png',
                link: 'https://www.story.foundation/blog/story-okx-ventures'
            },
            {
                id: 15,
                title: 'The Critic’s Guide to Story',
                image: 'ComArticles/15.png',
                link: 'https://www.story.foundation/blog/the-critics-guide-to-story'
            },
            {
                id: 16,
                title: 'Meet the Story Security Council (Cumulo)',
                image: 'ComArticles/16.png',
                link: 'https://medium.com/cumulo-pro/meet-the-story-security-council-27bc8c380ce2'
            }
        ];
    }

    init() {
        this.renderComArticlesContent();
    }

    renderComArticlesContent() {
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