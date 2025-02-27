# JP McCluskey - Full Stack Developer Portfolio

## Overview

This project is a personal portfolio website. The portfolio showcases my skills, projects, and provides a way for potential employers or clients to get in touch.

## Features

- Responsive design
- About section with a brief introduction
- Projects showcase with detailed cards
- Tech stack display
- Contact form with email functionality

## Technologies Used

- Next.js 13 (App Router)
- React
- TypeScript
- Tailwind CSS
- Shadcn UI Components
- Nodemailer for email functionality

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm (v6 or later)

## Installation

1. Clone the repository:
   \`\`\`
   git clone https://github.com/JP-McCluskey/portfolio.git
   cd portfolio
   \`\`\`

2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

3. Create a \`.env.local\` file in the root directory and add the following environment variables:
   \`\`\`
   SMTP_HOST=your_smtp_host
   SMTP_PORT=your_smtp_port
   SMTP_SECURE=true_or_false
   SMTP_USER=your_smtp_username
   SMTP_PASS=your_smtp_password
   \`\`\`
   Replace the values with your actual SMTP server details.

## Project Structure

- \`app/\`: Contains the main application code
  - \`components/\`: Reusable React components
  - \`page.tsx\`: Main page component
  - \`layout.tsx\`: Root layout component
  - \`actions.ts\`: Server actions (e.g., contact form submission)
- \`components/\`: Global components (e.g., UI components, theme provider)
- \`public/\`: Static assets

## Running the Development Server

To start the development server, run:

\`\`\`
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.



## Building for Production

To create a production build, run:

\`\`\`
npm run build
\`\`\`

To start the production server, run:

\`\`\`
npm start
\`\`\`

## Deployment

This project is set up for easy deployment on Vercel. To deploy:

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Set up the environment variables in the Vercel dashboard.
4. Deploy!

## License

This project is open source and available under the [MIT License](LICENSE).

