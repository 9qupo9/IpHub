class EducationAboutMobile {
    constructor() {
        this.init();
    }

    init() {
        this.renderContent();
    }

    renderContent() {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;

        mainContent.innerHTML = `
            <div class="education-about-mobile-content">
                <style>
                    .education-about-mobile-content {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                        font-weight: normal;
                        padding: 0 16px;
                    }
                    
                    .mobile-section { 
                        margin-bottom: 2rem; 
                        padding: 0 8px;
                    }
                    
                    .mobile-card-wrapper {
                        position: relative;
                        display: block;
                        margin-bottom: 1.5rem;
                        width: 100%;
                    }
                    
                    .mobile-card-text {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        padding: 1rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        z-index: 2;
                    }
                    
                    .mobile-grid {
                        display: flex;
                        flex-direction: column;
                        gap: 1rem;
                    }
                    
                    .mobile-text-center {
                        text-align: center;
                    }
                    
                    .mobile-mb-4 { margin-bottom: 1rem; }
                    .mobile-mb-6 { margin-bottom: 1.5rem; }
                    .mobile-mb-8 { margin-bottom: 2rem; }
                    .mobile-mb-12 { margin-bottom: 3rem; }
                    
                    .mobile-mt-8 { margin-top: 2rem; }
                    .mobile-mt-12 { margin-top: 3rem; }
                    
                    .mobile-px-4 { padding-left: 1rem; padding-right: 1rem; }
                    .mobile-py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
                    
                    .mobile-text-white { color: white; }
                    .mobile-text-gray-300 { color: #d1d5db; }
                    
                    .mobile-leading-relaxed { line-height: 1.625; }
                    .mobile-space-y-2 > * + * { margin-top: 0.5rem; }
                    .mobile-space-y-4 > * + * { margin-top: 1rem; }
                    .mobile-space-y-6 > * + * { margin-top: 1.5rem; }
                    .mobile-space-y-8 > * + * { margin-top: 2rem; }
                    
                    .mobile-underline { text-decoration: underline; }
                    
                    .mobile-btn-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 1rem;
                        margin-top: 1.5rem;
                    }
                    
                    .mobile-btn {
                        width: 200px;
                        height: auto;
                        cursor: pointer;
                        transition: opacity 0.3s;
                    }
                    
                    .mobile-btn:hover {
                        opacity: 0.8;
                    }
                    
                    .mobile-timeline-container {
                        position: relative;
                        padding: 2rem 0;
                    }
                    
                    .mobile-timeline-item {
                        margin-bottom: 2rem;
                        padding: 1rem;
                        background: rgba(255, 255, 255, 0.05);
                        border-radius: 8px;
                        border-left: 4px solid #8b5cf6;
                    }
                    
                    .mobile-team-member {
                        text-align: center;
                        margin-bottom: 2rem;
                        padding: 1rem;
                        background: transparent;
                        border-radius: 12px;
                    }
                    
                    .mobile-team-photo {
                        width: 120px;
                        height: 120px;
                        margin: 0 auto 1rem;
                        border-radius: 50%;
                        overflow: hidden;
                    }
                    
                    .mobile-team-photo img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    
                    .mobile-module-card {
                        background: transparent;
                        border: 2px solid #8b5cf6;
                        border-radius: 12px;
                        padding: 1.5rem;
                        margin-bottom: 1rem;
                        text-align: center;
                    }
                    
                    .mobile-module-wrapper {
                        position: relative;
                        display: block;
                        margin-bottom: 1.5rem;
                        width: 100%;
                    }
                    
                    .mobile-module-text {
                        position: absolute;
                        top: -8%;
                        left: 0;
                        right: 0;
                        bottom: 5%;
                        padding: 1.2rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        text-align: center;
                        z-index: 2;
                        overflow: hidden;
                    }
                    
                    .mobile-module-image {
                        width: 100%;
                        height: auto;
                        display: block;
                        transform: scaleY(1.10);
                    }
                    
                    .mobile-module-text-section6 {
                        position: absolute;
                        top: 30%;
                        left: 0;
                        right: 0;
                        bottom: 5%;
                        padding: 1rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        text-align: center;
                        z-index: 2;
                        overflow: hidden;
                    }
                    
                    .mobile-frame-content {
                        background: transparent;
                        border: 2px solid #8b5cf6;
                        border-radius: 12px;
                        padding: 1.5rem;
                        margin: 1rem 0;
                    }
                    
                    @media (max-width: 480px) {
                        .education-about-mobile-content {
                            padding: 0 12px;
                        }
                        
                        .mobile-section {
                            padding: 0 4px;
                        }
                        
                        .mobile-card-text {
                            padding: 0.75rem;
                        }
                        
                        .mobile-team-photo {
                            width: 100px;
                            height: 100px;
                        }
                    }
                </style>

                ${this.renderMobileSection1()}
                ${this.renderMobileSection2()}
                ${this.renderMobileSection3()}
                ${this.renderMobileSection4()}
                ${this.renderMobileSection5()}
                ${this.renderMobileSection6()}
                ${this.renderMobileSection7()}
                ${this.renderMobileSection8()}
                ${this.renderMobileSection9()}
                ${this.renderMobileSection10()}
            </div>
        `;

        this.attachEventListeners();
    }

    renderMobileSection1() {
        return `
            <section class="mobile-section">
                <div class="mobile-text-center mobile-mb-6">
                    <h1 class="mobile-text-white mobile-mb-4" style="font-size: 28px; font-weight: bold; color: white; -webkit-text-stroke: 1px #4c1d95; text-shadow: 1px 1px 0 #4c1d95, -1px -1px 0 #4c1d95, 1px -1px 0 #4c1d95, -1px 1px 0 #4c1d95;">What is Story?</h1>
                </div>

                <div class="mobile-text-center mobile-mb-6">
                    <p class="mobile-text-white" style="font-size: 16px; line-height: 1.5;">
                        Story is a layer-1 blockchain built for transparent, decentralized management of intellectual property.
                    </p>
                </div>

                <div class="mobile-px-4 mobile-py-6">
                    <div class="mobile-grid">
                        <div class="mobile-mb-6">
                            <h2 class="mobile-text-white mobile-mb-4" style="font-size: 24px; font-weight: bold; line-height: 1.3;">
                                Empowering the Future of Intellectual Property.
                            </h2>
                            
                            <p class="mobile-text-white mobile-leading-relaxed mobile-mb-6" style="font-size: 16px;">
                                AI's next leap depends on unlocking the $80 trillion IP asset class. Story tokenizes IP and makes it programmable, from ownership to remix to monetization.
                            </p>
                            
                            <div class="mobile-btn-container">
                                <img id="mobile-explore-story-btn" src="icon/ExploreSVG.png" alt="Explore Story" class="mobile-btn">
                                <img id="mobile-visit-website-btn" src="icon/VisitSVG.png" alt="Visit Official Website" class="mobile-btn">
                            </div>
                        </div>

                        <div class="mobile-text-center mobile-mb-6">
                            <div style="width: 200px; height: 200px; margin: 0 auto;">
                                <img src="icon/ip.png" alt="IP Logo" style="width: 100%; height: 100%; object-fit: contain;">
                            </div>
                        </div>

                        <div class="mobile-mt-8">
                            <p class="mobile-text-white mobile-leading-relaxed" style="font-size: 16px; line-height: 1.6;">
                                Story allows creators to easily register IP, define rules for its use, automatically receive royalties, and legally 
                                collaborate on remixes and derivative works. For developers, it is a standard and toolkit for building any product 
                                where IP is the foundation. On a technical level, Story provides modules for asset tokenization, programmable 
                                licenses (PIL), automatic royalty distribution, and content origin verification, working as a specialized Layer-1 
                                optimized for IP logic and scalable rights operations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderMobileSection2() {
        return `
            <section class="mobile-section">
                <div class="mobile-text-center mobile-mb-8">
                    <h2 class="mobile-text-white mobile-mb-4" style="font-size: 28px; font-weight: bold; color: white; -webkit-text-stroke: 1px #1e3a8a; text-shadow: 1px 1px 0 #1e3a8a, -1px -1px 0 #1e3a8a, 1px -1px 0 #1e3a8a, -1px 1px 0 #1e3a8a;">How Story Works</h2>
                </div>

                <div class="mobile-grid">
                    <div class="mobile-module-wrapper" style="margin-bottom: 2rem;">
                        <img src="icon/ramka.png" alt="IP Tokenization" class="mobile-module-image">
                        <div class="mobile-module-text">
                            <div>
                                <h3 class="mobile-text-white mobile-mb-3" style="font-size: 18px; font-weight: 600;">IP Tokenization</h3>
                                <p class="mobile-text-white mobile-mb-2" style="font-size: 11px; line-height: 1.2;">
                                    Story makes any intellectual property tokenized, unified, and usable within the ecosystem.
                                </p>
                            </div>
                            <p class="mobile-text-white mobile-mb-4" style="font-size: 11px; text-align: center; margin-top: 1rem;">This provides the opportunity to:</p>
                            <ul class="mobile-text-white mobile-space-y-1" style="font-size: 12px; text-align: left; line-height: 1.4;">
                                <li style="margin-bottom: 0.5rem;">• register IP in an open and transparent format</li>
                                <li style="margin-bottom: 0.5rem;">• confirm ownership</li>
                                <li style="margin-bottom: 0.5rem;">• use IP in licenses, remixes, and applications</li>
                                <li style="margin-bottom: 0.5rem;">• integrate IP into apps, games, and AI workflows</li>
                                <li>• unlock onchain monetization opportunities</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="mobile-module-wrapper" style="margin-bottom: 2rem;">
                        <img src="icon/ramka.png" alt="Programmable Licensing" class="mobile-module-image">
                        <div class="mobile-module-text">
                            <div>
                                <h3 class="mobile-text-white mobile-mb-2" style="font-size: 18px; font-weight: 600;">Programmable Licensing (PIL)</h3>
                                <p class="mobile-text-white mobile-mb-2" style="font-size: 11px; line-height: 1.2;">
                                    Licensing rules are written in a format that smart contracts can execute - without lawyers or manual processes.
                                </p>
                            </div>
                            <p class="mobile-text-white mobile-mb-4" style="font-size: 11px; text-align: center; margin-top: 1rem;">This provides the opportunity to:</p>
                            <ul class="mobile-text-white mobile-space-y-1" style="font-size: 12px; text-align: left; line-height: 1.4;">
                                <li style="margin-bottom: 0.5rem;">• set terms of use for IP in one click</li>
                                <li style="margin-bottom: 0.5rem;">• automatically apply rules (commerciality, royalties, restrictions)</li>
                                <li style="margin-bottom: 0.5rem;">• avoid disputes and misuse of content</li>
                                <li style="margin-bottom: 0.5rem;">• set clear and enforceable usage rules for any IP</li>
                                <li>• automatically apply licensing terms without manual review</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="mobile-module-wrapper" style="margin-bottom: 2rem;">
                        <img src="icon/ramka.png" alt="Automated Royalties" class="mobile-module-image">
                        <div class="mobile-module-text">
                            <div>
                                <h3 class="mobile-text-white mobile-mb-3" style="font-size: 18px; font-weight: 600;">Automated Royalties</h3>
                                <p class="mobile-text-white mobile-mb-2" style="font-size: 11px; line-height: 1.2;">
                                    Financial obligations between creators and derivative projects are fulfilled automatically.
                                </p>
                            </div>
                            <p class="mobile-text-white mobile-mb-4" style="font-size: 11px; text-align: center; margin-top: 1rem;">This provides the opportunity to:</p>
                            <ul class="mobile-text-white mobile-space-y-1" style="font-size: 12px; text-align: left; line-height: 1.4;">
                                <li style="margin-bottom: 0.5rem;">• receiving royalties without intermediaries</li>
                                <li style="margin-bottom: 0.5rem;">• transparent and verifiable distribution of income</li>
                                <li style="margin-bottom: 0.5rem;">• fair participation of the creator in each derivative work</li>
                                <li style="margin-bottom: 0.5rem;">• receive royalties instantly and without intermediaries</li>
                                <li>• ensure transparent and verifiable income distribution</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="mobile-module-wrapper">
                        <img src="icon/ramka.png" alt="Collaborative Creativity" class="mobile-module-image">
                        <div class="mobile-module-text">
                            <div>
                                <h3 class="mobile-text-white mobile-mb-2" style="font-size: 18px; font-weight: 600;">Collaborative Creativity</h3>
                                <p class="mobile-text-white mobile-mb-2" style="font-size: 11px; line-height: 1.2;">
                                    Story makes remixes legal, manageable, and rewarded according to the creator's rules.
                                </p>
                            </div>
                            <p class="mobile-text-white mobile-mb-4" style="font-size: 11px; text-align: center; margin-top: 1rem;">This provides the opportunity to:</p>
                            <ul class="mobile-text-white mobile-space-y-1" style="font-size: 12px; text-align: left; line-height: 1.4;">
                                <li style="margin-bottom: 0.5rem;">• create derivative works without legal chaos</li>
                                <li style="margin-bottom: 0.5rem;">• automatically indicate authorship</li>
                                <li style="margin-bottom: 0.5rem;">• use IP in licenses, remixes, and applications</li>
                                <li style="margin-bottom: 0.5rem;">• legally create derivative works with automatic attribution</li>
                                <li>• share value fairly between original creators and remixers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderMobileSection3() {
        return `
            <section class="mobile-section">
                <div class="mobile-text-center mobile-mb-8">
                    <h2 class="mobile-text-white mobile-mb-4" style="font-size: 28px; font-weight: bold; color: white; -webkit-text-stroke: 1px #4c1d95; text-shadow: 1px 1px 0 #4c1d95, -1px -1px 0 #4c1d95, 1px -1px 0 #4c1d95, -1px 1px 0 #4c1d95;">Why is this important</h2>
                </div>
                
                <div style="background-image: url('icon/Ramka3.png'); background-size: cover; background-repeat: no-repeat; background-position: center; padding: 1.5rem 2rem; margin: 1rem 0; width: 100%; min-height: 350px; filter: brightness(1.3) contrast(1.2); border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.3);">
                    <ul class="mobile-text-white mobile-space-y-6" style="font-size: 16px; line-height: 1.5;">
                        <li>
                            <span class="mobile-text-white mobile-underline" style="font-weight: 600;">• Traditional IP systems are too slow, complex, and expensive</span><br>
                            <span class="mobile-text-gray-300" style="font-size: 14px; margin-top: 0.5rem; display: block;">Contracts, intermediaries, delays, and monitoring violations make working with content inefficient. In the digital age, authors often remain unrecognized and unrewarded.</span>
                        </li>
                        
                        <li>
                            <span class="mobile-text-white mobile-underline" style="font-weight: 600;">• Lack of transparency and trust</span><br>
                            <span class="mobile-text-gray-300" style="font-size: 14px; margin-top: 0.5rem; display: block;">Centralized platforms control data and payments, creating high fees, errors, and fraud risks. An open, immutable record of all IP actions is needed.</span>
                        </li>
                        
                        <li>
                            <span class="mobile-text-white mobile-underline" style="font-weight: 600;">• Licenses are not adapted to the AI era</span><br>
                            <span class="mobile-text-gray-300" style="font-size: 14px; margin-top: 0.5rem; display: block;">Legally complex and machine-unreadable rights make it impossible for algorithms and services to use content legally. This causes chaos, legal risks, and slows innovation.</span>
                        </li>
                        
                        <li>
                            <span class="mobile-text-white mobile-underline" style="font-weight: 600;">• No infrastructure for large-scale and remix economies</span><br>
                            <span class="mobile-text-gray-300" style="font-size: 14px; margin-top: 0.5rem; display: block;">Modern content, remix, and derivative markets lack standards for automated creation, licensing, and monetization of derivative works.</span>
                        </li>
                    </ul>
                </div>
            </section>
        `;
    }

    renderMobileSection4() {
        return `
            <section class="mobile-section">
                <div class="mobile-text-center mobile-mb-8">
                    <h2 class="mobile-text-white mobile-mb-4" style="font-size: 28px; font-weight: bold; color: white; -webkit-text-stroke: 1px #1e3a8a; text-shadow: 1px 1px 0 #1e3a8a, -1px -1px 0 #1e3a8a, 1px -1px 0 #1e3a8a, -1px 1px 0 #1e3a8a;">Who can use Story?</h2>
                </div>
                
                <div style="background-image: url('icon/Ramka3.png'); background-size: cover; background-repeat: no-repeat; background-position: center; padding: 1.5rem 2rem; margin: 1rem 0; width: 100%; min-height: 350px; filter: brightness(1.3) contrast(1.2); border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.3);">
                    <ul class="mobile-text-white mobile-space-y-6" style="font-size: 16px; line-height: 1.5;">
                        <li>
                            <span class="mobile-text-white mobile-underline" style="font-weight: 600;">• Creators and authors</span><br>
                            <span class="mobile-text-gray-300" style="font-size: 14px; margin-top: 0.5rem; display: block;">Writers, artists, musicians, game developers and AI model creators can register their works as NFTs, set their own usage terms and earn rewards each time their content is viewed or used.</span>
                        </li>
                        
                        <li>
                            <span class="mobile-text-white mobile-underline" style="font-weight: 600;">• Businesses and platforms</span><br>
                            <span class="mobile-text-gray-300" style="font-size: 14px; margin-top: 0.5rem; display: block;">Story makes it easy to obtain content licenses and track payments transparently, simplifying the launch of products or AI models that rely on third-party data.</span>
                        </li>
                        
                        <li>
                            <span class="mobile-text-white mobile-underline" style="font-weight: 600;">• Fan communities and IP franchises</span><br>
                            <span class="mobile-text-gray-300" style="font-size: 14px; margin-top: 0.5rem; display: block;">Fans can officially create derivative works or contribute to shared universes while earning a share of the revenue. Rights holders can expand their reach and strengthen community engagement.</span>
                        </li>
                        
                        <li>
                            <span class="mobile-text-white mobile-underline" style="font-weight: 600;">• Developers and infrastructure teams</span><br>
                            <span class="mobile-text-gray-300" style="font-size: 14px; margin-top: 0.5rem; display: block;">Dev teams can build IP marketplaces, licensing apps, AI tools, game worlds and onchain economies using Story modules as the foundational layer for tokenization, licensing, royalties and provenance verification.</span>
                        </li>
                    </ul>
                </div>
            </section>
        `;
    }

    renderMobileSection5() {
        return `
            <section class="mobile-section">
                <div class="mobile-text-center mobile-mb-8">
                    <h2 class="mobile-text-white mobile-mb-6" style="font-size: 28px; font-weight: bold; color: white; -webkit-text-stroke: 1px #4c1d95; text-shadow: 1px 1px 0 #4c1d95, -1px -1px 0 #4c1d95, 1px -1px 0 #4c1d95, -1px 1px 0 #4c1d95;">"Proof-of-Creativity" Protocol</h2>
                </div>
                
                <div class="mobile-text-white" style="font-size: 16px; line-height: 1.6;">
                    <p class="mobile-mb-6">
                        "Proof-of-Creativity" protocol is a set of Solidity smart contracts deployed natively on the Story Network. It enables anyone to bring their intellectual property onchain and anchor it as part of the Story ecosystem. Most of our documentation is dedicated to explaining this protocol layer.
                    </p>
                    
                    <div class="mobile-mb-6 mobile-mt-8">
                        <p class="mobile-mb-4">Creators register their works as IP Assets, while Modules act as the building blocks for interacting with them.</p>
                        <p class="mobile-mb-2">For example:</p>
                        <ul class="mobile-space-y-2" style="margin-left: 1rem; font-size: 15px;">
                            <li>• the Licensing Module defines and enforces usage terms,</li>
                            <li>• the Royalty Module handles revenue flows,</li>
                            <li>• the Dispute Module resolves conflicts around misused or misregistered IP.</li>
                        </ul>
                    </div>
                    
                    <div class="mobile-mt-8">
                        <p class="mobile-mb-4">
                            Every IP Asset is linked to an ERC-721 NFT that represents ownership of the underlying IP, making ownership transferable and tradeable. Licenses minted from an IP Asset are also ERC-721 NFTs, meaning the rights to use an IP under specific terms can be bought and sold as well.
                        </p>
                        <p>
                            Together, this structure unlocks a new category of IP-native financial and creative mechanics - IPFi.
                        </p>
                    </div>
                </div>
            </section>
        `;
    }

    renderMobileSection6() {
        return `
            <section class="mobile-section">
                <div class="mobile-text-center mobile-mb-8">
                    <h2 class="mobile-text-white mobile-mb-6" style="font-size: 28px; font-weight: bold; color: white; -webkit-text-stroke: 1px #1e3a8a; text-shadow: 1px 1px 0 #1e3a8a, -1px -1px 0 #1e3a8a, 1px -1px 0 #1e3a8a, -1px 1px 0 #1e3a8a;">Modules</h2>
                </div>
                
                <div class="mobile-grid">
                    <div class="mobile-module-wrapper">
                        <img src="EducAbout/1.png" alt="Licensing Module" class="mobile-module-image">
                        <div class="mobile-module-text-section6">
                            <h3 class="mobile-text-white mobile-mb-3" style="font-size: 18px; font-weight: 600;">Licensing Module</h3>
                            <p class="mobile-text-gray-300" style="font-size: 13px; line-height: 1.4;">
                                Responsible for defining and attaching licenses to IP Assets.
                            </p>
                        </div>
                    </div>
                    
                    <div class="mobile-module-wrapper">
                        <img src="EducAbout/2.png" alt="Royalty Module" class="mobile-module-image">
                        <div class="mobile-module-text-section6">
                            <h3 class="mobile-text-white mobile-mb-3" style="font-size: 18px; font-weight: 600;">Royalty Module</h3>
                            <p class="mobile-text-gray-300" style="font-size: 13px; line-height: 1.4;">
                                Responsible for handling royalty flow between parent & child IP Assets.
                            </p>
                        </div>
                    </div>
                    
                    <div class="mobile-module-wrapper">
                        <img src="EducAbout/3.png" alt="Dispute Module" class="mobile-module-image">
                        <div class="mobile-module-text-section6">
                            <h3 class="mobile-text-white mobile-mb-3" style="font-size: 18px; font-weight: 600;">Dispute Module</h3>
                            <p class="mobile-text-gray-300" style="font-size: 13px; line-height: 1.4;">
                                Responsible for handling the dispute of wrongfully registered or misbehaved IP Assets.
                            </p>
                        </div>
                    </div>
                    
                    <div class="mobile-module-wrapper">
                        <img src="EducAbout/4.png" alt="Grouping Module" class="mobile-module-image">
                        <div class="mobile-module-text-section6">
                            <h3 class="mobile-text-white mobile-mb-3" style="font-size: 18px; font-weight: 600;">Grouping Module</h3>
                            <p class="mobile-text-gray-300" style="font-size: 13px; line-height: 1.4;">
                                Responsible for handling groups of IPAs.
                            </p>
                        </div>
                    </div>
                    
                    <div class="mobile-module-wrapper">
                        <img src="EducAbout/5.png" alt="Metadata Module" class="mobile-module-image">
                        <div class="mobile-module-text-section6">
                            <h3 class="mobile-text-white mobile-mb-3" style="font-size: 18px; font-weight: 600;">Metadata Module</h3>
                            <p class="mobile-text-gray-300" style="font-size: 13px; line-height: 1.4;">
                                Manage and view metadata for IP Assets.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderMobileSection7() {
        return `
            <section class="mobile-section">
                <div class="mobile-text-center mobile-mb-8">
                    <h2 class="mobile-text-white mobile-mb-6" style="font-size: 28px; font-weight: bold; color: white; -webkit-text-stroke: 1px #4c1d95; text-shadow: 1px 1px 0 #4c1d95, -1px -1px 0 #4c1d95, 1px -1px 0 #4c1d95, -1px 1px 0 #4c1d95;">Programmable IP License (PIL)</h2>
                </div>
                
                <div class="mobile-text-white" style="font-size: 16px; line-height: 1.6;">
                    <p class="mobile-mb-6">
                        The Programmable IP License (PIL) is an off-chain legal agreement that defines the real-world usage terms for IP registered on Story. While IP Assets and licenses exist on-chain, the PIL provides the legal foundation that connects tokenized IP to traditional law and outlines how creators can remix, monetize, and create derivatives of their work.
                    </p>
                    
                    <div class="mobile-mb-6 mobile-mt-8">
                        <p class="mobile-mb-6">
                            On-chain enforcement is handled by the Story protocol through its IP Assets and Modules. The Licensing Module applies usage terms, the Royalty Module distributes revenue, and the Dispute Module resolves cases of misused or misregistered IP. These modules execute the rules defined in the PIL programmatically.
                        </p>
                    </div>
                    
                    <div class="mobile-mt-8">
                        <p>
                            Together, the PIL and Story's smart-contract modules create a unified system. The PIL sets the legal terms, and the protocol enforces them on-chain. This enables a clear and reliable connection between real-world rights and automated blockchain execution, forming the basis for programmable IP rights.
                        </p>
                    </div>
                </div>
            </section>
        `;
    }

    renderMobileSection8() {
        return `
            <section class="mobile-section">
                <div class="mobile-text-center mobile-mb-8">
                    <h2 class="mobile-text-white mobile-mb-6" style="font-size: 28px; font-weight: bold; color: white; -webkit-text-stroke: 1px #1e3a8a; text-shadow: 1px 1px 0 #1e3a8a, -1px -1px 0 #1e3a8a, 1px -1px 0 #1e3a8a, -1px 1px 0 #1e3a8a;">Story - Milestones Timeline</h2>
                </div>
                
                <div class="mobile-timeline-container">
                    <div class="mobile-timeline-item">
                        <h3 class="mobile-text-white mobile-mb-3" style="font-size: 32px; font-weight: bold;">2022</h3>
                        <ul class="mobile-text-white mobile-space-y-2" style="font-size: 15px;">
                            <li>• Story Protocol founded</li>
                            <li>• Core IP Asset model proposed</li>
                            <li>• Early research on programmable licensing and PIL</li>
                            <li>• First prototypes of the Proof-of-Creativity protocol</li>
                        </ul>
                    </div>
                    
                    <div class="mobile-timeline-item">
                        <h3 class="mobile-text-white mobile-mb-3" style="font-size: 32px; font-weight: bold;">2023</h3>
                        <ul class="mobile-text-white mobile-space-y-2" style="font-size: 15px;">
                            <li>• Seed and Series A rounds completed ($29.3M + $25M)</li>
                            <li>• Development of IP Assets, modules, and registry system</li>
                            <li>• Programmable IP License (PIL) drafted</li>
                            <li>• First internal test environments for IP modules</li>
                        </ul>
                    </div>
                    
                    <div class="mobile-timeline-item">
                        <h3 class="mobile-text-white mobile-mb-3" style="font-size: 32px; font-weight: bold;">2024</h3>
                        <ul class="mobile-text-white mobile-space-y-2" style="font-size: 15px;">
                            <li>• Iliad Testnet launched</li>
                            <li>• Series B round ($80M) to scale ecosystem and development</li>
                            <li>• Deployment of Licensing, Royalty, Dispute, Metadata, Grouping modules</li>
                            <li>• Odyssey Testnet with validator selection and delegation rotation</li>
                            <li>• Launch of early tooling: IP Portal, IP Vault, IP Explorer</li>
                        </ul>
                    </div>
                    
                    <div class="mobile-timeline-item">
                        <h3 class="mobile-text-white mobile-mb-3" style="font-size: 32px; font-weight: bold;">2025</h3>
                        <ul class="mobile-text-white mobile-space-y-2" style="font-size: 15px;">
                            <li>• Mainnet launched (Feb 2025)</li>
                            <li>• Ecosystem and developer integrations expanded</li>
                            <li>• Upgrades to modules and PIL enforcement</li>
                            <li>• Validator Expansion Program introduced</li>
                            <li>• Aeneid Testnet released for scaling and performance</li>
                            <li>• Network Expansion Initiative (Nov 2025)</li>
                        </ul>
                    </div>
                </div>
            </section>
        `;
    }

    renderMobileSection9() {
        return `
            <section class="mobile-section">
                <div class="mobile-text-center mobile-mb-8">
                    <h2 class="mobile-text-white mobile-mb-6" style="font-size: 28px; font-weight: bold; color: white; -webkit-text-stroke: 1px #4c1d95; text-shadow: 1px 1px 0 #4c1d95, -1px -1px 0 #4c1d95, 1px -1px 0 #4c1d95, -1px 1px 0 #4c1d95;">Fundraising</h2>
                </div>
                
                <div style="background-image: url('icon/Ramka3.png'); background-size: cover; background-repeat: no-repeat; background-position: center; padding: 1.5rem 2rem; margin: 1rem 0; width: 100%; min-height: 350px; filter: brightness(1.3) contrast(1.2); border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.3);">
                    <p class="mobile-text-white mobile-mb-6 mobile-text-center" style="font-size: 16px; line-height: 1.6;">
                        Story is backed by leading investors in blockchain and AI, including a16z, Hashed, Polychain, Samsung Next, Mirana, and Balaji Srinivasan. The capital raised supports protocol development, ecosystem growth, and the expansion of IP-native and AI-native infrastructure.
                    </p>
                    
                    <p class="mobile-text-white mobile-mb-4" style="font-size: 18px; font-weight: 600;">Funding Rounds:</p>
                    
                    <ul class="mobile-text-white mobile-space-y-4" style="font-size: 15px; line-height: 1.5;">
                        <li>
                            <span style="font-weight: 600;">• Seed Round (2023) — ~$29.3M raised</span><br>
                            <span class="mobile-text-gray-300" style="margin-left: 1rem; font-size: 14px;">Key investors: a16z, Hashed, Balaji Srinivasan.</span>
                        </li>
                        
                        <li>
                            <span style="font-weight: 600;">• Series A (2023) — ~$25M raised</span><br>
                            <span class="mobile-text-gray-300" style="margin-left: 1rem; font-size: 14px;">Key investors: Mirana Ventures, Hashed, Samsung Next.</span>
                        </li>
                        
                        <li>
                            <span style="font-weight: 600;">• Series B (2024) — $80M raised</span><br>
                            <span class="mobile-text-gray-300" style="margin-left: 1rem; font-size: 14px;">Key investors: Polychain Capital, Samsung Next, Mirana, a16z (participation), Foresight Ventures.</span>
                        </li>
                        
                        <li>
                            <span style="font-weight: 600;">• OTC Purchase (2025) — $82M raised</span><br>
                            <span class="mobile-text-gray-300" style="margin-left: 1rem; font-size: 14px;">Key participant: Heritage Distilling (strategic OTC buyer).</span>
                        </li>
                    </ul>
                </div>
            </section>
        `;
    }

    renderMobileSection10() {
        return `
            <section class="mobile-section">
                <div class="mobile-text-center mobile-mb-8">
                    <h2 class="mobile-text-white mobile-mb-6" style="font-size: 28px; font-weight: bold; color: white; -webkit-text-stroke: 1px #1e3a8a; text-shadow: 1px 1px 0 #1e3a8a, -1px -1px 0 #1e3a8a, 1px -1px 0 #1e3a8a, -1px 1px 0 #1e3a8a;">Story Team</h2>
                </div>
                
                <div class="mobile-grid">
                    <div class="mobile-team-member">
                        <div class="mobile-team-photo">
                            <img src="face/1.png" alt="Seung Yoon (SY) Lee">
                        </div>
                        <h3 class="mobile-text-white mobile-mb-2" style="font-size: 18px; font-weight: 600;">Seung Yoon (SY) Lee</h3>
                        <p class="mobile-text-white mobile-mb-3" style="font-size: 16px; color: #8b5cf6;">CEO & Co-Founder</p>
                        <p class="mobile-text-gray-300" style="font-size: 14px; line-height: 1.4;">
                            Leads strategic development at Story. Responsible for the Network, ecosystem, and partnerships.
                        </p>
                    </div>
                    
                    <div class="mobile-team-member">
                        <div class="mobile-team-photo">
                            <img src="face/2.png" alt="Andrea Muttoni">
                        </div>
                        <h3 class="mobile-text-white mobile-mb-2" style="font-size: 18px; font-weight: 600;">Andrea Muttoni</h3>
                        <p class="mobile-text-white mobile-mb-3" style="font-size: 16px; color: #8b5cf6;">President & CPO</p>
                        <p class="mobile-text-gray-300" style="font-size: 14px; line-height: 1.4;">
                            Manages the product and development of Story Foundation. Shapes the vision of the protocol and tools for creators and developers.
                        </p>
                    </div>
                    
                    <div class="mobile-team-member">
                        <div class="mobile-team-photo">
                            <img src="face/3.png" alt="Hao (Leo) Chen">
                        </div>
                        <h3 class="mobile-text-white mobile-mb-2" style="font-size: 18px; font-weight: 600;">Hao (Leo) Chen</h3>
                        <p class="mobile-text-white mobile-mb-3" style="font-size: 16px; color: #8b5cf6;">CTO</p>
                        <p class="mobile-text-gray-300" style="font-size: 14px; line-height: 1.4;">
                            Manages technical infrastructure and protocol. Previously VP of Engineering at Harmony.
                        </p>
                    </div>
                    
                    <div class="mobile-team-member">
                        <div class="mobile-team-photo">
                            <img src="face/1-4.png" alt="Seung Soo Kim">
                        </div>
                        <h3 class="mobile-text-white mobile-mb-2" style="font-size: 18px; font-weight: 600;">Seung Soo Kim</h3>
                        <p class="mobile-text-white mobile-mb-3" style="font-size: 16px; color: #8b5cf6;">Chief of Staff</p>
                        <p class="mobile-text-gray-300" style="font-size: 14px; line-height: 1.4;">
                            Drives strategic execution and operational excellence. Responsible for cross-functional alignment and managing executive initiatives.
                        </p>
                    </div>
                    
                    <div class="mobile-team-member">
                        <div class="mobile-team-photo">
                            <img src="face/4.png" alt="Ben Sternberg">
                        </div>
                        <h3 class="mobile-text-white mobile-mb-2" style="font-size: 18px; font-weight: 600;">Ben Sternberg</h3>
                        <p class="mobile-text-white mobile-mb-3" style="font-size: 16px; color: #8b5cf6;">CFO</p>
                        <p class="mobile-text-gray-300" style="font-size: 14px; line-height: 1.4;">
                            Responsible for finance, audit, and operations processes. Works on project transparency and stability.
                        </p>
                    </div>
                    
                    <div class="mobile-team-member">
                        <div class="mobile-team-photo">
                            <img src="face/5.png" alt="Jason Levy">
                        </div>
                        <h3 class="mobile-text-white mobile-mb-2" style="font-size: 18px; font-weight: 600;">Jason Levy</h3>
                        <p class="mobile-text-white mobile-mb-3" style="font-size: 16px; color: #8b5cf6;">Co-Founder (Advisor)</p>
                        <p class="mobile-text-gray-300" style="font-size: 14px; line-height: 1.4;">
                            Helped shape the early architecture of Story. Supports the project as an advisor.
                        </p>
                    </div>
                    
                    <div class="mobile-team-member">
                        <div class="mobile-team-photo">
                            <img src="face/6.png" alt="Sandeep Chinchali">
                        </div>
                        <h3 class="mobile-text-white mobile-mb-2" style="font-size: 18px; font-weight: 600;">Sandeep Chinchali</h3>
                        <p class="mobile-text-white mobile-mb-3" style="font-size: 16px; color: #8b5cf6;">Chief Architect</p>
                        <p class="mobile-text-gray-300" style="font-size: 14px; line-height: 1.4;">
                            Responsible for AI architecture and data management. Develops mechanisms for rights-cleared data and AI integration.
                        </p>
                    </div>
                    
                    <div class="mobile-team-member">
                        <div class="mobile-team-photo">
                            <img src="face/7.png" alt="Shazia Hasan">
                        </div>
                        <h3 class="mobile-text-white mobile-mb-2" style="font-size: 18px; font-weight: 600;">Shazia Hasan</h3>
                        <p class="mobile-text-white mobile-mb-3" style="font-size: 16px; color: #8b5cf6;">Marketing & Operations</p>
                        <p class="mobile-text-gray-300" style="font-size: 14px; line-height: 1.4;">
                            Works on marketing communications and operational coordination. Supports partnership initiatives and aware activities.
                        </p>
                    </div>
                </div>
            </section>
        `;
    }

    attachEventListeners() {
        const mobileExploreBtn = document.getElementById('mobile-explore-story-btn');
        if (mobileExploreBtn) {
            mobileExploreBtn.addEventListener('click', function () {
                window.location.href = '/community-content';
            });
        }

        const mobileVisitBtn = document.getElementById('mobile-visit-website-btn');
        if (mobileVisitBtn) {
            mobileVisitBtn.addEventListener('click', function () {
                window.open('https://www.story.foundation/', '_blank');
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    new EducationAboutMobile();
});