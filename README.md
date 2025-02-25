# Dwello - Real Estate Platform

## Overview

Dwello is a modern real estate platform built with Next.js 14, TypeScript, and Tailwind CSS. It provides a seamless experience for users to search, view, and inquire about properties.

## Features

![Screenshot 2025-02-25 083231](https://github.com/user-attachments/assets/ee9f3386-e405-4000-83d8-0bfe7ba06c57)

### 🏠 Home Page
- Dynamic property search
- Featured Listings
- Statistics overview (8K+ Homes, 6K+ Happy Clients, 2K+ Expert Agents)
- Modern, responsive design

![Screenshot 2025-02-25 003142](https://github.com/user-attachments/assets/ed4613e0-8c73-4b3e-96cf-6e0d4a3e710d)

### 🔐 Authentication
- Secure login and signup functionality
- Firebase authentication integration
- User profile management


![Screenshot 2025-02-25 082754](https://github.com/user-attachments/assets/2b7ba225-e2f5-4943-9e6e-38681a32c997)
### 🏘️ Properties
- Advanced property search
- Filtering by location, type, and price range
- Detailed property views
- High-quality property images

![Screenshot 2025-02-25 003240](https://github.com/user-attachments/assets/55a67c16-560f-49fd-a134-c71862bba719)

### 👥 Agents
- Agent profiles and listings
- Direct contact options
- Experience and specialization details
  
![Screenshot 2025-02-25 003225](https://github.com/user-attachments/assets/fa356c13-4284-4ae6-9886-c5fa2e48012d)

### 📝 Contact & Consultation
- User-friendly contact forms
- Consultation scheduling
- Real-time form validation
- Success notifications

## Technology Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, Shadcn UI
- **Authentication**: Firebase
- **State Management**: React Context
- **Form Handling**: React Hook Form
- **Notifications**: React Hot Toast
- **Icons**: Lucide React

## Getting Started

1. Clone the repository:

bash
git clone https://github.com/yourusername/dwello.git

2. Install dependencies:
   
bash
cd dwello
npm install

3. Set up environment variables:
Create a `.env.local` file with:

env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id


4. Run the development server:

bash
npm run dev
