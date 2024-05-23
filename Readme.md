Real Estate Management Platform

Welcome to the Real Estate Management Platform repository! This project is a comprehensive solution for managing real estate properties and transactions. Built using React.js for the frontend, Node.js for the backend, and integrating with MongoDB for the database and Firebase for authentication and hosting services.
Features

    User Authentication: Secure login and registration using Firebase Authentication.
    Property Listings: Browse, search, and filter property listings with detailed descriptions and images.
    Property Management: Add, edit, and delete property listings with ease.
    Responsive Design: Fully responsive UI to ensure a seamless experience across devices.
    Interactive Maps: Integrated with Google Maps for property location visualization.
    Contact Form: Easy-to-use contact form for property inquiries.
    Favorites: Users can save properties to their favorites list for quick access.


Installation

1. Clone the repository:
    git clone https://github.com/yourusername/real-estate-management.git
cd real-estate-management


2. Install dependencies for both client and server:
cd client
npm install
cd ../server
npm install


3. Set up environment variables:

Create a .env file in the server directory and add your MongoDB URI and Firebase configuration:
MONGODB_URI=your_mongodb_uri
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id


4. Run the application:

    Start the server:
    cd server
    npm start

    Start the client:
    cd client
    npm start


5. Open your browser and navigate to:
http://localhost:3000







