import ContactList from '../components/ContactList/ContactList.jsx'
import ContactForm from '../components/ContactForm/ContactForm.jsx'
import Filter from '../components/Filter/Filter.jsx'
import { useSelector } from 'react-redux';
import { useGetContactsQuery, useAddContactMutation } from '../redux/PhonebookSlice'
import Container from 'react-bootstrap/Container';

export default function ContactsView() {

    const { data: contacts, error, isLoading } = useGetContactsQuery()
    const [addContact] = useAddContactMutation()
    const filter = useSelector(state => state.filter)

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
    
    const getVisibleContacts = () => {
      const normilizedFilter = filter.toLowerCase();
  
      const result = contacts.filter(contact => contact.name.toLowerCase().includes(normilizedFilter))
      return result;
    }

    return(
        <Container>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={handleAddContact}/>
            <h2>Contacts</h2>
            <Filter />
            {error && <p>An error occurred:{error}</p>}
            {isLoading && <p>Loading...</p>}
            {contacts && <ContactList contacts={getVisibleContacts()}/>}
        </Container>
    )
}

