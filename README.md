# Greece 2026 - Summer Travel Journal ✨

A beautiful, creative travel journal documenting my summer adventure in Greece!

## 📋 What's Inside

This journal tracks my daily experiences with:
- **Daily Entries** - Date, location, and personal reflections
- **Weather Updates** - Temperature and conditions for each day
- **Food Adventures** - Delicious Greek dishes and local recommendations
- **Photo Gallery** - Beautiful moments captured during the trip

## 🎨 Design Features

The site features a cute and creative theme with:
- Warm, inviting color palette (blues, teals, corals)
- Smooth animations and hover effects
- Fully responsive design (works on mobile, tablet, desktop)
- Clean, organized entry structure
- Floating header animation

## 📸 Adding Photos

To add photos to your entries:

1. Create a `photos/` directory in your project
2. Add your image files (e.g., `sunset-santorini.jpg`)
3. Update the `src` attribute in the HTML:
   ```html
   <img src="photos/your-photo-name.jpg" alt="Description">
   ```

## 📝 Adding New Entries

To add a new daily entry, copy this template into `index.html`:

```html
<article class="journal-entry">
    <div class="entry-header">
        <h2 class="entry-date">📅 Date Here</h2>
        <div class="entry-meta">
            <span class="weather">Weather emoji & temp</span>
        </div>
    </div>

    <div class="entry-content">
        <p class="entry-text">
            Your reflection and description of the day...
        </p>
    </div>

    <div class="food-section">
        <h3 class="section-title">🍽️ Food Adventures</h3>
        <ul class="food-list">
            <li>Dish one</li>
            <li>Dish two</li>
        </ul>
    </div>

    <div class="photos-section">
        <h3 class="section-title">📸 Moments Captured</h3>
        <div class="photos-grid">
            <div class="photo-placeholder">
                <img src="photos/photo-name.jpg" alt="Description">
            </div>
        </div>
    </div>
</article>
```

## 🌐 How to View

1. Open `index.html` in your web browser
2. Or deploy to GitHub Pages for online sharing:
   - Go to Settings → Pages
   - Set source to "Deploy from a branch"
   - Select `main` branch and `/root` folder
   - Your journal will be live at: `https://yourname.github.io/greece2026/`

## 🎯 Customization Tips

- Change the header title and colors in `style.css` (`:root` section)
- Modify the color palette by adjusting the CSS variables
- Add emojis to make it more personal!
- Include location names in your entries

## 📱 Weather Emoji Reference

- ☀️ Sunny
- ⛅ Partly Cloudy
- ☁️ Cloudy
- 🌧️ Rainy
- 🌦️ Stormy
- 🌅 Sunrise/Sunset

Have a wonderful trip to Greece! 🌊✨
