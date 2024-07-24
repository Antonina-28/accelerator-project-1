// const playButton = document.querySelector('.about__button');
// const videoBackground = document.querySelector('.about__video-background');
// const videoContainer = document.querySelector('.about__video');

// playButton.addEventListener('click', function());

//<iframe class="about__video" src="https://www.youtube.com/embed/9TZXsZItgdw?si=TZ0KEWYYlFsPh4yK" width="320" height="170" title="Бесплатные интерактивные курсы" loading="lazy" allowfullscreen></iframe>

document.addEventListener('DOMContentLoaded', () => {

  const videoContainer = document.querySelector('.about__video');
  const videoPlaceholder = document.querySelector('.about__video-background');
  const playButton = document.querySelector('.about__button');

  playButton.addEventListener('click', () => {
    videoPlaceholder.style.display = 'none';
    playButton.style.display = 'none';

    // Ленивая загрузка iframe с видео
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?si=TZ0KEWYYlFsPh4yK');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');

    videoContainer.appendChild(iframe);
  });
});
