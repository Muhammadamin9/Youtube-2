let videoForm = document.querySelector('.create-video__platform');
let videoName = document.querySelector('.video-name');
let channelName = document.querySelector('.channel-name');
let videoCategory = document.querySelector('.video-category');
let id = 9;

videoForm.addEventListener('submit', function(e) {
  e.preventDefault();

  if (
    videoCategory.value.trim() === '' ||
    videoName.value.trim() === '' ||
    channelName.value.trim() === ''
  ) {
    return;
  }

  let newObject = {
    title: videoName.value,
    channel: channelName.value,
    category: videoCategory.value,
    id: id++,
    views: 0,
    uploaded: 'Now',
    duration: '00:01:00',
    thumbnail: "thumbnails/whiteFone.jpg",
    channelPhoto: "img/Profile-pic.svg",
  };

  videoData.push(newObject);
  localStorage.setItem('newObject', JSON.stringify(newObject));
  console.log(newObject);
});