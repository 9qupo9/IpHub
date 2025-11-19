class CartDev {
    constructor() {
        this.devart = [
            {
                id: 1,
                title: 'Developer Office Hours Recap by RamzesVII 06.11',
                image: 'devart/cart1.png',
                link: 'https://x.com/r_ladik/status/1986479041189494814',
            },
            {
                id: 2,
                title: 'Dev Office Hours Presentation 10/2',
                image: 'devart/cart2.png',
                link: 'https://www.figma.com/exit?url=https%3A%2F%2Fdocs.google.com%2Fpresentation%2Fd%2F1bd3UDjm5yKY7_2dIgej8kAA7X_DbngcnUQjAma23d1k%2Fedit%3Fslide%3Did.g3445fc82bdc_0_105%23slide%3Did.g3445fc82bdc_0_105',
            },
            {
                id: 3,
                title: 'Developer Office Hours Recap by RamzesVII 02.10',
                image: 'devart/cart3.png',
                link: 'https://www.figma.com/exit?url=https%3A%2F%2Fx.com%2Fr_ladik%2Fstatus%2F1973805553957941507%2Fphoto%2F1'
            },
            {
                id: 4,
                title: 'Dev Office Hours Presentation 9/04',
                image: 'devart/cart4.png',
                link: 'https://www.figma.com/exit?url=https%3A%2F%2Fdocs.google.com%2Fpresentation%2Fd%2F10A00PWv6gQL1FTm04xmPJJCtJMCbLbE85Angd-OqADc%2Fedit%3Fslide%3Did.g3445fc82bdc_0_105%23slide%3Did.g3445fc82bdc_0_105'
            },
            {
                id: 5,
                title: 'Developer Office Hours Recap by RamzesVII 04.09',
                image: 'devart/cart5.png',
                link: 'https://www.figma.com/exit?url=https%3A%2F%2Fx.com%2Fr_ladik%2Fstatus%2F1963672274227314689'
            },
            {
                id: 6,
                title: 'Dev Office Hours Presentation 8/28',
                image: 'devart/cart6.png',
                link: 'https://www.figma.com/exit?url=https%3A%2F%2Fdocs.google.com%2Fpresentation%2Fd%2F1LDkXjcPol7mQIi6KvXz4MGeskY-aPDijU7b6AVYklUU%2Fedit%3Fslide%3Did.g3445fc82bdc_0_105%23slide%3Did.g3445fc82bdc_0_105'
            },
            {
                id: 7,
                title: 'Developer Office Hours Recap by RamzesVII 28.08',
                image: 'devart/cart7.png',
                link: 'https://www.figma.com/exit?url=https%3A%2F%2Fx.com%2Fr_ladik%2Fstatus%2F1961157623719293040'
            },
            {
                id: 8,
                title: 'Dev Office Hours Presentation 8/28',
                image: 'devart/c8.png',
                link: 'https://www.figma.com/exit?url=https%3A%2F%2Fx.com%2FStoryEngs%2Fstatus%2F1961166414707913107'
            },
            {
                id: 9,
                title: '5-minute recap of Story Developer Office Hours 08/28 by Unity Nodes',
                image: 'devart/c9.png',
                link: 'https://www.figma.com/exit?url=https%3A%2F%2Fx.com%2FUnityNodes%2Fstatus%2F1961210484041937338'
            }

        ];
    }

    init() {
        this.renderdevartContent();
    }

    renderdevartContent() {
        const networkContainer = document.getElementById('network-info');
        const mainContainer = document.getElementById('main-content');

        if (!networkContainer || !mainContainer) return;

        networkContainer.innerHTML = '';
        mainContainer.innerHTML = '';

        mainContainer.innerHTML = `
            <div class="max-w-7xl mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                    ${this.devart.map(article => this.renderArticleCard(article)).join('')}
                </div>
            </div>
        `;
    }

    renderArticleCard(article) {
        return `
            <div class="w-full min-w-[300px] hover:scale-105 transition-transform duration-300 cursor-pointer h-full flex flex-col" onclick="window.open('${article.link}', '_blank')">
                <div class="cartDev overflow-hidden mb-3 w-full flex-shrink-0">
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