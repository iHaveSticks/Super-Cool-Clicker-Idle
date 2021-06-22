export default function openSettings() {
  // Prevent tabbing to elements in main
  const focusable = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
  const tabList = document.getElementById("main").querySelectorAll(focusable);
  tabList.forEach(element => {
    element.setAttribute("tabIndex", -2);
  });

  // Open settings
  document.getElementById("settingsBackground").style.display = "initial";
  document.body.style.overflow = "clip";
  document.getElementById("settingsContent").focus();
}