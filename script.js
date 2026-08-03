const translations = {
    en: {
        title: "Welcome",
        description: "This is my website.",
        button: "medicine"
    },

    te: {
        title: "స్వాగతం",
        description: "ఇది నా వెబ్‌సైట్.",
        button: "మందు"
    }
};

const languageSelector = document.getElementById("language");

languageSelector.addEventListener("change", function () {
    const lang = this.value;

    document.querySelectorAll("[data-key]").forEach(element => {
        const key = element.getAttribute("data-key");
        element.textContent = translations[lang][key];
    });

    localStorage.setItem("language", lang);
});

// Page Refresh అయినా Language అలాగే ఉండాలి
const savedLang = localStorage.getItem("language") || "en";
languageSelector.value = savedLang;

document.querySelectorAll("[data-key]").forEach(element => {
    const key = element.getAttribute("data-key");
    element.textContent = translations[savedLang][key];
});