const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const langButtons = document.querySelectorAll("[data-lang-switch]");

const translations = {
  zh: {
    htmlLang: "zh-CN",
    title: "新加坡安胜有限公司 | Singapore Excellen Pte Ltd",
    metaDescription:
      "新加坡安胜有限公司专注于铜钴等关键矿产资源投资、项目开发、工程协同与长期价值管理。",
    nav: ["公司概览", "项目布局", "能力体系", "责任治理", "联系"],
    menuLabel: "打开导航",
    heroEyebrow: "Copper & Cobalt Resource Investment",
    heroTitle: "面向能源转型金属的长期矿业投资平台",
    heroCopy:
      "新加坡安胜有限公司聚焦铜、钴等关键矿产资源，通过项目投资、工程设计协同与运营管理能力，参与新能源电池关键矿产一体化产业链建设。",
    heroActions: ["查看项目布局", "商务联系"],
    heroPanel: ["重点矿种", "铜 · 钴", "项目方向", "非洲矿业资产开发"],
    intro: [
      "安胜平台开始布局关键矿产资源",
      "刚果（金）绿纱铜钴湿法冶炼项目投产",
      "PE4881矿体开发选矿厂项目开工",
    ],
    aboutEyebrow: "Company",
    aboutTitle: "公司概览",
    aboutParagraphs: [
      "新加坡安胜有限公司以新加坡为国际投资与贸易协同平台，关注铜、钴等能源转型相关金属的长期价值。公司围绕矿业资产投资、技术方案评估、项目建设组织和运营治理，建立面向跨境矿业项目的投资管理能力。",
      "在项目推进中，公司重视与工程设计机构、地质技术团队、当地合作伙伴及金融机构的协作，以审慎尽调、分阶段开发和透明沟通作为项目管理原则。",
    ],
    facts: [
      ["业务领域", "矿业投资、资源开发、国际贸易协同"],
      ["重点资源", "铜、钴及相关有色金属"],
      ["区域关注", "刚果（金）铜钴资源及国际贸易平台"],
      ["公开项目", "安胜绿纱、PE4881、KIK铜钴项目"],
    ],
    projectEyebrow: "Projects",
    projectTitle: "项目布局",
    projectTag: "DRC Copper-Cobalt Portfolio",
    projectHeading: "刚果（金）铜钴资源项目",
    projectCopy:
      "根据上海锦源晟新能源材料集团有限公司官网公开信息，安胜相关项目包括刚果（金）绿纱项目、PE4881自有矿山开发及KIK铜钴项目，覆盖铜钴湿法冶炼、矿体开发、选矿厂建设和社区协同发展。",
    projectStats: [
      ["绿纱项目", "2020年7月投产"],
      ["PE4881", "2025年5月开工"],
      ["KIK项目", "产品分成模式铜钴项目"],
    ],
    timeline: [
      ["尽调", "矿权、资源量、矿体边界、环境条件、社区关系和合规文件核验。"],
      ["设计", "采矿、选矿、焙烧、湿法冶炼、供水供电和尾矿设施方案评估。"],
      ["建设", "分阶段工程管理、施工图设计、设备采购、承包商组织和质量控制。"],
      ["运营", "阴极铜、粗制氢氧化钴、硫酸及相关矿产品的生产、成本和合规管理。"],
    ],
    capabilityEyebrow: "Capabilities",
    capabilityTitle: "能力体系",
    capabilities: [
      ["资源与投资评估", "围绕铜钴矿权、资源量、品位、采选冶条件、资本开支和回收周期，建立审慎的项目筛选与投资判断框架。"],
      ["工程与建设协同", "连接矿山设计、选冶工艺、基础设施、设备供应和现场建设管理，支持绿纱、PE4881、KIK等项目从方案走向可执行计划。"],
      ["跨境项目管理", "统筹新加坡、中国内地、非洲当地合作方之间的商务、法律、财务和技术沟通，降低跨区域项目执行摩擦。"],
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
    nav: ["Company", "Projects", "Capabilities", "Responsibility", "Contact"],
    menuLabel: "Open navigation",
    heroEyebrow: "Copper & Cobalt Resource Investment",
    heroTitle: "A long-term mining investment platform for energy-transition metals",
    heroCopy:
      "Singapore Excellen Pte Ltd focuses on strategic copper and cobalt resources, participating in the integrated value chain for critical battery minerals through project investment, engineering coordination, and operating management capabilities.",
    heroActions: ["View Projects", "Business Contact"],
    heroPanel: ["Key Metals", "Copper · Cobalt", "Project Focus", "African mining asset development"],
    intro: [
      "Excellen platform begins building critical mineral resources",
      "DRC Green Yarn copper-cobalt hydrometallurgy project enters production",
      "PE4881 orebody development concentrator project commences",
    ],
    aboutEyebrow: "Company",
    aboutTitle: "Company Overview",
    aboutParagraphs: [
      "Singapore Excellen Pte Ltd uses Singapore as an international investment and trading platform, focusing on the long-term value of copper, cobalt, and other energy-transition metals. The company builds cross-border mining investment capabilities across asset investment, technical evaluation, project organization, and operating governance.",
      "In project execution, the company values collaboration with engineering design institutions, geological and technical teams, local partners, and financial institutions, using disciplined due diligence, phased development, and transparent communication as project management principles.",
    ],
    facts: [
      ["Business Scope", "Mining investment, resource development, international trade coordination"],
      ["Key Resources", "Copper, cobalt, and related non-ferrous metals"],
      ["Regional Focus", "DRC copper-cobalt resources and international trading platforms"],
      ["Public Projects", "Excellen Green Yarn, PE4881, and KIK copper-cobalt projects"],
    ],
    projectEyebrow: "Projects",
    projectTitle: "Project Portfolio",
    projectTag: "DRC Copper-Cobalt Portfolio",
    projectHeading: "DRC Copper-Cobalt Resource Projects",
    projectCopy:
      "According to public information from Shanghai Jayson New Energy Materials Group, Excellen-related projects include the DRC Green Yarn project, the PE4881 self-owned mine development, and the KIK copper-cobalt project, covering copper-cobalt hydrometallurgy, orebody development, concentrator construction, and community coordination.",
    projectStats: [
      ["Green Yarn Project", "Commissioned in July 2020"],
      ["PE4881", "Construction started in May 2025"],
      ["KIK Project", "Copper-cobalt project under a production-sharing model"],
    ],
    timeline: [
      ["Diligence", "Verification of mining rights, resources, orebody boundaries, environmental conditions, community relations, and compliance documents."],
      ["Design", "Assessment of mining, beneficiation, roasting, hydrometallurgy, utilities, and tailings facility plans."],
      ["Build", "Phased engineering management, construction drawings, equipment procurement, contractor organization, and quality control."],
      ["Operate", "Production, cost, and compliance management for cathode copper, crude cobalt hydroxide, sulfuric acid, and related mineral products."],
    ],
    capabilityEyebrow: "Capabilities",
    capabilityTitle: "Capabilities",
    capabilities: [
      ["Resource & Investment Evaluation", "Disciplined project screening and investment assessment across copper-cobalt rights, resources, grades, mining and processing conditions, capital expenditure, and payback cycles."],
      ["Engineering & Construction Coordination", "Connecting mine design, processing technology, infrastructure, equipment supply, and site construction management to move Green Yarn, PE4881, KIK, and related projects from plan to execution."],
      ["Cross-Border Project Management", "Coordinating commercial, legal, financial, and technical communication among Singapore, mainland China, and African local partners to reduce execution friction."],
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
