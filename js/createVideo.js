let videoForm = document.querySelector('.create-video__platform');
let videoName = document.querySelector('.video-name');
let channelName = document.querySelector('.channel-name');
let videoCategory = document.querySelector('.video-category');
let id = 9;
let currentDate = new Date();
videoForm.addEventListener('submit', function (e) {
  e.preventDefault(); 

   let newObject = {
   
  };
  if(videoCategory.value == '' || videoName.value == '' || channelName.value == ''){
    return
  }else{
    newObject = {
    title: videoName.value,
    channel: channelName.value,
    category: videoCategory.value,
    id: id++,
    views: 0,
    uploaded:'Now',
    duration:'00:01:00',
    thumbnail:"thumbnails/whiteFone.jpg",
    channelPhoto:"img/Profile-pic.svg",
    }
    localStorage.setItem('newObject',newObject);

  }
  console.log(newObject);
  videoData.push(newObject);
  console.log(videoData);
  let newObjectGot = localStorage.getItem('newObject');
  console.log(newObjectGot);
});
