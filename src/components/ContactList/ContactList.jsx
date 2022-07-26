import s from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../redux/PhonebookSlice.js'


const ContactList = ({ contacts }) => {

    const [deleteContact] = useDeleteContactMutation()
    console.log('contacts from ContactsView', contacts)

    return (
        <ul className={s.list}>
            {contacts.map(contact => 
            <li key={contact.id} className={s.item}>
                {contact.name} : {contact.number} 
                <button 
                    className = "button" 
                    type="button" 
                    onClick={() => deleteContact(contact.id)}
                >Delete</button>
            </li>)}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array,
  };

export default ContactList;