let youtubeLogo = document.querySelector('.header__icon');
youtubeLogo.addEventListener('click',function(){
  location.reload();
});

let videosUl = document.querySelector('.main-list__item');
let searchInput = document.querySelector('.header__input');
searchInput.addEventListener('input',function(){
  let filteredVideo = videoData.filter((el)=>el.title.toLowerCase().includes(searchInput.value.toLowerCase()));
  renderVideos(filteredVideo);
});
function renderVideos(videosArray){
  videosUl.innerHTML = ``;
}