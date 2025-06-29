# Workspace Booking React App

This is a React-based front-end web application for a modern workspace solution. Users can explore different types of workspaces, view details, and submit bookings.

---

##  Features

- Modern UI with multiple workspaces displayed
- Modal booking form for workspace reservations
- Contact page and About page with professional layout
- Subscription section for newsletter
- Responsive design using CSS Flexbox and Grid
- Reusable components with consistent styling
- Popup form to collect bookings
-

---

##  Pages and Structure


### 1. **Product (Workspace Page)**

- Lists all workspaces dynamically using `.map()`
- On “Book Now” button click, opens a modal using `useState`
- Form inside modal collects name, email, date


### 2. **About Page**

- Clean layout showing company mission and story
- Styled separately for flexibility
- Reuses image assets from workspace page

### 3. **Contact Page**

- Includes contact info and working contact form
- Can be extended to send message to admin
- Styled to match site branding

---

##  Key React & JavaScript Concepts Used

| Concept         | Description |
|----------------|-------------|
| `useState()`    | Manage modal toggle and selected workspace |
| `.map()`        | Render workspace cards from data array |
| Conditional rendering | Show/hide modal when booking is triggered |
| Form handling   | Captures form input and prevents default submission |
| Props           | Used for passing title and image data |
| Component structure | Separated logic and style for reusability |

---


