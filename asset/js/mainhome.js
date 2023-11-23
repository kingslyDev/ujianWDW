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

const data = [
  {
    text: 'JUZ 30',
    title: "An-Naba'",
    artist: 'Muzammil Hasballah',
    song: '/asset/music/an naba.mp3',
  },
  {
    title: "An-Nazi'at",
    artist: 'Muzammil Hasballah',
    song: '../../music/an naziat.mp3',
  },
  {
    title: "'Abasa",
    artist: 'Muzammil Hasballah',
    song: '../../music/abasa.mp3',
  },
  {
    title: 'At-Takwir',
    artist: 'Muzammil Hasballah',
    song: '../../music/at takwir.mp3',
  },
  {
    title: 'Al-Infitar',
    artist: 'Muzammil Hasballah',
    song: '../../music/al infitar.mp3',
  },
  {
    title: 'Al-Muttaffifin',
    artist: 'Muzammil Hasballah',
    song: '../../music/al muttaffifin.mp3',
  },
  {
    title: 'Al-Inshiqaq',
    artist: 'Muzammil Hasballah',
    song: '../../music/al inshiqaq.mp3',
  },
  {
    title: 'Al-Buruj',
    artist: 'Muzammil Hasballah',
    song: '../../music/al buruj.mp3',
  },
  {
    title: 'At-Tariq',
    artist: 'Muzammil Hasballah',
    song: '../../music/at tariq.mp3',
  },
  {
    title: "Al-A'la",
    artist: 'Muzammil Hasballah',
    song: "../../music/al a'la.mp3",
  },
  {
    title: 'Al-Ghasiyah',
    artist: 'Muzammil Hasballah',
    song: '../../music/al ghasiyah.mp3',
  },
  {
    title: 'Al-Fajr',
    artist: 'Muzammil Hasballah',
    song: '../../music/al fajr.mp3',
  },
  {
    title: 'Al-Balad',
    artist: 'Muzammil Hasballah',
    song: '../../music/al balad.mp3',
  },
  {
    title: 'Ash-Syams',
    artist: 'Muzammil Hasballah',
    song: '../../music/ash syams.mp3',
  },
  {
    title: 'Al-Lail',
    artist: 'Muzammil Hasballah',
    song: '../../music/al lail.mp3',
  },
  {
    title: 'Ad-Dhuha',
    artist: 'Muzammil Hasballah',
    song: '../../music/ad dhuha.mp3',
  },
  {
    title: 'Al-Insyirah',
    artist: 'Muzammil Hasballah',
    song: '../../music/al insyirah.mp3',
  },
  {
    title: 'At-Tin',
    artist: 'Muzammil Hasballah',
    song: '../../music/at tin.mp3',
  },
  {
    title: 'Al-Alaq',
    artist: 'Muzammil Hasballah',
    song: '../../music/al alaq.mp3',
  },
  {
    title: 'Al-Qadr',
    artist: 'Muzammil Hasballah',
    song: '../../music/al qadr.mp3',
  },
  {
    title: 'Al-Bayyinah',
    artist: 'Muzammil Hasballah',
    song: '../../music/al bayyinah.mp3',
  },
  {
    title: 'Al-Zalzalah',
    artist: 'Muzammil Hasballah',
    song: '../../music/al zalzalah.mp3',
  },
  {
    title: "Al-'Adiyat",
    artist: 'Muzammil Hasballah',
    song: '../../music/al adiyat.mp3',
  },
  {
    title: "Al-Qari'ah",
    artist: 'Muzammil Hasballah',
    song: '../../music/al qariah.mp3',
  },
  {
    title: 'At-Takasur',
    artist: 'Muzammil Hasballah',
    song: '../../music/at takasur.mp3',
  },
  {
    title: "Al-'Asr",
    artist: 'Muzammil Hasballah',
    song: '../../music/al asr.mp3',
  },
  {
    title: 'Al-Humazah',
    artist: 'Muzammil Hasballah',
    song: '../../music/al humazah.mp3',
  },
  {
    title: 'Al-Fil',
    artist: 'Muzammil Hasballah',
    song: '../../music/al fil.mp3',
  },
  {
    title: 'Al-Quraisy',
    artist: 'Muzammil Hasballah',
    song: '../../music/al quraisy.mp3',
  },
  {
    title: "Al-Ma'un",
    artist: 'Muzammil Hasballah',
    song: '../../music/al maun.mp3',
  },
  {
    title: 'An-Nasr',
    artist: 'Muzammil Hasballah',
    song: '../../music/an nasr.mp3',
  },
  {
    title: 'Al-Kafirun',
    artist: 'Muzammil Hasballah',
    song: '../../music/al kafirun.mp3',
  },
  {
    title: 'Al-Kautsar',
    artist: 'Muzammil Hasballah',
    song: '../../music/al kautsar.mp3',
  },
  {
    title: 'Al-Lahab',
    artist: 'Muzammil Hasballah',
    song: '../../music/al lahab.mp3',
  },
  {
    title: 'Al-Ikhlas',
    artist: 'Muzammil Hasballah',
    song: '../../music/al ikhlas.mp3',
  },
  {
    title: 'Al-Falaq',
    artist: 'Muzammil Hasballah',
    song: '../../music/al falaq.mp3',
  },
  {
    title: 'An-Nas',
    artist: 'Muzammil Hasballah',
    song: '../../music/an nas.mp3',
  },
];

data.map((data) => {
  const songContain = document.createElement('div');
  songContain.classList.add('song');

  const idSong = document.createElement('div');
  const TitleSong = document.createElement('h4');
  const ArtSong = document.createElement('p');
  const PlayIcon = document.createElement('i');
  const SourceSong = document.createElement('audio');

  TitleSong.innerText = data.title;
  ArtSong.innerText = data.artist;
  SourceSong.src = data.song;

  PlayIcon.classList.add('bi-play-circle-fill');

  idSong.appendChild(TitleSong);
  idSong.appendChild(ArtSong);

  songContain.appendChild(idSong);
  songContain.appendChild(PlayIcon);
  songContain.appendChild(SourceSong);

  IsNgaji.appendChild(songContain);
});

let isPlaying = null;
const isSongs = document.querySelectorAll('.song');

isSongs.forEach((song) => {
  const togglePlayPause = song.querySelector('.bi-play-circle-fill');
  const isAudio = song.querySelector('audio');

  isAudio.addEventListener('ended', () => {
    togglePlayPause.classList.remove('bi-pause-circle-fill');
    togglePlayPause.classList.add('bi-play-circle-fill');
    isPlaying = null;
  });

  togglePlayPause.addEventListener('click', () => {
    if (isPlaying && isPlaying !== isAudio) {
      isPlaying.pause();
      isPlaying.previousElementSibling.classList.remove('bi-pause-circle-fill');
      isPlaying.previousElementSibling.classList.add('bi-play-circle-fill');
    }

    if (isAudio !== isPlaying || isAudio.paused) {
      togglePlayPause.classList.remove('bi-play-circle-fill');
      togglePlayPause.classList.add('bi-pause-circle-fill');
      isAudio.play();
      isPlaying = isAudio;
    } else {
      togglePlayPause.classList.remove('bi-pause-circle-fill');
      togglePlayPause.classList.add('bi-play-circle-fill');
      isAudio.pause();
      isPlaying = null;
    }
  });
});
