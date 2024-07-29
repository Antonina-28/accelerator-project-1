const videoContainer = document.querySelector('.about__video');
const videoPlaceholder = document.querySelector('.about__video-background');
const playButton = document.querySelector('.about__button');

export function playVideo() {
  playButton.addEventListener('click', () => {
    videoPlaceholder.style.display = 'none';
    playButton.style.display = 'none';

    const iframe = document.createElement('iframe');
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '100%');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?si=TZ0KEWYYlFsPh4yK');
    iframe.setAttribute('title', 'Бесплатные интерактивные курсы');
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');

    videoContainer.appendChild(iframe);
  });
}
