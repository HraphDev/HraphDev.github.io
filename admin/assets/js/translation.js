const translations = {
  en: {
    home: "Home",
    consoles: "Consoles",
    games: "Games",
    computers: "Computers",
    phones: "Phones",
    televisions: "Televisions",
    users: "Users",
    search_placeholder: "Search for products...",
    quantityAvailable: "Quantity Available",
    language: "Language",
    featured_products: "Featured Products",
    superAdmin: "SuperAdmin",
    developer: "Developer",
    admin: "Admin",
    clients: "Clients",
    team: "Team",
    contact: "Contact",
    category: "Category",
    in_stock: "In Stock",
    out_of_stock: "Out Of Stock",
    detail: "Detail",
    addConsoles: "Add Consoles",
    addComputers: "Add Computers",
    addPhones: "Add Phones",
    addGames: "Add Games"
  },
  ar: {
    home: "الصفحة الرئيسية",
    consoles: "أجهزة الألعاب",
    games: "ألعاب",
    computers: "أجهزة الكمبيوتر",
    phones: "هواتف",
    televisions: "تلفزيونات",
    users: "المستخدمين",
    search_placeholder: "ابحث عن المنتجات...",
    quantityAvailable: "الكمية المتاحة",
    language: "اللغة",
    featured_products: "المنتجات المميزة",
    superAdmin: "مدير النظام",
    developer: "المطور",
    admin: "المشرف",
    clients: "العملاء",
    team: "الفريق",
    contact: "اتصل",
    category: "الفئة",
    in_stock: "متوفر",
    out_of_stock: "غير متوفر",
    detail: "التفاصيل",
    addConsoles: "إضافة أجهزة الألعاب",
    addComputers: "إضافة أجهزة الكمبيوتر",
    addPhones: "إضافة الهواتف",
    addGames: "إضافة الألعاب"
  },
  fr: {
    home: "Accueil",
    consoles: "Consoles",
    games: "Jeux",
    computers: "Ordinateurs",
    phones: "Téléphones",
    televisions: "Télévisions",
    users: "Utilisateurs",
    search_placeholder: "Rechercher des produits...",
    quantityAvailable: "Quantité disponible",
    language: "Langue",
    featured_products: "Produits en vedette",
    superAdmin: "Super Administrateur",
    developer: "Développeur",
    admin: "Administrateur",
    clients: "Clients",
    team: "Équipe",
    contact: "Contact",
    category: "Catégorie",
    in_stock: "En stock",
    out_of_stock: "En rupture de stock",
    detail: "Détail",
    addConsoles: "Ajouter des consoles",
    addComputers: "Ajouter des ordinateurs",
    addPhones: "Ajouter des téléphones",
    addGames: "Ajouter des jeux"
  }
};

function translatePage(language) {
  // Check if the language is supported
  if (!translations[language]) return;

  // Update text content for elements with data-translate-key attributes
  document.querySelectorAll("[data-translate-key]").forEach((element) => {
    const key = element.getAttribute("data-translate-key");
    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  // Update placeholders for elements with data-translate-placeholder attributes
  document.querySelectorAll("[data-translate-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-translate-placeholder");
    if (translations[language][key]) {
      element.setAttribute("placeholder", translations[language][key]);
    }
  });
}

function setLanguage(language) {
  localStorage.setItem("language", language);
  translatePage(language);
}

// Check and apply language preference when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("language") || "en"; // Default to English
  translatePage(savedLanguage);
});
