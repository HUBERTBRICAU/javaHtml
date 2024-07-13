let paragraphe= document.getElementById("paragraphe");
let image =document.getElementById("image");
let srcImage = image.getAttribute('src');
let etat = false;

// function modif(){

//   document.getElementById("leVillage").innerHTML = "toto";
// }

function maLangue() {
  if(etat==false){
  etat=true;
  srcImage="images/drapeau-france.png";
  document.getElementById("image").setAttribute("src", srcImage); 
  document.getElementById("image").style.width="50px"; 
  document.getElementById("leVillage").innerHTML = "Het dorp";
  document.getElementById("leChalet").innerHTML = "Het huisje";
  }
  else{
  etat=false;
  srcImage="images/drapeau-pays-bas.png";
  document.getElementById("image").setAttribute("src", srcImage); 
  document.getElementById("image").style.width="50px"; 
  srcImage="images/esp32.png" ;
  document.getElementById("leVillage").innerHTML = "Le village";
  document.getElementById("leChalet").innerHTML = "Le chalet";
  }
}