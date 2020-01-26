
/*!
 * optmus v1.0.0 (https://erman.herokuapp.com)
 * Copyright 2019-2020 Ernesto Argentina
 * Licensed under MIT (https://github.com/ErnestoArgentina/optmus/LICENSE)
 */




// ==========optmus panel=============

function optmusPanel(panel){
	var painel = document.querySelector(".optmus .optmus-container");
	if (panel == 1) {
		painel.style.height='200%';
		painel.style.width='200%';
		painel.style.top='-100%';
		painel.style.left='0%';
	}
	if (panel == 2) {
		painel.style.height='400%';
		painel.style.width='400%';
		painel.style.top='0%';
		painel.style.left='0%';
	}
	if (panel == 3) {
		painel.style.height='400%';
		painel.style.width='400%';
		painel.style.top='-100%';
		painel.style.left='-200%';
	}
	if (panel == 4) {
		painel.style.height='800%';
		painel.style.width='800%';
		painel.style.top='-400%';
		painel.style.left='-600%';
	}
	if (panel == 5) {
		painel.style.height='800%';
		painel.style.width='800%';
		painel.style.top='-500%';
		painel.style.left='-700%';
	}
	if (panel == 6) {
		painel.style.height='400%';
		painel.style.width='400%';
		painel.style.top='-300%';
		painel.style.left='-300%';
	}
	if (panel == 7) {
		painel.style.height='800%';
		painel.style.width='800%';
		painel.style.top='0%';
		painel.style.left='-700%';
	}
}


// ====================================
// =========optmus image===============
// ====================================


///optmus image
var optmusImages = document.querySelectorAll(".optmus-image");
var domOptmusImage = '';

/*
* leva a imagem dentro da div optmus-image colar/adicionar dentro das divs parte
* de seguida adiciona todas divs parte a div optmus-image
*/
for (var j = 0; j < optmusImages.length; j++) {
  let image = optmusImages[j].innerHTML;
  domOptmusImage = '';
  domOptmusImage += image;
  for (var i = 1; i <= 7; i++) {
    domOptmusImage += "<div class='parte'>"+image+"</div>";
  }
  optmusImages[j].innerHTML = domOptmusImage;
}

var optmusImages_p = document.querySelectorAll(".optmus-image .parte img"); //array de imagens ...
for (var j = 0; j < optmusImages_p.length; j++) {
  optmusImages_p[j].style.opacity="1";
}


// ==============title==============
// ao clicar no menu o titulo muda de acordo com o testo na acncora <a>
try{
  var siteName = document.querySelector('title').innerHTML;
  if(siteName == ' ' || siteName == ''){
  	siteName = "Optmus Site (by Ernesto Argentina) [ Add a title for your website]";
  	console.log('Add a title for your website');
  }
}catch(e){
  var siteName = "Optmus Site (by Ernesto Argentina) [ Add a title for your website]";
  console.log('Add a title for your website');
}
const navList = document.querySelector('.optmus-options');

navList.addEventListener('click', function(e){
   if(e.target.tagName == 'A'){
     try{
       document.querySelector('title').innerHTML = e.target.innerHTML+" - "+siteName;
     }
     catch(c){
       console.log("optmus title report: Add a title for your website")
       document.querySelector('head').innerHTML += "<title>" + e.target.innerHTML+" - "+siteName + "</title>";
     }
   }
 });


// ====================================
// ===========// nav left==============
// ====================================
var navLf = 0;

function optmusNavLf(){
	var nav = document.querySelector('.optmus');
	var nav_lf = document.querySelector('.optmus-nav-lf');
	if(navLf == 0){
		navLf = 1;
		nav.style.left="200px";
		// nav.style.transform = "rotateY(330deg) rotateX(0) scale(.7)";
		nav.style.transform = "rotateY(-30deg) rotateX(0) scale(.7)";
		nav_lf.style.left = "0";
		nav_lf.style.borderBottomRightRadius = "0px";
		nav_lf.style.borderTopRightRadius = "0px";
	}else{
		navLf = 0;
		nav.style.left="0px";
		// nav.style.transform = "rotateY(360deg) rotateX(0) scale(1)";
		nav.style.transform = "rotateY(0deg) rotateX(0) scale(1)";
		nav_lf.style.left = "-200px";
		nav_lf.style.borderBottomRightRadius = "90%";
		nav_lf.style.borderTopRightRadius = "90%";
	}
	// alert(navLf)

}