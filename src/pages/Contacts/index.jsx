import React, { use, useEffect } from 'react'
import AddContactForm from '../../components/AddContactForm';
import ContactList from '../../components/ContactList';

function Contacts() {
  const [contacts, setContacts] = React.useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  return <>
    <AddContactForm setContacts={setContacts} />
    <ContactList contacts={contacts} setContacts={setContacts} />
  </>

};

export default Contacts;



// Задача 1: Создать приложение "Контактная книга", которое позволяет пользователю добавлять и просматривать контакты.
// 1)Создайте компонент ContactList, который отображает список контактов.
// 2)Создайте компонент AddContactForm, который позволяет пользователю добавлять новый контакт.
// Для каждого контакта добавляется имя, телефон и email.


// Обязательно использовать useEffect и useState.