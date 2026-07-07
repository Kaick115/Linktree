json= {"frase": "Carinhar ",
"link":"https://sl.bing.net/dDiG1hDIcdE"};


link1= document.getElementById("link1");
link1.innerText= json.frase;
link1.setAttribute("ref", json.link);

link1.addEventListener("click", function(){
    window.location = link1.getAttribute("ref");


});
json2 = {
    "frase": "Dar racao",
    "link": "https://www.whiskas.com.br/"
};

link2 = document.getElementById("link2");
link2.innerText = json2.frase;
link2.setAttribute("ref", json2.link);

link2.addEventListener("click", function() {
    window.location = link2.getAttribute("ref");
});


json3 = {
    "frase": "Dar agua",
    "link": "https://sl.bing.net/bMMiHmoFFdI"
};

link3 = document.getElementById("link3");
link3.innerText = json3.frase;
link3.setAttribute("ref", json3.link);

link3.addEventListener("click", function() {
    window.location = link3.getAttribute("ref");
});

json4 = {
    "frase": "Dar banho",
    "link": "https://sl.bing.net/h64tLvWnpqS"
};

link4 = document.getElementById("link4");
link4.innerText = json4.frase;
link4.setAttribute("ref", json4.link);

link4.addEventListener("click", function() {
    window.location = link4.getAttribute("ref");
});
