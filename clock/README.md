# Digital Clock - Multiple Timezones

A beautiful, interactive digital clock application that displays current time across 16 different timezones with both analog and digital displays.

## ✨ Features

🌍 **Multiple Timezones**
- Displays time for 16 major cities worldwide
- Supports UTC offset information
- City flags and identifiers

⏰ **Dual Display**
- Digital clock display (hours, minutes, seconds)
- Analog clock with rotating hands
- Real-time updates every second

🔄 **Time Format Toggle**
- Switch between 24-hour and 12-hour formats
- AM/PM indicator for 12-hour mode

🔍 **Search Functionality**
- Filter timezones by city name
- Filter by timezone identifier
- Instant filtering results

📅 **Additional Information**
- Current date display
- Day of the week
- UTC offset information

📱 **Fully Responsive**
- Works perfectly on desktop, tablet, and mobile
- Smooth animations and transitions
- Beautiful gradient design

## 🌐 Supported Timezones

1. **New York** - America/New_York (UTC-5/-4)
2. **London** - Europe/London (UTC+0/+1)
3. **Paris** - Europe/Paris (UTC+1/+2)
4. **Tokyo** - Asia/Tokyo (UTC+9)
5. **Sydney** - Australia/Sydney (UTC+10/+11)
6. **Dubai** - Asia/Dubai (UTC+4)
7. **Singapore** - Asia/Singapore (UTC+8)
8. **Hong Kong** - Asia/Hong_Kong (UTC+8)
9. **Mumbai** - Asia/Kolkata (UTC+5:30)
10. **São Paulo** - America/Sao_Paulo (UTC-3/-2)
11. **Los Angeles** - America/Los_Angeles (UTC-8/-7)
12. **Toronto** - America/Toronto (UTC-5/-4)
13. **Mexico City** - America/Mexico_City (UTC-6/-5)
14. **Bangkok** - Asia/Bangkok (UTC+7)
15. **Istanbul** - Europe/Istanbul (UTC+3)
16. **Moscow** - Europe/Moscow (UTC+3)

## 🚀 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Advanced styling with gradients and animations
- **JavaScript (ES6+)** - Real-time clock logic and timezone handling
- **Font Awesome** - Icons and visual elements

## 📋 How to Use

1. Open `index.html` in a web browser
2. View current time in all timezones
3. Use the search bar to filter specific timezones
4. Toggle between 24-hour and 12-hour time formats
5. Watch the analog and digital clocks update in real-time

## 🎨 Design Features

- Modern gradient backgrounds (purple to pink)
- Smooth animations and transitions
- Glassmorphism effects on navigation
- Responsive card layout
- Green digital display for classic clock aesthetic
- Color-coded hand movements on analog clocks

## ⚙️ Customization

### Add More Timezones
Edit the `timezones` array in `script.js`:

```javascript
const timezones = [
    {
        name: 'City Name',
        timezone: 'Continent/City',
        flag: '🏙️',
        utcOffset: 'UTC±X'
    },
    // ... more timezones
];
```

### Change Color Scheme
Modify CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
}
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🔗 Integration

This app can be integrated into a portfolio or personal website. The `/clock` folder can be added to any project structure.

## 📝 License

Open source - feel free to use and modify!

## 👨‍💻 Author

Created by **Carlwantbuddy**

[Back to Portfolio](../index.html)