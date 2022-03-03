import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "src/asset/plugins/bootstrap/css/bootstrap.min.css";
import "src/asset/css/main.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useDispatch } from 'react-redux';


/*import "../../../asset/plugins/bootstrap/css/bootstrap.min.css";
import "../../../asset/css/main.css";*/

const Add_Doctor = () => {
    


    const initialValues = {firstname: " ", lastname:" ", dob:"", gender: "", specialise: "", phone:"", email: "",
    website: "", description: ""
};
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
   
    const regex = /^[^\s@[^\s@+\.[^\s@]{2,}$/i;
    const errors={}
    if(values.firstname ==0){
      errors.firstname = "firstname is required";
    }
    if(values.lastname == 0){
      errors.lastname = "lastname is required";
    }
    
    if(values.specialise == 0){
        errors.specialise = "specialise is required";
    }
    if(values.phone == 0){
        errors.phone = "phone is required";
    }
    if(values.website == 0){
        errors.website = "phone is required";
    }
    if(values.description == 0){
        errors.description = "description is required";
    }
    if (values.gender === '' || values.gender === "") {      
        errors["gender"] = "Select gender.";    
    } 
    if(values.email == 0){
        errors.email = "email is required";
    }else if (!regex.text(values.email ==0)){
        errors.email =" this is not valid email";

      }
    
    return errors;
    
  }

    const [SelectedDate, setSelectedDate] = useState(null);
    const [dob, SetDOB] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo();
    });

    return (
        <>
            <div>
                <section className="content">
                    <div className="container-fluid">
                        <div className="block-header">
                            <h2>Add Doctor</h2>
                            <small className="text-muted">Welcome Add Doctor</small>
                        </div>
                    
                        <form onSubmit={handleSubmit}>
                         <div className="row clearfix">
                            
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="header">
                                        <h2>Basic Information  </h2>
                                        <button type="button" class="btn btn-secondary">Edit</button>

                                    </div>
                                    <div className="body">
                                        <div className="row clearfix">
                                            <div className="col-sm-6">
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
                                            <div className="col-sm-6">
                                                <div className="form-group1">
                                                    <div className="form-line">
                                                        <lable>Enter Last Name</lable>
                                                        <input 
                                                         type='text'
                                                         name='lastname'
                                                          value={formValues.lastname}
                                                          onChange={handleChange}
                                                          className='form-control'
                                                          placeholder='Enter a lastname'
                                                          autoComplete='lastname'
                                                         />
                                                    </div>
                                                    <p style={{color: "red"}}> {formErrors.lastname }</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row clearfix">
                                            <div className="col-sm-3">
                                                <div className="form-group1">
                                                    <div className="form-line">
                                                        <lable>Date of birth</lable>
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
                                            <div className="col-sm-3">
                                                <div className="form-group1 drop-custum">
                                                    
                                                    <select  required="true"
                                                    name="gender" className="form-control show-tick">
                                                        <option  value>-- Gender --</option>
                                                        <option   required value={10}>Male</option>
                                                        <option required value={20}>Female</option>
                                                    
                                                    </select>
                                                    
                                                </div>
                                                <p style={{color: "red"}}> {formErrors.select}</p>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="form-group1">
                                                    <div className="form-line">
                                                        <lable>Speciality</lable>
                                                        <input 
                                                        type='text'
                                                        name='specialise'
                                                         value={formValues.specialise}
                                                         onChange={handleChange}
                                                         className='form-control '
                                                         placeholder='specialise'
                                                         autoComplete='specialise'

                                                         />
                                                    </div>
                                                    <p style={{color: "red"}}> {formErrors.specialise }</p>
                                                </div>
                                            </div>
                                            <div className="col-sm-3">
                                                <div className="form-group1">
                                                    <div className="form-line">
                                                        <lable> Enter phone no</lable>
                                                        <input 
                                                         type='text'
                                                         name='phone'
                                                          value={formValues.phone}
                                                          onChange={handleChange}
                                                          className='form-control'
                                                          placeholder='phone'
                                                          autoComplete='phone'

                                                        />
                                                    </div>
                                                    <p style={{color: "red"}}> {formErrors.phone }</p>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group1">
                                                    <div className="form-line">
                                                        <lable>Enter  Your Email</lable>
                                                        <input
                                                        type='text'
                                                        name='email'
                                                         value={formValues.email}
                                                         onChange={handleChange}
                                                         className='form-control'
                                                         placeholder='email'
                                                         autoComplete='specialalise'

                                                         />
                                                    </div>
                                                    <p style={{color: "red"}}> {formErrors.email }</p>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group1">
                                                    <div className="form-line">
                                                        <lable>Website URL</lable>
                                                        <input 
                                                        type='text'
                                                        name='website'
                                                         value={formValues.website}
                                                         onChange={handleChange}
                                                         className='form-control'
                                                         placeholder='website'
                                                         autoComplete='website'

                                                         />
                                                    </div>
                                                    <p style={{color: "red"}}>{formErrors.website}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <form action="https://thememakker.com/" id="frmFileUpload" className="dropzone" method="post" encType="multipart/form-data">
                                                    <div className="dz-message">
                                                        {/*<div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>*/}

                                                        {/*<em>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</em>*/} </div>
                                                    <div className="fallback">
                                                        <input name="file" type="file" multiple />
                                                    </div>
                                                </form>
                                                
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group1">
                                                    <div className="form-line">
                                                        <textarea 
                                                         name="description"
                                                         rows={4} className="form-control no-resize" placeholder="Please type what you want..." defaultValue={""} />
                                                    </div>
                                                    <p style={{color: "red"}}> {formErrors.description }</p>
                                                </div>
                                                
                                            </div>
                                            <div className="col-sm-12 text align-center">
                                                <button type="submit" className="btn btn-raised g-bg-cyan">Add doctor</button>
                                                <button type="submit" className="btn btn-raised">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                         </div>
                        </form>
                        
                        {/*<div className="row clearfix">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="header">
                                        <h2>Doctor's Account Information </h2>
                                        <button type="button" class="btn btn-secondary">Edit</button>


                                    </div>
                                    <div className="body">
                                        <div className="row clearfix">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <div className="form-line">
                                                        <input type="text" className="form-control" placeholder="User Name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <div className="form-line">
                                                        <input type="text" className="form-control" placeholder="Password" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <div className="form-line">
                                                        <input type="text" className="form-control" placeholder="Confirm Password" />
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
                         </div>*/}

                    </div>
                </section>

            </div>


        </>
    )

}
export default Add_Doctor;