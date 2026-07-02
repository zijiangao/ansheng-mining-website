const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const langButtons = document.querySelectorAll("[data-lang-switch]");

const translations = {
  zh: {
    htmlLang: "zh-CN",
    title: "新加坡安胜有限公司 | Singapore Excellen Pte Ltd",
    metaDescription:
      "新加坡安胜有限公司专注于铜钴等关键矿产资源投资、项目开发、工程协同与长期价值管理。",
    nav: ["公司概览", "项目布局", "铜产品贸易", "能力体系", "责任治理", "联系"],
    menuLabel: "打开导航",
    heroEyebrow: "Copper & Cobalt Resource Investment",
    heroTitle: "面向能源转型金属的长期矿业投资平台",
    heroCopy:
      "新加坡安胜有限公司作为香港安胜旗下国际贸易平台，聚焦铜、钴等关键矿产产品的跨境销售与供应链协同，服务刚果（金）相关矿业项目的市场化销售。",
    heroActions: ["查看项目布局", "商务联系"],
    heroPanel: ["重点矿种", "铜 · 钴", "项目方向", "非洲矿业资产开发"],
    intro: [
      "安胜平台开始布局关键矿产资源",
      "刚果（金）绿纱铜钴湿法冶炼项目投产",
      "新加坡平台协同刚果（金）矿产品国际销售",
    ],
    aboutEyebrow: "Company",
    aboutTitle: "公司概览",
    aboutParagraphs: [
      "新加坡安胜有限公司以新加坡为国际贸易与供应链协同平台，母公司为香港安胜。公司关注铜、钴等能源转型相关金属的长期价值，承担相关矿业项目产品销售、贸易结算、客户对接和物流协调等平台职能。",
      "公司相关资源项目包括刚果（金）绿纱项目、鲁依鲁资源项目及KIK项目。新加坡安胜不直接表述为矿山运营主体，而是作为贸易平台协同相关产品进入国际市场。",
    ],
    facts: [
      ["业务领域", "矿产品贸易、供应链协同、客户对接"],
      ["重点资源", "铜、钴及相关有色金属"],
      ["区域关注", "刚果（金）铜钴资源及国际贸易平台"],
      ["相关项目", "绿纱项目、鲁依鲁资源项目、KIK项目"],
    ],
    projectEyebrow: "Projects",
    projectTitle: "项目布局",
    projectTag: "DRC Copper-Cobalt Portfolio",
    projectHeading: "刚果（金）铜钴资源项目",
    projectCopy:
      "根据上海锦源晟新能源材料集团有限公司官网公开信息，安胜相关项目包括刚果（金）绿纱项目、鲁依鲁资源项目及KIK项目。新加坡安胜作为贸易平台，协同相关铜钴产品销售、客户服务、物流与结算安排。",
    projectStats: [
      ["绿纱项目", "含PE4881矿体开发"],
      ["鲁依鲁资源", "铜钴湿法冶炼项目"],
      ["KIK项目", "产品分成模式铜钴项目"],
    ],
    timeline: [
      ["尽调", "矿权、资源量、矿体边界、环境条件、社区关系和合规文件核验。"],
      ["设计", "采矿、选矿、焙烧、湿法冶炼、供水供电和尾矿设施方案评估。"],
      ["建设", "与母公司、项目公司、客户及物流服务方协同订单、质量、交付与结算安排。"],
      ["运营", "围绕阴极铜、粗制氢氧化钴及相关矿产品开展销售、贸易、物流和合规管理。"],
    ],
    copperEyebrow: "Copper Trading",
    copperTitle: "铜产品贸易",
    copperSymbolCopy: "铜是电网、建筑、机械制造、新能源汽车和工业设备的重要基础金属。",
    copperApproachTitle: "我们的贸易方式",
    copperApproachCopy:
      "新加坡安胜围绕刚果（金）相关项目的阴极铜及铜钴相关产品，协同客户开发、合同执行、质量文件、物流安排和结算管理。平台连接项目端供给与国际客户需求，提供稳健、透明的实物金属贸易服务。",
    copperPillars: [
      ["产品", "阴极铜、铜精矿及相关铜钴中间产品，以正式合同和项目文件为准。"],
      ["物流", "根据客户目的地协调陆运、港口、海运、仓储、报关和交付文件。"],
      ["质量", "配合检验、取样、规格确认和单证流转，保障交易执行可核验。"],
      ["风控", "关注价格、信用、汇率、制裁、合规和交付风险，维护交易稳定性。"],
    ],
    capabilityEyebrow: "Capabilities",
    capabilityTitle: "能力体系",
    capabilities: [
      ["贸易与客户服务", "围绕铜钴产品销售、客户需求、交付周期、付款安排和售后沟通，建立稳定的国际贸易服务能力。"],
      ["供应链协同", "连接母公司、项目公司、仓储物流、检验机构和客户，支持绿纱、鲁依鲁、KIK等相关产品从项目端进入国际市场。"],
      ["跨境商务管理", "统筹新加坡、香港、中国内地及非洲当地合作方之间的商务、法律、财务和单证沟通，降低跨区域交易执行摩擦。"],
      ["运营与风险控制", "关注安全、现金成本、供应链、税务、外汇、社区关系和政策变化，为矿业资产建立可持续经营基础。"],
    ],
    responsibilityEyebrow: "Responsibility",
    responsibilityTitle: "责任治理",
    responsibilities: [
      ["安全与环境", "以安全生产、尾矿管理、水资源保护、土地复垦和排放控制作为项目设计与运营的重要边界。"],
      ["社区与本地化", "尊重当地社区、就业与供应链参与机会，推动项目收益与所在地区长期发展相协调。"],
      ["合规与透明", "重视矿权、税务、贸易、反腐败和供应链合规，支持合作方基于正式文件开展尽调。"],
    ],
    contactEyebrow: "Contact",
    contactTitle: "商务合作与资料核验",
    contactCopy:
      "如需了解新加坡安胜有限公司项目资料、工程合作、投资合作或供应链合作，请通过公司授权渠道联系。公司注册资料、项目文件及合作文件应以正式盖章版本为准。",
    formLabels: ["姓名", "邮箱", "合作类型", "留言"],
    formOptions: ["项目资料", "工程合作", "投资合作", "供应链合作"],
    formButton: "发送邮件",
    footerName: "新加坡安胜有限公司",
    footerLegal:
      "© 2026 Singapore Excellen Pte Ltd. Company details and project disclosures are subject to official documents.",
  },
  en: {
    htmlLang: "en",
    title: "Singapore Excellen Pte Ltd | Copper & Cobalt Resource Investment",
    metaDescription:
      "Singapore Excellen Pte Ltd focuses on copper and cobalt resource investment, project development, engineering coordination, and long-term asset value management.",
    nav: ["Company", "Projects", "Copper", "Capabilities", "Responsibility", "Contact"],
    menuLabel: "Open navigation",
    heroEyebrow: "Copper & Cobalt Resource Investment",
    heroTitle: "A long-term mining investment platform for energy-transition metals",
    heroCopy:
      "Singapore Excellen Pte Ltd serves as the international trading platform under Hong Kong Excellen, focusing on cross-border sales and supply-chain coordination for copper, cobalt, and related critical mineral products from DRC-linked projects.",
    heroActions: ["View Projects", "Business Contact"],
    heroPanel: ["Key Metals", "Copper · Cobalt", "Project Focus", "African mining asset development"],
    intro: [
      "Excellen platform begins building critical mineral resources",
      "DRC Green Yarn copper-cobalt hydrometallurgy project enters production",
      "Singapore platform supports international sales of DRC mineral products",
    ],
    aboutEyebrow: "Company",
    aboutTitle: "Company Overview",
    aboutParagraphs: [
      "Singapore Excellen Pte Ltd uses Singapore as an international trading and supply-chain coordination platform. Its parent company is Hong Kong Excellen. The company focuses on copper, cobalt, and other energy-transition metals, supporting product sales, trade settlement, customer coordination, and logistics for related mining projects.",
      "Related resource projects include the DRC Green Yarn project, the Luilu Resources project, and the KIK project. Singapore Excellen is positioned as a trading platform rather than the direct mine operator, helping related products reach international markets.",
    ],
    facts: [
      ["Business Scope", "Mineral product trading, supply-chain coordination, customer service"],
      ["Key Resources", "Copper, cobalt, and related non-ferrous metals"],
      ["Regional Focus", "DRC copper-cobalt resources and international trading platforms"],
      ["Related Projects", "Green Yarn, Luilu Resources, and KIK projects"],
    ],
    projectEyebrow: "Projects",
    projectTitle: "Project Portfolio",
    projectTag: "DRC Copper-Cobalt Portfolio",
    projectHeading: "DRC Copper-Cobalt Resource Projects",
    projectCopy:
      "According to public information from Shanghai Jayson New Energy Materials Group, Excellen-related projects include the DRC Green Yarn project, the Luilu Resources project, and the KIK project. Singapore Excellen works as a trading platform, coordinating sales, customer service, logistics, and settlement arrangements for related copper-cobalt products.",
    projectStats: [
      ["Green Yarn Project", "Includes PE4881 orebody development"],
      ["Luilu Resources", "Copper-cobalt hydrometallurgy project"],
      ["KIK Project", "Copper-cobalt project under a production-sharing model"],
    ],
    timeline: [
      ["Diligence", "Verification of mining rights, resources, orebody boundaries, environmental conditions, community relations, and compliance documents."],
      ["Design", "Assessment of mining, beneficiation, roasting, hydrometallurgy, utilities, and tailings facility plans."],
      ["Build", "Coordinating orders, quality, delivery, and settlement among the parent company, project companies, customers, and logistics providers."],
      ["Operate", "Managing sales, trading, logistics, and compliance for cathode copper, crude cobalt hydroxide, and related mineral products."],
    ],
    copperEyebrow: "Copper Trading",
    copperTitle: "Copper Products",
    copperSymbolCopy:
      "Copper is a foundational metal for power grids, construction, machinery, electric vehicles, and industrial equipment.",
    copperApproachTitle: "Our Trading Approach",
    copperApproachCopy:
      "Singapore Excellen coordinates customer development, contract execution, quality documents, logistics arrangements, and settlement management for cathode copper and related copper-cobalt products from DRC-linked projects. The platform connects project-side supply with international customer demand, providing stable and transparent physical metals trading services.",
    copperPillars: [
      ["Products", "Cathode copper, copper concentrate, and related copper-cobalt intermediate products, subject to formal contracts and project documents."],
      ["Logistics", "Coordinating inland transport, ports, ocean freight, warehousing, customs clearance, and delivery documents according to customer destinations."],
      ["Quality", "Supporting inspection, sampling, specification confirmation, and document circulation to keep transaction execution verifiable."],
      ["Risk Control", "Monitoring price, credit, currency, sanctions, compliance, and delivery risks to maintain transaction stability."],
    ],
    capabilityEyebrow: "Capabilities",
    capabilityTitle: "Capabilities",
    capabilities: [
      ["Trading & Customer Service", "Building reliable international trade service capabilities around copper-cobalt product sales, customer requirements, delivery cycles, payment arrangements, and after-sales communication."],
      ["Supply-Chain Coordination", "Connecting the parent company, project companies, warehousing and logistics providers, inspection agencies, and customers to move products from Green Yarn, Luilu, KIK, and related projects into international markets."],
      ["Cross-Border Business Management", "Coordinating commercial, legal, financial, and documentation workflows among Singapore, Hong Kong, mainland China, and African local partners to reduce transaction friction."],
      ["Operations & Risk Control", "Managing safety, cash costs, supply chains, taxation, foreign exchange, community relations, and policy changes to support sustainable mining operations."],
    ],
    responsibilityEyebrow: "Responsibility",
    responsibilityTitle: "Responsibility",
    responsibilities: [
      ["Safety & Environment", "Treating safe production, tailings management, water protection, land rehabilitation, and emissions control as core project design and operating boundaries."],
      ["Community & Localization", "Respecting local communities, employment, and supply-chain participation while aligning project benefits with long-term regional development."],
      ["Compliance & Transparency", "Emphasizing mining rights, tax, trade, anti-corruption, and supply-chain compliance, and supporting diligence based on formal documents."],
    ],
    contactEyebrow: "Contact",
    contactTitle: "Business Cooperation & Document Verification",
    contactCopy:
      "For project materials, engineering cooperation, investment cooperation, or supply-chain opportunities related to Singapore Excellen Pte Ltd, please contact the company through authorized channels. Registration details, project documents, and cooperation documents should be verified against formally executed versions.",
    formLabels: ["Name", "Email", "Cooperation Type", "Message"],
    formOptions: ["Project Materials", "Engineering Cooperation", "Investment Cooperation", "Supply-Chain Cooperation"],
    formButton: "Send Email",
    footerName: "Singapore Excellen Pte Ltd",
    footerLegal:
      "© 2026 Singapore Excellen Pte Ltd. Company details and project disclosures are subject to official documents.",
  },
};

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function setGroup(selector, values, setter) {
  document.querySelectorAll(selector).forEach((element, index) => {
    if (values[index]) setter(element, values[index], index);
  });
}

