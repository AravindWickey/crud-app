import react, { useState, Fragment, useHistory  } from "react";
import axios from 'axios';
import { nanoid } from "nanoid";
import data from "../mock-data.json";
import "./form.css";




function Form(props){
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = async (event) => {
    event.preventDefault();
    var valid_phone_number = addFormData.phoneNumber;
    var valid_email = addFormData.email;
    if (/^\d{10}$/.test(valid_phone_number)) {
      if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valid_email)){
    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    localStorage.setItem("values", JSON.stringify(newContacts))
   
    var response = await axios.get(
      "http://localhost:3001/todo",
      {
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
      }
    );  
    console.log(response)
    var resp = JSON.stringify(response.data);
    window.alert(resp);
    props.history.push('/');
    }else{alert("Invalid email;")
    return false}
  } else {
    alert("Invalid number; must be ten digits")
    return false
}
  };

  const Cancel = () =>{
    props.history.push('/')
  }


    return(
        <>
        <h2>Add a Contact</h2>
       <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
        <button onClick={Cancel} >Cancel</button>
      </form>
        </>
    );

};

export default Form;