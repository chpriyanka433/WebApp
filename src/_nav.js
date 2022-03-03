import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {  faHome, faUserDoctor, faHospital, faUserFriends,  faBookMedical, faMoneyCheck, faAdd } from '@fortawesome/free-solid-svg-icons'
//import CIcon from '@coreui/icons-react'
// import {LocalHospitalIcon} from '@mui/icons-material/LocalHospital';
/*import {
  cilHome,
  cibPaypal,
  cilHospital,
  cilStar,
} from '@coreui/icons'*/
//import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem ,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <FontAwesomeIcon color='bluelight' icon={faHome}  style={{margin: "10px"}}/>,
    
    //icon:  'fa-solid fa-house',
    //icon: <LocalHospitalIcon />,

   /* badge: {
      color: 'info',
      text: 'NEW',
    },*/
  },

  {
    component: CNavGroup,
    name: 'Doctor',
    to: '/Doctor',
    icon: <FontAwesomeIcon icon={faUserDoctor} style={{margin: "10px"}} />,
    //icon: <FontAwesomeIcon icon="fa-solid fa-user-doctor-hair" />,
  //  icon: <LocalHospitalIcon />,
    items: [
      {
        component: CNavItem,
        name: 'All Doctor',
        to: '/Doctor/All Doctor',
        icon: <FontAwesomeIcon icon={faUserDoctor} />,
      },
      {
        component: CNavItem,
        name: 'Add Doctor',
        to: '/Doctor/Add Doctor',
        icon: <FontAwesomeIcon icon={faAdd} />,
      },
      
    ],
  },
  {
    component: CNavGroup,
    name: 'Department',
    to: '/Department',
    icon: <FontAwesomeIcon icon={faHospital} style={{margin: "10px"}}/>,
    items: [
      {
        component: CNavItem,
        name: 'All Department',
        to: '/Department/All Department',
      },
      {
        component: CNavItem,
        name: 'Add Department',
        to: '/Department/Add Department',
        icon: <FontAwesomeIcon icon={faAdd} />,
      },
     
    ],
  },
  {
    component: CNavGroup,
    name: 'Appointment',
    to: '/Appointment',
    
    icon: <FontAwesomeIcon icon={faUserDoctor}style={{margin: "10px"}} />,
    items: [
      {
        component: CNavItem,
        name: 'Doctor schedule',
        to: '/Appointment/Doctor schedule',
        icon: <FontAwesomeIcon icon={faUserDoctor} />,
      },
      {
        component: CNavItem,
        name: 'Add schedule',
        to: '/Appointment/Add schedule',
        icon: <FontAwesomeIcon icon={faAdd} />,
      },
     
    ],
  },
  {
    component: CNavGroup,
    name: 'Patient',
    to: '/Patient',
    icon: <FontAwesomeIcon icon={faUserFriends}style={{margin: "10px"}} />,
    // icon: <LocalHospitalIcon />,
    items: [
      {
        component: CNavItem,
        name: 'Add patient',
        to: '/Patient/Add patient',
        icon: <FontAwesomeIcon icon={faAdd} />,
      },
      {
        component: CNavItem,
        name: 'All patient',
        to: '/Patient/All patient',
      },
     
    ],
  },
  {
    component: CNavGroup,
    name: 'Bed Booking',
    to: '/Bed Booking',
    icon: <FontAwesomeIcon icon={faBookMedical} style={{margin: "10px"}}/>,
    // icon: <LocalHospitalIcon />,
    items: [
      {
        component: CNavItem,
        name: 'Add bed',
        to: '/Bed Booking/Add bed',
        icon: <FontAwesomeIcon icon={faAdd} />,
      },
      {
        component: CNavItem,
        name: 'All bed',
        to: '/Bed Booking/All bed',
      },
     
    ],
  },

  {
    component: CNavGroup,
    name: 'Payments',
    to: '/Payments',
    icon: <FontAwesomeIcon icon={faMoneyCheck}style={{margin: "10px"}} />,
    // icon: <LocalHospitalIcon />,
    items: [
      {
        component: CNavItem,
        name: 'Payment',
        to: '/Payments/Payment',
      },
      {
        component: CNavItem,
        name: 'Add payment',
        to: '/Payments/Add payment',
        icon: <FontAwesomeIcon icon={faAdd} />,
      },
     
    ],
  },

  {
    component: CNavGroup,
    name: ' Admin Credential',
    // icon: <LocalHospitalIcon />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
    ],
  },
]
       
      
export default _nav
