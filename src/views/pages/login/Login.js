import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
//import Axios from 'axios';
//import { object } from 'prop-types';
import { Link } from 'react-router-dom';
import { dashboard } from 'src/views/dashboard/Dashboard'
//import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

//import image from 'src/assets/images/avatars/1.jpg';


{/*import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'*/}
/*const handleSubmit = (e) => {
  
  e.preventDefault();
  Axios.post(
    `${process.env.REACT_APP_ROOT_URL}/login`,{
   username: username,
   password:password,
  }).then((res) => {
    // console.log(res.data);
    if (Object.keys(res.data).length === 1) {
      alert(res.data.msg);
    } else {
      if (res.data.logIn === true) {
        sessionStorage.setItem('loggedIn', true);
        sessionStorage.setItem('token', res.data.token);
        //history.push(`/`);
      } else if (res.data.logIn === false) {
        alert(res.data.msg);
      }
    }
  });
};*/
{/*var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url("+{image}+")"
};*/}

const Login = (props) => {
  const history = useHistory();
  const initialValues = { username: " ", password: " " };
  const [formValues, setformValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [IsSubmit, setIsSubmit] = useState(false);
  //const notify = () => toast("success login");
  //const [showSignUp, setShowSignUp] = useState(true);
  //const [showSignIn, setShowSignIn] = useState(true);

  /*const ToggleSignIn = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const ToggleSignUp = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  };*/

  //console.log(IsSubmit)
  //console.log(setShowSignIn)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    console.log(handleSubmit);
    console.log(setIsSubmit);
    e.preventDefault();
    //setformErrors(validate(formValues));
    (setformErrors(validate(formValues)))

    setIsSubmit(true);
  }
  useEffect(() => {
    console.log(IsSubmit);
    if (Object.keys(formErrors).length === 0 && IsSubmit){

    }
  }, [formErrors])

  const validate = (values) => {
    const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{4,12}$/;
    const errors = {}
    if (values.username == 0) {
      errors.username = "username is required";
    }
    if (values.password == 0) {
      errors.password = "password is required";
    }
    else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 6) {
      errors.password = "Password cannot be more than 6 characters";
    } else if (!regexp.test(values.password)) {
      errors.password = "passsword must contain atleast one uppercase,lowercase,number,special character";
    }
    return errors;

  }
  const handleDirect = (event) => {
    //event.preventDefault();
    history.push('/dashboard');
    //alert("successfully login");
  };
  
  return (
    <>
      <div style={{
        backgroundImage: `url("https://blog.hubspot.com/hubfs/become-medical-sales-rep.jpg")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
        <section className='vh-100 d-flex flex-column align-items-center justify-content-center '>
          {Object.keys(formErrors).length === 0 && IsSubmit ? (handleDirect()
          ) : (
            <Link to="/register"></Link>
          )}
          
          <div className='container-fluid' >
            <div className='row d-flex justify-content-center align-items-center h-100'>
              <div className='col-md-9 col-lg-6 col-xl-5'>
                <img
                  src='https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png'
                  className='img-fluid'
                  alt=''
                />
              </div>
              <div className='col-md-8 col-lg-6 col-xl-4 offset-xl-1 py-5'>
                <form onSubmit={handleSubmit}>
                  <div className=''>
                    <h2 className='mb-0 me-3 text-center'>Login Admin</h2>
                    <hr />
                    <div className='form-outline mb-2'>
                      <label className='form-label' htmlFor='username'>
                        <h5>Username : </h5>
                      </label>
                      <input
                        type='text'
                        name='username'
                        value={formValues.username}
                        onChange={handleChange}
                        className='form-control form-control-lg'
                        placeholder='Enter a username'
                        autoComplete='username'
                      />
                    </div>
                    <p style={{ color: "red" }}> {formErrors.username}</p>
                    <div className='form-outline mb-2'>
                      <label className='form-label' htmlFor='password'>
                        <h5>Password:</h5>
                      </label>
                      <input
                        type='text'
                        name='password'
                        value={formValues.password}
                        onChange={handleChange}
                        className='form-control form-control-lg'
                        placeholder='Enter password'
                        autoComplete='password'
                      />
                    </div>
                    <p style={{ color: "red" }}>{formErrors.password}</p>
                    <div className='text-center text-lg-start mt-4 pt-2 text align-center'>
                      <div className='row-col-12 text align-center form-outline mb-2'>
                        <button
                          type="submit"
                          className='btn btn-primary btn-bg '
                          style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                        >
                          Login
                        </button>
                      </div>
                    </div>

                    <div className="text align-center">
                      <Link to="">forget password</Link>
                    </div>
                    <div className="text align-center">
                      <lable>Account</lable>
                       <Link to="/register">Sign up!</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Login;
