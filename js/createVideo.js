videoData = videoData || JSON.parse(localStorage.getItem('videoData')) || [];
let i = videoData.length;
const createVideoForm = document.getElementById('upload-btn');
const titleInput = document.getElementById('video-title');
const categoryInput = document.getElementById('video-category');
const channelInput = document.getElementById('channel-name');

function saveToLocalStorage() {
  localStorage.setItem('videoData', JSON.stringify(videoData));
}

createVideoForm.addEventListener('submit', () => {
  const title = titleInput.value.trim();
  const category = categoryInput.value;
  const channel = channelInput.value.trim();

  if (!title || !category || !channel) {
    alert('Please fill in all fields');
    return;
  }

  const newVideo = {
    id: ++i,
    title,
    category,
    channel,
  };

  videoData.push(newVideo);
  saveToLocalStorage();
  titleInput.value = '';
  categoryInput.value = ''; 
  channelInput.value = '';
});

const gotCreatedVideo = JSON.parse(localStorage.getItem('videoData'));
console.log(gotCreatedVideo);
