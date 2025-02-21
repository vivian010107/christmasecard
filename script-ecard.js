// snowfall Effect
function createSnowflake() {
  // to create a snowflake element
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❄"; // snowflake emoji

  // make the snowflake fall at random position and speed
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${3 + Math.random() * 5}s`;
  document.body.appendChild(snowflake);
  // remove the snowflake after 8 seconds to prevent too messy screen
  setTimeout(() => snowflake.remove(), 8000);
}
// create snowflake every 150ms
setInterval(createSnowflake, 150);

// display Postcard Content
function displayPostcard() {
  // get input values from the form 
  const sender = document.getElementById("senderName").value;
  const receiver = document.getElementById("receiverName").value;
  const builtIn = document.getElementById("builtInMessage").value;
  const custom = document.getElementById("customMessage").value;

  // construct how message will look like and display on postcard
  const fullMessage = `🎉 To: ${receiver}\n${builtIn}${custom ? '\n' + custom : ''}\n🎅 From: ${sender}`;
  document.getElementById("messageOverlay").textContent = fullMessage;
}

// background music
function toggleMusic() {
  const player = document.getElementById("musicPlayer");
  player.paused ? player.play() : player.pause(); // to play and pause music
}

// show blessing when user clicked
function showBlessing(message) {
  alert(`✨ ${message} ✨`);
}

// shareable link for the user
document.addEventListener("DOMContentLoaded", function () {
  // generate buttons and the functions
  const shareBtn = document.getElementById("shareBtn");
  const generateBtn = document.querySelector("button[onclick='displayPostcard()']");

  if (shareBtn) {
    shareBtn.addEventListener("click", function () {
      // get user input values
      let senderName = document.getElementById("senderName").value;
      let receiverName = document.getElementById("receiverName").value;
      let builtInMessage = document.getElementById("builtInMessage").value;
      let customMessage = document.getElementById("customMessage").value;

      // encode the data to make sure it can work in a url link
      let encodedSender = encodeURIComponent(senderName);
      let encodedReceiver = encodeURIComponent(receiverName);
      let encodedBuiltIn = encodeURIComponent(builtInMessage);
      let encodedCustom = encodeURIComponent(customMessage);

      // get the current page link and and user input data to the link
      let currentURL = window.location.origin + window.location.pathname;
      let shareableLink = `${currentURL}?sender=${encodedSender}&receiver=${encodedReceiver}&builtIn=${encodedBuiltIn}&custom=${encodedCustom}`;

      // open the link in another new tab
      window.open(shareableLink, "_blank");

      // copy the link to the clipboard
      navigator.clipboard.writeText(shareableLink).then(() => {
        alert("Link copied! Share it with your receiver.");
      });
    });
  }

  // load the data from the url link
  let urlParams = new URLSearchParams(window.location.search);
  let senderName = urlParams.get("sender");
  let receiverName = urlParams.get("receiver");
  let builtInMessage = urlParams.get("builtIn");
  let customMessage = urlParams.get("custom");

  if (senderName && receiverName && builtInMessage) { // check if data available
    // display the data on the postcard
    document.getElementById("messageOverlay").textContent =
      `🎉 To: ${receiverName}\n${builtInMessage}${customMessage ? '\n' + customMessage : ''}\n🎅 From: ${senderName}`;

    // hide the input form, and buttons to prevent confusion from receiver
    document.getElementById("senderName").style.display = "none";
    document.getElementById("receiverName").style.display = "none";
    document.getElementById("builtInMessage").style.display = "none";
    document.getElementById("customMessage").style.display = "none";
    if (generateBtn) generateBtn.style.display = "none";
    if (shareBtn) shareBtn.style.display = "none";
  }
});


