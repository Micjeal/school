// Academics page functionality

document.addEventListener('DOMContentLoaded', function() {
    initFilterButtons();
    loadAllPrograms();
});

// Initialize filter buttons
function initFilterButtons() {
    const filterContainer = document.getElementById('filter-buttons');
    if (!filterContainer) return;
    
    const categories = ['all', 'primary', 'secondary', 'special'];
    const categoryLabels = {
        all: 'All Programs',
        primary: 'Primary',
        secondary: 'Secondary',
        special: 'Special Programs'
    };
    
    const buttonsHTML = categories.map(category => `
        <button class="filter-btn ${category === 'all' ? 'active' : ''}" 
                data-filter="${category}"
                onclick="filterPrograms('${category}')">
            ${categoryLabels[category]}
        </button>
    `).join('');
    
    filterContainer.innerHTML = buttonsHTML;
}

// Load all academic programs
function loadAllPrograms() {
    const programsContainer = document.getElementById('programs-container');
    if (!programsContainer) return;
    
    showLoading(programsContainer);
    
    if (programsData.length === 0) {
        programsContainer.innerHTML = '<p class="text-center">No academic programs available at the moment.</p>';
        return;
    }
    
    renderPrograms(programsData);
}

// Render programs
function renderPrograms(programs) {
    const programsContainer = document.getElementById('programs-container');
    if (!programsContainer) return;
    
    const programsHTML = programs.map(program => `
        <div class="card program-card fade-in" data-category="${program.category}">
            <div class="card-content">
                <h2 class="card-title">${program.title}</h2>
                <div class="program-level">
                    <span class="level-badge level-${program.category}">${program.level}</span>
                </div>
                <p class="card-text">${program.description}</p>
                <button class="btn btn-primary" 
                        onclick="openProgramModal(${program.id})"
                        aria-label="Learn more about ${program.title}">
                    Learn More
                </button>
            </div>
        </div>
    `).join('');
    
    programsContainer.innerHTML = programsHTML;
    addFadeInAnimation();
}

// Filter programs by category
function filterPrograms(category) {
    // Update active button
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === category) {
            btn.classList.add('active');
        }
    });
    
    // Filter and render programs
    let filteredPrograms;
    if (category === 'all') {
        filteredPrograms = programsData;
    } else {
        filteredPrograms = programsData.filter(program => program.category === category);
    }
    
    // Add fade out effect
    const programCards = document.querySelectorAll('.program-card');
    programCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
    });
    
    // Render filtered programs after animation
    setTimeout(() => {
        renderPrograms(filteredPrograms);
    }, 300);
}

// Open program modal with detailed information
function openProgramModal(programId) {
    const program = programsData.find(item => item.id === programId);
    if (!program) return;
    
    // Extended program information (in a real app, this would come from a more detailed data source)
    const extendedInfo = getExtendedProgramInfo(program);
    
    const modalContent = `
        <div class="modal-header">
            <div class="program-meta">
                <span class="level-badge level-${program.category}">${program.level}</span>
            </div>
        </div>
        <div class="modal-body">
            <div class="modal-text">
                <p>${program.description}</p>
                ${extendedInfo}
            </div>
        </div>
    `;
    
    openModal(program.title, modalContent);
}

// Get extended program information
function getExtendedProgramInfo(program) {
    const programDetails = {
        1: { // Early Years Foundation
            curriculum: "Play-based learning, phonics, numeracy basics, creative arts",
            duration: "3 years (Ages 3-6)",
            classSize: "Maximum 15 students per class",
            facilities: "Dedicated playground, sensory room, art studio"
        },
        2: { // Primary Education
            curriculum: "English, Mathematics, Science, Social Studies, Arts, Physical Education",
            duration: "6 years (Ages 6-12)",
            classSize: "Maximum 25 students per class",
            facilities: "Science lab, library, computer lab, sports facilities"
        },
        3: { // Secondary Education
            curriculum: "Core subjects plus electives, exam preparation, career guidance",
            duration: "4-6 years (Ages 12-18)",
            classSize: "Maximum 30 students per class",
            facilities: "Advanced labs, library, career counseling center"
        },
        4: { // International Baccalaureate
            curriculum: "IB Diploma Programme with six subject groups",
            duration: "2 years (Ages 16-19)",
            classSize: "Maximum 20 students per class",
            facilities: "Dedicated IB center, research facilities, university prep center"
        },
        5: { // STEM Program
            curriculum: "Advanced Science, Technology, Engineering, Mathematics",
            duration: "Available across all levels",
            classSize: "Maximum 20 students per class",
            facilities: "Robotics lab, 3D printing, coding lab, maker space"
        },
        6: { // Arts & Creative Studies
            curriculum: "Visual arts, music, drama, creative writing, digital media",
            duration: "Available across all levels",
            classSize: "Maximum 15 students per class",
            facilities: "Art studios, music rooms, theater, recording studio"
        }
    };
    
    const details = programDetails[program.id];
    if (!details) return '';
    
    return `
        <div class="program-details mt-2">
            <h4>Program Details</h4>
            <ul>
                <li><strong>Curriculum:</strong> ${details.curriculum}</li>
                <li><strong>Duration:</strong> ${details.duration}</li>
                <li><strong>Class Size:</strong> ${details.classSize}</li>
                <li><strong>Facilities:</strong> ${details.facilities}</li>
            </ul>
        </div>
    `;
}