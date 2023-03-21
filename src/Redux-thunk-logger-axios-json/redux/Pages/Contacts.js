import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError
} from "../Main/index";
export  function Contacts(props) {
    const { loading , contacts, error, fetchContacts } = props;
console.log(loading , contacts, error,"first")
useEffect(() => {
    fetchContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div> <h1>Contacts</h1>
<div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "98vh",
        width: "100%",
      }}
    >
        { loading ? (<div>
            Loading...
        </div>) 
        : error ? (<div>
            Error getting users
        </div>) : 
        (<div>
            {contacts.map((contact, index)=>(
                <p key={index}>{contact}</p>
            ))}
        </div>)}

    </div>
    </div>
  )
}


const mapStateToProps = (state) => {
    console.log(state.contactData,"rootReducer");
    return state.contactData;
  };
  
  const fetchContacts = () => {
    return function (dispatch) {
      dispatch(fetchContactsRequest());
      axios
        .get("http://localhost:3006/contacts")
        .then((response) => {
          console.log(response,"res")
          const contact = response.data.map((contact) => contact.email);
          dispatch(fetchContactsSuccess(contact));
        })
        .catch((error) => {
          dispatch(fetchContactsError(error.message));
        });
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        fetchContacts: () => dispatch(fetchContacts()),
    };
  };
 
  export default connect(mapStateToProps,mapDispatchToProps)(Contacts);