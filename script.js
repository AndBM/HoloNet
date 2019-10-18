function search(){
	var adr = prompt("Adresse:");
	adr = parseFloat(adr);
	switch (adr){
		case 42:
		window.location.assign("batorw.html");
		//BATOR WELCOM
		break;
		case 25:
		window.location.assign("p.html");
		//DANS
		break;
		case 86:
		window.location.assign("Bators.html");
		//SCIENCE
		break;
		case 01:
		window.location.assign("key.html");
		//ADGANG
		break;
		case 23:
		window.location.assign("key.html");
		break;
		default:
		alert("Ugyldig adresse.");
		break;
	}
}

function unlock(){
	var key = prompt("Indtast kode:");
	key = parseFloat(key);
	switch (key){
		case 2505:
		window.location.assign("Bator2.html");
		//SCIENCE2
		break;
		case 9837:
		window.location.assign("ICA.html");
		//AGENTURET
		break;
		case 5576:
		window.location.assign("bator3.html");
		//SCIENCE3
		break;
		default:
		alert("Ugyldig kode.");
		break;
	}
}
