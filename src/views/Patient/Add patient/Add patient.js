import React, { useState, useEffect } from 'react';
import "src/asset/plugins/bootstrap/css/bootstrap.min.css";
import "src/asset/css/main.css";
import {Link} from 'react-router-dom'
/*import "/src/asset/plugins/bootstrap/css/bootstrap.min.css";
import "/src/asset/css/main.css";*/

import DatePicker from 'react-date-picker';

const Add_patient = () => {

const initialValues = { firstname: "", lastname: "", phoneno: "", dob:"", age: "", email: "", description: ""};
  const [formValues, setformValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [IsSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setformValues({...formValues, [name]: value});
  };
  const handleSubmit = (e)=>{
    console.log(handleSubmit);
    console.log(setIsSubmit);
    e.preventDefault();
    (setformErrors(validate(formValues)))
    
    setIsSubmit(true);
  }
  useEffect(()=>{
    console.log(IsSubmit);
    if(Object.keys(formErrors).length === 0 && IsSubmit){
      console.log(formErrors);
    }   
  }, [formErrors])


  const validate=(values)=>{
    const errors={}
    if(values.firstname ==0){
      errors.firstname = "firstname is required";
    }
    if(values.lastname == 0){
      errors.lastname = "lastname is required";
    }
    if(values.phoneno == 0){
        errors.phoneno = "phoneno is required";
    }
    if(values.age == 0){
        errors.age = "age is required";
    }
    if(values.dob == 0){
        errors.dob = "dob is required";
    }
    if(values.email == 0){
        errors.email = "email is required";
    }
    if(values.description == 0){
        errors.description = "description is required";
    }

    
    return errors;
    
  }


    const [value, onChange] = useState('');
    const [dob, SetDOB] = useState('');
    return (
        <>
            <div>
                <section className="content">
                    <div className="container-fluid">
                        <div className="block-header">
                            <h2>Add Patient</h2>
                            <small className="text-muted">Welcome </small>
                        </div>
                        {Object.keys(formErrors).length === 0 && IsSubmit ? (<Link to="/dashboard"></Link>
                         ):(
                         <Link to="/register"></Link>
                         )}
                        <form onSubmit={handleSubmit}>
                         <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="header">
                                        <h2>Basic Information  </h2>
                                    </div>
                                    <div className="body">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-sm-12">
                                                <div className="form-group1">
                                                    <div className="form-line">
                                                        <lable>Enter First Name</lable>
                                                        <input
                                                           type='text'
                                                           name='firstname'
                                                            value={formValues.firstname}
                                                            onChange={handleChange}
                                                            className='form-control '
                                                            placeholder='Enter a firstname'
                                                            autoComplete='firstname'
                                                         />
                                                    </div>
                                                    <p style={{color: "red"}}> {formErrors.firstname }</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-12">
                                                <div className="form-group1">
                                                    <div className="form-line">
                                                        <lable>Enter last Name</lable>
                                                        <input
                                                         type='text'
                                                         name='lastname'
                                                          value={formValues.lastname}
                                                          onChange={handleChange}
                                                          className='form-control '
                                                          placeholder='Enter a firstname'
                                                          autoComplete='lastname'
                                                         />
                                                    </div>
                                                    <p style={{color: "red"}}> {formErrors.lastname }</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-12">
                                                <div className="form-group1">
                                                    <div className="form-line">
                                                        <lable>Enter phone no</lable>
                                                        <input
                                                          type='text'
                                                          name='phoneno'
                                                           value={formValues.phoneno}
                                                           onChange={handleChange}
                                                           className='form-control '
                                                           placeholder='Enter a phoneno'
                                                           autoComplete='phoneno'
                                                         />
                                                    </div>
                                                    <p style={{color: "red"}}> {formErrors.phoneno }</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-group1">
                                                    <div className="form-line">
                                                        <lable>date of birth</lable>
                                                    <input
                                                            className='form-control'
                                                            type='date'
                                                            name='DOB'
                                                            required
                                                            id='dob'
                                                            value={dob}
                                                            onChange={(e) => SetDOB(e.target.value)}
                                                            
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-group1 drop-custum">
                                                    <select className="form-control show-tick">
                                                        <option value>-- Gender --</option>
                                                        <option value={10}>Male</option>
                                                        <option value={20}>Female</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-group1">
                                                    <div className="form-line">
                                                        <lable> Enter Age</lable>
                                                        <input 
                                                         type='text'
                                                         name='age'
                                                          value={formValues.age}
                                                          onChange={handleChange}
                                                          className='form-control '
                                                          placeholder='Enter a age'
                                                          autoComplete='age'
                                                        />
                                                    </div>
                                                    <p style={{color: "red"}}> {formErrors.age }</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-group1">
                                                    <div className="form-line">
                                                        <lable>Enter Valid Email id</lable>
                                                        <input 
                                                        type='text'
                                                        name='email'
                                                         value={formValues.email}
                                                         onChange={handleChange}
                                                         className='form-control '
                                                         placeholder='Enter a email'
                                                         autoComplete='email'
                                                         />
                                                    </div>
                                                    <p style={{color: "red"}}> {formErrors.email }</p>
                                                </div>
                                            </div>

                                        </div>
                                        
                                        <div className="row clearfix">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <form action="https://thememakker.com/" id="frmFileUpload" className="dropzone" method="post" encType="multipart/form-data">
                                                    <div className="dz-message">
                                                        
                                                    </div>

                                                    <div className="fallback">
                                                        <input name="file" type="file" multiple />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="row clearfix">
                                            <div className="col-sm-12">
                                                <div className="form-group1">
                                                    <div className="form-line">
                                                        <textarea
                                                        type="text"
                                                         name="description"
                                                         value={formValues.description}
                                                         rows={4} className="form-control no-resize"
                                                          placeholder="Description"  />
                                                    </div>
                                                    <p style={{color: "red"}}> {formErrors.description }</p>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 text align-center">
                                                <button type="submit" className="btn btn-raised g-bg-cyan">Add patient</button>
                                                <button type="submit" className="btn btn-raised">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </form>
                        <div className="row clearfix">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="header">
                                        <h2>Registration Information <small>Description text here...</small> </h2>
                                    </div>
                                    <div className="body">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-group1">
                                                    <div className="form-line">
                                                        <lable>Enter Doctor Name</lable>
                                                        <input type="text" className="form-control" placeholder="Doctor Name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-group1">
                                                    <div className="form-line">
                                                        <lable>Staff on Duty</lable>
                                                        <input type="text" className="form-control" placeholder="Staff on Duty" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-group1">
                                                    <div className="form-line">
                                                        <lavel> ward no</lavel>
                                                        <input type="text" className="form-control" placeholder="Ward No." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                <div className="form-group1">
                                                    <div className="form-line">
                                                        <lable>Please choose date</lable>
                                                        <input
                                                            className='form-control'
                                                            type='date'
                                                            name='DOB'
                                                            required
                                                            id='dob'
                                                            value={dob}
                                                            onChange={(e) => SetDOB(e.target.value)}
                                                            
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 text align-center">
                                                <button type="submit" className="btn btn-raised g-bg-cyan">Submit</button>
                                                <button type="submit" className="btn btn-raised">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div >
        </>
    )
}
export default Add_patient;