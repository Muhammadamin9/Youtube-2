let detailWrapper = document.querySelector("detail__wrapper");
let recomendVideos = document.querySelector("detail__recomend-videos");

let params = new URLSearchParams(window.location.search);
let id = params.get("id");
let find = products.find((el) => el.id === id);
detailWrapper.innerHTML = `
 <div class="detail__video">
        <iframe class="detail__video-screen" src="https://www.youtube.com/embed/8RBm0qKOmHY" frameborder="0"></iframe>
     </div>
`