# Suhrit Ghimire Portfolio

This is a modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Home**: Hero section with personal details.
- **Experience & Education**: Timeline view.
- **Projects**: Grid layout of projects.
- **Research**: Dynamic section to add/view research papers (powered by Firebase).
- **Resume**: PDF viewer/download.
- **Contact**: Functional contact form (powered by EmailJS).

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Create a `.env.local` file in the root directory and add the following keys:

#### Firebase (for Research Section)
Go to [Firebase Console](https://console.firebase.google.com/), create a project, add a Web App, and copy the config.

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

**Firestore Rules**:
In Firebase Console > Firestore Database > Rules, set the rules to allow read/write:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /papers/{paper} {
      allow read, write: if true; // For demo purposes. Secure this if needed.
    }
  }
}
```

#### EmailJS (for Contact Form)
Sign up at [EmailJS](https://www.emailjs.com/), create a service and template.

```env
# Uncomment in components/Contact.tsx to enable
# REACT_APP_EMAILJS_SERVICE_ID=...
# REACT_APP_EMAILJS_TEMPLATE_ID=...
# REACT_APP_EMAILJS_PUBLIC_KEY=...
```

### 3. Usage

**Adding Research Papers**:
- Go to the Research section.
- Click "Add New Paper" (or "Unlock Add").
- Enter PIN: `1234` (Edit `components/Research.tsx` to change this).
- Fill in the details.

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
