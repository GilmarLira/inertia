
// INTERACTION
// ////////////////////////////////////////////////////

function tryout(text){
	console.log("works...");
	var displays = document.getElementsByClassName("tryout_display");

	for (i=0; i<displays.length;i++){
		displays[i].textContent=text;	
	}
}

