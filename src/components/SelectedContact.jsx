import react from "react";
import {useState, useEffect} from 'react';
import ContactList from "./ContactList";
import ContactRow from "./ContactRow";

export default function SelectedContact ({selectedContactId, setSelectedContactId}) {
   const [contact, setContact] =useState(null);

   useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}"
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);


  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        
          return <ContactRow key={contact.id} contact={contact}
          setSelectedContactId={setSelectedContactId} />
         
          
        
      </tbody>
    </table>
  );
}