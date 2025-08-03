// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh8LC4akHelSc1xWDgsXnAH8sKLYxret0",
  authDomain: "vandana-parlour.firebaseapp.com",
  databaseURL: "https://vandana-parlour-default-rtdb.firebaseio.com/",
  projectId: "vandana-parlour",
  storageBucket: "vandana-parlour.firebasestorage.app",
  messagingSenderId: "1067060627353",
  appId: "1:1067060627353:web:7847a034f5ad2b5bdbf508",
  measurementId: "G-SPM7H8MY9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

// Export for use in other files
window.firebaseApp = app;
window.firebaseDatabase = database;

// Function to save booking data
window.saveBooking = async function(bookingData) {
  try {
    const bookingsRef = ref(database, 'bookings');
    const newBookingRef = push(bookingsRef);
    
    // Add timestamp
    const bookingWithTimestamp = {
      ...bookingData,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };
    
    await set(newBookingRef, bookingWithTimestamp);
    console.log('Booking saved successfully');
    return true;
  } catch (error) {
    console.error('Error saving booking:', error);
    return false;
  }
};