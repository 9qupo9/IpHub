class CommunityContent {
    constructor() {
        this.init();
    }

    init() {
        this.renderContent();
    }

    renderContent() {
        const networkContainer = document.getElementById('network-info');
        const mainContainer = document.getElementById('main-content');
        
        if (!networkContainer) return;

        // Очищаем оба контейнера
        networkContainer.innerHTML = `
            <div id="unified-content-container" class="mt-6"></div>
        `;
        
        if (mainContainer) {
            mainContainer.innerHTML = '';
        }

        this.updateMainContent();
    }

    updateMainContent() {
        const unifiedContainer = document.getElementById('unified-content-container');
        if (!unifiedContainer) return;

        const content = `
            <div class="developer bg-transparent p-6 mb-6" style="font-family: 'Source Code Pro', monospace;">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 class="text-sm font-semibold text-white mb-3" style="text-decoration: underline;">General:</h4>
                        <div class="space-y-2 text-sm">
                            <div class="flex flex-wrap">
                                <span class="text-white">• Website:</span>
                                <a href="https://www.story.foundation" class="text-blue-400 hover:text-blue-300 transition-colors ml-1">https://www.story.foundation</a>
                            </div>
                            <div class="flex flex-wrap">
                                <span class="text-white">• Linktree:</span>
                                <a href="https://linktr.ee/storyprotocol" class="text-blue-400 hover:text-blue-300 transition-colors ml-1">https://linktr.ee/storyprotocol</a>
                            </div>
                            <div class="flex flex-wrap">
                                <span class="text-white">• LinkedIn:</span>
                                <a href="https://www.linkedin.com/company/story-foundation" class="text-blue-400 hover:text-blue-300 transition-colors ml-1">https://www.linkedin.com/company/story-foundation</a>
                            </div>
                            <div class="flex flex-wrap">
                                <span class="text-white">• Youtube:</span>
                                <a href="https://www.youtube.com/@StoryProt" class="text-blue-400 hover:text-blue-300 transition-colors ml-1">https://www.youtube.com/@StoryProt</a>
                            </div>
                            <div class="flex flex-wrap">
                                <span class="text-white">• Blog:</span>
                                <a href="https://www.story.foundation/blog" class="text-blue-400 hover:text-blue-300 transition-colors ml-1">https://www.story.foundation/blog</a>
                            </div>
                            <div class="flex flex-wrap">
                                <span class="text-white">• FAQ:</span>
                                <a href="https://www.story.foundation/faq" class="text-blue-400 hover:text-blue-300 transition-colors ml-1">https://www.story.foundation/faq</a>
                            </div>
                        </div>

                        <h4 class="text-sm font-semibold text-white mb-3 mt-6" style="text-decoration: underline;">Technical resources:</h4>
                        <div class="space-y-2 text-sm">
                            <div class="flex flex-wrap">
                                <span class="text-white">• Documentation:</span>
                                <a href="https://docs.story.foundation/introduction" class="text-blue-400 hover:text-blue-300 transition-colors ml-1">https://docs.story.foundation/introduction</a>
                            </div>
                            <div class="flex flex-wrap">
                                <span class="text-white">• QuickStart:</span>
                                <a href="https://docs.story.foundation/docs/quickstart/overview-intro" class="text-blue-400 hover:text-blue-300 transition-colors ml-1">https://docs.story.foundation/docs/quickstart/overview-intro</a>
                            </div>
                            <div class="flex flex-wrap">
                                <span class="text-white">• Github:</span>
                                <a href="https://github.com/storyprotocol" class="text-blue-400 hover:text-blue-300 transition-colors ml-1">https://github.com/storyprotocol</a>
                            </div>
                            <div class="flex flex-wrap">
                                <span class="text-white">• Whitepaper:</span>
                                <a href="https://www.story.foundation/whitepaper.pdf" class="text-blue-400 hover:text-blue-300 transition-colors ml-1">https://www.story.foundation/whitepaper.pdf</a>
                            </div>
                        </div>

                        <h4 class="text-sm font-semibold text-white mb-3 mt-6" style="text-decoration: underline;">Official Platforms:</h4>
                        <div class="space-y-2 text-sm">
                            <div class="break-words">
                                <span class="text-white">• IP Portal:</span>
                                <a href="https://portal.story.foundation" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://portal.story.foundation</a>
                            </div>
                            <div class="break-words">
                                <span class="text-white">• IP Explorer:</span>
                                <a href="https://explorer.story.foundation" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://explorer.story.foundation</a>
                            </div>
                            <div class="break-words">
                                <span class="text-white">• IP World:</span>
                                <a href="https://ip.world" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://ip.world</a>
                            </div>
                            <div class="break-words">
                                <span class="text-white">• Staking Dashboard:</span>
                                <a href="https://staking.story.foundation" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://staking.story.foundation</a>
                            </div>
                            <div class="break-words">
                                <span class="text-white">• Bridge:</span>
                                <a href="https://www.story.foundation/bridge" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://www.story.foundation/bridge</a>
                            </div>
                            <div class="break-words">
                                <span class="text-white">• Blockscout Explorer:</span>
                                <a href="https://story.scan.io" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://story.scan.io</a>
                            </div>
                            <div class="break-words">
                                <span class="text-white">• Testnet Faucet:</span>
                                <a href="https://faucet.story.foundation" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://faucet.story.foundation</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 class="text-sm font-semibold text-white mb-3" style="text-decoration: underline;">Community:</h4>
                        <div class="space-y-2 text-sm">
                            <div class="break-words">
                                <span class="text-white">• Story Discord:</span>
                                <a href="https://discord.gg/storyprotocol" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://discord.gg/storyprotocol</a>
                            </div>
                            <div class="break-words">
                                <span class="text-white">• Developer Discord:</span>
                                <a href="https://discord.gg/story-builders" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://discord.gg/story-builders</a>
                            </div>
                            <div class="break-words">
                                <span class="text-white">• Twitter(X) Story:</span>
                                <a href="https://x.com/StoryProtocol" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://x.com/StoryProtocol</a>
                            </div>
                            <div class="break-words">
                                <span class="text-white">• Twitter(X) Story Engineers:</span>
                                <a href="https://x.com/StoryEng" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://x.com/StoryEng</a>
                            </div>
                            <div class="break-words">
                                <span class="text-white">• Forum:</span>
                                <a href="https://forum.story.foundation" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://forum.story.foundation</a>
                            </div>
                        </div>

                        <h4 class="text-sm font-semibold text-white mb-3 mt-12" style="text-decoration: underline;">Build & Learn:</h4>
                        <div class="space-y-4 text-sm">
                            <div class="break-words">
                                <span class="text-white">• Surreal World Assets Buildathon:</span>
                                <a href="https://surrealism.lu.ma/build-hub" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://surrealism.lu.ma/build-hub</a>
                            </div>
                            <div class="break-words">
                                <span class="text-white">• Surreal World Assets Buildathon Season 2:</span>
                                <a href="https://www.encode.club/surrealism-2" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://www.encode.club/surrealism-2</a>
                            </div>
                            <div class="break-words">
                                <span class="text-white">• Event Grant Application:</span>
                                <a href="https://www.story.foundation/grants" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://www.story.foundation/grants</a>
                            </div>
                            <div class="break-words">
                                <span class="text-white">• Luma Story:</span>
                                <a href="https://lu.ma/storyprotocol" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://lu.ma/storyprotocol</a>
                            </div>
                        </div>

                        <h4 class="text-sm font-semibold text-white mb-3 mt-12" style="text-decoration: underline;">Other:</h4>
                        <div class="space-y-2 text-sm">
                            <div class="break-words">
                                <span class="text-white">• Ecosystem:</span>
                                <a href="https://www.story.foundation/ecosystem" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://www.story.foundation/ecosystem</a>
                            </div>
                            <div class="break-words">
                                <span class="text-white">• Story Ecosystem Careers:</span>
                                <a href="https://careers.story.foundation/jobs" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://careers.story.foundation/jobs</a>
                            </div>
                            <div class="break-words">
                                <span class="text-white">• Brand Kit:</span>
                                <a href="https://www.story.foundation/brand-kit" class="text-blue-400 hover:text-blue-300 transition-colors ml-1 break-words">https://www.story.foundation/brand-kit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

        unifiedContainer.innerHTML = content;
    }
}
