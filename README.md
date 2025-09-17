# Life Cycle Assessment Progressive Web App (LCA PWA)

A comprehensive Progressive Web Application for conducting Life Cycle Assessments (LCA) of products and services. This application helps organizations analyze the environmental impacts of their products throughout their entire lifecycle.

## Features

- **User Authentication**: Secure login, registration, and password recovery
- **Onboarding Wizard**: Guided setup for new users
- **Dashboard**: Overview of projects and sustainability metrics
- **Project Management**: Create, edit, and manage LCA projects
- **Sustainability Metrics**: Track and visualize environmental impacts
- **Analysis Tools**: Detailed environmental impact analysis
- **Reporting**: Generate and export comprehensive reports
- **User Profile**: Manage account settings and preferences
- **Offline Support**: Progressive Web App with offline capabilities
- **Dark/Light Mode**: Customizable theme preferences

## Technology Stack

- **Frontend**: React, TypeScript, TailwindCSS
- **State Management**: React Context API
- **Routing**: React Router
- **UI Components**: Custom components with Radix UI primitives
- **PWA Features**: Service workers, offline support, installable
- **Form Handling**: Custom form validation hooks

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/lca-pwa.git
   cd lca-pwa
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser

### Building for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

```
lca-pwa/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── offline.html
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── main-layout.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       └── use-toast.ts
│   ├── contexts/
│   │   ├── auth-context.tsx
│   │   └── theme-context.tsx
│   ├── hooks/
│   │   ├── use-api.ts
│   │   ├── use-form-validation.ts
│   │   └── use-local-storage.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   ├── analysis/
│   │   │   └── index.tsx
│   │   ├── auth/
│   │   │   ├── forgot-password.tsx
│   │   │   ├── login.tsx
│   │   │   ├── onboarding.tsx
│   │   │   └── register.tsx
│   │   ├── dashboard/
│   │   │   └── index.tsx
│   │   ├── profile/
│   │   │   └── index.tsx
│   │   ├── projects/
│   │   │   ├── [id].tsx
│   │   │   ├── edit/
│   │   │   │   └── [id].tsx
│   │   │   ├── index.tsx
│   │   │   └── new.tsx
│   │   ├── reports/
│   │   │   └── index.tsx
│   │   └── sustainability/
│   │       └── index.tsx
│   ├── App.tsx
│   ├── index.tsx
│   ├── service-worker.ts
│   └── serviceWorkerRegistration.ts
├── package.json
├── README.md
└── tsconfig.json
```

## PWA Features

- **Offline Support**: The application works offline using cached data
- **Installable**: Users can install the app on their devices
- **Responsive Design**: Works on all device sizes
- **Push Notifications**: (Future feature) Alerts for important updates

## License

This project is licensed under the MIT License - see the LICENSE file for details.