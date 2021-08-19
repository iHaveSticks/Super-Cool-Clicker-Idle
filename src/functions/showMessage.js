export default function showMessage(message = "", duration = 5000) {
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

  // Play animation
  currentMessage.animate(
    [
      { transform: 'translate(-100px)' },
      { transform: 'translate(0)' }
    ],
    {
      duration: 200,
      iterations: 1
    }
  )

  // Remove message later
  setTimeout(() => {
    if (currentMessage) {
      currentMessage.remove();
    }
  }, duration);

}