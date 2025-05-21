const wrapper = document.querySelector(".wrapper");

videoData.forEach((el) => {
  wrapper.insertAdjacentHTML(
    "beforeend",
    ` 
      <h1>${el.title}</h1>
        <img src="${el.thumbnail}" alt="" />
  
      <p>${el.channel}</p>
      <img src="${el.channelPhoto}" alt="" />
    `
  );
});
