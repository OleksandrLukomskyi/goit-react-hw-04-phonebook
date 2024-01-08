import React, {Component} from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';
class App extends Component {

   state = {
      contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }],
      filter: '',
        };

   
        componentDidMount() {
         const contacts = localStorage.getItem('contacts');
         const parsedContacts = JSON.parse(contacts);
if (parsedContacts) {
   this.setState({contacts: parsedContacts});
}
        }

componentDidUpdate(prevProps, prevState) {
if (this.state.contacts !== prevState.contacts) {
   localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
}

}


   handleAddContact = (name, number,) => {
    
      const {contacts} = this.state;
       
     

     
      const isExist = contacts.some(
         contact => contact.name === name.trim() || contact.number === number.trim());
      
      if (isExist) {
         alert(`${name} is already in contacts.`);
         return;
      }


 const newContact = {
         id: nanoid(),
         name: name.trim(),
         number: number.trim(),
      };
     
 this.setState(prevState => ({ 
         contacts: [ ...prevState.contacts, newContact], }));
   };

 

   changeFilter = filter => {
   this.setState({filter});
};

   handleDeleteContact = (contactId) => {
         this.setState(prevState => ({
         contacts: prevState.contacts.filter(contact => contact.id !== contactId)
      }));

   }

   filteredContacts = () => {
      const {contacts, filter} = this.state;
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(
         contact => contact.name.toLowerCase().includes(normalizedFilter));
   };


   render() {
     const {filter} = this.state;

      return (
         <div className={css.container}>
            <h1>Phonebook</h1>
           
            <ContactForm onSubmit={this.handleAddContact}/>

            <h2>Contacts</h2>
            
            <Filter filter={filter} onFilterChange={this.changeFilter}/>

            <ContactList contacts={this.filteredContacts()} onDeleteContact={this.handleDeleteContact}/>
         
         </div>

      );
   }
}

export default App;