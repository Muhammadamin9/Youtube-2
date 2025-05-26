let exploreList = document.querySelector(".explore__list");

let exploreArr = [...videoData];
console.log(exploreArr);

function renderVideo(videoArray) {
  exploreList.innerHTML = ``;
  videoArray.forEach((el) => {
    exploreList.innerHTML += `
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
    `;
  });
}
renderVideo(exploreArr);
