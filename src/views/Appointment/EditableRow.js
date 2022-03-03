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
          name="Doctor_Name"
          value={editFormData.Doctor_Name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Department"
          name="Department"
          value={editFormData.Department}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="AvailableDays"
          name="AvailableDys"
          value={editFormData.AvailableDys}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="AvailableTime"
          name="AvailableTime"
          value={editFormData.AvailableTime}
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
