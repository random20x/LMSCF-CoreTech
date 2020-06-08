var dreamTeam = JSON.parse(teamInfos);
for (i=0; i < dreamTeam.length ; i++){
	var img = `
	        	<img class="indexPics" id="indexPic${i}" src="../img/team/${dreamTeam[i].img}" alt="Dream Team Member" title="click on ${dreamTeam[i].firstName}" onclick="showTeamBIG()">

	        	<div class="teamBIG" id="bigDIVmember${i}">
	        		<div id="cross">
        				<button class="crossButton" id="crossButton${i}">❌</button>
        			</div>
	        		<div class="teamBIGimgDIV">
						<a href= "mailto:${dreamTeam[i].email}">
	        			<img  src="../img/team/${dreamTeam[i].imgBig}" alt="member" title="click me to @ me!">
	        			</a>	
	        		</div>

	        		<div class="details">
		        		<p>Details about 🦄 :
		        			<ul>
			        			<li>First Name: ${dreamTeam[i].firstName}</li>
			        			<li>Last Name: ${dreamTeam[i].lastName}</li>
			        			<li>E-Mail: ${dreamTeam[i].email}</li>
			        			<li>Languages: ${dreamTeam[i].languages}</li>
			        			<li>Phone: ${dreamTeam[i].phone}</li>
			        			<li>About Me: ${dreamTeam[i].aboutMe}</li>
			        			
		        			</ul>
		        		</p>
		        	</div>
        		</div>
	`;
	document.getElementById("mainDIVindex").innerHTML += img;
}
console.log(i);

function showTeamBIG(i){
	big = document.getElementById("bigDIVmember"+i);
	big.style.display = "flex";
}

function hideTeamBIG(i){
	big = document.getElementById("bigDIVmember"+i);
	big.style.display = "none";
}



var smallDIVmember = document.getElementsByClassName("indexPics");
var redBtn = document.getElementsByClassName("crossButton");

for (i=0; i< smallDIVmember.length; i++){
	smallDIVmember[i].setAttribute("onclick", "showTeamBIG("+i+")");
}

for (i=0; i< redBtn.length; i++){
		//redBtn[i].setAttribute("onclick", "hideTeamBIG("+i+")");
		redBtn[i].addEventListener("click",function(){
			hideTeamBIG(i);
		},false)
}
