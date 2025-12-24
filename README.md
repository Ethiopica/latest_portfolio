# Full Stack Developer Portfolio

A modern, responsive portfolio website built with React and Vite. This portfolio showcases projects, skills, blog posts, and provides a way to get in touch.

## Features

- **Home Page**: Eye-catching hero section with animated code display and feature highlights
- **About Page**: Professional bio, statistics, and experience timeline
- **Skills Page**: Interactive skill bars showing proficiency levels in various technologies
- **Projects Page**: Filterable project gallery with categories (Frontend, Backend, Full Stack)
- **Blog Page**: Blog post listings with newsletter subscription
- **Contact Page**: Contact form and social media links
- **Light/Dark Mode**: Toggle between light and dark themes with persistent preference storage

## Technologies Used

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with CSS Variables and modern layouts

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd fullstack-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Theme Toggle

The portfolio includes a light/dark mode toggle feature:

- **Toggle Button**: Located in the top-right corner of the navigation bar (sun ☀️ icon for light mode, moon 🌙 icon for dark mode)
- **Persistent Storage**: Your theme preference is automatically saved in localStorage
- **Default Theme**: Dark mode is the default theme
- **Smooth Transitions**: All color changes are animated with smooth CSS transitions

The theme system uses CSS custom properties and React Context for state management, ensuring consistent theming across all pages.

## Customization

To personalize this portfolio for your own use:

1. **Update Personal Information**:
   - Edit `src/pages/Home.jsx` to change your name and introduction
   - Update `src/pages/About.jsx` with your bio and experience
   - Modify `src/pages/Contact.jsx` with your contact details

2. **Update Skills**:
   - Edit the `skillCategories` array in `src/pages/Skills.jsx`
   - Add or remove skills and adjust proficiency levels

3. **Add Your Projects**:
   - Update the `projects` array in `src/pages/Projects.jsx`
   - Replace project links with your actual project URLs

4. **Add Your Blog Posts**:
   - Update the `blogPosts` array in `src/pages/Blog.jsx`
   - Link to your actual blog posts

5. **Customize Colors**:
   - Edit CSS variables in `src/index.css` to change the color scheme
   - Primary colors (gradients): `--primary-color`, `--secondary-color`, `--accent-color`
   - Light theme colors: Update the `[data-theme="light"]` section
   - Dark theme colors: Update the `[data-theme="dark"]` section

## Project Structure

```
fullstack-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   └── Navigation.css
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Skills.jsx
│   │   ├── Skills.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Blog.jsx
│   │   ├── Blog.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Features Highlights

### Responsive Design
- Fully responsive layout that works on desktop, tablet, and mobile devices
- Mobile-friendly navigation with hamburger menu

### Modern UI/UX
- Smooth animations and transitions
- Gradient accents and modern color scheme
- Clean, professional design

### Theme Support
- Light and dark mode toggle
- Smooth theme transitions
- Preference saved in localStorage
- System preference detection

### Performance
- Fast page loads with Vite
- Optimized for production

## License

This project is open source and available for personal and commercial use.

## Contact

Feel free to reach out if you have any questions or suggestions!

