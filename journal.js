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
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        const dayName = dayNames[date.getDay()];
        return { full: `${month} ${day}, ${year}`, short: `${month} ${day}`, day: dayName };
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
        
        const weather = weatherOptions[index % weatherOptions.length];
        const temp = Math.floor((index % 9) + 24);
        
        return { emoji: weather.emoji, text: weather.text, temp: temp };
    }

    createEntryHTML(index) {
        const date = this.entries[index];
        const dateInfo = this.formatDate(date);
        const weather = this.getWeatherForDay(index);
        const dayNumber = index + 1;

        return `
            <div class="entry-header">
                <div class="day-number-tag">Day ${dayNumber}</div>
                <h2 class="entry-title">Greece 2026</h2>
                <p class="entry-date">${dateInfo.full} • ${dateInfo.day}</p>
            </div>

            <div class="entry-content">
                <div class="entry-section">
                    <h3 class="section-title">📍 Locations</h3>
                    <p class="entry-text">[Enter locations visited today]</p>
                </div>

                <div class="entry-section">
                    <h3 class="section-title">🎯 Events & Activities</h3>
                    <p class="entry-text">[Describe the events and activities of the day]</p>
                </div>

                <div class="entry-section">
                    <h3 class="section-title">👥 People Met</h3>
                    <p class="entry-text">[Names and descriptions of interesting people you met]</p>
                </div>

                <div class="entry-section">
                    <h3 class="section-title">🍽️ Food Adventures</h3>
                    <ul class="food-list">
                        <li>[Meal or dish eaten]</li>
                        <li>[Meal or dish eaten]</li>
                    </ul>
                </div>

                <div class="entry-section">
                    <h3 class="section-title">💭 How I Felt Today</h3>
                    <p class="entry-text">[Happy Face]</p>
                </div>

                <div class="entry-section">
                    <h3 class="section-title">✨ Other Highlights</h3>
                    <p class="entry-text">[Other memorable moments or thoughts]</p>
                </div>

                <div class="entry-section photos-section">
                    <h3 class="section-title">📸 Photos</h3>
                    <div class="photos-grid">
                        <div class="photo-placeholder">
                            <span class="photo-text">Add photo</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    createQuickFactsHTML(index) {
        const weather = this.getWeatherForDay(index);
        const date = this.entries[index];
        const dayNumber = index + 1;

        return `
            <h3 class="quick-facts-title">✨ Quick facts</h3>
            
            <div class="quick-fact">
                <div class="quick-fact-emoji">🌤️</div>
                <div class="quick-fact-content">
                    <p class="quick-fact-label">Weather</p>
                    <p class="quick-fact-value">${weather.emoji} ${weather.text}, ${weather.temp}°C</p>
                </div>
            </div>

            <div class="quick-fact">
                <div class="quick-fact-emoji">📍</div>
                <div class="quick-fact-content">
                    <p class="quick-fact-label">Day</p>
                    <p class="quick-fact-value">Day ${dayNumber} of 55</p>
                </div>
            </div>

            <div class="quick-fact">
                <div class="quick-fact-emoji">😊</div>
                <div class="quick-fact-content">
                    <p class="quick-fact-label">Mood</p>
                    <div class="mood-emojis">
                        <span class="mood-option">😊</span>
                        <span class="mood-option">😍</span>
                        <span class="mood-option">🥰</span>
                        <span class="mood-option">😂</span>
                        <span class="mood-option">🤩</span>
                    </div>
                </div>
            </div>

            <div class="quick-fact">
                <div class="quick-fact-emoji">⭐</div>
                <div class="quick-fact-content">
                    <p class="quick-fact-label">Rating</p>
                    <div class="rating-stars">
                        <span class="star">⭐</span>
                        <span class="star">⭐</span>
                        <span class="star">⭐</span>
                        <span class="star">⭐</span>
                        <span class="star">⭐</span>
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
            const dateInfo = this.formatDate(date);
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `Day ${index + 1} - ${dateInfo.short}`;
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

        // Update quick facts
        const quickFactsContainer = document.getElementById('quickFacts');
        quickFactsContainer.innerHTML = this.createQuickFactsHTML(index);

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
