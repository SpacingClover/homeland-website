function getMeta(metaName) {
  const metas = document.getElementsByTagName('meta');

  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('name') === metaName) {
      return metas[i].getAttribute('content');
    }
  }

  return '';
}

function isATagCurrentPage(atagPageName){ //return bool
  console.log(getMeta("page_name"));
  return getMeta("page_name").toLowerCase() == atagPageName.toLowerCase();
}

function eachLetterSpan(element,string){
  for(let i=0;i<string.length;i++){
    if(string[i] == " "){
      let p = document.createElement('p');
      p.style.display = "inline";
      p.innerHTML = " ";
      element.appendChild(p);
    }else{
      let letter = document.createElement('span');
      letter.innerHTML = string[i];
      letter.className = "letter-anim";
      letter.style.setProperty("--i",String(i));
      element.appendChild(letter);
    }
  }
}

function populateNavbar(){
  const navbar = document.getElementById('navbar');
  const pageNames = ["index","Gameplay","Download","Playtesting","Press Kit","Contact"];

  for(let i=0;i<pageNames.length;i++){

    let atag = document.createElement('a');
    if(isATagCurrentPage(pageNames[i])){
      atag.className = "navbaritem";
    }else{
      atag.className = "navbaritem navbaritem-unfocused";
      atag.href = pageNames[i].toLowerCase() + ".html";
    }

    eachLetterSpan(atag,pageNames[i] === "index" ? "Home" : pageNames[i]);
    navbar.appendChild(atag);

  }
}

function initializeTitleLetters(){
  let letterimages = document.getElementsByClassName('titleletter');
  for(let i=0;i<letterimages.length;i++){
    letterimages[i].style.setProperty("--i",String(i));
    letterimages[i].setAttribute("draggable",false);
  }
}

const canvas = document.getElementById("canvas");

function configureCanvas(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.width = String(window.innerWidth);
  canvas.style.height = String(window.innerHeight);
}

function drawSquare(x,y,rotation){
  const ctx = canvas.getContext("2d");
  ctx.rotate(rotation);
  ctx.fillStyle = "blue";
  ctx.fillRect(x,y,10,10);
  ctx.stroke();
}

function drawBackground(){
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(let i=0;i<100;i++){
    drawSquare(Math.random()*window.innerWidth,Math.random()*window.innerHeight,Math.random()*360);
  }
}

//initialization
populateNavbar();
initializeTitleLetters();
//configureCanvas();
//drawBackground();

addEventListener("scroll",(event) => { // use this function to trigger dynamic backgrounds at different scroll levels
  let scrollY = Number(window.scrollY);
  let maxY = Number(window.scrollMaxY);
  let color = scrollY > maxY/2 ? "green" : "blue";
  //document.body.style.backgroundColor = color;
});

//setInterval(drawBackground,1);
