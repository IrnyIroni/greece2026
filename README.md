# Greece 2026 - Summer Travel Journal ✨

A beautiful, creative travel journal documenting my 55-day summer adventure in Greece! (June 20 - August 14, 2026)

## 📋 What's Inside

This journal tracks daily experiences with comprehensive sections:
- **📅 Daily Dates** - June 20 to August 14, 2026 (55 days total)
- **📍 Locations** - Places visited each day
- **🎯 Events & Activities** - Daily adventures and experiences
- **🌤️ Weather** - Temperature and conditions (auto-generated with variations)
- **🍽️ Food Adventures** - Delicious Greek dishes and local recommendations
- **👥 People Met** - Names and descriptions of interesting people
- **💭 How I Felt Today** - Your emotions and reflections
- **✨ Other Highlights** - Additional memorable moments
- **📸 Photo Gallery** - Beautiful moments captured during the trip

## 🎨 Design Features

The site features a cute and creative theme with:
- Warm, inviting color palette (blues, teals, corals, sandy tones)
- Smooth animations and hover effects
- Fully responsive design (works on mobile, tablet, desktop)
- Clean, organized entry structure with distinct sections
- Floating header animation
- Special styling for the last day (August 14)
- Auto-generated weather variations for each day
- Unique section colors for easy visual navigation

## 🚀 How It Works

The journal automatically generates **all 55 entries** from June 20 to August 14, 2026 using JavaScript. You simply need to fill in the placeholder text with your actual memories!

### Color-Coded Sections:
- 🔵 **Locations & Activities** - Default blue tones
- 🌊 **Weather** - Teal accent color
- 🍽️ **Food Adventures** - Coral/orange accent
- 💖 **Emotions** - Pink accent color
- 📸 **Photos** - Teal accent with dashed border
- ✨ **Gold accents** - Reserved for the final day

## 📸 Adding Photos

To add photos to your entries:

1. Create a `photos/` directory in your project
2. Add your image files (e.g., `santorini-sunset.jpg`)
3. Click on the "Add photo" placeholder in any entry
4. Or directly edit the HTML:
   ```html
   <div class="photo-placeholder">
       <img src="photos/your-photo-name.jpg" alt="Description">
   </div>
   ```

## ✏️ Editing Entries

Simply replace the placeholder text with your actual memories:

- Replace `[Enter locations visited today]` with actual location names
- Replace `[Describe the events...]` with your daily activities
- Replace `[Meal or dish eaten]` with food you actually tried
- Replace `[Names and descriptions...]` with people you met
- Add your genuine emotions in the feelings section
- Share other memorable highlights!

## 🌐 How to View

1. **Locally**: Open `index.html` in your web browser
2. **Online**: Deploy to GitHub Pages for easy sharing:
   - Go to Settings → Pages
   - Set source to "Deploy from a branch"
   - Select `main` branch and `/root` folder
   - Your journal will be live at: `https://yourname.github.io/greece2026/`

## 📱 Weather Emoji Reference

- ☀️ Sunny
- ⛅ Partly Cloudy
- ☁️ Cloudy
- 🌧️ Rainy
- 🌞 Very Sunny
- 🌤️ Mostly Sunny

## 🎯 Tips for Your Journal

1. **Add photos regularly** - Even phone photos look great!
2. **Be specific** - Include dish names, restaurant names, location details
3. **Note interesting people** - Remember names, where you met them, what made them memorable
4. **Express emotions** - Don't just list facts, share how you felt
5. **Other highlights** - Secret gems, funny moments, challenges overcome
6. **Update frequently** - Fill in entries while memories are fresh!

## 📊 Your Trip Statistics

- **Duration**: 55 days
- **Start**: June 20, 2026
- **End**: August 14, 2026
- **Total Entries**: 55 (auto-generated)

## 🛠️ Customization

You can customize:
- **Colors** - Edit `:root` variables in `style.css`
- **Fonts** - Change font-family in `body` section
- **Temperature range** - Edit `tempRange` in `generate-entries.js` (currently 24-32°C)
- **Weather options** - Add more to `weatherOptions` array in `generate-entries.js`
- **Sections** - Add new sections by editing the template in `generate-entries.js`

Have a wonderful trip to Greece! 🌊✨

---

**Enjoy your 55-day adventure and create beautiful memories!**
