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
          placeholder="Enter doctor_name"
          name="Room_No"
          value={editFormData.Room_No}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Patient"
          name="Patient"
          value={editFormData.Patient}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Allotment"
          name="Allotment"
          value={editFormData.Allotment}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Discharge"
          name="Discharge"
          value={editFormData.Discharge}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Room_Type"
          name="Room_Type"
          value={editFormData.Room_Type}
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