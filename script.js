$(document).ready(function() {
    const videoGrid = $('#video-grid');
    
    // Mock data for Billie Eilish videos
    const videos = [
        { views: '2.4M', img: 'https://picsum.photos/seed/be1/400/600' },
        { views: '10.1M', img: 'https://picsum.photos/seed/be2/400/600' },
        { views: '5.6M', img: 'https://picsum.photos/seed/be3/400/600' },
        { views: '1.2M', img: 'https://picsum.photos/seed/be4/400/600' },
        { views: '8.9M', img: 'https://picsum.photos/seed/be5/400/600' },
        { views: '15M', img: 'https://picsum.photos/seed/be6/400/600' },
        { views: '4.2M', img: 'https://picsum.photos/seed/be7/400/600' },
        { views: '7.3M', img: 'https://picsum.photos/seed/be8/400/600' }
    ];

    // Function to render videos
    function renderVideos() {
        videoGrid.empty();
        videos.forEach(video => {
            const videoHTML = `
                <div class="col-6 col-md-4 col-lg-3 mb-2">
                    <div class="video-card">
                        <img src="${video.img}" alt="TikTok Video">
                        <div class="video-overlay">
                            <svg width="18" height="18" fill="white" viewBox="0 0 48 48"><path d="M16 10v28l22-14z"></path></svg>
                            <span>${video.views}</span>
                        </div>
                    </div>
                </div>
            `;
            videoGrid.append(videoHTML);
        });
    }

    renderVideos();

    // Tab Switching logic
    $('.tab-item').on('click', function() {
        $('.tab-item').removeClass('active-tab text-dark').addClass('text-secondary');
        $(this).addClass('active-tab text-dark').removeClass('text-secondary');
        
        // Simple animation effect on grid refresh
        videoGrid.fadeOut(200, function() {
            renderVideos();
            videoGrid.fadeIn(200);
        });
    });
});
