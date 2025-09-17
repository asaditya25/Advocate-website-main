import api from './api';

export const appointmentService = {
  // Get all appointments
  getAllAppointments: () => api.get('/appointments'),
  
  // Get appointment by ID
  getAppointmentById: (id) => api.get(`/appointments/${id}`),
  
  // Create new appointment
  createAppointment: (appointmentData) => api.post('/appointments', appointmentData),
  
  // Update appointment
  updateAppointment: (id, appointmentData) => api.put(`/appointments/${id}`, appointmentData),
  
  // Delete appointment
  deleteAppointment: (id) => api.delete(`/appointments/${id}`),
  
  // Update appointment status
  updateAppointmentStatus: (id, status) => api.patch(`/appointments/${id}/status`, { status }),
};

export const contactService = {
  // Submit contact form
  submitContactForm: (contactData) => api.post('/contact', contactData),
  
  // Get all contact submissions (admin only)
  getAllContacts: () => api.get('/contact'),
  
  // Get contact by ID (admin only)
  getContactById: (id) => api.get(`/contact/${id}`),
  
  // Delete contact submission (admin only)
  deleteContact: (id) => api.delete(`/contact/${id}`),
};

export const adminService = {
  // Admin login
  login: (credentials) => api.post('/admin/login', credentials),
  
  // Admin logout
  logout: () => api.post('/admin/logout'),
  
  // Get admin profile
  getProfile: () => api.get('/admin/profile'),
  
  // Update admin profile
  updateProfile: (profileData) => api.put('/admin/profile', profileData),
  
  // Change password
  changePassword: (passwordData) => api.put('/admin/password', passwordData),
  
  // Get dashboard stats
  getDashboardStats: () => api.get('/admin/dashboard-stats'),
};

export const healthService = {
  // Check API health
  checkHealth: () => api.get('/health'),
};