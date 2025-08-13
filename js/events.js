// Events page functionality

document.addEventListener('DOMContentLoaded', function() {
    loadAllEvents();
});

// Load all events
function loadAllEvents() {
    const eventsContainer = document.getElementById('events-container');
    if (!eventsContainer) return;
    
    showLoading(eventsContainer);
    
    // Sort events by date (upcoming first)
    const sortedEvents = sortEventsByDate(eventsData);
    const today = new Date();
    
    // Separate upcoming and past events
    const upcomingEvents = sortedEvents.filter(event => new Date(event.date) >= today);
    const pastEvents = sortedEvents.filter(event => new Date(event.date) < today);
    
    if (sortedEvents.length === 0) {
        eventsContainer.innerHTML = '<p class="text-center">No events available at the moment.</p>';
        return;
    }
    
    let eventsHTML = '';
    
    // Add upcoming events section
    if (upcomingEvents.length > 0) {
        eventsHTML += '<h3 class="section-subtitle">Upcoming Events</h3>';
        eventsHTML += '<div class="grid grid-2 mb-2">';
        eventsHTML += upcomingEvents.map(event => createEventCard(event, 'upcoming')).join('');
        eventsHTML += '</div>';
    }
    
    // Add past events section
    if (pastEvents.length > 0) {
        eventsHTML += '<h3 class="section-subtitle">Past Events</h3>';
        eventsHTML += '<div class="grid grid-2">';
        eventsHTML += pastEvents.reverse().map(event => createEventCard(event, 'past')).join('');
        eventsHTML += '</div>';
    }
    
    eventsContainer.innerHTML = eventsHTML;
    addFadeInAnimation();
}

// Create event card HTML
function createEventCard(event, type) {
    const isPast = type === 'past';
    const cardClass = isPast ? 'card event-past' : 'card event-upcoming';
    
    return `
        <article class="${cardClass} fade-in">
            <div class="card-content">
                <h2 class="card-title">${event.name}</h2>
                <div class="event-details">
                    <p class="event-date">
                        <strong>📅 Date:</strong> 
                        <time datetime="${event.date}">${formatDate(event.date)}</time>
                        ${isPast ? '<span class="event-status past">Past Event</span>' : '<span class="event-status upcoming">Upcoming</span>'}
                    </p>
                    <p class="event-location">
                        <strong>📍 Location:</strong> ${event.location}
                    </p>
                </div>
                <p class="card-text">${event.description}</p>
                <button class="btn ${isPast ? 'btn-secondary' : 'btn-primary'}" 
                        onclick="openEventModal(${event.id})" 
                        aria-label="View details for ${event.name}">
                    ${isPast ? 'View Details' : 'Learn More'}
                </button>
            </div>
        </article>
    `;
}

// Open event modal with full details
function openEventModal(eventId) {
    const event = eventsData.find(item => item.id === eventId);
    if (!event) return;
    
    const eventDate = new Date(event.date);
    const today = new Date();
    const isPast = eventDate < today;
    
    const modalContent = `
        <div class="modal-header">
            <div class="event-meta">
                <p><strong>📅 Date:</strong> <time datetime="${event.date}">${formatDate(event.date)}</time></p>
                <p><strong>📍 Location:</strong> ${event.location}</p>
                <p class="event-status ${isPast ? 'past' : 'upcoming'}">
                    ${isPast ? '✓ Past Event' : '🔜 Upcoming Event'}
                </p>
            </div>
        </div>
        <div class="modal-body">
            <div class="modal-text">${event.description}</div>
            ${!isPast ? `
                <div class="event-actions mt-2">
                    <p><em>Mark your calendar and don't miss this event!</em></p>
                </div>
            ` : ''}
        </div>
    `;
    
    openModal(event.name, modalContent);
}