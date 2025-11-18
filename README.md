# Project Name : Sustainable Trades

## 1. Description:

**Multi-Vendor E-Commerce Platform** is a fully dynamic, production-ready, and SEO-friendly marketplace built with Next.js v15, TypeScript, and a modern tech stack.

It’s designed for real-world e-commerce operations, supporting five user roles — Admin, Basic Vendor, Pro Vendor, Customer, and Guest — each with their own tailored dashboards and permissions.

The platform enables multiple vendors to manage their shops, products, trades, and subscriptions, while customers can explore nearby shops, chat in real time, follow stores, and purchase products seamlessly.

Developed using the latest Next.js features, TypeScript for type safety, and TanStack Query for optimized data fetching, this application ensures performance, maintainability, and scalability across all devices.

---

## 2. Used Technologies:

- Next.js v15 – Leveraging SSR, CSR, SSG, and ISR for optimized performance and SEO.
- TypeScript – For robust, type-safe, and maintainable code.
- Tailwind CSS v4 – To craft a modern, responsive, and clean UI.
- TanStack Query – For powerful, cache-optimized API data fetching.
- Pusher.js + Laravel Echo – For real-time chat and notification features.
- Axios – For API communication.
- React Hook Form – For form handling and validation.
- Moment.js – For date and time formatting.
- Google Maps API – For location tracking and nearby shop discovery.

---

## 3. Main Features:

#### Multi-Role System:
- Admin, Basic Vendor, Pro Vendor, Customer, and Guest – each with their own dashboard and permissions.
- Dynamic Role Management – Role-specific functionalities and UI are rendered conditionally.

#### Vendor & Product Management:
- Vendors can add products, which are published only after admin approval.
- Vendors can upgrade subscriptions between Basic and Pro plans.
- Vendors can edit profiles, manage listings, discounts, and trades.

#### Real-Time Chat:
- Real-time user-to-vendor messaging system powered by Pusher.js and Laravel Echo.
- Instant updates, typing indicators, and unread message notifications.

####Smart Location System:
- Integrated Google Map API for finding shops.
- The platform captures user’s latitude and longitude and displays nearby shops.
- Interactive split view: left side shop list, right side live map view.
- On hover, the shop’s name and photo appear live on the map.
  
  
- **Two Dashboards:**
  - **User Dashboard** - Meal Planner, My Shared Recipes, My Favorites, and
    Recipe Management.
  - **Admin Dashboard** - Manage users, approve recipes, and maintain platform
    content.
- **Advanced Recipe Management** – Create, edit, delete, and share recipes with
  admin approval.
- **Smart Recipe Discovery** – Search and filter by name, category, tags, or
  library.
- **Personalized Meal Planner** – Add, edit, or remove recipes for any day and
  time of the week.
- **Favorites & Wishlist** – Save and organize favorite recipes for quick
  access.
- **Interactive Recipe Details** – Leave reviews, explore nutrition info, and
  share recipes.
- **Complete Authentication System** – Includes Sign up, Login, Logout, OTP,
  Email Verification, and Password Reset.
- **High Performance Rendering** – Implemented SSR, CSR, SSG, and ISR for
  ultimate scalability and speed.
- **Smooth Animations** – Built with Framer Motion and AOS.
- **Clean, Organized Codebase** – Follows best practices for readability and
  scalability.

---

## 4. Dependencies:

```json
"dependencies": {
  "@radix-ui/react-avatar": "^1.1.10",
  "@radix-ui/react-popover": "^1.1.15",
  "@radix-ui/react-select": "^2.2.6",
  "@tanstack/react-query": "^5.80.2",
  "aos": "^2.3.4",
  "axios": "^1.9.0",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "lucide-react": "^0.544.0",
  "next": "15.3.3",
  "postcss": "^8.5.4",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-hook-form": "^7.64.0",
  "react-hot-toast": "^2.5.2",
  "react-icons": "^5.5.0",
  "react-loader-spinner": "^7.0.3",
  "react-otp-input": "^3.1.1",
  "react-rating": "^2.0.5",
  "swiper": "^12.0.2",
  "tailwind-merge": "^3.3.1"
}
```

---

## 5. devDependencies:

```json
"devDependencies": {
  "@tailwindcss/postcss": "^4.1.8",
  "@types/aos": "^3.0.7",
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "@types/react-redux": "^7.1.34",
  "@types/redux-persist": "^4.0.0",
  "autoprefixer": "^10.4.21",
  "tailwindcss": "^4.1.8",
  "tw-animate-css": "^1.4.0",
  "typescript": "^5.0.0"
}
```

---

## 6. Installation:

```bash
# Clone the repository
git clone https://github.com/towfiqislambd/healthy-recipes.git

# Navigate into the project
cd healthy-recipes

# Add an env.local file in root
.env.local = Add secret credentials

# Install dependencies
npm install

# Run the development server
npm run dev
```

---

## 7. Usage:

Run `npm run dev` to start the project locally. The app will run on
**http://localhost:3000**

---
