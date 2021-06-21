export default function showMessage(message = "") {
  const messageBoxContainer = document.getElementById("messageBoxContainer");

  // Create message
  const messageBox = document.createElement("div");
  messageBox.className = "messageBox";
  messageBox.innerHTML = `<p>${message}</p>`;

  // Remove top message if 5 already exist
  if (messageBoxContainer.childElementCount > 5) {
    messageBoxContainer.firstElementChild.remove();
  }
  
  // Add and remember message
  messageBoxContainer.appendChild(messageBox);
  const currentMessage = messageBoxContainer.lastElementChild;

  // Remove message later
  setTimeout (() => {
    if(currentMessage) {currentMessage.remove();}
  }, 5000);

}