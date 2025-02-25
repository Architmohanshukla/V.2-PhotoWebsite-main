// Gallery Data for All Pages
const galleries = {
    nature: [
        { src: 'images/nature/nature1.webp', caption: 'Forest Glow' },
        { src: 'images/nature/nature_sleepingsquirel.jpg', caption: 'River Bend' },
        { src: 'images/nature/nature103.jpeg', caption: 'Leaf Dance' },
        { src: 'images/nature/nature6.jpeg', caption: 'Mountain Mist' },
        { src: 'images/nature/Nature7.JPG', caption: 'Wildflower Bloom' },
        { src: 'images/nature/Nature_flowerwhite.jpeg', caption: 'Sunset Canopy' },
        { src: 'images/nature/nature_roseflower.jpeg', caption: 'Creek Whisper' },
        { src: 'images/nature/nature8.webp', caption: 'Pine Shadows' },
        { src: 'images/nature/nature9.webp', caption: 'Dew Drops' },
        { src: 'images/nature/nature10.webp', caption: 'Bird Haven' },
        { src: 'images/nature/nature11.webp', caption: 'Green Veil' },
        { src: 'images/nature/nature12.webp', caption: 'Stone Path' },
        { src: 'images/nature/nature13.webp', caption: 'Twilight Ferns' },
        { src: 'images/nature/nature14.webp', caption: 'Ocean Breeze' },
        { src: 'images/nature/nature15.webp', caption: 'Skyward Roots' }
    ],
    landscape: [
        { src: 'images/landscape/Landscape.jpg', caption: 'Horizon Line' },
        { src: 'images/landscape/land2.webp', caption: 'Desert Dunes' },
        { src: 'images/landscape/landscape3.webp', caption: 'Mountain Pass' },
        { src: 'images/landscape/landscape4.webp', caption: 'Ocean Cliff' },
        { src: 'images/landscape/landscape5.webp', caption: 'Rolling Hills' },
        { src: 'images/landscape/Landscape 6.jpg', caption: 'Golden Plain' },
        { src: 'images/landscape/landscape 7.webp', caption: 'Snowy Peak' },
        { src: 'images/landscape/landscape8.webp', caption: 'Canyon Echo' },
        { src: 'images/landscape/landscape9.webp', caption: 'Lake Mirror' },
        { src: 'images/landscape/Landscape_nightsky.jpg', caption: 'Dawn Valley' },
        { src: 'images/landscape/landscape11.webp', caption: 'Forest Edge' },
        { src: 'images/landscape/landscape12.webp', caption: 'Sky Sweep' },
        { src: 'images/landscape/landscape_clouds.webp', caption: 'Rocky Shore' },
        { src: 'images/landscape/landscape14.webp', caption: 'Twilight Range' },
        { src: 'images/landscape/landscape15.webp', caption: 'Endless Path' }
    ],
    portrait: [
        { src: 'images/portrait/portrait1.webp', caption: 'Quiet Gaze' },
        { src: 'images/portrait/portrait2.webp', caption: 'Soft Smile' },
        { src: 'images/portrait/portrait3.webp', caption: 'Deep Eyes' },
        { src: 'images/portrait/portrait4.webp', caption: 'Bold Stare' },
        { src: 'images/portrait/portrait5.webp', caption: 'Gentle Soul' },
        { src: 'images/portrait/portrait6.webp', caption: 'Lost Thought' },
        { src: 'images/portrait/portrait7.webp', caption: 'Warm Light' },
        { src: 'images/portrait/portrait8.webp', caption: 'Shadow Play' },
        { src: 'images/portrait/portrait9.webp', caption: 'Timeless Face' },
        { src: 'images/portrait/portrait10.webp', caption: 'Silent Muse' },
        { src: 'images/portrait/portrait11.webp', caption: 'Fading Glow' },
        { src: 'images/portrait/portrait12.webp', caption: 'Inner Peace' },
        { src: 'images/portrait/portrait13.webp', caption: 'Golden Hour' },
        { src: 'images/portrait/portrait14.webp', caption: 'Raw Emotion' },
        { src: 'images/portrait/portrait15.webp', caption: 'Still Moment' }
    ],
    abstract: [
        { src: 'images/abstract/abstract1.webp', caption: 'Color Burst' },
        { src: 'images/abstract/abstract2.webp', caption: 'Blurred Lines' },
        { src: 'images/abstract/abstract3.webp', caption: 'Fractured Light' },
        { src: 'images/abstract/abstract4.webp', caption: 'Echo Shapes' },
        { src: 'images/abstract/abstract5.webp', caption: 'Dream Haze' },
        { src: 'images/abstract/abstract6.webp', caption: 'Twist Flow' },
        { src: 'images/abstract/abstract7.webp', caption: 'Shadow Dance' },
        { src: 'images/abstract/abstract8.webp', caption: 'Vivid Void' },
        { src: 'images/abstract/abstract9.webp', caption: 'Ripple Pulse' },
        { src: 'images/abstract/abstract10.webp', caption: 'Chaos Bloom' },
        { src: 'images/abstract/abstract11.webp', caption: 'Faint Echo' },
        { src: 'images/abstract/abstract12.webp', caption: 'Soft Vortex' },
        { src: 'images/abstract/abstract13.webp', caption: 'Lost Form' },
        { src: 'images/abstract/abstract14.webp', caption: 'Glow Shift' },
        { src: 'images/abstract/abstract15.webp', caption: 'Infinite Drift' }
    ]
};

