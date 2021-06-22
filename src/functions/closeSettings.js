export default function closeSettings() {
  // Allow tabbing to elements in main
  const tabList = document.getElementById("main").querySelectorAll('[tabindex= "-2"]');
  tabList.forEach(element => {
    element.setAttribute("tabindex", "0");
  });


  // Close settings
  document.getElementById("settingsBackground").style.display = "none";
  document.body.style.overflow = "auto";
}