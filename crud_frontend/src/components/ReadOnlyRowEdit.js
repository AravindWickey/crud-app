import React from "react";
import { useHistory } from "react-router";

const ReadOnlyRowEdit = ({ contact, handleEditClick, handleDeleteClick }) => {
  const history = useHistory();
  const HandleCancelClick = () =>{
    history.goBack();
  }
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={HandleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRowEdit;
