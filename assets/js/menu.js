var str="";
var archives=16;
var T01="RÉVEIL";
var T02="JUGEMENT";
var T03="ESCALADE";
var T04="CONVICTION";
var T05="DÉCHAÎNÉ";
var T06="DIVERGENCE";
var T07="ABANDONNÉ";
var T08="LIBÉRATION";
var T09="CRESCENDO";
var T10="SAW";
var T11="DÉVOTION";
var T12="DISCORDANCE";
var T13="MALVEILLANCE";
var T14="TRAHISON";
var T15="ASCENSION";
var T16="EXISTENCE";
var nom=unescape(location.pathname);
var nom=nom.replace(/\/$/,"");
var nom=nom.replace(".html","");
var nom=nom.substring(nom.lastIndexOf("/")+1);
// Sélection de la div "levels"
const levelsDiv = document.querySelector('.levels');

// Sélection de tous les éléments "span" dans la div "levels"
const spans = levelsDiv.querySelectorAll('span');

// Boucle à travers chaque élément et affectation d'un ID séquentiel
for (let i = 0; i < spans.length; i++) {
  const id = `N${(i+1).toString().padStart(2, '0')}`;
  spans[i].setAttribute('id', id);
}
$("#N01").hide();
$("#N02").hide();
$("#N03").hide();
$("#N04").hide();

// Sélection de tous les éléments de la classe "level"
const levels = document.querySelectorAll('.level');

// Boucle à travers chaque élément et affectation d'un ID séquentiel
for (let i = 0; i < levels.length; i++) {
  const id = `LN${(i+1).toString().padStart(2, '0')}`;
  levels[i].setAttribute('id', id);
}
if(nom=="index"||nom=="roadmap-dbd")
{
var nom=archives;
}
else
{
let imgElements = document.querySelectorAll(".rewards img");
for (let i = 0; i < imgElements.length; i++) {
  let imgSrc = imgElements[i].getAttribute("src");
  if (imgSrc === "dbdassets/icons/riftfragments.png") {
    imgElements[i].style.display = "none";
    let textNode = imgElements[i].nextSibling;
    while (textNode.nodeType != 3) {
      textNode = textNode.nextSibling;
    }
    textNode.nodeValue = "";
  }
}
}
for(var i=1;i<=archives;i++)
{
if(i<10)
{
i="0"+i;
}
str=str+"<a ";
if(i==nom)
{
str=str+"class=\"active\" ";
}
str=str+"href=\"";
if(i<archives)
{
str=str+i+".html\">"+i+"-"+this["T" + i]+"</a>";
}
else
{
str=str+"index.html\">"+i+"-"+this["T" + i]+"</a>";
}
}
document.getElementById("name").innerHTML = "TOME "+nom+" - "+this["T" + nom];
document.getElementById("menu").innerHTML = str;

if(nom==archives)
{
var N01=1690383600;
var N01=new Date(N01*1000);
var N02=new Date(N01.getTime()+1000*60*60*24*7*2);
var N03=new Date(N02.getTime()+1000*60*60*24*7*2);
var N04=new Date(N03.getTime()+1000*60*60*24*7*3);
var CN01=document.getElementById("N01");
var CN02=document.getElementById("N02");
var CN03=document.getElementById("N03");
var CN04=document.getElementById("N04");
var LN01=document.getElementById("LN01");
var LN02=document.getElementById("LN02");
var LN03=document.getElementById("LN03");
var LN04=document.getElementById("LN04");
if(N01<new Date())
{
$("#N01").show();
CN01.classList.add("active");
LN01.classList.add("show");
}
if(N02<new Date())
{
$("#N02").show();
CN01.classList.remove("active");
LN01.classList.remove("show");
CN02.classList.add("active");
LN02.classList.add("show");
}
if(N03<new Date())
{
$("#N03").show();
CN02.classList.remove("active");
LN02.classList.remove("show");
CN03.classList.add("active");
LN03.classList.add("show");
}
if(N04<new Date())
{
$("#N04").show();
CN03.classList.remove("active");
LN03.classList.remove("show");
CN04.classList.add("active");
LN04.classList.add("show");
}
}
else
{
$("#N01").show();
$("#N02").show();
$("#N03").show();
$("#N04").show();
var CN04=document.getElementById("N04");
var LN04=document.getElementById("LN04");
CN04.classList.add("active");
if(LN04!=null)
{
LN04.classList.add("show");
}
}

