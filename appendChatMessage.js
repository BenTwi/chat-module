function appendTwitchMessage(USER, message, BADGES) {
  const twitchChat = document.querySelector(
    "{REPLACE THIS WITH THE ACTUALL CLASS NAME OF YOU CHAT!}"
  );

  if (!twitchChat || !USER || !message) {
    console.error("Prameter for appending message not found.");
    return;
  }

  const twitchMessage = document.createElement("div");
  twitchMessage.classList.add("twitchMessage");

  const usernameDiv = document.createElement("div");
  usernameDiv.classList.add("username");
  usernameDiv.innerHTML = BADGES + " " + USER.username;
  usernameDiv.style.color = USER.color;

  const colonSpan = document.createElement("span");
  colonSpan.textContent = ": ";
  usernameDiv.appendChild(colonSpan);

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");
  messageDiv.innerHTML = message;

  twitchMessage.appendChild(usernameDiv);
  twitchMessage.appendChild(messageDiv);

  twitchChat.appendChild(twitchMessage);
}
