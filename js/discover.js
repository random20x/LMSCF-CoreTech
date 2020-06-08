var pics = JSON.parse(RSpic);

for (i=0; i < pics.length ; i++){
	var img = `
	        		<img class="discovPics" id="discoPic${i}" src="../img/activitiesANDdiscover/resized for discover/${pics[i].fileName}" alt="Bali Picture" title="${pics[i].title}">
	`;
	document.getElementById("mainDIVdisco").innerHTML += img;
}






