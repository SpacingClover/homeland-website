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
    atag.className = "navbaritem";
    atag.href = pageNames[i].toLowerCase() + ".html";
    eachLetterSpan(atag,pageNames[i] === "index" ? "Home" : pageNames[i]);
    navbar.appendChild(atag);

  }
}
populateNavbar();