function applyLanguage(lang) {
  const text = translations[lang] || translations.zh;
  document.documentElement.lang = text.htmlLang;
  document.title = text.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", text.metaDescription);
  menuToggle.setAttribute("aria-label", text.menuLabel);

  setGroup(".site-nav a", text.nav, (element, value) => {
    element.textContent = value;
  });
  setText(".hero .eyebrow", text.heroEyebrow);
  setText("#hero-title", text.heroTitle);
  setText(".hero-copy", text.heroCopy);
  setGroup(".hero-actions .button", text.heroActions, (element, value) => {
    element.textContent = value;
  });
  setGroup(".hero-panel span, .hero-panel strong", text.heroPanel, (element, value) => {
    element.textContent = value;
  });
  setGroup(".intro-grid p", text.intro, (element, value) => {
    element.textContent = value;
  });

  setText("#about .eyebrow", text.aboutEyebrow);
  setText("#about h2", text.aboutTitle);
  setGroup("#about .lead-block p", text.aboutParagraphs, (element, value) => {
    element.textContent = value;
  });
  setGroup("#about .fact-list div", text.facts, (element, value) => {
    element.querySelector("span").textContent = value[0];
    element.querySelector("strong").textContent = value[1];
  });

  setText("#project .section-heading .eyebrow", text.projectEyebrow);
  setText("#project .section-heading h2", text.projectTitle);
  setText(".project-feature .tag", text.projectTag);
  setText(".project-feature h3", text.projectHeading);
  setText(".project-feature > p:not(.tag)", text.projectCopy);
  setGroup(".project-feature dl div", text.projectStats, (element, value) => {
    element.querySelector("dt").textContent = value[0];
    element.querySelector("dd").textContent = value[1];
  });
  setGroup(".timeline div", text.timeline, (element, value) => {
    element.querySelector("span").textContent = value[0];
    element.querySelector("p").textContent = value[1];
  });

  setText("#copper .eyebrow", text.copperEyebrow);
  setText("#copper h2", text.copperTitle);
  setText(".copper-symbol p", text.copperSymbolCopy);
  setText(".copper-approach h3", text.copperApproachTitle);
  setText(".copper-approach p", text.copperApproachCopy);
  setGroup(".copper-pillars > div", text.copperPillars, (element, value) => {
    element.querySelector("h3").textContent = value[0];
    element.querySelector("p").textContent = value[1];
  });

  setText("#capability .eyebrow", text.capabilityEyebrow);
  setText("#capability h2", text.capabilityTitle);
  setGroup(".capability-grid article", text.capabilities, (element, value) => {
    element.querySelector("h3").textContent = value[0];
    element.querySelector("p").textContent = value[1];
  });

  setText("#responsibility .eyebrow", text.responsibilityEyebrow);
  setText("#responsibility h2", text.responsibilityTitle);
  setGroup(".responsibility-grid div", text.responsibilities, (element, value) => {
    element.querySelector("h3").textContent = value[0];
    element.querySelector("p").textContent = value[1];
  });

  setText("#contact .eyebrow", text.contactEyebrow);
  setText("#contact h2", text.contactTitle);
  setText("#contact > div > p:not(.eyebrow)", text.contactCopy);
  setGroup(".contact-form label", text.formLabels, (element, value) => {
    element.childNodes[0].textContent = `${value}\n            `;
  });
  setGroup(".contact-form option", text.formOptions, (element, value) => {
    element.textContent = value;
  });
  setText(".contact-form button", text.formButton);
  setText(".site-footer strong", text.footerName);
  setText(".site-footer p", text.footerLegal);

  langButtons.forEach((button) => {
    const isActive = button.dataset.langSwitch === lang;
    button.setAttribute("aria-pressed", String(isActive));
  });
  localStorage.setItem("site-language", lang);
}

function syncHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
}

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

menuToggle.addEventListener("click", () => {
  header.classList.toggle("is-open");
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langSwitch);
  });
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
  });
});

applyLanguage(localStorage.getItem("site-language") || "zh");
