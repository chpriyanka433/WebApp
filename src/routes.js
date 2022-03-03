import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Doctor
const All_Doctor = React.lazy(() => import('./views/Doctor/All Doctor/All Doctor'))
const Add_Doctor = React.lazy(() => import('./views/Doctor/Add Doctor/Add Doctor'))

//Department
const All_Department = React.lazy(() => import('./views/Department/All Department/All Department'))
const Add_Department = React.lazy(() => import('./views/Department/Add Department/Add Department'))

//Appointment
const Doctor_schedule = React.lazy(() => import('./views/Appointment/Doctor schedule/Doctor schedule'))
const Add_schedule = React.lazy(() => import('./views/Appointment/Add schedule/Add schedule'))

//patient
const Add_patient = React.lazy(() => import('./views/Patient/Add patient/Add patient'))
const All_patient = React.lazy(() => import('./views/Patient/All patient/All patient'))

//Bed booking
const Add_bed = React.lazy(() => import('./views/Bed Booking/Add bed/Add bed'))
const All_bed = React.lazy(() => import('./views/Bed Booking/All bed/All bed'))

//Payment
const Payment = React.lazy(() => import('./views/Payments/Payment/Payment'))
const Add_payment = React.lazy(() => import('./views/Payments/Add payment/Add payment'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  
  { path: '/Doctor', name: 'Doctor', component: All_Doctor, exact: true },
  { path: '/Doctor/All Doctor', name: 'All Doctor', component: All_Doctor },
  { path: '/Doctor/Add Doctor', name: 'Add Doctor', component: Add_Doctor },
  
  { path: '/Department', name: 'Department', component: All_Department, exact: true },
  { path: '/Department/All Department', name: 'All Department', component: All_Department },
  { path: '/Department/Add Department', name: 'Add Department', component: Add_Department },
  
  { path: '/Appointment', name: 'Appointment', component: Doctor_schedule, exact: true },
 
  { path: '/Appointment/Doctor schedule', name: 'Doctor schedule', component: Doctor_schedule },
  { path: '/Appointment/Add schedule', name: 'Add schedule', component: Add_schedule },

  { path: '/Patient', name: 'Patient', component: All_patient, exact: true },
  { path: '/Patient/All patient', name: 'All patient', component: All_patient },
  { path: '/Patient/Add patient', name: 'Add patient', component: Add_patient },
  
  { path: '/Bed Booking', name: 'Bed Booking', component: All_bed, exact: true },
  { path: '/Bed Booking/All bed', name: 'All bed', component: All_bed },
  { path: '/Bed Booking/Add bed', name: 'Add bed', component: Add_bed },

  { path: '/Payments', name: 'Payments', component: Add_payment, exact: true },
  { path: '/Payments/Payment', name: 'Payment', component: Payment },
  { path: '/Payments/Add payment', name: 'Add payment', component: Add_payment},

]
export default routes
