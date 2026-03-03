# Suhrit Ghimire Portfolio

This is a modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Home**: Hero section with personal details.
- **Experience & Education**: Timeline view.
- **Projects**: Grid layout of projects.
- **Resume**: PDF viewer/download.
- **Contact**: Functional contact form (powered by EmailJS).

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Create a `.env.local` file in the root directory and add the following keys:

#### EmailJS (for Contact Form)
Sign up at [EmailJS](https://www.emailjs.com/), create a service and template.

```env
# Uncomment in components/Contact.tsx to enable
# REACT_APP_EMAILJS_SERVICE_ID=...
# REACT_APP_EMAILJS_TEMPLATE_ID=...
# REACT_APP_EMAILJS_PUBLIC_KEY=...
```

### 3. Usage

**Resume**:
- Place your `Resume.pdf` in the `public/` folder.

### 4. Run Locally

```bash
npm run dev
```

### 5. Build for Production

```bash
npm run build
npm start
```
