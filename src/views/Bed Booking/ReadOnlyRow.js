import React from "react";
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{contact.Room_No}</td>
            <td>{contact.Patient}</td>
            <td>{contact.Allotment}</td>
            <td>{contact.Discharge}</td>
            <td>{contact.Room_Type}</td>
            
            <td>
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