// Gallery Data for All Pages
const galleries = {
    nature: [
        { src: 'nature/nature1.webp', caption: 'Forest Glow' },
        { src: 'nature/nature_sleepingsquirel.jpg', caption: 'River Bend' },
        { src: 'nature/nature103.jpeg', caption: 'Leaf Dance' },
        { src: 'nature/nature6.jpeg', caption: 'Mountain Mist' },
        { src: 'nature/Nature7.JPG', caption: 'Wildflower Bloom' },
        { src: 'nature/Nature_flowerwhite.jpeg', caption: 'Sunset Canopy' },
        { src: 'nature/nature_roseflower.jpeg', caption: 'Creek Whisper' },
        { src: 'nature/nature8.webp', caption: 'Pine Shadows' },
        { src: 'nature/nature9.webp', caption: 'Dew Drops' },
        { src: 'nature/nature10.webp', caption: 'Bird Haven' },
        { src: 'nature/nature11.webp', caption: 'Green Veil' },
        { src: 'nature/nature12.webp', caption: 'Stone Path' },
        { src: 'nature/nature13.webp', caption: 'Twilight Ferns' },
        { src: 'nature/nature14.webp', caption: 'Ocean Breeze' },
        { src: 'nature/nature15.webp', caption: 'Skyward Roots' }
    ],
    landscape: [
        { src: 'landscape/Landscape.jpg', caption: 'Horizon Line' },
        { src: 'landscape/land2.webp', caption: 'Desert Dunes' },
        { src: 'landscape/landscape3.webp', caption: 'Mountain Pass' },
        { src: 'landscape/landscape4.webp', caption: 'Ocean Cliff' },
        { src: 'landscape/landscape5.webp', caption: 'Rolling Hills' },
        { src: 'landscape/Landscape 6.jpg', caption: 'Golden Plain' },
        { src: 'landscape/landscape 7.webp', caption: 'Snowy Peak' },
        { src: 'landscape/landscape8.webp', caption: 'Canyon Echo' },
        { src: 'landscape/landscape9.webp', caption: 'Lake Mirror' },
        { src: 'landscape/Landscape_nightsky.jpg', caption: 'Dawn Valley' },
        { src: 'landscape/landscape11.webp', caption: 'Forest Edge' },
        { src: 'landscape/landscape12.webp', caption: 'Sky Sweep' },
        { src: 'landscape/landscape_clouds.webp', caption: 'Rocky Shore' },
        { src: 'landscape/landscape14.webp', caption: 'Twilight Range' },
        { src: 'landscape/landscape15.webp', caption: 'Endless Path' }
    ],
    portrait: [
        { src: 'portraits/portrait01.webp', caption: 'Quiet Gaze' },
        { src: 'portraits/portrait02.webp', caption: 'Soft Smile' },
        { src: 'portraits/portrait03.webp', caption: 'Deep Eyes' },
        { src: 'portraits/portrait04.webp', caption: 'Bold Stare' },
        { src: 'portraits/portrait05.webp', caption: 'Gentle Soul' },
        { src: 'portraits/portrait06.webp', caption: 'Lost Thought' },
        { src: 'portraits/portrait07.webp', caption: 'Warm Light' },
        { src: 'portraits/portrait08.webp', caption: 'Shadow Play' },
        { src: 'portraits/portrait09.webp', caption: 'Timeless Face' },
        { src: 'portraits/portrait10.webp', caption: 'Silent Muse' },
        { src: 'portraits/portrait11.webp', caption: 'Fading Glow' },
        { src: 'portraits/portrait12.webp', caption: 'Inner Peace' },
        { src: 'portraits/portrait13.webp', caption: 'Golden Hour' },
        { src: 'portraits/portrait14.webp', caption: 'Raw Emotion' },
        { src: 'portraits/portrait15.webp', caption: 'Still Moment' }
    ],
    abstract: [
        { src: 'abstract/abstract1.webp', caption: 'Color Burst' },
        { src: 'abstract/abstract2.webp', caption: 'Blurred Lines' },
        { src: 'abstract/abstract3.webp', caption: 'Fractured Light' },
        { src: 'abstract/abstract4.webp', caption: 'Echo Shapes' },
        { src: 'abstract/abstract5.webp', caption: 'Dream Haze' },
        { src: 'abstract/abstract6.webp', caption: 'Twist Flow' },
        { src: 'abstract/abstract7.webp', caption: 'Shadow Dance' },
        { src: 'abstract/abstract8.webp', caption: 'Vivid Void' },
        { src: 'abstract/abstract9.webp', caption: 'Ripple Pulse' },
        { src: 'abstract/abstract10.webp', caption: 'Chaos Bloom' },
        { src: 'abstract/abstract11.webp', caption: 'Faint Echo' },
        { src: 'abstract/abstract12.webp', caption: 'Soft Vortex' },
        { src: 'abstract/abstract13.webp', caption: 'Lost Form' },
        { src: 'abstract/abstract14.webp', caption: 'Glow Shift' },
        { src: 'abstract/abstract15.webp', caption: 'Infinite Drift' }
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
