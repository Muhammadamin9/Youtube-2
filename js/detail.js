let detailWrapper = document.querySelector("detail__wrapper");
let recomendVideos = document.querySelector("detail__recomend-videos");

let params = new URLSearchParams(window.location.search);
let id = params.get("id");
