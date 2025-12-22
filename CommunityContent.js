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
            <div class="developer bg-transparent p-4 sm:p-6 mb-6" style="font-family: 'Source Code Pro', monospace;">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                        <h4 class="text-sm font-semibold text-white mb-3" style="text-decoration: underline;">General:</h4>
                        <div class="space-y-2 text-xs sm:text-sm">
                            <div class="block">
                                <span class="text-white block sm:inline">• Website:</span>
                                <a href="https://www.story.foundation" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://www.story.foundation</a>
                            </div>
                            <div class="block">
                                <span class="text-white block sm:inline">• Linktree:</span>
                                <a href="https://linktr.ee/storyprotocol" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://linktr.ee/storyprotocol</a>
                            </div>
                            <div class="block">
                                <span class="text-white block sm:inline">• LinkedIn:</span>
                                <a href="https://www.linkedin.com/company/story-foundation" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://www.linkedin.com/company/story-foundation</a>
                            </div>
                            <div class="block">
                                <span class="text-white block sm:inline">• Youtube:</span>
                                <a href="https://www.youtube.com/@StoryProt" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://www.youtube.com/@StoryProt</a>
                            </div>
                            <div class="block">
                                <span class="text-white block sm:inline">• Blog:</span>
                                <a href="https://www.story.foundation/blog" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://www.story.foundation/blog</a>
                            </div>
                            <div class="block">
                                <span class="text-white block sm:inline">• FAQ:</span>
                                <a href="https://www.story.foundation/faq" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://www.story.foundation/faq</a>
                            </div>
                        </div>

                        <h4 class="text-sm font-semibold text-white mb-3 mt-6" style="text-decoration: underline;">Technical resources:</h4>
                        <div class="space-y-2 text-xs sm:text-sm">
                            <div class="block">
                                <span class="text-white block sm:inline">• Documentation:</span>
                                <a href="https://docs.story.foundation/introduction" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://docs.story.foundation/introduction</a>
                            </div>
                            <div class="block">
                                <span class="text-white block sm:inline">• QuickStart:</span>
                                <a href="https://docs.story.foundation/docs/quickstart/overview-intro" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://docs.story.foundation/docs/quickstart/overview-intro</a>
                            </div>
                            <div class="block">
                                <span class="text-white block sm:inline">• Github:</span>
                                <a href="https://github.com/storyprotocol" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://github.com/storyprotocol</a>
                            </div>
                            <div class="block">
                                <span class="text-white block sm:inline">• Whitepaper:</span>
                                <a href="https://www.story.foundation/whitepaper.pdf" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://www.story.foundation/whitepaper.pdf</a>
                            </div>
                        </div>

                        <h4 class="text-sm font-semibold text-white mb-3 mt-6" style="text-decoration: underline;">Official Platforms:</h4>
                        <div class="space-y-2 text-xs sm:text-sm">
                            <div class="block">
                                <span class="text-white block sm:inline">• IP Portal:</span>
                                <a href="https://portal.story.foundation" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://portal.story.foundation</a>
                            </div>
                            <div class="block">
                                <span class="text-white block sm:inline">• IP Explorer:</span>
                                <a href="https://explorer.story.foundation" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://explorer.story.foundation</a>
                            </div>
                            <div class="block">
                                <span class="text-white block sm:inline">• IP World:</span>
                                <a href="https://ip.world" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://ip.world</a>
                            </div>
                            <div class="block">
                                <span class="text-white block sm:inline">• Staking Dashboard:</span>
                                <a href="https://staking.story.foundation" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://staking.story.foundation</a>
                            </div>
                            <div class="block">
                                <span class="text-white block sm:inline">• Bridge:</span>
                                <a href="https://www.story.foundation/bridge" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://www.story.foundation/bridge</a>
                            </div>
                            <div class="block">
                                <span class="text-white block sm:inline">• Blockscout Explorer:</span>
                                <a href="https://story.scan.io" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://story.scan.io</a>
                            </div>
                            <div class="block">
                                <span class="text-white block sm:inline">• Testnet Faucet:</span>
                                <a href="https://faucet.story.foundation" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://faucet.story.foundation</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 class="text-sm font-semibold text-white mb-3" style="text-decoration: underline;">Community:</h4>
                        <div class="space-y-2 text-xs sm:text-sm">
                            <div class="block">
                                <span class="text-white block sm:inline">• Story Discord:</span>
                                <a href="https://discord.gg/storyprotocol" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://discord.gg/storyprotocol</a>
                            </div>
                            <div class="block">
                                <span class="text-white block sm:inline">• Developer Discord:</span>
                                <a href="https://discord.gg/story-builders" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://discord.gg/story-builders</a>
                            </div>
                            <div class="block">
                                <span class="text-white block sm:inline">• Twitter(X) Story:</span>
                                <a href="https://x.com/StoryProtocol" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://x.com/StoryProtocol</a>
                            </div>
                            <div class="block">
                                <span class="text-white block sm:inline">• Twitter(X) Story Engineers:</span>
                                <a href="https://x.com/StoryEng" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://x.com/StoryEng</a>
                            </div>
                            <div class="block">
                                <span class="text-white block sm:inline">• Forum:</span>
                                <a href="https://forum.story.foundation" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://forum.story.foundation</a>
                            </div>
                        </div>

                        <h4 class="text-sm font-semibold text-white mb-3 mt-8 sm:mt-12" style="text-decoration: underline;">Build & Learn:</h4>
                        <div class="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                            <div class="block">
                                <span class="text-white block sm:inline">• Surreal World Assets Buildathon:</span>
                                <a href="https://surrealism.lu.ma/build-hub" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://surrealism.lu.ma/build-hub</a>
                            </div>
                            <div class="block">
                                <span class="text-white block sm:inline">• Surreal World Assets Buildathon Season 2:</span>
                                <a href="https://www.encode.club/surrealism-2" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://www.encode.club/surrealism-2</a>
                            </div>
                            <div class="block">
                                <span class="text-white block sm:inline">• Event Grant Application:</span>
                                <a href="https://www.story.foundation/grants" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://www.story.foundation/grants</a>
                            </div>
                            <div class="block">
                                <span class="text-white block sm:inline">• Luma Story:</span>
                                <a href="https://lu.ma/storyprotocol" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://lu.ma/storyprotocol</a>
                            </div>
                        </div>

                        <h4 class="text-sm font-semibold text-white mb-3 mt-8 sm:mt-12" style="text-decoration: underline;">Other:</h4>
                        <div class="space-y-2 text-xs sm:text-sm">
                            <div class="block">
                                <span class="text-white block sm:inline">• Ecosystem:</span>
                                <a href="https://www.story.foundation/ecosystem" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://www.story.foundation/ecosystem</a>
                            </div>
                            <div class="block">
                                <span class="text-white block sm:inline">• Story Ecosystem Careers:</span>
                                <a href="https://careers.story.foundation/jobs" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://careers.story.foundation/jobs</a>
                            </div>
                            <div class="block">
                                <span class="text-white block sm:inline">• Brand Kit:</span>
                                <a href="https://www.story.foundation/brand-kit" class="text-blue-400 hover:text-blue-300 transition-colors break-all block sm:inline sm:ml-1">https://www.story.foundation/brand-kit</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

        unifiedContainer.innerHTML = content;
    }
}
