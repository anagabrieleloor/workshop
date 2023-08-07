import { useState} from 'react'
import './App.css'
import ContactList from './components/ContactList';
import {useEffect} from 'react'



export default function App() {
  const [selectedContactId, setSelectedContactId] =useState(null);

  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList />
      )}
    </>
  );
}
