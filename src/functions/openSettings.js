export default function openSettings() {
  document.getElementById("settingsBackground").style.display = "initial";
  document.body.style.overflow = "clip";
  document.getElementById("settingsContent").getElementsByClassName("button")[0].focus();
}