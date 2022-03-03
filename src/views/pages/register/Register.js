import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
//import {user} from  'src/views/dashboard/Dashboard'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormLabel
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Register = (props) => {
  const history = useHistory();
  const initialValues = { username: " ", email: " ", password: "", conformpassword: " " };
  const [formValues, setformValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [IsSubmit, setIsSubmit] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    console.log(formErrors);
    console.log(IsSubmit);
    if (Object.keys(formErrors).length === 0 && IsSubmit) {
    }
  }, [formErrors])

  const handleSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));
    setIsSubmit(true);
  }
  const validate = (values) => {
    const errors = {}
    const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{4,12}$/;
    const regex = /^[^\s@[^\s@+\.[^\s@]{2,}$/i;
    if (values.username == 0) {
      errors.username = "username is required";
    }
    if (values.email == 0) {
      errors.email = "email is required";
    } 

    if (values.password == 0) {
      errors.password = " password  is required";
    }
    if (values.conformpassword == 0) {
      errors.conformpassword = "password is required"
    }
     else if (values.password !== "undefined" &&  values.conformpassword !== "undefined") {
        if (values.password != values.conformpassword) {
        errors.conformpassword = "Passwords don't match.";
       }
      }
       return errors
  }
  const handleDirect = (event) => {
  //event.preventDefault();
  history.push('/dashboard');
  };
 return (
  <>

    <div className="bg-light min-vh-100 d-flex flex-row align-items-center"
      style={{
        backgroundImage: `url("https://blog.hubspot.com/hubfs/become-medical-sales-rep.jpg")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <CContainer>
        {Object.keys(formErrors).length === 0 && IsSubmit ? (handleDirect()
        ) : (
          <Link to="/Login"></Link>
        )}
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
              <CFormLabel style={{color: "green"}}>Create your account</CFormLabel>
                <CForm onSubmit={handleSubmit}>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      type="username"
                      name="username"
                      placeholder="Enter your Username"
                      value={formValues.username}
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <p style={{ color: "red" }}>{formErrors.username}</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      value={formValues.email}
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <p style={{ color: "red" }}>{formErrors.email}</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      name="password"
                      placeholder=' Enter password'
                      value={formValues.password}
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <p style={{ color: "red" }}>{formErrors.password}</p>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="conformpassword"
                      name="conformpassword"
                      placeholder=" Enter your conformpassword"
                      value={formValues.conformpassword}
                      onChange={handleChange}
                    />
                  </CInputGroup>
                  <p style={{ color: "red" }}>{formErrors.conformpassword}</p>
                  <div className="d-grid">
                    <CButton
                      type="submit"
                      color="success">Create Account</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  </>


  )
}
export default Register;
