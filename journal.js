// Greece 2026 Journal - Day-by-day interactive viewer
class JournalApp {
    constructor() {
        this.startDate = new Date(2026, 5, 20); // June 20, 2026
        this.endDate = new Date(2026, 7, 14);   // August 14, 2026
        this.currentIndex = 0;
        this.entries = this.generateAllEntries();
        this.init();
    }

    generateAllEntries() {
        const entries = [];
        let currentDate = new Date(this.startDate);
        
        while (currentDate <= this.endDate) {
            entries.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }
        
        return entries;
    }

    formatDate(date) {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                          'July', 'August', 'September', 'October', 'November', 'December'];
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${month} ${day}, ${year}`;
    }

    getWeatherForDay(index) {
        const weatherOptions = [
            { emoji: '☀️', text: 'Sunny' },
            { emoji: '⛅', text: 'Partly Cloudy' },
            { emoji: '☁️', text: 'Cloudy' },
            { emoji: '🌧️', text: 'Rainy' },
            { emoji: '🌞', text: 'Very Sunny' },
            { emoji: '🌤️', text: 'Mostly Sunny' }
        ];
        
        // Use index as seed for consistent weather per day
        const weather = weatherOptions[index % weatherOptions.length];
        const temp = Math.floor((index % 9) + 24); // 24-32°C
        
        return `${weather.emoji} ${weather.text}, ${temp}°C`;
    }

    createEntryHTML(index) {
        const date = this.entries[index];
        const formattedDate = this.formatDate(date);
        const weather = this.getWeatherForDay(index);
        const isLastDay = index === this.entries.length - 1;

        return `
            <div class="entry-header">
                <h2 class="entry-date">📅 ${formattedDate}</h2>
                <div class="entry-meta">
                    <span class="weather">${weather}</span>
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
    }

    init() {
        this.setupDropdown();
        this.setupButtons();
        this.setupDots();
        this.displayEntry(0);
    }

    setupDropdown() {
        const select = document.getElementById('daySelect');
        
        this.entries.forEach((date, index) => {
            const option = document.createElement('option');
            const formattedDate = this.formatDate(date);
            option.value = index;
            option.textContent = `Day ${index + 1} - ${formattedDate}`;
            select.appendChild(option);
        });

        select.addEventListener('change', (e) => {
            this.currentIndex = parseInt(e.target.value);
            this.displayEntry(this.currentIndex);
        });
    }

    setupButtons() {
        document.getElementById('prevBtn').addEventListener('click', () => {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.displayEntry(this.currentIndex);
            }
        });

        document.getElementById('nextBtn').addEventListener('click', () => {
            if (this.currentIndex < this.entries.length - 1) {
                this.currentIndex++;
                this.displayEntry(this.currentIndex);
            }
        });
    }

    setupDots() {
        const dotsContainer = document.getElementById('dotsContainer');
        
        this.entries.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.addEventListener('click', () => {
                this.currentIndex = index;
                this.displayEntry(index);
            });
            dotsContainer.appendChild(dot);
        });
    }

    displayEntry(index) {
        // Update entry display
        const entryContainer = document.getElementById('currentEntry');
        entryContainer.innerHTML = this.createEntryHTML(index);

        // Update dropdown
        document.getElementById('daySelect').value = index;

        // Update dots
        document.querySelectorAll('.dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });

        // Update buttons
        document.getElementById('prevBtn').disabled = index === 0;
        document.getElementById('nextBtn').disabled = index === this.entries.length - 1;

        // Scroll to top
        window.scrollTo(0, 0);
    }
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new JournalApp();
});
