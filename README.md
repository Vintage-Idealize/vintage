
# Traditional Fashion Marketplace

## Overview

Welcome to the **Traditional Fashion Marketplace**, a platform dedicated to empowering local artisans and sellers of Sri Lanka's finest traditional products such as **batik** and **beeralu**. This marketplace is designed to help sellers showcase their unique offerings and provide customers with a seamless online shopping experience.

## Key Features

- **Home Page**: A user-friendly landing page featuring popular products, new arrivals, and seller spotlights.
- **Seller Profiles**: Dedicated profiles for sellers to display their products, story, and unique offerings.
- **Product Listings**: Sellers can list their batik, beeralu, and other traditional products with detailed descriptions and high-quality images.
- **Shopping Cart & Checkout**: A smooth shopping experience for buyers with secure payment options and an intuitive checkout process.
- **Customer Support**: AI-powered chatbots to assist customers and sellers, offering quick responses and guidance.

## Technology Stack

- **Frontend**: React.js (for building dynamic and responsive user interfaces)
- **Backend**: Node.js with Express (API and server-side logic)
- **Database**: MongoDB (for storing product listings, seller profiles, and customer information)
- **Storage**: Azure Blob Storage (for handling images and other media files)
- **Chatbot**: AI-powered bots using NLP (to provide support and educational resources)
- **Deployment**: Azure (cloud hosting)

## Getting Started

### Prerequisites

- **Node.js** (v14.x or higher)
- **MongoDB** (for local development or MongoDB Atlas for cloud)
- **Azure Blob Storage** (for media handling)
- **Git** (for version control)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/traditional-fashion-marketplace.git
   cd traditional-fashion-marketplace
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and configure the following variables:

   ```bash
   MONGO_URI=your_mongodb_connection_string
   AZURE_STORAGE_CONNECTION_STRING=your_azure_blob_storage_connection_string
   ```

4. **Run the application**

   ```bash
   npm start
   ```

   The app should now be running on `http://localhost:3000`.

## Project Structure

```bash
.
├── public/               # Static assets (images, etc.)
├── src/                  # Source code
│   ├── components/       # Reusable UI components
│   ├── pages/            # Application pages (Home, Seller Profile, etc.)
│   ├── services/         # API calls, services (e.g., product management, seller registration)
│   ├── hooks/            # Custom hooks for managing state
│   └── App.js            # Main application file
├── backend/              # Backend folder (Node.js, Express)
│   ├── routes/           # API routes (products, sellers, etc.)
│   ├── models/           # MongoDB schemas
│   └── controllers/      # Request handling logic
└── README.md             # Project documentation
```

## Features in Development

- **Seller Dashboard**: A dedicated area for sellers to manage their listings, orders, and profile settings.
- **Order Management**: Track order status, payments, and delivery updates.
- **Advanced Search**: Filter and search for products by price, category, and location.
- **Mobile App**: A mobile-friendly version of the marketplace using React Native.

## Contributing

We welcome contributions to the platform! Here’s how you can help:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed explanation of the changes.

