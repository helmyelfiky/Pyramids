# Pyramids Adhesives - Website Sections & Components

This document outlines the structure, sections, and details of the Pyramids Adhesives website's main landing page (`index.html`) and the dedicated About page (`about.html`). 

---

## Main Landing Page (`index.html`)

### 1. Header & Navigation (`<header>`)
*   **Logo**: Main brand mark linking to the hero section.
*   **Navigation Menu**: Jump links to "About Us", "Services", "Products", and "Contact Us". The "About Us" item contains a dropdown with deep links to specific sections (Mission, Safety Measures, etc.).
*   **Language Switcher**: Dynamic toggle allowing users to select Arabic, English, or French (managed via Vanilla JavaScript logic).
*   **Mobile Menu Toggle**: A hamburger icon for responsive views.

### 2. Hero Section (`.hero`)
*   **Background Visual**: A silent, autoplaying, looping video (loaded via Cloudinary) demonstrating operations.
*   **Animated Slogan**: An engaging header: *"Innovative Adhesive Solutions for Every Industry. Built to Last, Designed to Perform."* Text is animated span-by-span.

### 3. Discover Pyramids (About Summary) (`#about`)
*   **Visual Element**: A factory image featuring an overlaid "20+ Years of Service" badge.
*   **Content Area**: 
    *   Brief overview of the company's state-of-the-art production.
    *   **Feature Cards**: Highlighting "Our Commitment" and "Our Vision".
*   **Call-to-Action**: "Discover More About Us" button linking to the full `about.html` page.

### 4. Services Section (`#services`)
*   **Header**: Mission statement covering innovation and specialized products.
*   **Service Grid**: Nine visually distinct cards utilizing custom iconography for services offered:
    1.  Customized Adhesive Formulations
    2.  Quality Assurance Standards (Blue Card styling)
    3.  Sustainable Manufacturing Practices
    4.  After Sales Service
    5.  R&D Collaboration (Blue Card styling)
    6.  Competitive Pricing
    7.  Training and Workshops
    8.  Export Services (Blue Card styling)
    9.  Technical Support

### 5. Products Section (`#products`)
*   **Header**: Encouraging users to explore the product range.
*   **Product Catalog**: A card grid presenting the company’s sub-brands:
    *   *El Borg*, *King*, *Forsan*, *Fox*, *Healthy*, *Fo-Max*, and *Glue Sticks* (marked as "Coming Soon").
*   **Interaction**: Hovering over a card reveals a "View Details" overlay button that triggers a comprehensive modal popup.

### 6. Product Details Modal (`#productModal`)
*   **Purpose**: Keeps users on the same page while displaying complex product data.
*   **Structure**:
    *   *Available Sizes*: A dedicated dynamic grid for product variations.
    *   *Product Information Accordion*: Expandable data points including:
        *   **Overview**: Application areas.
        *   **Specifications**: Use temperature, shelf life, and packing.
        *   **Features & Benefits**: Advantages and usage.
        *   **Order Information**: Minimum order limits and delivery times.

### 7. FAQ Section (`.faq-section`)
*   **General Purpose**: Common questions aimed at removing friction for buyers.
*   **Q&A Grid**: Six animated items answering common questions related to:
    *   Facilities locations
    *   Export capabilities and regions
    *   After-sales support
    *   Payment plans
    *   Order inquiries

### 8. Contact Section (`#contact`)
*   **Information Panel**: Presents critical business details using SVG iconography:
    *   Phone number
    *   Clickable email address (info@pyramidsadhesives.com)
    *   Google Maps link to the Fayoum Factory.
    *   Working hours (Sat-Thu).
*   **Contact Form**: Input fields for Full Name, Email, Contact Number, and Message. Submits data via FormSubmit integration.

### 9. Footer (`.footer`)
*   **Branding Column**: The brand logo (without background) combined with Social Media SVG links (Alibaba, LinkedIn, WhatsApp).
*   **Useful Links Column**: Internal navigation links mirroring the header with chevron icons.
*   **Contact Info Column**: Repeating email, address, and working hours for quick access.
*   **Bottom Bar**: Copyright text.

---

## About Us Page (`about.html`)

### 1. Secondary Header (`#header-about`)
*   A mirrored version of the main header, tailored to ensure correct jumping links functionality across pages. Features a distinct version of the logo asset.

### 2. Internal Hero Section (`#hero-about`)
*   Page title and a subtle breadcrumb navigation ("Home › About") to help with user orientation.

### 3. Interactive Information Display
*   Instead of a long scrolling page, this uses a tabbed navigation system.
*   **Menu Tabs**: "Mission," "Safety Measures," "Quality Assurance," "Packaging."
*   **Dynamic Container (`#section-container`)**:
    *   Built with Vanilla JS, clicking a tab fades out the current text/image and fades in corresponding localized text and associated images (`image-12.jpg`, `image-11.jpg`, `image-9.jpg`, `image-10.jpg`).

### 4. Call To Action (`#cta`)
*   A concise block instructing the user to get in touch. Contains a button routing the user back to the index page's Contact block (`/index.html#contact`).

### 5. Certificates Carousel (Pending/Drafted)
*   The HTML for a Splide.js powered carousel to showcase business certificates is present in the code but currently commented out for future implementation.

### 6. Footer
*   Provides consistency by repeating the exact footer structure found on `index.html`.
