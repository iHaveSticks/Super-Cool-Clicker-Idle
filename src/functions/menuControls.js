export default function menuControls(menu1ID, menu2ID, storeNavID = "") {
	const menu1 = document.getElementById(menu1ID);
	const menu2 = document.getElementById(menu2ID);
	const storeNav = document.getElementById(storeNavID);
	
	if (menu1.style.display === "initial") {
		
		menu1.style.display = "none";
		menu2.style.display = "initial";

		if(storeNav) storeNav.innerText = "< Back";
		
	} else {
		menu1.style.display = "initial";
		menu2.style.display = "none";

		if(storeNav) storeNav.innerText = "Next >";
	}
}