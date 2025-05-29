

    let trendVideos = document.querySelector('.trend-videos');

    function displayTopTrendingVideos() {
        const topVideos = videoData.slice().sort((a, b) => {a.views - b.views}).slice(0, 8);

        trendVideos.innerHTML = '';
        
        if (topVideos.length === 0) {
            trendVideos.innerHTML = '<li class="trend-videos__empty">No trending videos available</li>';
            return;
        }

        topVideos.forEach((el) => {
            trendVideos.insertAdjacentHTML(
                'beforeend',
                `
                <li class="trend-videos__item">
                    <a href="detail.html?id=${el.id}">
                        <div class="thumbnail-section">
                            <img class="trend-img" src="${el.thumbnail}" alt="${el.title}">
                            <div class="video-duration">${el.duration}</div>
                        </div>
                        <div class="trend-info">
                            <img class="channel-info" src="${el.channelPhoto}" alt="${el.channel}">
                            <div class="trend-about__video">
                                <p class="video-title">${el.title}</p>
                                <p class="chanel-name">${el.channel}</p>
                                <div class="video-about">
                                    <p class="video-views">${el.views}</p>
                                    <p class="video-uploaded">${el.uploaded}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                `
            );
        });
    }

    if (trendVideos) {
        displayTopTrendingVideos();
    }

