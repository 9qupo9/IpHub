class DeveloperArticles {
    constructor() {
        this.develArticles = [
            {
                id: 1,
                title: 'Developer Office Hours Recap by RamzesVII 20.11',
                image: 'DevelArticles/cart00.png',
                link: 'https://x.com/r_ladik/status/1991567163472376255'
            },
            {
                id: 2,
                title: 'Developer Office Hours Recap by RamzesVII 17.11',
                image: 'DevelArticles/cart0.png',
                link: 'https://x.com/r_ladik/status/1990478990738665633'
            },
            {
                id: 3,
                title: 'Developer Office Hours Recap by RamzesVII 06.11',
                image: 'DevelArticles/cart1.png',
                link: 'https://x.com/r_ladik/status/1986479041189494814'
            },
            {
                id: 4,
                title: 'Dev Office Hours Presentation 10/2',
                image: 'DevelArticles/cart2.png',
                link: 'https://docs.google.com/presentation/d/1bd3UDjm5yKY7_2dIgej8kAA7X_DbngcnUQjAma23d1k/edit?slide=id.g34c7c0c3bed_0_16#slide=id.g34c7c0c3bed_0_16'
            },
            {
                id: 5,
                title: 'Developer Office Hours Recap by RamzesVII 02.10',
                image: 'DevelArticles/cart3.png',
                link: 'https://x.com/r_ladik/status/1973805553957941507'
            },
            {
                id: 6,
                title: 'Dev Office Hours Presentation 9/04',
                image: 'DevelArticles/cart4.png',
                link: 'https://docs.google.com/presentation/d/10A00PWv6gQL1FTm04xmPJJCtJMCbLbE85Angd-OqADc/edit?slide=id.g3445fc82bdc_0_105#slide=id.g3445fc82bdc_0_105'
            },
            {
                id: 7,
                title: 'Developer Office Hours Recap by RamzesVII 04.09',
                image: 'DevelArticles/cart5.png',
                link: 'https://x.com/r_ladik/status/1963672274227314689'
            },
            {
                id: 8,
                title: 'Dev Office Hours Presentation 8/28',
                image: 'DevelArticles/cart6.png',
                link: 'https://docs.google.com/presentation/d/1LDkXjcPol7mQIi6KvXz4MGeskY-aPDijU7b6AVYklUU/edit?slide=id.g3445fc82bdc_0_105#slide=id.g3445fc82bdc_0_105'
            },
            {
                id: 9,
                title: 'Developer Office Hours Recap by RamzesVII 28.08',
                image: 'DevelArticles/cart7.png',
                link: 'https://x.com/r_ladik/status/1961157623719293040'
            },
            {
                id: 10,
                title: 'Dev Office Hours Presentation 8/28',
                image: 'DevelArticles/c8.png',
                link: 'https://x.com/StoryEngs/status/1961166414707913107'
            },
            {
                id: 11,
                title: '5-minute recap of Story Developer Office Hours 08/28 by Unity Nodes',
                image: 'DevelArticles/c9.png',
                link: 'https://x.com/StoryEngs/status/1961166414707913107'
            }

        ];
    }

    init() {
        this.renderDevelArticlesContent();
    }

    renderDevelArticlesContent() {
        const networkContainer = document.getElementById('network-info');
        const mainContainer = document.getElementById('main-content');

        if (!networkContainer || !mainContainer) return;

        networkContainer.innerHTML = '';
        mainContainer.innerHTML = '';

        mainContainer.innerHTML = `
            <div class="max-w-7xl mx-auto px-4 sm:px-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 items-start">
                    ${this.develArticles.map(article => this.renderArticleCard(article)).join('')}
                </div>
            </div>
        `;
    }

    renderArticleCard(article) {
        return `
            <div class="w-full hover:scale-105 transition-transform duration-300 cursor-pointer h-full flex flex-col" onclick="window.open('${article.link}', '_blank')">
                <div class="cartDev overflow-hidden mb-3 w-full flex-shrink-0">
                    <img src="${article.image}" alt="${article.title}" class="w-full h-32 sm:h-40 object-cover rounded-lg" onerror="this.src='media/about.png'">
                </div>
                <div class="w-full flex-grow px-1">
                    <h3 class="font-bold text-xs sm:text-sm mb-1 leading-tight line-clamp-3">
                        ${article.title}
                    </h3>
                    <p class="text-xs leading-relaxed text-gray-400">
                        ${article.subtitle || 'Read more about this topic'}
                    </p>
                </div>
            </div>
        `;
    }
}