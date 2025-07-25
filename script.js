//display year dynamically
const year = document.getElementById("year");
year.innerHTML= new Date().getFullYear();


// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});


// Highlight active section in navbar
function setActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            const id = '#' + section.id;
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === id) {
                    link.classList.add('active');
                }
            });
        }
    });
}


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
            
            // Scroll to target
            window.scrollTo({
                top: targetElement.offsetTop - 64,
                behavior: 'smooth'
            });
            
            // Update active link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Check active section on scroll
window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);



// Artwork modal functionality
const artworkData = {
//acrylics
    '1': {
        title: 'Behind The Scene',
        medium: 'Acrylic on canvas',
        // description: 'This piece explores the texture and movement found in natural landscapes. Thick impasto techniques create a tactile surface that changes with the light throughout the day.',
        size: '65 x 103',
        // year: '2023',
        availability: 'Available',
        price: '$750',
        image: './images/acrylics/Behind the scene.jpg',
        dataCategory: 'acrylic'
    },
    '2': {
        title: 'Balehager',
        medium: 'Mixed media on Canvas, 2025',
        // description: 'The ever-changing moods of the sea captured in fluid washes. This piece evokes the sensory experience of standing at the water\'s edge.',
        size: '80 x 100',
        year: '2025',
        availability: 'Available',
        price: '$800',
        image: './images/mixed medias/Balehager.jpg',
        dataCategory: 'mixed-media'
    },
    '3': {
        title: 'Gates of Heaven',
        medium: 'Acrylic on canvas',
        // description: 'Cityscapes mirrored in rain-soaked streets at twilight. This work captures the fleeting moments of urban beauty that often go unnoticed in our daily routines.',
        size: '40 x 84',
        // year: '2022',
        availability: 'Available',
        price: '$550',
        image: './images/acrylics/Gates of Heaven.jpg',
        dataCategory: 'acrylic'
    },
    '4': {
        title: 'Guilt',
        medium: 'Mixed media on Canvas, 2024',
        // description: 'The ever-changing moods of the sea captured in fluid washes. This piece evokes the sensory experience of standing at the water\'s edge.',
        size: '150 x 200',
        year: '2024',
        availability: 'Available',
        price: '$800',
        image: './images/mixed medias/guilt.jpg',
        dataCategory: 'mixed-media'
    },
    '5': {
        title: 'Helping Hands',
        medium: 'Acrylic on Canvas',
        // description: 'Delicate blooms captured with transparent washes. This series explores the ephemeral nature of flowers through the fluid medium of watercolor.',
        size: '77 x 94',
        // year: '2023',
        availability: 'Available',
        price: '$800',
        image: './images/acrylics/Helping Hands.jpg',
        dataCategory: 'acrylic'
    },
    '6': {
        title: 'Walking Forward',
        medium: 'Mixed media on Canvas, 2024',
        // description: 'The ever-changing moods of the sea captured in fluid washes. This piece evokes the sensory experience of standing at the water\'s edge.',
        size: '60 x 80',
        year: '2024',
        availability: 'Available',
        price: '$800',
        image: './images/mixed medias/walking forward.jpg',
        dataCategory: 'mixed-media'
    },
    '7': {
        title: 'Hymns of Semen',
        medium: 'Acrylic on Canvas',
        // description: 'A study of light and shadow in portraiture. The subject\'s introspective gaze invites viewers to share in a moment of quiet reflection.',
        size: '200 x 100',
        year: '2023',
        availability: 'Private Collection',
        // not sure
        price: 'NFS',
        image: './images/acrylics/hymns of semen.jpg',
        dataCategory: 'acrylic'
    },
    '8': {
        title: 'Weaving Bread',
        medium: 'Mixed media on Canvas, 2024',
        // description: 'The ever-changing moods of the sea captured in fluid washes. This piece evokes the sensory experience of standing at the water\'s edge.',
        size: '150 x 100',
        year: '2024',
        availability: 'Available',
        price: '$800',
        image: './images/mixed medias/waving bread.jpg',
        dataCategory: 'mixed-media'
    },
    '9': {
        title: 'Mother Land',
        medium: 'Acrylic on Canvas, 2023',
        // description: 'Bold color fields exploring emotional resonance. This abstract composition uses layered glazes to create depth and luminosity.',
        // not sure size
        size: '70 x 80',
        year: '2023',
        availability: 'Available',
        // not sure price
        price: '500',
        image: './images/acrylics/mother land.jpg',
        dataCategory: 'acrylic'
    },
    '10': {
        title: 'Ethiopian Color',
        medium: 'Mixed media on Canvas, 2024',
        // description: 'The ever-changing moods of the sea captured in fluid washes. This piece evokes the sensory experience of standing at the water\'s edge.',
        size: '150 x 100',
        year: '2024',
        availability: 'Available',
        price: '$800',
        image: './images/figurative/ethiopian-color2-eyayu-genet.jpg',
        dataCategory: 'mixed-media'
    },
    '11': {
        title: 'Reconciliation',
        medium: 'Acrylic on Canvas, 2023',
        // description: 'The ever-changing moods of the sea captured in fluid washes. This piece evokes the sensory experience of standing at the water\'s edge.',
        size: '100 x 100',
        year: '2023',
        availability: 'Available',
        price: '$800',
        image: './images/acrylics/Reconciliation main.jpg',
        dataCategory: 'acrylic'
    }
//mixed medias
};


