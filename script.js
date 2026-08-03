const languageSelect=document.getElementById("language");

languageSelect.addEventListener("change",()=>{

loadLanguage(languageSelect.value);

localStorage.setItem("language",languageSelect.value);

});

window.onload=()=>{

let savedLanguage=localStorage.getItem("language") || "en";

languageSelect.value=savedLanguage;

loadLanguage(savedLanguage);

}

function loadLanguage(language){

fetch("languages/"+language+".json")

.then(response=>response.json())

.then(data=>{

document.getElementById("title").innerHTML=data.title;

document.getElementById("description").innerHTML=data.description;

document.getElementById("home").innerHTML=data.home;

document.getElementById("about").innerHTML=data.about;

document.getElementById("contact").innerHTML=data.contact;

});

}