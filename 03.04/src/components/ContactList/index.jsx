import React from 'react'
import s from './styles.module.css'

function ContactList({ contacts, setContacts }) {

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, email, phone }) => (
        <li key={id} className={s.contact}>
          <p>{name}</p>
          <p>{email}</p>
          <p>{phone}</p>
          <button onClick={() => setContacts(contacts.filter(contact => contact.id !== id))}>Delete</button>
        </li>
      ))}
    </ul>
  )
};

export default ContactList;