// Determine Current Page
const currentPage = document.body.dataset.page || 'nature';
const galleryImages = galleries[currentPage];

// Masonry Layout Function
function createMasonry() {
    const galleryGrid = document.querySelector('.gallery-grid');
    galleryGrid.innerHTML = '';

    const columnCount = window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3;
    const columnHeights = Array(columnCount).fill(0);
    const columnWidth = (galleryGrid.offsetWidth - (columnCount - 1) * 15) / columnCount;

    galleryImages.forEach(image => {
        const div = document.createElement('div');
        div.classList.add('gallery-item');
        div.innerHTML = `
            <img src="${image.src}" alt="${image.caption}" loading="lazy" data-full="${image.src}">
            <span>${image.caption}</span>
            <div class="metadata">${image.meta}</div>
        `;
        galleryGrid.appendChild(div);

        const img = div.querySelector('img');
        img.addEventListener('load', () => {
            positionItem(div, columnHeights, columnWidth, columnCount);
        });

        if (img.complete) {
            positionItem(div, columnHeights, columnWidth, columnCount);
        }
    });
}

function positionItem(item, columnHeights, columnWidth, columnCount) {
    const minHeightIndex = columnHeights.indexOf(Math.min(...columnHeights));
    item.style.width = `${columnWidth}px`;
    item.style.left = `${minHeightIndex * (columnWidth + 15)}px`;
    item.style.top = `${columnHeights[minHeightIndex]}px`;
    columnHeights[minHeightIndex] += item.offsetHeight + 15;
    const galleryGrid = document.querySelector('.gallery-grid');
    galleryGrid.style.height = `${Math.max(...columnHeights)}px`;
}

// Gentle Reveal Scroll Effect
function revealItems() {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50 && rect.bottom > 0) {
            item.classList.add('visible');
        }
    });
}

// Scroll Progress
function updateScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = `${progress}%`;
}

// Full Image Viewer with Outside Click
const fullViewer = document.getElementById('fullViewer');
const fullImage = document.getElementById('fullImage');
const imageCaption = document.getElementById('imageCaption');
const closeViewer = document.querySelector('.close-viewer');

document.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (item) {
        const img = item.querySelector('img');
        fullImage.src = img.dataset.full;
        imageCaption.textContent = img.alt;
        fullViewer.style.display = 'flex';
        setTimeout(() => fullViewer.classList.add('active'), 10);
    } else if (fullViewer.style.display === 'flex' && !e.target.closest('#fullImage') && !e.target.closest('.close-viewer')) {
        fullViewer.classList.remove('active');
        setTimeout(() => fullViewer.style.display = 'none', 400);
    }
});

closeViewer.addEventListener('click', () => {
    fullViewer.classList.remove('active');
    setTimeout(() => fullViewer.style.display = 'none', 400);
});

// Scroll Direction Detection for Header
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 50) {
        header.classList.add('scrolled-down');
        header.classList.remove('scrolled-up');
    } else if (currentScroll < lastScroll) {
        header.classList.add('scrolled-up');
        header.classList.remove('scrolled-down');
    }
    lastScroll = currentScroll;

    revealItems();
    updateScrollProgress();
});

// Initial Load
createMasonry();
window.addEventListener('resize', createMasonry);
window.addEventListener('load', () => {
    revealItems();
    updateScrollProgress();
});

// Lazy Loading Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
}, { rootMargin: '100px' });

document.querySelectorAll('img[loading="lazy"]').forEach(img => observer.observe(img));
