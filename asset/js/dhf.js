// AWAL PROGGRES BAR

function setProgress(percentage) {
  var progressBar = document.getElementById('progress-bar');

  if (percentage >= 0 && percentage <= 100) {
    progressBar.style.width = percentage + '%';
    progressBar.innerHTML = percentage + '%';
  } else {
    alert('atur nilai 0-100');
  }
}

setProgress(28.8);

// AKHIR PROGGRES BAR

let selectedAmount = 0;

function changeColor(btn) {
  var buttons = document.getElementsByClassName('btn-custom');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }

  btn.classList.add('active');
}

function selectAmount(amount, button) {
  changeColor(button);
  selectedAmount = amount;
  document.getElementById('continueButton').style.display = 'block';
}

function continueToNextPage() {
  let nextPage = '';
  const basePath = '/src/Payment/'; // Ganti dengan path direktori Anda

  switch (selectedAmount) {
    case 10000:
      nextPage = basePath + 'pay10.html';
      break;
    case 25000:
      nextPage = basePath + 'pay25.html';
      break;
    case 50000:
      nextPage = basePath + 'pay50.html';
      break;
    case 100000:
      nextPage = basePath + 'pay100.html';
      break;
    case 200000:
      nextPage = basePath + 'pay200.html';
      break;
    case 500000:
      nextPage = basePath + 'pay500.html';
      break;
    default:
      nextPage = basePath + 'index.html';
  }

  if (selectedAmount !== 0) {
    window.location.href = nextPage;
  } else {
    alert('Silakan pilih nominal terlebih dahulu.');
  }
}
