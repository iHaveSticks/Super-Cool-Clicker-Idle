export default function onUnload(event) {
  // Used for window.unload event listener in app.js
  event.preventDefault();
  return event.returnValue = "Autosave is disabled. Progress will not be saved";
};