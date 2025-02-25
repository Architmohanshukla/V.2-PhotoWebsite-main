// Gallery Data for All Pages
const galleries = {
    nature: [
        { src: 'nature/nature1.webp', caption: 'Nature 1', meta: '2023, Oregon' },
        { src: 'nature/Nature2.webp', caption: 'Nature 2', meta: '2022, Colorado' },
        { src: 'nature/nature6.webp', caption: 'Nature 6', meta: '2023, Vermont' },
        { src: 'nature/Nature7.webp', caption: 'Nature 7', meta: '2024, Alps' },
        { src: 'nature/Nature11.webp', caption: 'Nature 11', meta: '2023, California' },
        { src: 'nature/nature102.webp', caption: 'Nature 102', meta: '2022, Brazil' },
        { src: 'nature/nature103.webp', caption: 'Nature 103', meta: '2023, Montana' },
        { src: 'nature/nightskynature.webp', caption: 'Night Sky Nature', meta: '2024, Canada' },
        { src: 'nature/Nat2.webp', caption: 'Nature 2 Alternate', meta: '2023, Japan' },
        { src: 'nature/nat4.webp', caption: 'Nature 4', meta: '2022, Florida' },
        { src: 'nature/nat5.webp', caption: 'Nature 5', meta: '2023, Ireland' },
        { src: 'nature/nature_flower.webp', caption: 'Flower Nature', meta: '2024, Scotland' },
        { src: 'nature/Nature_flowerwhite.webp', caption: 'White Flower', meta: '2023, New Zealand' },
        { src: 'nature/nature_roseflower.webp', caption: 'Rose Flower', meta: '2022, Hawaii' },
        { src: 'nature/nature_Squirell.webp', caption: 'Squirrel Nature', meta: '2024, Norway' }
    ],
    landscape: [
        { src: 'landscape/landscape_scape.webp', caption: 'Landscape Scape', meta: '2023, Iceland' },
        { src: 'landscape/Landscape2.webp', caption: 'Landscape 2', meta: '2022, Sahara' },
        { src: 'landscape/Landscape3.webp', caption: 'Landscape 3', meta: '2024, Himalayas' },
        { src: 'landscape/Landscape4.webp', caption: 'Landscape 4', meta: '2023, Ireland' },
        { src: 'landscape/landscape5.webp', caption: 'Landscape 5', meta: '2022, Tuscany' },
        { src: 'landscape/landscape6.webp', caption: 'Landscape 6', meta: '2023, Kansas' },
        { src: 'landscape/Landscape9.webp', caption: 'Landscape 9', meta: '2024, Alaska' },
        { src: 'landscape/landscape10.webp', caption: 'Landscape 10', meta: '2022, Utah' },
        { src: 'landscape/Landscape101.webp', caption: 'Landscape 101', meta: '2023, Canada' },
        { src: 'landscape/ls1.webp', caption: 'Landscape Short 1', meta: '2024, Switzerland' },
        { src: 'landscape/ls2.webp', caption: 'Landscape Short 2', meta: '2022, Germany' },
        { src: 'landscape/ls3.webp', caption: 'Landscape Short 3', meta: '2023, Patagonia' },
        { src: 'landscape/ls4.webp', caption: 'Landscape Short 4', meta: '2024, Maine' },
        { src: 'landscape/ls5.webp', caption: 'Landscape Short 5', meta: '2022, Montana' },
        { src: 'landscape/Landscape_nightsky.webp', caption: 'Night Sky Landscape', meta: '2023, Nepal' }
    ],
    portrait: [
        { src: 'portraits/couplePortraits.webp', caption: 'Couple Portrait 1', meta: '2023, Paris' },
        { src: 'portraits/CouplePortraits02.webp', caption: 'Couple Portrait 2', meta: '2022, Tokyo' },
        { src: 'portraits/couplePortraits03.webp', caption: 'Couple Portrait 3', meta: '2024, New York' },
        { src: 'portraits/Dance_Portrait01.webp', caption: 'Dance Portrait 1', meta: '2023, London' },
        { src: 'portraits/Dance_Portrait02.webp', caption: 'Dance Portrait 2', meta: '2022, Mumbai' },
        { src: 'portraits/Dance_portrait03.webp', caption: 'Dance Portrait 3', meta: '2023, Sydney' },
        { src: 'portraits/Dance_portrait04.webp', caption: 'Dance Portrait 4', meta: '2024, Lisbon' },
        { src: 'portraits/Dance_portrait05.webp', caption: 'Dance Portrait 5', meta: '2022, Berlin' },
        { src: 'portraits/Dance_portrait06.webp', caption: 'Dance Portrait 6', meta: '2023, Rome' },
        { src: 'portraits/Dance_portrait07.webp', caption: 'Dance Portrait 7', meta: '2024, Seoul' },
        { src: 'portraits/friends.webp', caption: 'Friends 1', meta: '2022, Cape Town' },
        { src: 'portraits/friends02.webp', caption: 'Friends 2', meta: '2023, Bali' },
        { src: 'portraits/incrowd.webp', caption: 'In Crowd', meta: '2024, Barcelona' },
        { src: 'portraits/monkey_portrait01.webp', caption: 'Monkey Portrait 1', meta: '2022, Havana' },
        { src: 'portraits/portrait_dog.webp', caption: 'Dog Portrait', meta: '2023, Vancouver' }
    ],
    abstract: [
        { src: 'abstract/Lightning1_ab.webp', caption: 'Lightning 1', meta: '2023, Storm' },
        { src: 'abstract/Lightning2_ab.webp', caption: 'Lightning 2', meta: '2022, Night' },
        { src: 'abstract/Lightning3_ab.webp', caption: 'Lightning 3', meta: '2024, Field' },
        { src: 'abstract/Lightning4.webp', caption: 'Lightning 4', meta: '2023, Sky' },
        { src: 'abstract/lightning5.webp', caption: 'Lightning 5', meta: '2022, Horizon' },
        { src: 'abstract/Abs1.webp', caption: 'Abstract 1', meta: '2023, Studio' },
        { src: 'abstract/Abs2.webp', caption: 'Abstract 2', meta: '2022, Digital' },
        { src: 'abstract/Abs3.webp', caption: 'Abstract 3', meta: '2024, Canvas' },
        { src: 'abstract/Abs4.webp', caption: 'Abstract 4', meta: '2023, Light' },
        { src: 'abstract/abs5.webp', caption: 'Abstract 5', meta: '2022, Motion' },
        { src: 'abstract/Moon_abstract.webp', caption: 'Moon Abstract', meta: '2023, Night' },
        { src: 'abstract/abstract_lightning.webp', caption: 'Abstract Lightning', meta: '2024, Experiment' },
        { src: 'abstract/abstract_phototrail.webp', caption: 'Photo Trail', meta: '2022, Trail' },
        { src: 'abstract/Abstract_Stiry.webp', caption: 'Stiry Abstract', meta: '2023, Studio' },
        { src: 'abstract/abstract2.webp', caption: 'Abstract 2 Alternate', meta: '2024, Alternate' }
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
