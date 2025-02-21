function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = '❄';
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${3 + Math.random() * 5}s`;
  document.body.appendChild(snowflake);
  setTimeout(() => snowflake.remove(), 8000);
}
setInterval(createSnowflake, 150);

function displayPostcard() {
  const sender = document.getElementById('senderName').value;
  const receiver = document.getElementById('receiverName').value;
  const builtIn = document.getElementById('builtInMessage').value;
  const custom = document.getElementById('customMessage').value;
  document.getElementById('messageOverlay').textContent = `🎉 To: ${receiver}\n${builtIn}${custom ? '\n' + custom : ''}\n🎅 From: ${sender}`;
}

function toggleMusic() {
  const player = document.getElementById('musicPlayer');
  player.paused ? player.play() : player.pause();
}

function showBlessing(message) {
  alert(`✨ ${message} ✨`);
}

document.addEventListener('DOMContentLoaded', function() {
  const captureBtn = document.getElementById('capture-btn');
  if (captureBtn) {
    captureBtn.addEventListener('click', function() {
      html2canvas(document.getElementById('postcard'), {useCORS: true, allowTaint: false}).then(function(canvas) {
        const link = document.createElement('a');
        link.download = 'christmas-postcard.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      }).catch(function(error) {
        console.error('Error capturing the postcard:', error);
        alert('Failed to capture the postcard. Please check for cross-origin images or try again.');
      });
    });
  }
});

document.getElementById("shareBtn").addEventListener("click", function () {
  // Get user inputs
  let senderName = document.getElementById("senderName").value;
  let receiverName = document.getElementById("receiverName").value;
  let message = document.getElementById("message").value;

  // Encode data to make it URL-safe
  let encodedSender = encodeURIComponent(senderName);
  let encodedReceiver = encodeURIComponent(receiverName);
  let encodedMessage = encodeURIComponent(message);

  // Get current page URL and append parameters
  let currentURL = window.location.origin + window.location.pathname;
  let shareableLink = `${currentURL}?sender=${encodedSender}&receiver=${encodedReceiver}&message=${encodedMessage}`;

  // Open the link in a new tab
  window.open(shareableLink, "_blank");

  // (Optional) Copy to clipboard
  navigator.clipboard.writeText(shareableLink).then(() => {
      alert("Link copied! Share it with your receiver.");
  });
});

window.onload = function () {
  // Get URL parameters
  let urlParams = new URLSearchParams(window.location.search);
  let senderName = urlParams.get("sender");
  let receiverName = urlParams.get("receiver");
  let message = urlParams.get("message");

  // If parameters exist, fill in the e-card
  if (senderName && receiverName && message) {
      document.getElementById("senderName").value = senderName;
      document.getElementById("receiverName").value = receiverName;
      document.getElementById("message").value = message;
  }
};



