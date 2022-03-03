import React, { useState ,useEffect} from "react";
import Select from 'react-select'
import DateTimePicker from 'react-datetime-picker';


import "src/asset/plugins/bootstrap/css/bootstrap.min.css";
import "src/asset/css/main.css";



const Add_bed = () => {
    const initialValues = { Roomno: "", patientname: "", dob: "" };
    const [formValues, setformValues] = useState(initialValues);
    const [formErrors, setformErrors] = useState({});
    const [IsSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformValues({ ...formValues, [name]: value });
    };
    const handleSubmit = (e) => {
        console.log(handleSubmit);
        console.log(setIsSubmit);
        e.preventDefault();
        (setformErrors(validate(formValues)))

        setIsSubmit(true);
    }
    useEffect(() => {
        console.log(IsSubmit);
        if (Object.keys(formErrors).length === 0 && IsSubmit) {
            console.log(formErrors);
        }
    }, [formErrors])


    const validate = (values) => {
        const errors = {}
        if (values.Roomno == 0) {
            errors.Roomno = "Roomno is required";
        }
        if (values.patientname == 0) {
            errors.patientname = "patientname is required";
        }

        if (values.dob == 0) {
            errors.dob = "dob is required";
        }

        return errors;

    }

    const [dob, SetDOB] = useState('');
    const [value, onChange] = useState(new Date());
    const option = [
        { value: 'General Ward', label: 'General Ward' },
        { value: 'ICU', label: 'ICU' },


    ]
    return (
        <>
            <div>
                <section className="content">
                    <div className="container-fluid">
                        <div className="block-header">
                            <h2>Add bed</h2>
                            <small className="text-muted">Welcome</small>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="header">
                                        <h2>Basic Information  </h2>
                                    </div>

                                    <div className="body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="row clearfix">
                                                <div className="col-sm-6">
                                                    <lable>Enter Room no</lable>
                                                    <div className="form-group1">
                                                        <div className="form-line">
                                                            <input
                                                                type='text'
                                                                name='Roomno'
                                                                value={formValues.Roomno}
                                                                onChange={handleChange}
                                                                className='form-control '
                                                                placeholder='Enter Room No'
                                                                autoComplete='Room No'
                                                            />
                                                        </div>
                                                        <p style={{ color: "red" }}> {formErrors.Roomno}</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <lable>
                                                        patient name
                                                    </lable>
                                                    <div className="form-group1">
                                                        <div className="form-line">
                                                            <input
                                                                type='text'
                                                                name='patientname'
                                                                value={formValues.patientname}
                                                                onChange={handleChange}
                                                                className='form-control '
                                                                placeholder='Enter patientname'
                                                                autoComplete='patientname'
                                                            />
                                                        </div>
                                                        <p style={{ color: "red" }}> {formErrors.patientname}</p>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6">
                                                    <lable>Room Type</lable>
                                                    <div className="form-group1">

                                                        <div className="form-line">
                                                            <Select options={option} />

                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <lable>
                                                            Allotment Date
                                                        </lable>
                                                        <div className="form-group1">

                                                            <div className="form-line">
                                                                <input
                                                                    className='form-control'
                                                                    type='date'
                                                                    name='DOB'
                                                                    required
                                                                    id='dob'
                                                                    value={dob}
                                                                    onChange={(e) => SetDOB(e.target.value)}
                                                                    required= "true"
                                                                />

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <lable>
                                                            Discharge Date
                                                        </lable>
                                                        <div className="form-group1">
                                                            <div className="form-line">
                                                                <input
                                                                    className='form-control'
                                                                    type='date'
                                                                    name='DOB'
                                                                    required
                                                                    id='dob'
                                                                    value={dob}
                                                                    onChange={(e) => SetDOB(e.target.value)}
                                                                    required="true"

                                                                />

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                                        <lable> patient photo</lable>
                                                        <form action="https://thememakker.com/" id="frmFileUpload" className="dropzone" method="post" encType="multipart/form-data">
                                                            <div className="dz-message">
                                                                {/*<div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>*/}
                                                                <div className="fallback">
                                                                    <input name="file" type="file" multiple  required="true"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="col-sm-12 text align-center">
                                                        <button type="submit" className="btn btn-raised g-bg-cyan">Add Bed</button>
                                                        <button type="submit" className="btn btn-raised">Cancel</button>
                                                    </div>


                                                </div>


                                            </div>
                                        </form>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

        </>
    )
}
export default Add_bed;