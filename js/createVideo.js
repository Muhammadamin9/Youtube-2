let i = videoData.length; 
const createVideoForm = document.getElementById('upload-btn');
const titleInput = document.getElementById('video-title');
const categoryInput = document.getElementById('video-category');
const channeNameInput = document.getElementById('channel-name');
const channelPhotoInput = document.getElementById('channel-photo');
const videoPosterInput = document.getElementById('video-poster');
createVideoForm.addEventListener('submit', () => {
  const title = titleInput.value.trim();
  const category = categoryInput.value;
  const channelName = channeNameInput.value.trim();
  const channelPhoto = channelPhotoInput.value.trim();
  const videoPoster = videoPosterInput.value.trim();
  const videoDuration = '1:00';
  const videoViews = '0';
  const videoUploaded = 'now';
  const newVideo = {
    id: ++i,
    title:title,
    category:category,
    channelName:channelName,
    channelPhoto:channelPhoto,
    thumbnail:videoPoster,
    duration:videoDuration,
    views:videoViews,
    uploaded:videoUploaded,
  };

  videoData.push(newVideo);
  saveToLocalStorage();
  titleInput.value = '';
  categoryInput.value = ''; 
  channelInput.value = '';
  channeNameInput.value = '';
  channelPhotoInput.value = '';

});

const gotCreatedVideo = JSON.parse(localStorage.getItem('videoData'));
console.log(gotCreatedVideo);
