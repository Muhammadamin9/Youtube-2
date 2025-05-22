

let youtubeLogo = document.querySelector('.header__icon');
youtubeLogo.addEventListener('click',function(){
  location.reload();
});

let videosUl = document.querySelector('.main-list__videos');
let searchInput = document.querySelector('.header__input');
searchInput.addEventListener('input',function(){
  let filteredVideo = videoData.filter((el)=>el.title.toLowerCase().includes(searchInput.value.toLowerCase()));
  renderVideos(filteredVideo);
});
function renderVideos(videosArray){
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
            </div>
          </div>
        </div>
      </li> 
      `
    );
  });
}



let mainVideos = document.querySelector('.main-list__videos')
function display(arr){
arr.forEach(el => {
  mainVideos.insertAdjacentHTML(
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
<p class="chanel-name"> ${el.channel}</p>
<div class="video-info">
<p class="video-viwes">${el.views} </p>
<p class="video-time">${el.uploaded}</p>
</div>
</div>
</div>
</li> 
    `
  )
});
}
display(videoData);
display(videoData);

let historyUl = document.querySelector('.history-ul');