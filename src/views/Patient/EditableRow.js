import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter department name"
          name="Patient_id"
          value={editFormData.Patient_id}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Name"
          name="Name"
          value={editFormData.Name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Age"
          name="Age"
          value={editFormData.Age}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Adress"
          name="Adress"
          value={editFormData.Adress}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="PhoneNumber"
          name="PhoneNumber"
          value={editFormData.PhoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="LastVisit"
          name="LastVisit"
          value={editFormData.LastVisit}
          onChange={handleEditFormChange}
        ></input>
      </td>
      
      
      <td>
        <button type="submit" class="btn btn-primary">Save</button>
        <button  className="btn btn-danger"type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
