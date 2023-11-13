function setProgress(percentage) {
  var progressBar = document.getElementById('progress-bar');

  if (percentage >= 0 && percentage <= 100) {
    progressBar.style.width = percentage + '%';
    progressBar.innerHTML = percentage + '%';
  } else {
    alert('Please enter a valid percentage between 0 and 100.');
  }
}

setProgress(40);
