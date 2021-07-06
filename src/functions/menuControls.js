export default function menuControls(storeID = "", buttonId = "") {
	
	const store = document.getElementById(storeID);

	// Switch stores
	if(store.style.display === "none") {
		const menuItems = document.getElementById("store").children;

		for (let i = 0; i < menuItems.length; i++) {
			if(menuItems[i].style.display !== "none") {
				menuItems[i].style.display = "none";
				break;
			}
		}
		store.style.display = "initial";

		// Change active button
		const item = document.getElementById("storeMenu").querySelector(".active");

		item.classList.remove("active");
		item.classList.add("inactive");

		document.getElementById(buttonId).classList.remove("inactive");
		document.getElementById(buttonId).classList.add("active");
	}
	
}