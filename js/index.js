// DOM Elements
let historyUl = document.querySelector('.history-ul');
let searchForm = document.querySelector('.search-form');
let videosUl = document.querySelector('.main-list__videos');
let searchInput = document.querySelector('.header__input');
let youtubeLogo = document.querySelector('.header__icon');
let createButton = document.querySelector('.header__create-button');
let listIcon = document.querySelector('.header-list__icon');
let heroFilter = document.querySelector('.hero__filter'); 
let micButton = document.querySelector('.header__mic-button');

let likedVideos = JSON.parse(localStorage.getItem('likedVideos')) || [];

youtubeLogo.addEventListener('click', function () {
  location.reload();
});

listIcon.addEventListener('click', function () {
  if (!heroFilter) {
    console.error('heroFilter element not found');
    return;
  }
  heroFilter.style.display = heroFilter.style.display === 'none' ? 'inline-block' : 'none';
});

let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

function displayHistory() {
  historyUl.innerHTML = '';
  [...searchHistory].reverse().forEach((el) => {
    const li = document.createElement('li');
    li.className = 'history-li';
    li.textContent = el;
    li.style.cursor = 'pointer';

    li.addEventListener('click', () => {
      searchInput.value = el;
      searchForm.dispatchEvent(new Event('submit'));
    });

    historyUl.appendChild(li);
  });

  searchInput.addEventListener('focus', function () {
    historyUl.style.display = 'inline-block';
  });
}

searchInput.addEventListener('focus', displayHistory);

searchForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputValue = searchInput.value.trim();
  if (inputValue === '') return;

  let filteredVideo = videoData.filter((el) =>
    el.title.toLowerCase().includes(inputValue.toLowerCase())
  );
  renderVideos(filteredVideo);

  if (!searchHistory.includes(inputValue)) {
    searchHistory.push(inputValue);
    if (searchHistory.length >= 10) {
      searchHistory.shift(); 
    }
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }
  displayHistory();
});

searchInput.addEventListener('blur', () => {
  setTimeout(() => {
    historyUl.style.display = 'none';
  }, 200);
});

function renderVideos(videosArray) {
  videosUl.innerHTML = '';
  videosArray.forEach((el) => {
    videosUl.insertAdjacentHTML(
      'beforeend',
      `
      <li class="main-list__item" data-video-id="${el.id || ''}">
        <div class="img-section">
          <div class="img">
            <img class="item-img" src="${el.thumbnail}" alt="${el.title || ''}">
          </div>
          <div class="video-size">${el.duration}</div>
        </div>
        <div class="text-section">
          <div class="img-section2">
            <img class="video-avatar" src="${el.channelPhoto}" alt="${el.channel || ''}">
          </div>
          <div class="text-section2">
            <p class="video-name">${el.title}</p>
            <p class="chanel-name">${el.channel}</p>
            <div class="video-info">
              <p class="video-viwes">${el.views}</p>
              <p class="video-time">${el.uploaded}</p>
              <button class="watch__later-icon" title="${
                likedVideos.includes(el.id) ? 'Remove from Watch Later' : 'Add to Watch Later'
              }">
                <svg style="color:white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                  <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </li>
     </a>
      `
    );
  });

  updateWatchLaterButtons();
}

function toggleWatchLater(videoId) {
  if (!likedVideos.includes(videoId)) {
    likedVideos.push(videoId);
    localStorage.setItem('likedVideos', JSON.stringify(likedVideos));
    return true; 
  } else {
    likedVideos = likedVideos.filter((id) => id !== videoId);
    localStorage.setItem('likedVideos', JSON.stringify(likedVideos));
    return false; 
  }
}

function updateWatchLaterButtons() {
  document.querySelectorAll('.main-list__item').forEach((item) => {
    const videoId = item.dataset.videoId;
    const btn = item.querySelector('.watch__later-icon');
    if (btn && videoId) {
      btn.title = likedVideos.includes(videoId) ? 'Remove from Watch Later' : 'Add to Watch Later';
      btn.querySelector('svg').style.color = likedVideos.includes(videoId) ? 'yellow' : 'white';
    }
  });
}

videosUl.addEventListener('click', function (e) {
  const videoItem = e.target.closest('.main-list__item');
  if (videoItem && !e.target.closest('.watch__later-icon')) {
    const videoId = videoItem.dataset.videoId;
    console.log('Clicked video with ID:', videoId);
  }

  const watchLaterBtn = e.target.closest('.watch__later-icon');
  if (watchLaterBtn) {
    const videoItem = watchLaterBtn.closest('.main-list__item');
    const videoId = videoItem.dataset.videoId;
    const isAdded = toggleWatchLater(videoId);
    updateWatchLaterButtons();
    console.log('Watch Later videos:', likedVideos);
  }
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.lang = 'uz-UZ'; 
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  micButton.addEventListener('click', () => {
    recognition.start();
    micButton.style.backgroundColor = 'red';
  });

  recognition.addEventListener('result', (event) => {
    const transcript = event.results[0][0].transcript;
    searchInput.value = transcript;
    searchForm.dispatchEvent(new Event('submit'));
  });

  recognition.addEventListener('end', () => {
    micButton.style.backgroundColor = '';
  });

  recognition.addEventListener('error', (e) => {
    console.error('Speech recognition error:', e.error);
  });
}

displayHistory();
renderVideos(videoData);
let usersVideo = JSON.parse(localStorage.getItem('newVideo'));
console.log('Users video:', usersVideo);
localStorage.clear();