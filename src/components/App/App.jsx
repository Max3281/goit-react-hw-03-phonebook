import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactsForm from '../ContactsForm/ContactsForm';
import Filter from '../Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';

// { id: nanoid(9), name: 'Rosie Simpson', number: '459-12-56' },
//       { id: nanoid(9), name: 'Hermione Kline', number: '443-89-12' },
//       { id: nanoid(9), name: 'Eden Clements', number: '645-17-79' },
//       { id: nanoid(9), name: 'Annie Copeland', number: '227-91-26' },

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      console.log(`work`);
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(con => con.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  formSubmit = ({ name, number }) => {
    const checkAlert = this.state.contacts.some(
      f => f.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (checkAlert) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(9),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizeFilter = filter.toLocaleLowerCase();
    const filterContacts = contacts.filter(fil => {
      return fil.name.toLocaleLowerCase().includes(normalizeFilter);
    });

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactsForm onSubmit={this.formSubmit} />

        <h2>Contacts</h2>
        <Filter val={filter} onChange={this.changeFilter} />
        <ContactsList
          data={filterContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
