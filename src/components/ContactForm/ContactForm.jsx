 import React, { Component } from 'react'
import css from './ContactForm.module.css'


 export class ContactForm extends Component {
   state = {
      name: '',
      number: '',
    }  
    
    
    handleInputChange = (e) => {
      const {name, value} = e.currentTarget;
      this.setState({[name]: value});
   };

   handleSubmit = e => {
   e.preventDefault();

   const { name, number } = this.state;
 

   this.props.onSubmit(name, number );

   this.setState({ name: '', number: '' });

   }

   // handleAddContact = () => {
   //    const { name, number } = this.state;
   //    const {contacts}= this.props;

   //    const isExist = contacts.some(
   //       (contact) => contact.name.toLowerCase() === name.trim().toLowerCase()
   //    );
   //    if (isExist) {
   //       alert(`${name} is already in contacts.`)
   //       return;
   //             }

   //    this.props.onAddContact(name, number);
   //    this.setState({ name: '', number: '' });
   //  };
       

   reset = () => {
            this.setState({name: ''})
         }

   render() {
      const {name, number} = this.state;
           return (
            
             
               <form onSubmit={this.handleSubmit} className={css.formBloc}>
                  <label className={css.inputBloc}>
                  Name 
                  <input type="text" name="name" placeholder='Rosie Simpson' value={name} onChange={this.handleInputChange} pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" required/>
                  </label>
                  <label className={css.inputBloc}>
                     Numer
                     <input type="tel" name="number" placeholder='459-12-56' value={number} onChange={this.handleInputChange} pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}" required/>
                  </label>
                 
                  
                  <button type="submit" >
                     Add Contact
                  </button>
               </form>
           


      )
         }
       }
       
       
             
           
       
       export default ContactForm
