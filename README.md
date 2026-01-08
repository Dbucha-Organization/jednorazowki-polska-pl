# DappGen - Dark Mode Gaming Website

A pixel-perfect, responsive single-page website with a modern dark theme and gaming aesthetics.

## 📁 Project Structure

```
jednorazow/
├── index.html          # Main HTML file with all sections
├── style.css           # Complete styling with responsive design
├── script.js           # JavaScript for menu and interactions
├── images/             # Image placeholders folder
│   ├── logo.png
│   ├── controller-placeholder.png
│   ├── icon-card.png
│   ├── icon-money.png
│   ├── icon-target.png
│   ├── icon-shield.png
│   ├── icon-sword.png
│   ├── icon-planet.png
│   └── product-placeholder.png
└── README.md           # This file
```

## 🎨 Features

### Design
- **Pixel-perfect** recreation of the reference design
- **Dark mode** theme with vibrant gradient accents (pink, purple, blue, cyan)
- **Glowing effects** and smooth animations
- **Modern typography** with proper hierarchy

### Sections
1. **Header/Navigation** - Sticky header with logo and menu
2. **Hero Section** - Large title, CTA buttons, and animated controller image
3. **Statistics Section** - 3 metric cards with large numbers and descriptions
4. **Features (Gag Enerya)** - 4 icon cards with gradient backgrounds
5. **Footer** - Multi-column layout with guides and social links

### Responsive Design
- **Desktop** (1920px+): Full layout with grid systems
- **Tablet** (768px - 1024px): Adjusted columns and spacing
- **Mobile** (320px - 767px): Single column with hamburger menu

### Interactive Elements
- **Hamburger menu** on mobile with smooth slide-in animation
- **Hover effects** on buttons, cards, and links
- **Smooth scrolling** for navigation links
- **Auto-rotating** carousel dots
- **Scroll effect** on header (background fade)

## 🚀 Usage

### Quick Start
1. Open `index.html` in a web browser
2. The website will load with placeholder images
3. Replace image placeholders with your actual images

### Image Placeholders
Place your images in the `images/` folder with these names:

- `logo.png` - Header logo
- `controller-placeholder.png` - Hero section controller image
- `icon-card.png` - Payment card icon
- `icon-money.png` - Money/price icon
- `icon-target.png` - Target feature icon
- `icon-shield.png` - Shield feature icon
- `icon-sword.png` - Sword feature icon
- `icon-planet.png` - Planet feature icon

### Customization

#### Colors
Edit CSS variables in `style.css` (lines 13-23):
```css
--color-primary: #ff00ff;
--color-secondary: #00e5ff;
--color-accent-pink: #ff0099;
--color-accent-purple: #9d4edd;
--color-accent-blue: #3d5afe;
--color-accent-cyan: #00e5ff;
```

#### Typography
Update font variables (lines 31-37):
```css
--font-size-base: 1rem;
--font-size-lg: 1.125rem;
--font-size-xl: 1.5rem;
```

#### Content
Edit text content directly in `index.html`:
- Navigation menu items
- Hero title and description
- Statistics cards
- Feature cards
- Footer links and information

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1024px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## ⚙️ Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **Vanilla JavaScript** - No frameworks or libraries
- **CSS Variables** - Easy customization
- **CSS Animations** - Smooth transitions and effects

### Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Performance Features
- No external dependencies
- Optimized CSS with minimal redundancy
- Efficient JavaScript with event delegation
- Smooth 60fps animations

## 📝 Code Structure

### HTML
- Semantic HTML5 elements (`<header>`, `<section>`, `<footer>`)
- BEM-like naming convention for classes
- Accessible markup with proper ARIA labels

### CSS
- Mobile-first responsive approach
- CSS Grid and Flexbox for layouts
- CSS variables for theming
- Modular section-based organization

### JavaScript
- Event listeners for menu interactions
- Smooth scroll functionality
- Auto-rotation for carousel dots
- Header scroll effect
- Window resize handling

## 🎯 Key Features Implementation

### Hamburger Menu
- Appears on screens < 768px
- Smooth slide-in animation from right
- Closes on link click or outside click
- Animated hamburger icon (3 bars to X)
- Prevents body scroll when open

### Animations
- Floating controller image
- Pulsing glow effects
- Hover transform on cards
- Smooth color transitions
- Header fade on scroll

### Accessibility
- Keyboard navigation support
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images (placeholders ready)

## 🔧 Maintenance

### Adding New Sections
1. Add HTML structure in `index.html`
2. Create corresponding CSS in `style.css`
3. Add any JavaScript interactions in `script.js`

### Updating Content
- All text content is in `index.html`
- No database or external data sources
- Direct editing in HTML file

### Color Scheme Updates
- Update CSS variables in `:root` selector
- Changes propagate throughout the site automatically

## 📄 License

This is a custom single-page website template created per user specifications.

## 👨‍💻 Development Notes

- **No Bootstrap** or external CSS frameworks
- **No jQuery** - Pure vanilla JavaScript
- **Clean code** with comments
- **Modular structure** for easy maintenance
- **Pixel-perfect** design matching reference image

---

**Note**: Remember to replace all image placeholders in the `images/` folder with your actual images to complete the website.
