import React from "react";
import { useHistory } from "react-router";


const ReadOnlyRowDelete = ({ contact, handleEditClick, handleDeleteClick }, props) => {
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
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
        <button type="button" onClick={HandleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRowDelete;
