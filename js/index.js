


let historyUl = document.querySelector('.history-ul');
let form = document.querySelector('form');
let videosUl = document.querySelector('.main-list__videos');
let searchInput = document.querySelector('.header__input');
let youtubeLogo = document.querySelector('.header__icon');
let createButton = document.querySelector('.header__create-button');
let listIcon = document.querySelector('.header-list__icon');
let count = 0 || JSON.parse(localStorage.getItem('count'));

listIcon.addEventListener('click',function(){
  if(count % 2 == 0 ){
  heroFilter.setAttribute('style','display:none');

  }
  heroFilter.setAttribute('style','display:inline-block');
  count++;
  JSON.stringify(localStorage.setItem('count',count));
  console.log(count);
})
let heroFilter = document.querySelector('.hero__filter');
youtubeLogo.addEventListener('click',function(){
  location.reload();
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
      form.dispatchEvent(new Event('submit'));
    });

    historyUl.appendChild(li);
    searchInput.addEventListener('focus',function(){
      historyUl.setAttribute('style','display:inline-block');
    })
  });
 
}
searchInput.addEventListener('focus',displayHistory);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const inputValue = searchInput.value.trim();
  if (inputValue === "") return;

  let filteredVideo = videoData.filter((el) =>
    el.title.toLowerCase().includes(inputValue.toLowerCase())
  );
  renderVideos(filteredVideo);

  if (!searchHistory.includes(inputValue)) {
    searchHistory.push(inputValue);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }
  displayHistory();
});
searchInput.addEventListener('blur', () => {
  setTimeout(() => {
    historyUl.style.display = 'none';
  }, 200);
});

if(searchHistory.length>=10){
  searchHistory.shift();

}

displayHistory();

function renderVideos(videosArray) {
  videosUl.innerHTML = ``;
  videosArray.forEach(el => {
    videosUl.insertAdjacentHTML(
      "beforeend",
      `
      <li class="main-list__item">
        <div class="img-section">
          <div class="img">
            <img class="item-img" src="${el.thumbnail}" alt="">
          </div>
          <div class="video-size">${el.duration}</div>
        </div>
        <div class="text-section">
          <div class="img-section2">
            <img class="video-avatar" src="${el.channelPhoto}" alt="">
          </div>
          <div class="text-section2">
            <p class="video-name">${el.title}</p>
            <p class="chanel-name">${el.channel}</p>
            <div class="video-info">
              <p class="video-viwes">${el.views}</p>
              <p class="video-time">${el.uploaded}</p>
                  <button class="watch__later-icon">👍</button>

            </div>
          </div>
        </div>
      </li>
      `
    );
  });
}

renderVideos(videoData);  
const micButton = document.querySelector('.header__mic-button');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.lang = 'uz-UZ'; 
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  micButton.addEventListener('click', () => {
    recognition.start();
    micButton.setAttribute('style','background-color:red;');
  });

  recognition.addEventListener('result', (event) => {
    const transcript = event.results[0][0].transcript;
    
    searchInput.value = transcript;
   
    form.dispatchEvent(new Event('submit'));

  });

  recognition.addEventListener('end', () => {
  });

  recognition.addEventListener('error', (e) => {
    console.error( e.error);
  });
} 
videoItem = document.querySelector('.main-list__item');
videoItem.addEventListener('click',function(){

});
if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US'; 
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  micButton.addEventListener('click', () => {
    recognition.start();
    micButton.setAttribute('style','background-color:red;');
  });

  recognition.addEventListener('result', (event) => {
    const transcript = event.results[0][0].transcript;
    
    searchInput.value = transcript;
   
    form.dispatchEvent(new Event('submit'));

  });

  recognition.addEventListener('end', () => {
  });

  recognition.addEventListener('error', (e) => {
    console.error( e.error);
  });
} 
let videoItem = document.querySelector('.main-list__item');
videoItem.addEventListener('click',function(){
  
});


let watchLater = document.querySelector('.watch__later-icon');
let isVideoInWatchLater;
watchLater.addEventListener('click',function(){
isVideoInWatchLater=true;
});





















