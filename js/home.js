// Homepage specific functionality

document.addEventListener('DOMContentLoaded', function() {
    loadLatestNews();
    loadUpcomingEvents();
    initTestimonialSlider();
});

// Load latest news for homepage with premium features
function loadLatestNews() {
    const newsContainer = document.getElementById('latest-news');
    if (!newsContainer) return;
    
    // Show premium loading
    showPremiumLoading(newsContainer);
    
    setTimeout(() => {
        const latestNews = getLatestNews(newsData, 3);
        
        if (latestNews.length === 0) {
            newsContainer.innerHTML = '<p class="text-center">No news available at the moment.</p>';
            return;
        }
        
        const newsHTML = latestNews.map((news, index) => `
            <div class="card fade-in premium-card" style="animation-delay: ${index * 0.1}s">
                ${index === 0 ? '<div class="premium-badge">Featured</div>' : ''}
                <img src="${news.img}" alt="${news.title}" class="card-img" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmOGY5ZmEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlMmU4ZjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzAwMzM2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPvCfk7AgTmV3cyBJbWFnZTwvdGV4dD48L3N2Zz4='">
                <div class="card-content">
                    <h3 class="card-title gradient-text">${news.title}</h3>
                    <p class="card-meta">📅 ${formatDate(news.date)}</p>
                    <p class="card-text">${news.excerpt}</p>
                    <a href="#" class="btn btn-premium" onclick="openPremiumModal('${news.title}', '${news.content}', '${news.img}')">Read More</a>
                </div>
            </div>
        `).join('');
        
        newsContainer.innerHTML = newsHTML;
        addFadeInAnimation();
    }, 1000);
}

// Load upcoming events for homepage with premium features
function loadUpcomingEvents() {
    const eventsContainer = document.getElementById('upcoming-events');
    if (!eventsContainer) return;
    
    // Show premium loading
    showPremiumLoading(eventsContainer);
    
    setTimeout(() => {
        const upcomingEvents = getUpcomingEvents(eventsData, 3);
        
        if (upcomingEvents.length === 0) {
            eventsContainer.innerHTML = '<p class="text-center">No upcoming events at the moment.</p>';
            return;
        }
        
        const eventsHTML = upcomingEvents.map((event, index) => `
            <div class="card fade-in floating-element" style="animation-delay: ${index * 0.15}s">
                <div class="card-content">
                    <div class="icon-feature-icon" style="font-size: 2.5rem; text-align: center; margin-bottom: 1rem;">🎉</div>
                    <h3 class="card-title gradient-text">${event.name}</h3>
                    <p class="card-meta">
                        <strong>📅 Date:</strong> ${formatDate(event.date)}<br>
                        <strong>📍 Location:</strong> ${event.location}
                    </p>
                    <p class="card-text">${event.description}</p>
                    <a href="#" class="btn btn-premium" onclick="openPremiumModal('${event.name}', '<p><strong>Date:</strong> ${formatDate(event.date)}</p><p><strong>Location:</strong> ${event.location}</p><p>${event.description}</p>')">Learn More</a>
                </div>
            </div>
        `).join('');
        
        eventsContainer.innerHTML = eventsHTML;
        addFadeInAnimation();
    }, 1200);
}

// Open news modal
function openNewsModal(newsId) {
    const news = newsData.find(item => item.id === newsId);
    if (news) {
        openModal(news.title, `
            <p class="modal-meta">${formatDate(news.date)}</p>
            <div class="modal-text">${news.content}</div>
        `, news.img);
    }
}

// Open event modal
function openEventModal(eventId) {
    const event = eventsData.find(item => item.id === eventId);
    if (event) {
        openModal(event.name, `
            <p class="modal-meta">
                <strong>Date:</strong> ${formatDate(event.date)}<br>
                <strong>Location:</strong> ${event.location}
            </p>
            <div class="modal-text">${event.description}</div>
        `);
    }
}

// Testimonial slider
function initTestimonialSlider() {
    const slider = document.querySelector('.testimonial-slider');
    if (!slider || !testimonialsData.length) return;
    
    let currentSlide = 0;
    const totalSlides = testimonialsData.length;
    
    // Create testimonial HTML
    const testimonialsHTML = testimonialsData.map((testimonial, index) => `
        <div class="testimonial-slide ${index === 0 ? 'active' : ''}" data-slide="${index}">
            <blockquote>
                <p>"${testimonial.text}"</p>
                <footer>
                    <strong>${testimonial.name}</strong><br>
                    <span>${testimonial.role}</span>
                </footer>
            </blockquote>
        </div>
    `).join('');
    
    slider.innerHTML = `
        <div class="testimonial-container">
            ${testimonialsHTML}
        </div>
        <div class="testimonial-nav">
            ${testimonialsData.map((_, index) => `
                <button class="testimonial-dot ${index === 0 ? 'active' : ''}" data-slide="${index}"></button>
            `).join('')}
        </div>
    `;
    
    // Navigation functionality
    const dots = slider.querySelectorAll('.testimonial-dot');
    const slides = slider.querySelectorAll('.testimonial-slide');
    
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.dataset.slide);
            showSlide(slideIndex);
        });
    });
    
    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentSlide = index;
    }
    
    // Auto-advance slides
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 5000);
}