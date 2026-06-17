// Generate all journal entries from June 20 to August 14, 2026
function generateEntries() {
    const startDate = new Date(2026, 5, 20); // June 20, 2026
    const endDate = new Date(2026, 7, 14);   // August 14, 2026
    
    const container = document.querySelector('.container');
    const lastEntry = container.querySelector('.last-entry');
    
    // Remove placeholder entries and keep track of them
    const placeholders = Array.from(container.querySelectorAll('.journal-entry:not(.last-entry)'));
    placeholders.forEach(entry => entry.remove());
    
    // Remove the last entry temporarily
    container.removeChild(lastEntry);
    
    let currentDate = new Date(startDate);
    let entryCount = 0;
    
    while (currentDate <= endDate) {
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        const monthNames = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];
        const monthName = monthNames[month];
        
        const entry = createEntryElement(day, monthName, year);
        container.appendChild(entry);
        entryCount++;
        
        currentDate.setDate(currentDate.getDate() + 1);
    }
    
    // Add the last entry back at the end
    container.appendChild(lastEntry);
    
    // Update trip summary
    const tripSummary = document.querySelector('.trip-summary');
    if (tripSummary) {
        const totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
        tripSummary.textContent = `${totalDays} days of adventure, discovery, and unforgettable moments!`;
    }
}

function createEntryElement(day, monthName, year) {
    const entry = document.createElement('article');
    entry.className = 'journal-entry';
    
    const weatherOptions = [
        '☀️ Sunny',
        '⛅ Partly Cloudy',
        '☁️ Cloudy',
        '🌧️ Rainy',
        '🌞 Very Sunny',
        '🌤️ Mostly Sunny'
    ];
    
    const randomWeather = weatherOptions[Math.floor(Math.random() * weatherOptions.length)];
    const tempRange = Math.floor(Math.random() * 8) + 24; // 24-32°C
    
    entry.innerHTML = `
        <div class="entry-header">
            <h2 class="entry-date">📅 ${monthName} ${day}, ${year}</h2>
            <div class="entry-meta">
                <span class="weather">${randomWeather}, ${tempRange}°C</span>
            </div>
        </div>

        <div class="entry-section">
            <h3 class="section-title">📍 Locations</h3>
            <p class="entry-text">[Enter locations visited today]</p>
        </div>

        <div class="entry-section">
            <h3 class="section-title">🎯 Events & Activities</h3>
            <p class="entry-text">[Describe the events and activities of the day]</p>
        </div>

        <div class="entry-section weather-section">
            <h3 class="section-title">🌤️ Weather</h3>
            <p class="entry-text">[Weather conditions and temperature details]</p>
        </div>

        <div class="entry-section food-section">
            <h3 class="section-title">🍽️ Food Adventures</h3>
            <ul class="food-list">
                <li>[Meal or dish eaten]</li>
                <li>[Meal or dish eaten]</li>
            </ul>
        </div>

        <div class="entry-section">
            <h3 class="section-title">👥 People Met</h3>
            <p class="entry-text">[Names and descriptions of interesting people you met]</p>
        </div>

        <div class="entry-section emotion-section">
            <h3 class="section-title">💭 How I Felt Today</h3>
            <p class="entry-text">[Your emotions and feelings about today]</p>
        </div>

        <div class="entry-section">
            <h3 class="section-title">✨ Other Highlights</h3>
            <p class="entry-text">[Other memorable moments or thoughts]</p>
        </div>

        <div class="entry-section photos-section">
            <h3 class="section-title">📸 Moments Captured</h3>
            <div class="photos-grid">
                <div class="photo-placeholder">
                    <span class="photo-text">Add photo</span>
                </div>
            </div>
        </div>
    `;
    
    return entry;
}

// Generate entries when the page loads
document.addEventListener('DOMContentLoaded', generateEntries);
