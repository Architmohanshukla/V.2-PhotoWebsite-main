  // Initialize Masonry after images have loaded
  window.addEventListener('load', function() {
    var gallery = document.querySelector('.masonry-layout');
    var masonry = new Masonry(gallery, {
        itemSelector: '.photo',
        columnWidth: '.photo',
        gutter: 20 // Adjust gutter as needed
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling behavior
    });
}

// Function to navigate to the home page
function goHome() {
    // Add logic to navigate to the home page here
    window.location.href = "Y:\Portfolio_website\portfolio.html"; // Replace "index.html" with the URL of your home page
}

// Function to animate the house icon
function animateHouse() {
    // Add visual effects, such as changing colors or adding sparkles, here
    // For example, you can add a class to the house icon to trigger CSS animations
    const houseIcon = document.querySelector('.house');
    houseIcon.classList.add('animate'); // Add a CSS class to trigger animations
}

// Add event listeners to the house icon for click and mouseover events
document.addEventListener('DOMContentLoaded', function() {
    const houseIcon = document.querySelector('.house-container');

    // Add click event listener to navigate to the home page
    houseIcon.addEventListener('click', function() {
        goHome();
    });

    // Add mouseover event listener to animate the house icon
    houseIcon.addEventListener('mouseover', function() {
        animateHouse();
    });
});

// Attach the scroll-to-top function to the scroll event
window.addEventListener('scroll', function () {
    var scrollButton = document.querySelector('.scroll-to-top');

    // Show or hide the scroll-to-top button based on the scroll position
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = 'block';
        scrollButton.style.opacity = '1'; // Set opacity to 1 for fade-in effect
    } else {
        scrollButton.style.opacity = '0'; // Set opacity to 0 for fade-out effect
        setTimeout(function () {
            scrollButton.style.display = 'none';
        }, 300); // Delay hiding to allow for the fade-out effect
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('img.lazy');
    const lazyLoad = (target) => {
        if (target.isIntersecting) {
            const img = target.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(lazyLoad);
    });
    
    lazyImages.forEach(img => observer.observe(img));
});


    document.addEventListener("DOMContentLoaded", function() {
        var modal = document.getElementById("myModal");
        var modalImg = document.getElementById("modalImg");
        var captionText = document.getElementById("caption");
        var modalContentWrapper = document.querySelector(".modal-content-wrapper");
    
        document.querySelectorAll('.photo').forEach(photo => {
            photo.addEventListener('click', function() {
                var img = this.querySelector('img');
                modal.style.display = "block";
                modalImg.src = img.src;
                captionText.innerHTML = img.alt;
            });
        });
    
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
    
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() { 
            modal.style.display = "none";
            modalImg.style.transform = "scale(1)";
            modalImg.style.cursor = "zoom-in";
        }
    
        // When the user clicks anywhere outside of the modal content, close the modal
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                modalImg.style.transform = "scale(1)";
                modalImg.style.cursor = "zoom-in";
            }
        }
    
        // Add zoom functionality
        modalImg.onclick = function() {
            if (modalImg.style.transform === "scale(2)") {
                modalImg.style.transform = "scale(1)";
                modalImg.style.cursor = "zoom-in";
            } else {
                modalImg.style.transform = "scale(2)";
                modalImg.style.cursor = "zoom-out";
            }
        }
    });
    