// Timezone data with flags and info
const timezones = [
    {
        name: 'New York',
        timezone: 'America/New_York',
        flag: '🗽',
        utcOffset: 'UTC-5 (EST) / UTC-4 (EDT)'
    },
    {
        name: 'London',
        timezone: 'Europe/London',
        flag: '🇬🇧',
        utcOffset: 'UTC+0 (GMT) / UTC+1 (BST)'
    },
    {
        name: 'Paris',
        timezone: 'Europe/Paris',
        flag: '🗼',
        utcOffset: 'UTC+1 (CET) / UTC+2 (CEST)'
    },
    {
        name: 'Tokyo',
        timezone: 'Asia/Tokyo',
        flag: '🗾',
        utcOffset: 'UTC+9 (JST)'
    },
    {
        name: 'Sydney',
        timezone: 'Australia/Sydney',
        flag: '🦘',
        utcOffset: 'UTC+10 (AEDT) / UTC+11'
    },
    {
        name: 'Dubai',
        timezone: 'Asia/Dubai',
        flag: '🏙️',
        utcOffset: 'UTC+4 (GST)'
    },
    {
        name: 'Singapore',
        timezone: 'Asia/Singapore',
        flag: '🦁',
        utcOffset: 'UTC+8 (SGT)'
    },
    {
        name: 'Hong Kong',
        timezone: 'Asia/Hong_Kong',
        flag: '🏮',
        utcOffset: 'UTC+8 (HKT)'
    },
    {
        name: 'Mumbai',
        timezone: 'Asia/Kolkata',
        flag: '🇮🇳',
        utcOffset: 'UTC+5:30 (IST)'
    },
    {
        name: 'São Paulo',
        timezone: 'America/Sao_Paulo',
        flag: '🇧🇷',
        utcOffset: 'UTC-3 (BRT) / UTC-2'
    },
    {
        name: 'Los Angeles',
        timezone: 'America/Los_Angeles',
        flag: '🌴',
        utcOffset: 'UTC-8 (PST) / UTC-7 (PDT)'
    },
    {
        name: 'Toronto',
        timezone: 'America/Toronto',
        flag: '🍁',
        utcOffset: 'UTC-5 (EST) / UTC-4 (EDT)'
    },
    {
        name: 'Mexico City',
        timezone: 'America/Mexico_City',
        flag: '🌮',
        utcOffset: 'UTC-6 (CST) / UTC-5 (CDT)'
    },
    {
        name: 'Bangkok',
        timezone: 'Asia/Bangkok',
        flag: '🏯',
        utcOffset: 'UTC+7 (ICT)'
    },
    {
        name: 'Istanbul',
        timezone: 'Europe/Istanbul',
        flag: '🕌',
        utcOffset: 'UTC+3 (EAT)'
    },
    {
        name: 'Moscow',
        timezone: 'Europe/Moscow',
        flag: '🇷🇺',
        utcOffset: 'UTC+3 (MSK)'
    }
];

let currentFormat = '24'; // '24' or '12'
let filteredTimezones = [...timezones];

// Format time function
function formatTime(date, format) {
    if (format === '24') {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
    } else {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
    }
}

// Get period (AM/PM) for 12-hour format
function getPeriod(date) {
    return date.getHours() >= 12 ? 'PM' : 'AM';
}

// Rotate analog clock hands
function rotateHands(card, date) {
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours() % 12;

    const secondHand = card.querySelector('.second-hand');
    const minuteHand = card.querySelector('.minute-hand');
    const hourHand = card.querySelector('.hour-hand');

    secondHand.style.transform = `rotate(${seconds * 6}deg)`;
    minuteHand.style.transform = `rotate(${minutes * 6 + seconds * 0.1}deg)`;
    hourHand.style.transform = `rotate(${hours * 30 + minutes * 0.5}deg)`;
}

// Create clock card
function createClockCard(tzData) {
    const card = document.createElement('div');
    card.className = 'clock-card';
    card.dataset.timezone = tzData.timezone;

    card.innerHTML = `
        <div class="timezone-header">
            <div class="timezone-info">
                <div class="timezone-name">${tzData.name}</div>
                <div class="timezone-offset">${tzData.utcOffset}</div>
            </div>
            <div class="city-flag">${tzData.flag}</div>
        </div>

        <div class="analog-clock">
            <div class="hand hour-hand"></div>
            <div class="hand minute-hand"></div>
            <div class="hand second-hand"></div>
            <div class="clock-center"></div>
        </div>

        <div class="digital-display">
            <div class="time-display">00:00:00</div>
            <div class="time-period">AM</div>
        </div>

        <div class="clock-info">
            <div class="info-item">
                <div class="info-label">Date</div>
                <div class="info-value">--/--</div>
            </div>
            <div class="info-item">
                <div class="info-label">Day</div>
                <div class="info-value">---</div>
            </div>
        </div>
    `;

    return card;
}

// Update clock
function updateClock(card) {
    const timezone = card.dataset.timezone;
    const date = new Date(new Date().toLocaleString('en-US', { timeZone: timezone }));

    // Update digital display
    const timeDisplay = card.querySelector('.time-display');
    const timePeriod = card.querySelector('.time-period');
    timeDisplay.textContent = formatTime(date, currentFormat);
    timePeriod.textContent = getPeriod(date);

    // Update date and day
    const dateValue = card.querySelector('.info-item:nth-child(1) .info-value');
    const dayValue = card.querySelector('.info-item:nth-child(2) .info-value');
    
    dateValue.textContent = date.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit'
    });
    
    dayValue.textContent = date.toLocaleDateString('en-US', {
        weekday: 'short'
    });

    // Rotate analog clock hands
    rotateHands(card, date);
}

// Update all clocks
function updateAllClocks() {
    const cards = document.querySelectorAll('.clock-card');
    cards.forEach(card => updateClock(card));
}

// Render clocks
function renderClocks() {
    const grid = document.getElementById('clocksGrid');
    grid.innerHTML = '';

    if (filteredTimezones.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>No timezones found</p>
            </div>
        `;
        return;
    }

    filteredTimezones.forEach(tz => {
        const card = createClockCard(tz);
        grid.appendChild(card);
        updateClock(card);
    });
}

// Search functionality
function filterTimezones(searchTerm) {
    const term = searchTerm.toLowerCase();
    filteredTimezones = timezones.filter(tz =>
        tz.name.toLowerCase().includes(term) ||
        tz.timezone.toLowerCase().includes(term) ||
        tz.utcOffset.toLowerCase().includes(term)
    );
    renderClocks();
}

// Event listeners
document.getElementById('searchInput').addEventListener('input', (e) => {
    filterTimezones(e.target.value);
});

document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFormat = btn.dataset.view;
        updateAllClocks();
    });
});

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    renderClocks();
    
    // Update clocks every second
    setInterval(updateAllClocks, 1000);
});

// Update immediately when page becomes visible
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        updateAllClocks();
    }
});