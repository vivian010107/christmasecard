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
  const currentURL = window.location.href; // Get the current page URL
  window.open(currentURL, "_blank"); // Open it in a new tab
});


