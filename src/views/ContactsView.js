import ContactList from '../components/ContactList/ContactList.jsx'
import ContactForm from '../components/ContactForm/ContactForm.jsx'
import { useSelector } from 'react-redux';
import { useGetContactsQuery, useAddContactMutation } from '../redux/PhonebookSlice'

export default function ContactsView() {

    //const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

    const { data: contacts, error, isLoading } = useGetContactsQuery()
    const [addContact] = useAddContactMutation()

    const handleAddContact = async contact => {
        if(contacts.some(c => c.name ===contact.name)) {
          alert(contact.name +' is already in contacts')
          return
        }
    
        try {
          await addContact(contact)
        } catch (error) {
          console.log('error', error)
        }
      }

    return(
        <div>
            <h1>Contacts</h1>
            <ContactForm onSubmit={handleAddContact}/>
            {contacts && <ContactList contacts={contacts}/>}
        </div>
    )
}
// {isLoading && <p>Loading...</p>}
// {error && <p>An error occurred: {error.message}</p>}
//{contacts && <ContactList contacts={contacts}/>}