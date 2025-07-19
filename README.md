# Harshad Swaminarayan Mandir Website

This is a website for Harshad Swaminarayan Mandir built with Next.js. The site includes information about the temple, events, a photo gallery, and contact information.

## Features

- Home page with temple introduction, image carousel, and upcoming events
- About page with temple history, mission, and leadership information
- Events listing with filtering by category
- Event detail pages with comprehensive information
- Photo gallery with filtering and lightbox view
- Contact page with temple information and contact form

## Project Structure

```
harshad_swaminarayan_mandir/
├── pages/
│   ├── index.tsx           # Home page
│   ├── about.tsx           # About the temple
│   ├── events/
│   │   ├── index.tsx       # List all events
│   │   └── [slug].tsx      # Event detail page
│   ├── gallery.tsx         # Image gallery
│   ├── contact.tsx         # Contact information
│   └── 404.tsx             # Custom 404 page
├── components/
│   ├── Navbar.tsx          # Site navigation
│   ├── Footer.tsx          # Site footer
│   ├── EventCard.tsx       # Event display card
│   └── ImageCarousel.tsx   # Image carousel component
├── public/
│   ├── images/             # Site images
│   │   ├── events/         # Event images
│   │   ├── gallery/        # Gallery images
│   │   └── leaders/        # Leadership photos
│   └── temple-logo.png     # Temple logo
```

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Image Placeholders

The site is set up with placeholder references for images. Before deploying, you should:

1. Replace `public/temple-logo.png` with your actual temple logo
2. Add temple images to the following directories:
   - `public/images/events/` - Images for events
   - `public/images/gallery/` - Images for the gallery
   - `public/images/leaders/` - Photos of temple leadership

## Backend Integration

The site is currently using mock data for events and gallery images. To connect to a real backend:

1. Update the `getStaticProps` functions in the page components to fetch data from your API
2. Implement form submission handling in the contact page

## Customization

- Colors: The site uses orange as the primary color. You can modify this in the component files.
- Content: Update the text content in each page to match your temple's information.
- Layout: Adjust the layout and design as needed for your specific requirements.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.