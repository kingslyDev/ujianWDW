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
    title: 'Al-Fatihah',
    artist: 'Bilal Attaki',
    song: '',
  },
  {
    title: 'Al-Baqarah',
    artist: 'Bilal Attaki',
    song: '../../asset/music/al baqarah.mp3',
  },
  {
    title: 'Ali Imran',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/ali imran.mp3',
  },
  {
    title: "An-Nisa'",
    artist: 'Ibrahim Elhaq',
    song: '../../asset/music/an nisa.mp3',
  },
  {
    title: "An-Nisa'",
    artist: 'Ibrahim Elhaq',
    song: '../../asset/music/an nisa.mp3',
  },
  {
    title: 'Al-Maidah',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al maidah.mp3',
  },
  {
    title: 'Al-Maidah',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al maidah.mp3',
  },
  {
    title: "Al-An'am",
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al anam.mp3',
  },
  {
    title: "Al-A'raf",
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al araf.mp3',
  },
  {
    title: 'Al-Anfal',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al anfal.mp3',
  },
  {
    title: 'At-Taubah',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/at taubah.mp3',
  },
  {
    title: 'Yunus',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/yunus.mp3',
  },
  {
    title: 'Yusuf',
    artist: 'Ibrahim Elhaq',
    song: '../../asset/music/yusuf.mp3',
  },
  {
    title: "Ar-Ra'd",
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/ar rad.mp3',
  },
  {
    title: 'Ibrahim',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/ibrahim.mp3',
  },
  {
    title: 'Ibrahim',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/ibrahim.mp3',
  },
  {
    title: 'Al-Hijr',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al hijr.mp3',
  },
  {
    title: 'An-Nahl',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/an nahl.mp3',
  },
  {
    title: 'Al-Isra',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al isra.mp3',
  },
  {
    title: 'Al-Kahfi',
    artist: 'Hanan Attaki',
    song: '../../asset/music/al kahfi.mp3',
  },
  {
    title: 'Maryam',
    artist: 'Hanan Attaki',
    song: '../../asset/music/maryam.mp3',
  },
  {
    title: 'Thaha',
    artist: 'Bilal Attaki',
    song: '../../asset/music/thaha.mp3',
  },
  {
    title: 'Al-Anbiya',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al anbiya.mp3',
  },
  {
    title: 'Al-Hajj',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al hajj.mp3',
  },
  {
    title: "Al-Mu'minun",
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al muminun.mp3',
  },
  {
    title: 'An-Nur',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/an nur.mp3',
  },
  {
    title: 'Al-Furqan',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al furqan.mp3',
  },
  {
    title: "Asy-Syu'ara",
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/asy syuara.mp3',
  },
  {
    title: 'An-Naml',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/an naml.mp3',
  },
  {
    title: 'Al-Qasas',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al qashash.mp3',
  },
  {
    title: 'Al-Ankabut',
    artist: 'MIshary Rashed Alafasy',
    song: '../../asset/music/al ankabut.mp3',
  },
  {
    title: 'Ar-Rum',
    artist: 'MIshary Rashed Alafasy',
    song: '../../asset/music/ar rum.mp3',
  },
  {
    title: 'Luqman',
    artist: 'MIshary Rashed Alafasy',
    song: '../../asset/music/luqman.mp3',
  },
  {
    title: 'As-Sajdah',
    artist: 'MIshary Rashed Alafasy',
    song: '../../asset/music/as sajdah.mp3',
  },
  {
    title: 'Al-Ahzab',
    artist: 'MIshary Rashed Alafasy',
    song: '../../asset/music/al ahzab.mp3',
  },
  {
    title: 'Saba',
    artist: 'MIshary Rashed Alafasy',
    song: '../../asset/music/saba.mp3',
  },
  {
    title: 'Fatir',
    artist: 'MIshary Rashed Alafasy',
    song: '../../asset/music/fatir.mp3',
  },
  {
    title: 'Yasin',
    artist: 'Arif Abdullah Al-Asyi',
    song: '../../asset/music/yasin.mp3',
  },
  {
    title: 'As-Saffat',
    artist: 'Arif Abdullah Al-Asyi',
    song: '../../asset/music/as saffat.mp3',
  },
  {
    title: 'As-Saffat',
    artist: 'Arif Abdullah Al-Asyi',
    song: '../../asset/music/as saffat.mp3',
  },
  {
    title: 'Ash-Shad',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/ash shad.mp3',
  },
  {
    title: 'Az-Zummar',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/az zumar.mp3',
  },
  {
    title: 'Al-Mukmin',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al mukmin.mp3',
  },
  {
    title: 'Asy-Syura',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/asy syura.mp3',
  },
  {
    title: 'Az-Zukhruf',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/az zhukruf.mp3',
  },
  {
    title: 'Ad-Dukhan',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/ad dukhan.mp3',
  },
  {
    title: 'Al-Jatsiyah',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al jatsiyah.mp3',
  },
  {
    title: 'Al-Ahqaf',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al ahqaf.mp3',
  },
  {
    title: 'Muhammad',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/muhammad.mp3',
  },
  {
    title: 'Al-Fath',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al fath.mp3',
  },
  {
    title: 'Al-Hujurat',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al hujurat.mp3',
  },
  {
    title: 'Al-Hujurat',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al hujurat.mp3',
  },
  {
    title: 'Qaf',
    artist: 'Mishary Rashed Alafasy',
    song: '../../asset/music/qaf.mp3',
  },
  {
    title: 'At-Tur',
    artist: 'MIshary Rashed Alafasy',
    song: '../../asset/music/at tur.mp3',
  },
  {
    title: 'An-Najm',
    artist: 'MIshary Rashed Alafasy',
    song: '../../asset/music/an najm.mp3',
  },
  {
    title: 'Al-Qamar',
    artist: 'MIshary Rashed Alafasy',
    song: '../../asset/music/al qamar.mp3',
  },
  {
    title: 'Ar-Rahman',
    artist: 'MIshary Rashed Alafasy',
    song: '../../asset/music/ar rahman.mp3',
  },
  {
    title: 'Al-Waqiah',
    artist: 'MIshary Rashed Alafasy',
    song: '../../asset/music/al waqiah.mp3',
  },
  {
    title: 'Al-Hadid',
    artist: 'MIshary Rashed Alafasy',
    song: '../../asset/music/al hadid.mp3',
  },
  {
    title: 'Al-Hasyr',
    artist: 'Ibrahim Elhaq',
    song: '../../asset/music/al hasyr.mp3',
  },
  {
    title: 'Al-Mumtahanah',
    artist: 'Ibrahim Elhaq',
    song: '../../asset/music/al mumtahanah.mp3',
  },
  {
    title: 'As-Saff',
    artist: 'Ibrahim Elhaq',
    song: '../../asset/music/as saf.mp3',
  },
  {
    title: "Al-Jumu'ah",
    artist: 'Ibrahim Elhaq',
    song: '../../asset/music/al jumuah.mp3',
  },
  {
    title: 'Al-Munafiqun',
    artist: 'Ibrahim Elhaq',
    song: '../../asset/music/al munafiqun.mp3',
  },
  {
    title: 'At-Taghabun',
    artist: 'Ibrahim Elhaq',
    song: '../../asset/music/at taghabun.mp3',
  },
  {
    title: 'At-Talaq',
    artist: 'Ibrahim Elhaq',
    song: '../../asset/music/at talaq.mp3',
  },
  {
    title: 'At-Tahrim',
    artist: 'Ibrahim Elhaq',
    song: '../../asset/music/at tahrim.mp3',
  },
  {
    title: 'Al-Mulk',
    artist: 'Salim Bahanan',
    song: '../../asset/music/al mulk.mp3',
  },
  {
    title: 'Al-Qalam',
    artist: 'Salim Bahanan',
    song: '../../asset/music/al qalam.mp3',
  },
  {
    title: 'Al-Haqqah',
    artist: 'Salim Bahanan',
    song: '../../asset/music/al haqqah.mp3',
  },
  {
    title: "Al-Ma'arij",
    artist: 'Salim Bahanan',
    song: "../../asset/music/al ma'arij.mp3",
  },
  {
    title: 'Nuh',
    artist: 'Salim Bahanan',
    song: '../../asset/music/nuh.mp3',
  },
  {
    title: 'Al-Jinn',
    artist: 'Salim Bahanan',
    song: '../../asset/music/al jin.mp3',
  },
  {
    title: 'Al-Muzzammil',
    artist: 'Salim Bahanan',
    song: '../../asset/music/al muzammil.mp3',
  },
  {
    title: 'Al-Muddatsir',
    artist: 'Salim Bahanan',
    song: '../../asset/music/al muddatsir.mp3',
  },
  {
    title: 'Al-Qiyamah',
    artist: 'Salim Bahanan',
    song: '../../asset/music/al qiyamah.mp3',
  },
  {
    title: 'Al-Insan',
    artist: 'Salim Bahanan',
    song: '../../asset/music/al insan.mp3',
  },
  {
    title: 'Al-Mursalat',
    artist: 'Salim Bahanan',
    song: '../../asset/music/al mursalat.mp3',
  },
  {
    title: "An-Naba'",
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/an naba.mp3',
  },
  {
    title: "An-Nazi'at",
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/an naziat.mp3',
  },
  {
    title: "'Abasa",
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/abasa.mp3',
  },
  {
    title: 'At-Takwir',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/at takwir.mp3',
  },
  {
    title: 'Al-Infitar',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al infitar.mp3',
  },
  {
    title: 'Al-Muttaffifin',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al muttaffifin.mp3',
  },
  {
    title: 'Al-Inshiqaq',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al inshiqaq.mp3',
  },
  {
    title: 'Al-Buruj',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al buruj.mp3',
  },
  {
    title: 'At-Tariq',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/at tariq.mp3',
  },
  {
    title: "Al-A'la",
    artist: 'Muzammil Hasballah',
    song: "../../asset/music/al a'la.mp3",
  },
  {
    title: 'Al-Ghasiyah',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al ghasiyah.mp3',
  },
  {
    title: 'Al-Fajr',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al fajr.mp3',
  },
  {
    title: 'Al-Balad',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al balad.mp3',
  },
  {
    title: 'Ash-Syams',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/ash syams.mp3',
  },
  {
    title: 'Al-Lail',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al lail.mp3',
  },
  {
    title: 'Ad-Dhuha',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/ad dhuha.mp3',
  },
  {
    title: 'Al-Insyirah',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al insyirah.mp3',
  },
  {
    title: 'At-Tin',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/at tin.mp3',
  },
  {
    title: 'Al-Alaq',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al alaq.mp3',
  },
  {
    title: 'Al-Qadr',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al qadr.mp3',
  },
  {
    title: 'Al-Bayyinah',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al bayyinah.mp3',
  },
  {
    title: 'Al-Zalzalah',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al zalzalah.mp3',
  },
  {
    title: "Al-'Adiyat",
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al adiyat.mp3',
  },
  {
    title: "Al-Qari'ah",
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al qariah.mp3',
  },
  {
    title: 'At-Takasur',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/at takasur.mp3',
  },
  {
    title: "Al-'Asr",
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al asr.mp3',
  },
  {
    title: 'Al-Humazah',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al humazah.mp3',
  },
  {
    title: 'Al-Fil',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al fil.mp3',
  },
  {
    title: 'Al-Quraisy',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al quraisy.mp3',
  },
  {
    title: "Al-Ma'un",
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al maun.mp3',
  },
  {
    title: 'An-Nasr',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/an nasr.mp3',
  },
  {
    title: 'Al-Kafirun',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al kafirun.mp3',
  },
  {
    title: 'Al-Kautsar',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al kautsar.mp3',
  },
  {
    title: 'Al-Lahab',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al lahab.mp3',
  },
  {
    title: 'Al-Ikhlas',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al ikhlas.mp3',
  },
  {
    title: 'Al-Falaq',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/al falaq.mp3',
  },
  {
    title: 'An-Nas',
    artist: 'Muzammil Hasballah',
    song: '../../asset/music/an nas.mp3',
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

isSongs.forEach((song, index, songsArray) => {
  const togglePlayPause = song.querySelector('.bi-play-circle-fill');
  const isAudio = song.querySelector('audio');

  isAudio.addEventListener('ended', () => {
    togglePlayPause.classList.remove('bi-pause-circle-fill');
    togglePlayPause.classList.add('bi-play-circle-fill');
    isPlaying = null;

    // Memeriksa apakah masih ada lagu berikutnya
    if (index < songsArray.length - 1) {
      const nextSong = songsArray[index + 1];
      const nextAudio = nextSong.querySelector('audio');
      const nextToggle = nextSong.querySelector('.bi-play-circle-fill');

      nextAudio.play();
      nextToggle.classList.remove('bi-play-circle-fill');
      nextToggle.classList.add('bi-pause-circle-fill');
      isPlaying = nextAudio;
    }
  });

  togglePlayPause.addEventListener('click', () => {
    if (isPlaying && isPlaying !== isAudio) {
      isPlaying.pause();
      isPlaying.previousElementSibling.classList.remove('bi-pause-circle-fill');
      isPlaying.previousElementSibling.classList.add('bi-play-circle-fill');
    }

    if (isAudio !== isPlaying || isAudio.paused || isAudio.ended) {
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
