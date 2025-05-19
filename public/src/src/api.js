import axios from 'axios';

const API_URL = 'https://syrianwheels-api-1fecd230c302.herokuapp.com';

const api = {
  // Car endpoints
  getCars: ( ) => axios.get(`${API_URL}/api/cars`),
  getCar: (id) => axios.get(`${API_URL}/api/cars/${id}`),
  
  // User endpoints
  register: (userData) => axios.post(`${API_URL}/api/users/register`, userData),
  login: (credentials) => axios.post(`${API_URL}/api/users/login`, credentials),
  
  // Booking endpoints
  createBooking: (bookingData) => axios.post(`${API_URL}/api/bookings`, bookingData),
  getUserBookings: (userId) => axios.get(`${API_URL}/api/bookings/user/${userId}`)
};

export default api;
