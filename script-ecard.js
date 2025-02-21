// ❄️ Snowfall Effect
function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❄";
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${3 + Math.random() * 5}s`;
  document.body.appendChild(snowflake);
  setTimeout(() => snowflake.remove(), 8000);
}
setInterval(createSnowflake, 150);

// 🎄 Display Postcard Content
function displayPostcard() {
  const sender = document.getElementById("senderName").value;
  const receiver = document.getElementById("receiverName").value;
  const builtIn = document.getElementById("builtInMessage").value;
  const custom = document.getElementById("customMessage").value;

  const fullMessage = `🎉 To: ${receiver}\n${builtIn}${custom ? '\n' + custom : ''}\n🎅 From: ${sender}`;
  document.getElementById("messageOverlay").textContent = fullMessage;
}

// 🎵 Toggle Background Music
function toggleMusic() {
  const player = document.getElementById("musicPlayer");
  player.paused ? player.play() : player.pause();
}

// ✨ Show Blessings on Click
function showBlessing(message) {
  alert(`✨ ${message} ✨`);
}

// 🔗 Share Link with E-Card Data
document.addEventListener("DOMContentLoaded", function () {
  const shareBtn = document.getElementById("shareBtn");
  if (shareBtn) {
    shareBtn.addEventListener("click", function () {
      // Get user inputs
      let senderName = document.getElementById("senderName").value;
      let receiverName = document.getElementById("receiverName").value;
      let builtInMessage = document.getElementById("builtInMessage").value;
      let customMessage = document.getElementById("customMessage").value;

      // Encode data to make it URL-safe
      let encodedSender = encodeURIComponent(senderName);
      let encodedReceiver = encodeURIComponent(receiverName);
      let encodedBuiltIn = encodeURIComponent(builtInMessage);
      let encodedCustom = encodeURIComponent(customMessage);

      // Get current page URL and append parameters
      let currentURL = window.location.origin + window.location.pathname;
      let shareableLink = `${currentURL}?sender=${encodedSender}&receiver=${encodedReceiver}&builtIn=${encodedBuiltIn}&custom=${encodedCustom}`;

      // Open the link in a new tab
      window.open(shareableLink, "_blank");

      // (Optional) Copy to clipboard
      navigator.clipboard.writeText(shareableLink).then(() => {
        alert("Link copied! Share it with your receiver.");
      });
    });
  }
});

// 🎯 Load Shared Data from URL
window.onload = function () {
  let urlParams = new URLSearchParams(window.location.search);
  let senderName = urlParams.get("sender");
  let receiverName = urlParams.get("receiver");
  let builtInMessage = urlParams.get("builtIn");
  let customMessage = urlParams.get("custom");

  // If parameters exist, fill in the e-card automatically
  if (senderName && receiverName && builtInMessage) {
    document.getElementById("senderName").value = senderName;
    document.getElementById("receiverName").value = receiverName;
    document.getElementById("builtInMessage").value = builtInMessage;
    if (customMessage) {
      document.getElementById("customMessage").value = customMessage;
    }

    // Update the displayed message
    displayPostcard();
  }
};



