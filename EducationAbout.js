class EducationAbout {
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
            <div class="education-about-content" style="font-weight: normal;">
                <style>
                    .section { margin-bottom: 4rem; }
                    .education-about-content * {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
                    }
                    .card-wrapper {
                        position: relative;
                        display: inline-block;
                    }
                    .card-text {
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        padding: 1.5rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        z-index: 2;
                    }
                </style>

                ${this.renderSection1()}
                ${this.renderSection2()}
                ${this.renderSection3()}
                ${this.renderSection4()}
                ${this.renderSection5()}
                ${this.renderSection6()}
                ${this.renderSection7()}
                ${this.renderSection8()}
                ${this.renderSection9()}
                ${this.renderSection10()}
            </div>
        `;

        this.attachEventListeners();
    }

    renderSection1() {
        return `
            <section class="section">
                <div class="text-center mb-8">
                    <h1 class="text-white mb-4" style="font-size: 48px;">What is Story?</h1>
                </div>

                <div class="text-center mb-8">
                    <p class="text-white max-w-2xl mx-auto" style="font-size: 20px;">
                        Story is a layer-1 blockchain built for transparent, decentralized<br>
                        management of intellectual property.
                    </p>
                </div>

                <div class="mx-auto px-4 py-6" style="max-width: 1400px;">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div class="pr-4 max-w-xl">
                            <h2 class="text-white mb-4 leading-tight" style="font-size: 40px;">
                                Empowering the Future of Intellectual Property.
                            </h2>
                            
                            <p class="text-white leading-relaxed mb-6" style="font-size: 18px;">
                                AI's next leap depends on unlocking the $80 trillion IP asset class. Story tokenizes IP and makes it programmable, from ownership to remix to monetization.
                            </p>
                            
                            <div class="flex items-start justify-start" style="margin-left: 0; gap: 0;">
                                <img id="explore-story-btn" src="icon/ExploreSVG.png" alt="Explore Story" class="cursor-pointer hover:opacity-80 transition-opacity duration-300" style="transform: scale(0.7); margin-left: -55px;">
                                <img id="visit-website-btn" src="icon/VisitSVG.png" alt="Visit Official Website" class="cursor-pointer hover:opacity-80 transition-opacity duration-300" style="transform: scale(0.7); margin-left: -50px;">
                            </div>
                        </div>

                        <div class="flex justify-center lg:justify-end">
                            <div class="w-96 h-96 flex items-center justify-center">
                                <img src="icon/ip.png" alt="IP Logo" class="max-w-full max-h-full object-contain">
                            </div>
                        </div>

                        <div class="lg:col-span-2 mt-6">
                            <p class="text-white leading-relaxed text-left max-w-6xl" style="font-size: 23px;">
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

    renderSection2() {
        return `
            <section class="section">
                <div class="w-full px-4 py-6">
                    <div class="text-center mb-12">
                        <h2 class="text-5xl text-white mb-4">How Story Works</h2>
                    </div>

                    <div class="flex justify-center items-stretch" style="gap: 80px; max-width: 1600px; margin: 0 auto;">
                        <div class="card-wrapper">
                            <img src="icon/ramka.png" alt="Card 1" style="width: 350px; height: auto;">
                            <div class="card-text">
                                <h3 class="text-xl text-white font-normal mb-3 text-center underline">IP Tokenization</h3>
                                <p class="text-white text-sm mb-4 text-center leading-relaxed">
                                    Story makes any intellectual property tokenized, unified, and usable within the ecosystem.
                                </p>
                                <div class="h-px bg-purple-800 mb-4"></div>
                                <p class="text-white text-sm mb-3 text-center">This provides the opportunity to:</p>
                                <ul class="text-white text-sm space-y-2">
                                    <li>• register IP in an open and transparent format</li>
                                    <li>• confirm ownership</li>
                                    <li>• use IP in licenses, remixes, and applications</li>
                                    <li>• integrate IP into apps, games, and AI workflows</li>
                                    <li>• unlock onchain monetization opportunities</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="card-wrapper">
                            <img src="icon/ramka.png" alt="Card 2" style="width: 350px; height: auto;">
                            <div class="card-text">
                                <h3 class="text-xl text-white font-normal mb-3 text-center underline">Programmable Licensing (PIL)</h3>
                                <p class="text-white text-sm mb-4 text-center leading-relaxed">
                                    Licensing rules are written in a format that smart contracts can execute - without lawyers or manual processes.
                                </p>
                                <div class="h-px bg-purple-800 mb-4"></div>
                                <p class="text-white text-sm mb-3 text-center">This provides the opportunity to:</p>
                                <ul class="text-white text-sm space-y-2">
                                    <li>• set terms of use for IP in one click</li>
                                    <li>• automatically apply rules (commerciality, royalties, restrictions)</li>
                                    <li>• avoid disputes and misuse of content</li>
                                    <li>• set clear and enforceable usage rules for any IP</li>
                                    <li>• automatically apply licensing terms without manual review</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="card-wrapper">
                            <img src="icon/ramka.png" alt="Card 3" style="width: 350px; height: auto;">
                            <div class="card-text">
                                <h3 class="text-xl text-white font-normal mb-3 text-center underline">Automated Royalties</h3>
                                <p class="text-white text-sm mb-4 text-center leading-relaxed">
                                    Financial obligations between creators and derivative projects are fulfilled automatically.
                                </p>
                                <div class="h-px bg-purple-800 mb-4"></div>
                                <p class="text-white text-sm mb-3 text-center">This provides the opportunity to:</p>
                                <ul class="text-white text-sm space-y-2">
                                    <li>• receiving royalties without intermediaries</li>
                                    <li>• transparent and verifiable distribution of income</li>
                                    <li>• fair participation of the creator in each derivative work</li>
                                    <li>• receive royalties instantly and without intermediaries</li>
                                    <li>• ensure transparent and verifiable income distribution</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="card-wrapper">
                            <img src="icon/ramka.png" alt="Card 4" style="width: 350px; height: auto;">
                            <div class="card-text">
                                <h3 class="text-xl text-white font-normal mb-3 text-center underline">Collaborative Creativity</h3>
                                <p class="text-white text-sm mb-4 text-center leading-relaxed">
                                    Story makes remixes legal, manageable, and rewarded according to the creator's rules.
                                </p>
                                <div class="h-px bg-purple-800 mb-4"></div>
                                <p class="text-white text-sm mb-3 text-center">This provides the opportunity to:</p>
                                <ul class="text-white text-sm space-y-2">
                                    <li>• create derivative works without legal chaos</li>
                                    <li>• automatically indicate authorship</li>
                                    <li>• use IP in licenses, remixes, and applications</li>
                                    <li>• legally create derivative works with automatic attribution</li>
                                    <li>• share value fairly between original creators and remixers</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderSection3() {
        return `
            <section class="section">
                <div class="mx-auto px-4 py-6" style="max-width: 1600px;">
                    <div class="text-center mb-12">
                        <h2 class="text-white mb-4" style="font-size: 48px;">Why is this important</h2>
                    </div>
                    
                    <div class="flex justify-center">
                        <div class="relative max-w-8xl">
                            <img src="icon/Ramka2.png" alt="Frame" class="w-full h-auto">
                            <div class="absolute inset-0 p-12 flex flex-col justify-center" style="padding-left: 150px; padding-right: 150px;">
                                <ul class="text-white space-y-8" style="font-size: 24px; line-height: 1.6;">
                                    <li>
                                        <span class="text-white font-medium underline">• Traditional IP systems are too slow, complex, and expensive</span><br>
                                        <span class="text-gray-300">Сontracts, intermediaries, delays, and monitoring violations make working with content inefficient. In the digital age, authors often remain unrecognized and unrewarded.</span>
                                    </li>
                                    
                                    <li>
                                        <span class="text-white font-medium underline">• Lack of transparency and trust</span><br>
                                        <span class="text-gray-300">Centralized platforms control data and payments, creating high fees, errors, and fraud risks. An open, immutable record of all IP actions is needed.</span>
                                    </li>
                                    
                                    <li>
                                        <span class="text-white font-medium underline">• Licenses are not adapted to the AI era</span><br>
                                        <span class="text-gray-300">Legally complex and machine-unreadable rights make it impossible for algorithms and services to use content legally. This causes chaos, legal risks, and slows innovation.</span>
                                    </li>
                                    
                                    <li>
                                        <span class="text-white font-medium underline">• No infrastructure for large-scale and remix economies</span><br>
                                        <span class="text-gray-300">Modern content, remix, and derivative markets lack standards for automated creation, licensing, and monetization of derivative works.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderSection4() {
        return `
            <section class="section">
                <div class="mx-auto px-4 py-6" style="max-width: 1600px;">
                    <div class="text-center mb-12">
                        <h2 class="text-white mb-4" style="font-size: 48px;">Who can use Story?</h2>
                    </div>
                    
                    <div class="flex justify-center">
                        <div class="relative max-w-8xl">
                            <img src="icon/Ramka2.png" alt="Frame" class="w-full h-auto">
                            <div class="absolute inset-0 p-12 flex flex-col justify-center" style="padding-left: 150px; padding-right: 150px;">
                                <ul class="text-white space-y-8" style="font-size: 24px; line-height: 1.6;">
                                    <li>
                                        <span class="text-white font-medium underline">• Creators and authors</span><br>
                                        <span class="text-gray-300">Writers, artists, musicians, game developers and AI model creators can register their works as NFTs, set their own usage terms and earn rewards each time their content is viewed or used.</span>
                                    </li>
                                    
                                    <li>
                                        <span class="text-white font-medium underline">• Businesses and platforms</span><br>
                                        <span class="text-gray-300">Story makes it easy to obtain content licenses and track payments transparently, simplifying the launch of products or AI models that rely on third-party data.</span>
                                    </li>
                                    
                                    <li>
                                        <span class="text-white font-medium underline">• Fan communities and IP franchises</span><br>
                                        <span class="text-gray-300">Fans can officially create derivative works or contribute to shared universes while earning a share of the revenue. Rights holders can expand their reach and strengthen community engagement.</span>
                                    </li>
                                    
                                    <li>
                                        <span class="text-white font-medium underline">• Developers and infrastructure teams</span><br>
                                        <span class="text-gray-300">Dev teams can build IP marketplaces, licensing apps, AI tools, game worlds and onchain economies using Story modules as the foundational layer for tokenization, licensing, royalties and provenance verification.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }


    renderSection5() {
        return `
            <section class="section">
                <div class="mx-auto px-4 py-6" style="max-width: 1400px;">
                    <div class="text-center mb-12">
                        <h2 class="text-white mb-8" style="font-size: 48px;">"Proof-of-Creativity" Protocol</h2>
                    </div>
                    
                    <div class="text-white" style="font-size: 25px; line-height: 1.6;">
                        <p class="mb-4">
                            "Proof-of-Creativity" protocol is a set of Solidity smart contracts deployed natively on the Story Network. It enables anyone to bring their intellectual property onchain and anchor it as part of the Story ecosystem. Most of our documentation is dedicated to explaining this protocol layer.
                        </p>
                        
                        <div class="mb-8  mt-20">
                            <p class="mb-0">Creators register their works as IP Assets, while Modules act as the building blocks for interacting with them.</p>
                            <p class="mb-2">For example:</p>
                            <ul class="ml-4 space-y-0">
                                <li>• the Licensing Module defines and enforces usage terms,</li>
                                <li>• the Royalty Module handles revenue flows,</li>
                                <li>• the Dispute Module resolves conflicts around misused or misregistered IP.</li>
                            </ul>
                        </div>
                        
                        <div class="space-y-0 mt-20">
                            <p>
                                Every IP Asset is linked to an ERC-721 NFT that represents ownership of the underlying IP, making ownership transferable and tradeable. Licenses minted from an IP Asset are also ERC-721 NFTs, meaning the rights to use an IP under specific terms can be bought and sold as well.
                            </p>
                            <p>
                                Together, this structure unlocks a new category of IP-native financial and creative mechanics - IPFi.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderSection6() {
        return `
            <section class="section">
                <div class="mx-auto px-4 py-6" style="max-width: 1600px;">
                    <div class="text-center mb-12">
                        <h2 class="text-white mb-8" style="font-size: 48px;">Modules</h2>
                    </div>
                    
                    <div class="flex flex-col items-center gap-8">
                      
                        <div class="flex justify-center gap-8">
                            
                            <div class="relative">
                                <img src="EducAbout/1.png" alt="Licensing Module" class="w-96 h-auto">
                                <div class="absolute inset-0 flex flex-col justify-center items-center text-center p-6" style="padding-top: 120px;">
                                    <h3 class="text-white text-3xl font-medium mb-4">Licensing Module</h3>
                                    <p class="text-gray-300 text-lg leading-relaxed">
                                        Responsible for defining and attaching licenses to IP Assets.
                                    </p>
                                </div>
                            </div>
                            
                            
                            <div class="relative">
                                <img src="EducAbout/2.png" alt="Royalty Module" class="w-96 h-auto">
                                <div class="absolute inset-0 flex flex-col justify-center items-center text-center p-6" style="padding-top: 120px;">
                                    <h3 class="text-white text-3xl font-medium mb-4">Royalty Module</h3>
                                    <p class="text-gray-300 text-lg leading-relaxed">
                                        Responsible for handling royalty flow between parent & child IP Assets.
                                    </p>
                                </div>
                            </div>
                            
                           
                            <div class="relative">
                                <img src="EducAbout/3.png" alt="Dispute Module" class="w-96 h-auto">
                                <div class="absolute inset-0 flex flex-col justify-center items-center text-center p-6" style="padding-top: 120px;">
                                    <h3 class="text-white text-3xl font-medium mb-4">Dispute Module</h3>
                                    <p class="text-gray-300 text-lg leading-relaxed">
                                        Responsible for handling the dispute of wrongfully registered or misbehaved IP Assets.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                       
                        <div class="flex justify-center gap-8">
                            
                            <div class="relative">
                                <img src="EducAbout/4.png" alt="Grouping Module" class="w-96 h-auto">
                                <div class="absolute inset-0 flex flex-col justify-center items-center text-center p-6" style="padding-top: 120px;">
                                    <h3 class="text-white text-3xl font-medium mb-4">Grouping Module</h3>
                                    <p class="text-gray-300 text-lg leading-relaxed">
                                        Responsible for handling groups of IPAs.
                                    </p>
                                </div>
                            </div>
                            
                            
                            <div class="relative">
                                <img src="EducAbout/5.png" alt="Metadata Module" class="w-96 h-auto">
                                <div class="absolute inset-0 flex flex-col justify-center items-center text-center p-6" style="padding-top: 120px;">
                                    <h3 class="text-white text-3xl font-medium mb-4">Metadata Module</h3>
                                    <p class="text-gray-300 text-lg leading-relaxed">
                                        Manage and view metadata for IP Assets.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderSection7() {
        return `
            <section class="section">
                <div class="mx-auto px-4 py-6" style="max-width: 1400px;">
                    <div class="text-center mb-12">
                        <h2 class="text-white mb-8" style="font-size: 48px;">Programmable IP License (PIL)</h2>
                    </div>
                    
                    <div class="text-white" style="font-size: 25px; line-height: 1.6;">
                        <p class="mb-4">
                            The Programmable IP License (PIL) is an off-chain legal agreement that defines the real-world usage terms for IP registered on Story. While IP Assets and licenses exist on-chain, the PIL provides the legal foundation that connects tokenized IP to traditional law and outlines how creators can remix, monetize, and create derivatives of their work.
                        </p>
                        
                        <div class="mb-8 mt-20">
                            <p class="mb-8">
                                On-chain enforcement is handled by the Story protocol through its IP Assets and Modules. The Licensing Module applies usage terms, the Royalty Module distributes revenue, and the Dispute Module resolves cases of misused or misregistered IP. These modules execute the rules defined in the PIL programmatically.
                            </p>
                        </div>
                        
                        <div class="mt-20">
                            <p>
                                Together, the PIL and Story's smart-contract modules create a unified system. The PIL sets the legal terms, and the protocol enforces them on-chain. This enables a clear and reliable connection between real-world rights and automated blockchain execution, forming the basis for programmable IP rights.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderSection8() {
        return `
            <section class="section">
                <div class="mx-auto px-4 py-6" style="max-width: 1600px;">
                    <div class="text-center mb-12">
                        <h2 class="text-white mb-8" style="font-size: 48px;">Story - Milestones Timeline</h2>
                    </div>
                    
                    <div class="relative flex justify-center" style="padding-bottom: 150px;">
                        <img src="EducAbout/line.png" alt="Timeline" style="height: 900px; width: auto;">
                        
                       
                        <div class="absolute text-white" style="top: -2%; left: 52%; max-width: 700px;">
                            <h3 class="text-6xl font-bold mb-3">2022</h3>
                            <ul class="text-lg space-y-1">
                                <li>• Story Protocol founded</li>
                                <li>• Core IP Asset model proposed</li>
                                <li>• Early research on programmable licensing and PIL</li>
                                <li>• First prototypes of the Proof-of-Creativity protocol</li>
                            </ul>
                        </div>
                        
                        
                        <div class="absolute text-white" style="top: 26%; right: 52%; max-width: 700px; text-align: right;">
                            <h3 class="text-6xl font-bold mb-3">2023</h3>
                            <ul class="text-lg space-y-1">
                                <li>• Seed and Series A rounds completed ($29.3M + $25M)</li>
                                <li>• Development of IP Assets, modules, and registry system</li>
                                <li>• Programmable IP License (PIL) drafted</li>
                                <li>• First internal test environments for IP modules</li>
                            </ul>
                        </div>
                        
                        
                        <div class="absolute text-white" style="top: 54%; left: 52%; max-width: 750px;">
                            <h3 class="text-6xl font-bold mb-3">2024</h3>
                            <ul class="text-lg space-y-1">
                                <li>• Iliad Testnet launched</li>
                                <li>• Series B round ($80M) to scale ecosystem and development</li>
                                <li>• Deployment of Licensing, Royalty, Dispute, Metadata, Grouping modules</li>
                                <li>• Odyssey Testnet with validator selection and delegation rotation</li>
                                <li>• Launch of early tooling: IP Portal, IP Vault, IP Explorer</li>
                            </ul>
                        </div>
                        
                        
                        <div class="absolute text-white" style="top: 81%; right: 52%; max-width: 700px; text-align: right;">
                            <h3 class="text-6xl font-bold mb-3">2025</h3>
                            <ul class="text-lg space-y-1">
                                <li>• Mainnet launched (Feb 2025)</li>
                                <li>• Ecosystem and developer integrations expanded</li>
                                <li>• Upgrades to modules and PIL enforcement</li>
                                <li>• Validator Expansion Program introduced</li>
                                <li>• Aeneid Testnet released for scaling and performance</li>
                                <li>• Network Expansion Initiative (Nov 2025)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderSection9() {
        return `
            <section class="section">
                <div class="mx-auto px-4 py-6" style="max-width: 1600px;">
                    <div class="flex justify-center">
                        <div class="relative max-w-8xl">
                            <img src="icon/Ramka3.png" alt="Frame" style="width: 88%; height: 90%; display: block; margin: 0 auto;">
                            <div class="absolute inset-0 p-12 flex flex-col justify-center" style="padding-left: 150px; padding-right: 150px;">
                                <div class="text-white" style="font-size: 24px; line-height: 1.6;">
                                    <h2 class="text-white mb-8 text-center" style="font-size: 48px; transform: translateY(-100px);">Fundraising</h2>
                                    <p class="mb-8 text-center" style="transform: translateY(-100px);">
                                        Story is backed by leading investors in blockchain and AI, including a16z, Hashed, Polychain, Samsung Next, Mirana, and Balaji Srinivasan. The capital raised supports protocol development, ecosystem growth, and the expansion of IP-native and AI-native infrastructure.
                                    </p>
                                    
                                    <p class="mb-6 font-medium" style="transform: translateY(-60px);">Funding Rounds:</p>
                                    
                                    <ul class="space-y-6" style="transform: translateY(-40px);">
                                        <li>
                                            <span class="font-medium">• Seed Round (2023) — ~$29.3M raised</span><br>
                                            <span class="text-gray-300 ml-4">Key investors: a16z, Hashed, Balaji Srinivasan.</span>
                                        </li>
                                        
                                        <li>
                                            <span class="font-medium">• Series A (2023) — ~$25M raised</span><br>
                                            <span class="text-gray-300 ml-4">Key investors: Mirana Ventures, Hashed, Samsung Next.</span>
                                        </li>
                                        
                                        <li>
                                            <span class="font-medium">• Series B (2024) — $80M raised</span><br>
                                            <span class="text-gray-300 ml-4">Key investors: Polychain Capital, Samsung Next, Mirana, a16z (participation), Foresight Ventures.</span>
                                        </li>
                                        
                                        <li>
                                            <span class="font-medium">• OTC Purchase (2025) — $82M raised</span><br>
                                            <span class="text-gray-300 ml-4">Key participant: Heritage Distilling (strategic OTC buyer).</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderSection10() {
        return `
            <section class="section">
                <div class="max-w-7xl mx-auto px-4 py-6">
                    <h2 class="text-5xl text-white mb-12 text-center">Story Team</h2>
                    
                    
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 justify-items-center">
                        <div class="text-center">
                            <div class="w-56 h-56 mx-auto mb-4 rounded-full overflow-hidden">
                                <img src="face/1.png" alt="Seung Yoon (SY) Lee" class="w-full h-full object-cover">
                            </div>
                            <h3 class="text-white font-medium mb-2" style="font-size: 24px;">Seung Yoon (SY) Lee</h3>
                            <p class="text-white mb-3" style="font-size: 22px;">CEO & Co-Founder</p>
                            <p class="text-gray-300 leading-relaxed max-w-xs mx-auto" style="font-size: 18px;">
                                Leads strategic development at Story. Responsible for the Network, ecosystem, and partnerships.
                            </p>
                        </div>
                        
                        <div class="text-center">
                            <div class="w-56 h-56 mx-auto mb-4 rounded-full overflow-hidden">
                                <img src="face/2.png" alt="Andrea Muttoni" class="w-full h-full object-cover">
                            </div>
                            <h3 class="text-white font-medium mb-2" style="font-size: 24px;">Andrea Muttoni</h3>
                            <p class="text-white mb-3" style="font-size: 22px;">President & CPO</p>
                            <p class="text-gray-300 leading-relaxed max-w-xs mx-auto" style="font-size: 18px;">
                                Manages the product and development of Story Foundation. Shapes the vision of the protocol and tools for creators and developers.
                            </p>
                        </div>
                        
                        <div class="text-center">
                            <div class="w-56 h-56 mx-auto mb-4 rounded-full overflow-hidden">
                                <img src="face/3.png" alt="Hao (Leo) Chen" class="w-full h-full object-cover">
                            </div>
                            <h3 class="text-white font-medium mb-2" style="font-size: 24px;">Hao (Leo) Chen</h3>
                            <p class="text-white mb-3" style="font-size: 22px;">CTO</p>
                            <p class="text-gray-300 leading-relaxed max-w-xs mx-auto" style="font-size: 18px;">
                                Manages technical infrastructure and protocol. Previously VP of Engineering at Harmony.
                            </p>
                        </div>
                        
                        <div class="text-center">
                            <div class="w-56 h-56 mx-auto mb-4 rounded-full overflow-hidden">
                                <img src="face/1-4.png" alt="Seung Soo Kim" class="w-full h-full object-cover">
                            </div>
                            <h3 class="text-white font-medium mb-2" style="font-size: 24px;">Seung Soo Kim</h3>
                            <p class="text-white mb-3" style="font-size: 22px;">Chief of Staff</p>
                            <p class="text-gray-300 leading-relaxed max-w-xs mx-auto" style="font-size: 18px;">
                                Drives strategic execution and operational excellence. Responsible for cross-functional alignment and managing executive initiatives.
                            </p>
                        </div>
                    </div>
                                 
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center">
                        <div class="text-center">
                            <div class="w-56 h-56 mx-auto mb-4 rounded-full overflow-hidden">
                                <img src="face/4.png" alt="Ben Sternberg" class="w-full h-full object-cover">
                            </div>
                            <h3 class="text-white font-medium mb-2" style="font-size: 24px;">Ben Sternberg</h3>
                            <p class="text-white mb-3" style="font-size: 22px;">CFO</p>
                            <p class="text-gray-300 leading-relaxed max-w-xs mx-auto" style="font-size: 18px;">
                                Responsible for finance, audit, and operations processes. Works on project transparency and stability.
                            </p>
                        </div>
                        
                        <div class="text-center">
                            <div class="w-56 h-56 mx-auto mb-4 rounded-full overflow-hidden">
                                <img src="face/5.png" alt="Jason Levy" class="w-full h-full object-cover">
                            </div>
                            <h3 class="text-white font-medium mb-2" style="font-size: 24px;">Jason Levy</h3>
                            <p class="text-white mb-3" style="font-size: 22px;">Co-Founder (Advisor)</p>
                            <p class="text-gray-300 leading-relaxed max-w-xs mx-auto" style="font-size: 18px;">
                                Helped shape the early architecture of Story. Supports the project as an advisor.
                            </p>
                        </div>
                        
                        <div class="text-center">
                            <div class="w-56 h-56 mx-auto mb-4 rounded-full overflow-hidden">
                                <img src="face/6.png" alt="Sandeep Chinchali" class="w-full h-full object-cover">
                            </div>
                            <h3 class="text-white font-medium mb-2" style="font-size: 24px;">Sandeep Chinchali</h3>
                            <p class="text-white mb-3" style="font-size: 22px;">Chief Architect</p>
                            <p class="text-gray-300 leading-relaxed max-w-xs mx-auto" style="font-size: 18px;">
                                Responsible for AI architecture and data management. Develops mechanisms for rights-cleared data and AI integration.
                            </p>
                        </div>
                        
                        <div class="text-center">
                            <div class="w-56 h-56 mx-auto mb-4 rounded-full overflow-hidden">
                                <img src="face/7.png" alt="Shazia Hasan" class="w-full h-full object-cover">
                            </div>
                            <h3 class="text-white font-medium mb-2" style="font-size: 24px;">Shazia Hasan</h3>
                            <p class="text-white mb-3" style="font-size: 22px;">Marketing & Operations</p>
                            <p class="text-gray-300 leading-relaxed max-w-xs mx-auto" style="font-size: 18px;">
                                Works on marketing communications and operational coordination. Supports partnership initiatives and aware activities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    attachEventListeners() {
        const exploreBtn = document.getElementById('explore-story-btn');
        if (exploreBtn) {
            exploreBtn.addEventListener('click', function () {
                window.location.href = '/community-content';
            });
        }

        const visitBtn = document.getElementById('visit-website-btn');
        if (visitBtn) {
            visitBtn.addEventListener('click', function () {
                window.open('https://www.story.foundation/', '_blank');
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    new EducationAbout();
});