const galleryContainer = document.getElementById("gallery-container");
Object.entries(artworkData).forEach(([key, value]) => {
    galleryContainer.innerHTML += `
        <div class="artwork-item group relative overflow-hidden rounded-lg shadow-lg" data-category="${value.dataCategory}">
            <img src="${value.image}" alt="${value.title}" class="w-full h-80 object-cover">
            <div class="artwork-overlay absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-6">
                <h3 class="text-white text-xl font-bold mb-2">${value.title}</h3>
                <p class="text-gray-300 text-sm mb-4">${value.medium}</p>
                <!-- <p class="text-gray-200 text-center mb-4">An exploration of texture and movement in natural landscapes</p> 
                <button class="view-detail-btn bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300" data-id="${key}">View Details</button>-->
            </div>
        </div>
    `
})



// Gallery filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const artworkItems = document.querySelectorAll('.artwork-item');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Update active button
        filterButtons.forEach(btn => {
            btn.classList.remove('bg-amber-100', 'text-amber-700');
            btn.classList.add('bg-white', 'text-gray-700');
        });
        
        this.classList.remove('bg-white', 'text-gray-700');
        this.classList.add('bg-amber-100', 'text-amber-700');
        
        // Filter artworks
        const filter = this.getAttribute('data-filter');
        
        artworkItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});




// Gallery Modal Functionality
const modal = document.getElementById('galleryModal');
const modalImg = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeModal = document.querySelector('.close');

artworkItems.forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = 'flex';
        const img = item.querySelector('img');
        const overlay = item.querySelector('.gallery-overlay');
        
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modalCaption.innerHTML = overlay.innerHTML;
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});





// const modal = document.getElementById('artwork-modal');
// const closeModal = document.getElementById('close-modal');
// const viewDetailButtons = document.querySelectorAll('.view-detail-btn');

// viewDetailButtons.forEach(button => {
//     button.addEventListener('click', function() {
//         const artworkId = this.getAttribute('data-id');
//         const artwork = artworkData[artworkId];
        
//         if (artwork) {
//             document.getElementById('modal-title').textContent = artwork.title;
//             document.getElementById('modal-medium').textContent = artwork.medium;
//             document.getElementById('modal-description').textContent = artwork.description;
//             document.getElementById('modal-size').textContent = artwork.size;
//             document.getElementById('modal-year').textContent = artwork.year;
//             document.getElementById('modal-availability').textContent = artwork.availability;
//             document.getElementById('modal-price').textContent = artwork.price;
//             document.getElementById('modal-image').src = artwork.image;
//             document.getElementById('modal-image').alt = artwork.title;
            
//             modal.classList.remove('hidden');
//             document.body.style.overflow = 'hidden';
//         }
//     });
// });

// closeModal.addEventListener('click', function() {
//     modal.classList.add('hidden');
//     document.body.style.overflow = 'auto';
// });

// Close modal when clicking outside content
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-md');
        nav.classList.remove('bg-opacity-90');
        nav.classList.add('bg-opacity-95');
    } else {
        nav.classList.remove('shadow-md');
        nav.classList.add('bg-opacity-90');
        nav.classList.remove('bg-opacity-95');
    }
});

// Animate elements when they come into view
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

//form submission
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.reset()
})