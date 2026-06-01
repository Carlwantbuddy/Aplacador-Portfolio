// Project data
const projects = [
    {
        name: "Aplacador Portfolio",
        language: "Portfolio",
        description: "Personal portfolio website showcasing all projects and skills.",
        url: "https://github.com/Carlwantbuddy/Aplacador-Portfolio"
    },
    {
        name: "Digital Clock - Multiple Timezones",
        language: "Web App",
        description: "Beautiful interactive digital clock displaying current time across 16 different timezones with analog and digital displays.",
        url: "./clock/index.html"
    },
    {
        name: "Transaction Management & Concurrency Control",
        language: "HTML",
        description: "Understanding and implementing transaction management concepts with concurrency control mechanisms.",
        url: "https://github.com/Carlwantbuddy/IT223--TRANSACTION-MANAGEMENT-AND-CONCURRENCY-CONTROL"
    },
    {
        name: "KFC Task 2",
        language: "HTML",
        description: "Web-based task implementation for KFC project.",
        url: "https://github.com/Carlwantbuddy/IT223-KFC-TASK-2"
    },
    {
        name: "Query Optimization",
        language: "Database",
        description: "Query optimization techniques and best practices for database performance.",
        url: "https://github.com/Carlwantbuddy/IT223-QO"
    },
    {
        name: "Stored Procedures",
        language: "SQL",
        description: "Creating and managing stored procedures for efficient database operations.",
        url: "https://github.com/Carlwantbuddy/IT223-TASK1-CREATING-STORED-PROCEDURES"
    },
    {
        name: "PHP Task 2",
        language: "PHP",
        description: "PHP-based web application development.",
        url: "https://github.com/Carlwantbuddy/IT223-TASK2"
    },
    {
        name: "Employee Salary Comparison",
        language: "HTML",
        description: "Stored procedures for comparing and analyzing employee salary data.",
        url: "https://github.com/Carlwantbuddy/IT223-TASK2---Store-Procedures-Comparing-Employee-Salary-"
    },
    {
        name: "Creating Views",
        language: "SQL",
        description: "Database views creation and optimization for data presentation.",
        url: "https://github.com/Carlwantbuddy/IT223-TASK2-CREATING-VIEWS"
    },
    {
        name: "PHP Task 3",
        language: "PHP",
        description: "Advanced PHP web development project.",
        url: "https://github.com/Carlwantbuddy/IT223-TASK3"
    },
    {
        name: "KFC Week 3 Task 1",
        language: "HTML",
        description: "Week 3 KFC project implementation.",
        url: "https://github.com/Carlwantbuddy/IT223-W3T1-KFC"
    },
    {
        name: "Creating Triggers",
        language: "SQL",
        description: "Database trigger creation and management for automated tasks.",
        url: "https://github.com/Carlwantbuddy/IT223-W4-T1-CREATING-TRIGGERS"
    },
    {
        name: "Video Recording",
        language: "HTML",
        description: "Video recording and playback implementation.",
        url: "https://github.com/Carlwantbuddy/IT223-W4T2-VIDEO-RECORDING"
    },
    {
        name: "Week 3 Task 3",
        language: "PHP",
        description: "Advanced PHP project from week 3.",
        url: "https://github.com/Carlwantbuddy/IT223-WEEK3_TASK3-"
    }
];

// Populate projects grid
function populateProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-header">
                <span class="project-language">${project.language}</span>
                <h3 class="project-title">${project.name}</h3>
            </div>
            <div class="project-body">
                <p class="project-description">${project.description}</p>
                <a href="${project.url}" target="_blank" class="project-link">
                    <i class="fab fa-github"></i> View Repository
                </a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    populateProjects();
});
