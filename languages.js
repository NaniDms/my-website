async function loadLanguage(lang) {
    const response = await fetch(`languages/${lang}.json`);
    const data = await response.json();

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");

        if (data[key]) {
            element.textContent = data[key];
        }
    });

    localStorage.setItem("language", lang);
}

const language = document.getElementById("language");

if (language) {
    language.addEventListener("change", function () {
        loadLanguage(this.value);
    });
}

const savedLang = localStorage.getItem("language") || "en";

if (language) {
    language.value = savedLang;
}

loadLanguage(savedLang);