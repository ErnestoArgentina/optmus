
/*!
 * optmus v1.0.0 (https://erman.herokuapp.com.com)
 * Copyright 2018 Ernesto Argentina
 * Licensed under MIT (https://github.com/ErnestoArgentina/optmus/LICENSE)
 */


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
* leva a imagem dentro da div optmus-image colar adicionar dentro da div parte
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

var optmusImages_p = document.querySelectorAll(".optmus-image .parte img"); //arrat de imagens ...
for (var j = 0; j < optmusImages_p.length; j++) {
  optmusImages_p[j].style.opacity="1";
}
