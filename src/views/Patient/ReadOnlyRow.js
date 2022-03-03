import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{contact.Patient_id}</td>
            <td>{contact.Name}</td>
            <td>{contact.Age}</td>
            <td>{contact.Adress}</td>
            <td>{contact.PhoneNumber}</td>
            <td>{contact.LastVisit}</td>
            
            <td>
               <span class="badge badge-success">Approved</span>
                <button className="btn btn-sm px-0 py-0 btn-primary "
                    onClick={(event) => handleEditClick(event, contact)}
                >
                    <i class="fas fa-edit"  ></i>

                </button>
                
                
                <button className="btn-danger btn-sm px-0 py-0 btn btn-sm"
                  onClick={() => handleDeleteClick(contact.id)}
                >
                    <i class="fas fa-trash"></i>

                </button>

                
            </td>
        </tr>
    );
};

export default ReadOnlyRow;