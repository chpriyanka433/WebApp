import React, { useState, Fragment } from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faEdit , faDeleteLeft, } from '@fortawesome/free-solid-svg-icons'
//import Modal from 'react-modal'
import { useHistory } from 'react-router-dom';
//import { Modal } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.css";
//import  DeleteIcons from '@mui/icons-material/Delete';
import data from "src/views/Department/mock-data.json";
import ReadOnlyRow from "src/views/Department/ReadOnlyRow";
import EditableRow from "src/views/Department/EditableRow";
import { nanoid } from "nanoid";



import "src/asset/plugins/bootstrap/css/bootstrap.min.css";
import "src/asset/css/main.css";
import { Link } from 'react-router-dom'
//import EditModal from './EditModal';


const All_Department = () => {
    const history = useHistory();

   {/* const [showModal, setShowModal] = useState(false)
    const [showEditModal, setEditModal] = useState(false)
    const showModalBtn = (bool) => {
        setShowModal(bool)
    }
    const showEditModalBtn = (bool) => {
        setEditModal(bool)
    }
    const handleDirect = (event) => {
        //event.preventDefault();
        history.push('/Add Department');
    };*/}


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
                <section class="content">
                    <div class="container-fluid">
                        <div class="block-header">
                            <h2>All Department</h2>
                            <small class="text-muted">Welcome to Department</small>
                        </div>
                        <div class="row clearfix">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="card">
                                    <div class="header">
                                        <h2>Department</h2>
                                        <form class="form-inline d-flex my-2 my-lg-0">
                                            <Link to="Add Department">
                                                <button class="col-2" type="button" class="btn btn-primary">Add Departments</button>
                                            </Link>
                                            {/*<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
                                        </form>


                                    </div>
                                    <div class="body table-responsive">
                                        <form onSubmit={handleEditFormSubmit}>
                                            <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
                                                <thead>
                                                    <tr>
                                                        <th>department Name</th>
                                                        <th>Department Status</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tfoot>
                                                </tfoot>
                                                <tbody>
                                                    {contacts.map((contact) => (
                                                        <Fragment>
                                                            {editContactId === contact.id ? (
                                                                <EditableRow
                                                                    editFormData={editFormData}
                                                                    handleEditFormChange={handleEditFormChange}
                                                                    handleCancelClick={handleCancelClick}
                                                                />
                                                            ) : (
                                                                <ReadOnlyRow
                                                                    contact={contact}
                                                                    handleEditClick={handleEditClick}
                                                                    handleDeleteClick={handleDeleteClick}
                                                                />
                                                            )}
                                                        </Fragment>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </form>
                                        {/*<form onSubmit={handleAddFormSubmit}>
                                            <input
                                                type="text"
                                                name="department_name"
                                                required="required"
                                                placeholder="Enter department_name"
                                                onChange={handleAddFormChange}
                                            />
                                            <input
                                                type="text"
                                                name="status"
                                                required="required"
                                                placeholder="Enter status"
                                                onChange={handleAddFormChange}
                                            />
                                            <button className="btn btn-primary" type="submit">Add</button>
                                                            </form>*/}

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
export default All_Department;