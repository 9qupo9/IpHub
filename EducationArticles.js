class EducationArticles {
    constructor() {
        this.articles = [
            {
                id: 1,
                title: 'Programmable IP: Ushering in the Onchain Renaissance: Blockchain\'s next major use case',
                image: 'EducArticles/1.png',
                link: 'https://www.story.foundation/blog/programmable-ip',
            },
            {
                id: 2,
                title: 'Story’s Chapter 2 — AI-Native Infrastructure for the $80T IP Economy',
                image: 'EducArticles/2.png',
                link: 'https://www.story.foundation/blog/story-chapter-2',
            },
            {
                id: 3,
                title: 'IP Licensing 101: How IP moves from static ownership to scalable value creation',
                image: 'EducArticles/3.png',
                link: 'https://www.story.foundation/blog/ip-licensing-101'
            },
            {
                id: 4,
                title: 'Your Work, Protected by Law, Monetized in Minutes',
                image: 'EducArticles/4.png',
                link: 'https://www.story.foundation/blog/ip-licensing-101'
            },
            {
                id: 5,
                title: 'What is Story Protocol? Exploring The World\'s IP Blockchain(OriginStake)',
                image: 'EducArticles/5.png',
                link: 'https://ipworld.io/blog/what-is-story-protocol-exploring-the-worlds-ip-blockchain'
            },
            {
                id: 6,
                title: 'Story: Tokenizing Creativity on the World’s IP Blockchain',
                image: 'EducArticles/6.png',
                link: 'https://www.story.foundation/blog/story-tokenizing-creativity-on-the-worlds-ip-blockchain'
            },
            {
                id: 7,
                title: 'Introducing Story Protocol',
                image: 'EducArticles/7.png',
                link: 'https://www.story.foundation/blog/vision'
            },
            {
                id: 8,
                title: 'Introducing IP Vault: Secure, Confidential, Programmable Access to Onchain IP Data',
                image: 'EducArticles/8.png',
                link: 'https://www.story.foundation/blog/introducing-ip-vault'
            },
            {
                id: 9,
                title: 'Exploring IP Privacy with Fully Homomorphic Encryption',
                image: 'EducArticles/9.png',
                link: 'https://www.story.foundation/blog/exploring-ip-privacy-with-fully-homomorphic-encryption'
            },
            {
                id: 10,
                title: 'Story Attestation Service',
                image: 'EducArticles/10.png',
                link: 'https://www.story.foundation/blog/driving-ip-authenticity-storys-attestation-service'
            },
            {
                id: 11,
                title: 'From Coal to Code to Creativity — How IP Fuels the AI Revolution',
                image: 'EducArticles/11.png',
                link: 'https://www.story.foundation/blog/from-coal-to-code-to-creativity'
            },
            {
                id: 12,
                title: 'Introducing New IP Portal Features to Streamline IP Monetization',
                image: 'EducArticles/12.png',
                link: 'https://www.story.foundation/blog/ip-licensing-101'
            },
            {
                id: 13,
                title: 'Introducing the IP Portal: Your IP, Your Rules',
                image: 'EducArticles/13.png',
                link: 'https://www.story.foundation/blog/IP-Portal-Open-Beta'
            },
            {
                id: 14,
                title: 'The IP Lifecycle: How ideas are born, protected & monetized',
                image: 'EducArticles/14.png',
                link: 'https://www.story.foundation/blog/the-ip-lifecycle'
            },
            {
                id: 15,
                title: 'Official Story whitepaper',
                image: 'EducArticles/15.png',
                link: 'https://www.story.foundation/whitepaper.pdf'
            },
            {
                id: 16,
                title: 'Story Protocol: Tokenomics & Staking Highlights (Everstake)',
                image: 'EducArticles/16.png',
                link: 'https://everstake.one/blog/story-protocol-tokenomics-staking-highlights'
            },
            {
                id: 17,
                title: 'What Is PIL in Story Protocol? (Everstake)',
                image: 'EducArticles/17.png',
                link: 'https://everstake.one/blog/what-is-pil-in-story-protocol'
            },
            {
                id: 18,
                title: 'Explore the Power of the Programmable IP License (PIL) (OriginStake)',
                image: 'EducArticles/18.png',
                link: 'https://ipworld.io/blog/explore-the-power-of-the-programmable-ip-license-pil-'
            },
            {
                id: 19,
                title: 'Shield Story: a comprehensive security overview – from IP Vault and key encryption to Security Council (Unity Nodes)',
                image: 'EducArticles/19.png',
                link: 'https://www.notion.so/unitynodes/Shield-Story-a-comprehensive-security-overview-from-IP-Vault-and-key-encryption-to-Security-Counc-2864526245cf80c28dacdd8cd9d79ff8'
            },
            {
                id: 20,
                title: 'Meet the Story Security Council (Cumulo)',
                image: 'EducArticles/20.png',
                link: 'https://medium.com/cumulo-pro/meet-the-story-security-council-27bc8c380ce2'
            },
            {
                id: 21,
                title: 'What Is Story Protocol? A Comprehensive Guide to IP on the Blockchain (DroomDroom)',
                image: 'EducArticles/21.png',
                link: 'https://droomdroom.com/story-protocol-explained/'
            },
            {
                id: 22,
                title: 'FAQ: Story Protocol & IP Onchain [NODERS]TEAM',
                image: 'EducArticles/22.png',
                link: 'https://medium.com/@NODERS_TEAM/faq-story-protocol-ip-onchain-5ea9fd59e8f9'
            },
            {
                id: 23,
                title: 'Introducing Confidential Data Rails: A New Way to Share Encrypted Data at Scale',
                image: 'EducArticles/23.png',
                link: 'https://www.story.foundation/blog/confidential-data-rails'
            },
            {
                id: 24,
                title: 'How Story Built a Multi-Layer Defense for Mainnet',
                image: 'EducArticles/24.png',
                link: 'https://www.story.foundation/blog/security-recap-mainnet'
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