const lines = document.querySelectorAll('line');
const nodes = document.querySelectorAll('.node');
/*lines.forEach((line) => {
  line.addEventListener("click", () => {
    if (line.classList.contains("lblue")) {
      line.classList.remove("lblue");
      line.classList.add("lblack");
    } else if (line.classList.contains("lblack")) {
      line.classList.remove("lblack");
    } else {
      line.classList.add("lblue");
    }
  });
});
nodes.forEach((node) => {
  node.addEventListener("click", (event) => {
    if (node.classList.contains("bblue")) {
      node.classList.remove("bblue");
    } else {
      node.classList.add("bblue");
    }
  });
});*/
// Fonction pour mettre à jour les totaux de bloodpoints
function updateResult(activeSpan) {
  // Vérifier si un span actif a été trouvé
  if (activeSpan) {
    // Récupérer l'index du span actif
    const activeIndex = Array.from(levelSpans).indexOf(activeSpan);

    // Afficher le niveau correspondant au span actif et ajouter la classe "active" au span correspondant
    const levelToShow = document.querySelector(`.level:nth-child(${activeIndex + 1})`);
    levelToShow.classList.add('show');
    activeSpan.classList.add('active');

    // Sélectionner les éléments "node" dans le niveau actif
    const nodes = levelToShow.querySelectorAll('.node');
    
    // Initialisation des variables pour stocker les total de bloodpoints des nodes bleues et rouges
    let blueBloodpoints = 0;
    let redBloodpoints = 0;
    let totalBloodpoints = 0;

    // Parcourir chaque élément pour récupérer le nombre de bloodpoints
    nodes.forEach(node => {
      // Vérifier si l'élément est une node bleue ou rouge
      if (node.classList.contains('bblue')) {
        // Si c'est une node bleue, ajouter le nombre de bloodpoints à la variable correspondante
        const bloodpointsElement = node.querySelector('.rewards img[src="dbdassets/icons/bloodpoints.png"]');
        const bloodpoints = parseInt(bloodpointsElement?.nextSibling?.textContent);
        if (!isNaN(bloodpoints)) {
          blueBloodpoints += bloodpoints;
        }
      } else {
        // Si c'est une node rouge, ajouter le nombre de bloodpoints à la variable correspondante
        const bloodpointsElement = node.querySelector('.rewards img[src="dbdassets/icons/bloodpoints.png"]');
        const bloodpoints = parseInt(bloodpointsElement?.nextSibling?.textContent);
        if (!isNaN(bloodpoints)) {
          redBloodpoints += bloodpoints;
        }
      }
    });
blueBloodpoints = blueBloodpoints / 1000;
redBloodpoints = redBloodpoints / 1000;
totalBloodpoints = blueBloodpoints + redBloodpoints;
    // Mettre à jour le contenu de la div "result"
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<span style="background:blue">A valider (${blueBloodpoints.toLocaleString()}K BP)</span> <span style="background:red">A conserver (${redBloodpoints.toLocaleString()}K BP)</span> <span style="background:green">Total (${totalBloodpoints.toLocaleString()}K BP)</span> `;
  }
}
// Récupérer tous les spans de la div "levels"
const levelSpans = document.querySelectorAll('.levels span');

// Ajouter un gestionnaire d'événement pour les clics sur les spans
levelSpans.forEach((span, index) => {
  span.addEventListener('click', () => {
  // Cacher tous les niveaux et retirer la classe "active" de tous les spans
  document.querySelectorAll('.level').forEach(level => {
    if (level.classList.contains('show')) {
      level.classList.remove('show');
    }
  });
  levelSpans.forEach(span => span.classList.remove('active'));

  // Afficher le niveau correspondant à l'index et ajouter la classe "active" au span correspondant
  const levelToShow = document.querySelector(`.level:nth-child(${index + 1})`);
  if (!levelToShow.classList.contains('show')) {
    levelToShow.classList.add('show');
  }
  levelSpans[index].classList.add('active');
    // Sélectionner les éléments "node" dans le niveau actif
    const nodes = levelToShow.querySelectorAll('.node');
    
    // Initialisation des variables pour stocker les total de bloodpoints des nodes bleues et rouges
    let blueBloodpoints = 0;
    let redBloodpoints = 0;
    let totalBloodpoints = 0;

    // Parcourir chaque élément pour récupérer le nombre de bloodpoints
    nodes.forEach(node => {
      // Vérifier si l'élément est une node bleue ou rouge
      if (node.classList.contains('bblue')) {
        // Si c'est une node bleue, ajouter le nombre de bloodpoints à la variable correspondante
        const bloodpointsElement = node.querySelector('.rewards img[src="dbdassets/icons/bloodpoints.png"]');
        const bloodpoints = parseInt(bloodpointsElement?.nextSibling?.textContent);
        if (!isNaN(bloodpoints)) {
          blueBloodpoints += bloodpoints;
        }
      } else {
        // Si c'est une node rouge, ajouter le nombre de bloodpoints à la variable correspondante
        const bloodpointsElement = node.querySelector('.rewards img[src="dbdassets/icons/bloodpoints.png"]');
        const bloodpoints = parseInt(bloodpointsElement?.nextSibling?.textContent);
        if (!isNaN(bloodpoints)) {
          redBloodpoints += bloodpoints;
        }
      }
    });
blueBloodpoints = blueBloodpoints / 1000;
redBloodpoints = redBloodpoints / 1000;
totalBloodpoints = blueBloodpoints + redBloodpoints;
    // Mettre à jour le contenu de la div "result"
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<span style="background:blue">A valider (${blueBloodpoints.toLocaleString()}K BP)</span> <span style="background:red">A conserver (${redBloodpoints.toLocaleString()}K BP)</span> <span style="background:green">Total (${totalBloodpoints.toLocaleString()}K BP)</span> `;
    });
  });

// Sélectionnez le span actif
const activeSpan = document.querySelector('.levels span.active');

// Initialiser le premier span de la div "levels" comme "active" lors du premier chargement de la page
if (!activeSpan) {
// Sélection de tous les éléments de la classe "level"
const levels = document.querySelectorAll('.level');

// Boucle à travers chaque élément et affectation d'un ID séquentiel
for (let i = 0; i < levels.length; i++) {
  levels[i].classList.remove("show");
}
updateResult(levelSpans[3]);
}

// Appelez la fonction pour mettre à jour le contenu de la div result
updateResult(activeSpan);
