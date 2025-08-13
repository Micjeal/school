// News page functionality

document.addEventListener('DOMContentLoaded', function() {
    loadAllNews();
});

// Load all news articles with premium features
function loadAllNews() {
    const newsContainer = document.getElementById('news-container');
    if (!newsContainer) return;
    
    if (typeof showPremiumLoading === 'function') {
        showPremiumLoading(newsContainer);
    } else {
        showLoading(newsContainer);
    }
    
    // Sort news by date (newest first)
    const sortedNews = newsData.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    if (sortedNews.length === 0) {
        newsContainer.innerHTML = '<p class="text-center">No news articles available at the moment.</p>';
        return;
    }
    
    const newsHTML = sortedNews.map((news, index) => `
        <article class="card fade-in ${news.featured ? 'premium-card' : ''}" style="animation-delay: ${index * 0.1}s">
            ${news.featured ? '<div class="premium-badge">Featured</div>' : ''}
            <img src="${news.img}" alt="${news.title}" class="card-img" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmOGY5ZmEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlMmU4ZjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzAwMzM2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPvCfk7AgTmV3cyBJbWFnZTwvdGV4dD48L3N2Zz4='">
            <div class="card-content">
                <div class="news-category" style="background: var(--secondary-gold); color: var(--primary-blue); padding: 4px 12px; border-radius: 12px; font-size: 0.8rem; font-weight: 600; display: inline-block; margin-bottom: 1rem;">${news.category || 'News'}</div>
                <h2 class="card-title gradient-text">${news.title}</h2>
                <p class="card-meta">
                    📅 <time datetime="${news.date}">${formatDate(news.date)}</time>
                </p>
                <p class="card-text">${news.excerpt}</p>
                <button class="btn btn-premium" onclick="openNewsModal(${news.id})" aria-label="Read full article: ${news.title}">
                    Read Full Article
                </button>
            </div>
        </article>
    `).join('');
    
    newsContainer.innerHTML = newsHTML;
    addFadeInAnimation();
}

// Open news modal with enhanced content
function openNewsModal(newsId) {
    const news = newsData.find(item => item.id === newsId);
    if (!news) return;
    
    const modalContent = `
        <div class="modal-header">
            <div class="news-category" style="background: var(--secondary-gold); color: var(--primary-blue); padding: 4px 12px; border-radius: 12px; font-size: 0.8rem; font-weight: 600; display: inline-block; margin-bottom: 1rem;">${news.category || 'News'}</div>
            <time class="modal-meta" datetime="${news.date}">${formatDate(news.date)}</time>
        </div>
        <div class="modal-body">
            ${news.img ? `<img src="${news.img}" alt="${news.title}" class="modal-image" style="width: 100%; height: 250px; object-fit: cover; border-radius: 12px; margin-bottom: 1.5rem;">` : ''}
            <div class="modal-text" style="line-height: 1.7; font-size: 1.05rem;">${news.content}</div>
        </div>
    `;
    
    if (typeof openPremiumModal === 'function') {
        openPremiumModal(news.title, modalContent);
    } else {
        openModal(news.title, modalContent);
    }
}