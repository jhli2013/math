function openPage(pageName) {
    var i;
    var x = document.getElementsByClassName("page");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    document.getElementById(pageName).style.display = "block";  
}

function openAbstract(pubNo) {
    var x = document.getElementById("pub" + pubNo);
    if (x.style.display == "none") {
       x.style.display = "block";  
    }
    else {
       x.style.display = "none";
    }
}

function openTeaching(teachingName) {
    var x = document.getElementById("teaching-" + teachingName);
    if (x.style.display == "none") {
       x.style.display = "block";  
    }
    else {
       x.style.display = "none";
    }
}

var title_processus = [
		    "Rappels des notions des convergences et propriétés des espérances conditionnelles",
		    "Martingales et temps d’arrêt",
		    "Applications du théorème d’arrêt de Doob",
		    "Convergences des martingales",
		    "Intégrabilité uniforme et convergences des martingales ($\\mathbb{L}^1$ , $\\mathbb{L}^p$ et p.s.)",
		    "Applications des martingales",
		    "Marches aléatoires et réseaux électriques",
		    "Chaînes de Markov 1",
		    "Chaînes de Markov 2",
		    "Chaînes de Markov 3 : couplage, variation totale et temps de mélange",
		    "Chaînes de Markov 4 : couplage par le passé",
]
var title_complexe = [
		    "Nombres complexes",
		    "Équations de Cauchy-Riemann",
		    "Séries entières 1",
		    "Séries entières 2",
		    "Intégration le long de chemins",
		    "Petite révision",
		    "Théorème de Cauchy et ses applications",
		    "Principe du maximum et ses applications",
		    "Petite révision et prolongement analytique",
		    "Singularités et développements de Laurent",
		    "Théorème de l'argument et singularités",
		    "Formule des résidus",
		    "Applications du théorème des résidus",
		    "Révisions",
		    "Séries de Fourier 1",
		    "Séries de Fourier 2",
		    "Convolution et approximation de l'unité",
		    "Différentes notions de convergence et polynômes d'Hermite",
		    "Bon noyau",
		    "Convergence et l'identité de Parseval",
		    "Séparation de variables",
		    "Transformée de Fourier",
		    "Espace de Schwartz",
		    "Principe d'incertitude et noyau de Poisson",
		    "Echantillonnage et formule sommatoire de Poisson",
		    "Transformée de Laplace",
]

function series(id, titles) {
    var s = "";
    var x = document.getElementById("series-" + id);
    if (x.style.display == "block") {
        x.style.display = "none";
    }
    else {
        for (var key in titles) {
            i = key*1 + 1;
            s += "<a href=\"teaching/" + id + "/serie" + i + ".pdf\"><i class=\"material-icons-outlined w3-large\">picture_as_pdf</i></a> " + "Série " + i + " : " + titles[key] + "<br>";
        }
// Série 1 : Rappels des notions des convergences et propriétés des espérances conditionnelles <a href="teaching/processus/serie1.pdf"><i class="material-icons">picture_as_pdf</i></a><br>
        x.innerHTML = s;
        x.style.display = "block";
    }
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
}

