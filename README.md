# Changes/Documentation provided in CHANGELOG.md
# Welcome!

Thanks for your interest in joining the SavedBy team! If you're reading this, you're on the right track!
This take-home project will assess the skills we're looking for in our next dev hire.
This is not timed, but aim for 3-4hrs. In other-words, don't go overboard!

In this project, we're going to make a simple product collection page for a mock e-commerce store.
The boilerplate includes a prebuilt server (/src/server) to host your static files (/src/static).
Below you can find everything you'll need to get started and an outline of the objectives.
After completion, we will review your code and let you know about the next steps!
Keep in mind this is the first half of the interview process.
We will be holding a live interview session to add another feature to this project. Let's get started!

## What skills are we looking for?

- Proficiency in JavaScript, CSS and DOM manipulation
- Git comprehension
- Mockup-to-UI development
- Clean, documented code
- Ability to use vanilla languages without the use of 3rd-party modules.
- Balance between Functionality and quality
- Mobile-first development (i.e. responsiveness)
- Resourcefulness

## What You'll Build

- Complete the HTML structure in the existing index.html file
- Add product grid, search bar, and responsive layout
- Style everything in index.css
- Implement functionality in app.js
  
## Design Reference

- **Desktop mockup**: /resources/Product-desktop.png
- **Mobile mockup**: /resources/Product-mobile.png
- Match your UI as closely as possible to these mockups

## Prerequisites

- NPM
- NodeJS
- VSCode

## Starting

- Fork the repo (https://github.com/SavedBy/interview)
- Move to the "dev" branch
- Create a new branch called "feature/product-page". Use this branch for your commits.
- Install the dependencies
- Run `npm start` to start the mock server
- View your work at localhost:3000
- Build the complete UI within the existing HTML structure in /src/static/index.html
- The HTML file contains the basic page structure - you'll need to add the product grid, search bar, and layout

## Key Notes and Instructions:

- The API is located at the same host (http://localhost:3000/)
- Make the product grid mobile responsive. 2 columns on mobile and 3 on desktop. Breakpoint at 430px.
- Link font from https://fonts.googleapis.com/css?family=Mina
- Retain all JavaScript logic in the app.js file
- Retain all CSS in the index.css file
- Display products sorted by price (low to high by default)
- Overall browser compatibility
- Match your UI as closely as the mockup as you can
- Implement a search bar that filters products by title as the user types
- Search should be case-insensitive and work in real-time

- **Bonus Challenge:** Refactor the `messyFunction` in `src/static/app.js` to demonstrate code quality skills (can be integrated into your product page if desired)

## API Reference

- **Endpoint**: GET /products
- **Response**: Array of product objects
- **Product structure**:
  - `id`: Unique identifier
  - `title`: Product name
  - `price`: Price in cents (e.g., 3199 = $31.99)
  - `images`: Array with image URLs

## HELP!

If you get stuck, or our instructions are unclear, no worries! Shoot us an email at dev@savedby.io!

## Finished?

Just shoot us an email at dev@savedby.io with your name and link to your GitHub repo! Please make sure it is public. At this step, we will review your code and inform you if you've made it to the next step!