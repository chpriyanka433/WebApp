import React, { useState, useEffect } from 'react';
import "src/asset/plugins/bootstrap/css/bootstrap.min.css";
import "src/asset/css/main.css";
import { Link } from 'react-router-dom';
import data from "src/views/Department/mock-data.json";
//import ReadOnlyRow from "src/views/Department/ReadOnlyRow";
//import EditableRow from "src/views/Department/EditableRow";
import { nanoid } from "nanoid";

const Add_Department = () => {
    
  {/*const initialValues = {departmentname: " ",  description: ""};
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
    if(values.departmentname ==0){
      errors.departmentname = "Department name is required";
    }
    if(values.description == 0){
      errors.description = "description is required";
    }
    
    return errors;
    
  }*/}

  //edit
  const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        department_name: "",
        status: "",
    });
    const [editFormData, setEditFormData] = useState({
        department_name: "",
        status: "",

    });

    const [editContactId, setEditContactId] = useState(null);
    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault()
        const newContact = {
            id: nanoid(),
            department_name: addFormData.department_name,
            status: addFormData.status,

        };
        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedContact = {
            id: editContactId,
            department_name: editFormData.department_name,
            status: editFormData.status,

        };

        const newContacts = [...contacts];
        const index = contacts.findIndex((contact) => contact.id === editContactId);

        newContacts[index] = editedContact;

        setContacts(newContacts);
        setEditContactId(null);
    };

    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);
        const formValues = {
            department_name: contact.department_name,
            status: contact.status,

        };

        setEditFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditContactId(null);
    };

    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];
        const index = contacts.findIndex((contact) => contact.id === contactId);
        newContacts.splice(index, 1);
        setContacts(newContacts);
    };

    return (
        <>
            <div>
                <section className="content">
                    <div className="container-fluid">
                        <div className="block-header">
                            <h2>Add department</h2>
                        </div>
                        <form onSubmit={handleAddFormSubmit}>
                          {/*{Object.keys(formErrors).length === 0 && IsSubmit ? (handleAddFormSubmit
                                    ):(
                                    <Link to="/register"></Link>
                                    )}*/}
                          <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12 ">
                                <div className="card">
                                    <div className="header">
                                        <h2>add department </h2>
                                    </div>
                                    <div className="body">
                                        <div className="row clearfix">
                                            <div className="col-sm-6 ">
                                                <div className="form-group1">
                                                    <lable>Department name</lable>
                                                    <div className="form-line1">
                                                        <input
                                                         type='text'
                                                          name='department_name'
                                                          
                                                          onChange={handleAddFormChange}
                                                          className='form-control '
                                                          placeholder='Enter a department_name'
                                                          autoComplete='department name'
                                                         />
                                                    </div>
                                                   {/* <p style={{color: "red"}}> {formErrors.departmentname}</p>*/}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row clearfix">
                                            <div className="col-sm-6">
                                                <div className="form-group1">
                                                    <lable>status</lable>   
                                                    <div className="form-line1">
                                                        <input
                                                         name="status" 
                                                         required="required"
                                                         onChange={handleAddFormChange}
                                                        className="form-control no-resize"
                                                         />
                                                    </div>
                                                </div>
                                               {/* <p style={{color: "red"}}>{formErrors.description }</p>*/}
                                            </div>
                                            <div className="row-sm-12  d-flex">
                                                {/*<div class=" col-8 form-group1">
                                                    <div >
                                                        <div>
                                                            <label class="display-block">Department Status</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="radio" name="status"   id="product_active" value="option1"  />
                                                            <label class="form-check-label"  required for="product_active">Active</label>
                                                        </div>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="status" id="product_inactive" value="option2" checked="" />
                                                        <label class="form-check-label" for="product_inactive">Inactive</label>
                                                    </div>
                                               </div>*/}

                                                
                                             </div>
                                             <div className="col-sm-12  text align-center">
                                                <button  type="submit" className="btn btn-raised g-bg-cyan">Create Department</button>
                                                </div>
                                            
                                        </div>
                                        
                                     </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                        </form>
                    </div>
                </section>

            </div>


        </>
    );
};
export default Add_Department;