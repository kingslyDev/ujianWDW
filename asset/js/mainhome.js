const HideNgaji = document.querySelector('.ngaji');
const IsNgaji = document.querySelector('.ruang-ngaji');
const HideDonasi = document.querySelector('.donasi');
const IsDonasi = document.querySelector('.ruang-donasi');

const hideElement = (donasi, ngaji) => {
  if (ngaji.style.display === 'none' || ngaji.style.display === '') {
    ngaji.style.display = 'flex';
    donasi.style.display = 'none';
  } else {
    ngaji.style.display = 'none';
  }
};

HideNgaji.addEventListener('click', () => {
  hideElement(IsDonasi, IsNgaji);
});

HideDonasi.addEventListener('click', () => {
  hideElement(IsNgaji, IsDonasi);
});

let IsPlaying = false;
const togglePlayPause = document.getElementById('icon');
const IsAudio = document.getElementById('audio');

togglePlayPause.addEventListener('click', () => {
  if (IsPlaying) {
    togglePlayPause.classList.remove('bi-pause-circle-fill');
    togglePlayPause.classList.add('bi-play-circle-fill');
    IsAudio.pause();
  } else {
    togglePlayPause.classList.remove('bi-play-circle-fill');
    togglePlayPause.classList.add('bi-pause-circle-fill');
    IsAudio.play();
  }
  IsPlaying = !IsPlaying;
});
