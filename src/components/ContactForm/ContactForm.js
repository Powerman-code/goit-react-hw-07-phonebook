import PropTypes from 'prop-types';
import { Component, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import * as phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import * as phoneBookOperations from '../../redux/phoneBook/phoneBook-operations';
import { getContacts } from '../../redux/phoneBook/phoneBook-selectors';

import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  // console.log(contacts);
  const dispatch = useDispatch();
  const onAddContact = (name, number) =>
    dispatch(phoneBookOperations.addContact(name, number));

  const handleSubmit = e => {
    e.preventDefault();
    validateData();
    reset();
  };

  const validateData = () => {
    const normalizedFilter = name.toLowerCase();
    const msg = contacts.find(
      contact => contact.name.toLowerCase() === normalizedFilter,
    );

    if (!name || !number) {
      alert('Введите правильное имя и телефон');
      return;
    }

    if (msg) {
      alert('Taкое имя уже есть');
      return;
    } else {
      onAddContact(name, number);
    }
  };

  const handleNameChange = evt => {
    const { value, name } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          placeholder="Enter contact name"
          onChange={handleNameChange}
        ></input>
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          placeholder="Enter contact number"
          onChange={handleNameChange}
        ></input>
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     console.log(this.state);
//     console.log(evt);
//     this.validateData();
//     this.reset();
//   };

//   validateData = () => {
//     const { name, number } = this.state;
//     const { contacts } = this.props;

//     const normalizedFilter = name.toLowerCase();
//     const msg = contacts.find(
//       contact => contact.name.toLowerCase() === normalizedFilter,
//     );
//     console.log(msg);

//     if (!name || !number) {
//       alert('Введите правильное имя и телефон');
//       return;
//     }

//     if (msg) {
//       alert('Taкое имя уже есть');
//       return;
//     } else {
//       this.props.onAddContact(this.state);
//       // console.log(this.props.contacts);
//     }
//   };

//   handleNameChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({
//       [name]: value,
//     });
//     // console.log(name);
//     // console.log(value);
//   };

//   reset = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit} className={s.form}>
//         <label className={s.label}>
//           Name
//           <input
//             className={s.input}
//             type="text"
//             name="name"
//             value={name}
//             placeholder="Enter contact name"
//             onChange={this.handleNameChange}
//           ></input>
//         </label>
//         <label className={s.label}>
//           Number
//           <input
//             className={s.input}
//             type="tel"
//             name="number"
//             value={number}
//             placeholder="Enter contact number"
//             onChange={this.handleNameChange}
//           ></input>
//         </label>
//         <button type="submit" className={s.button}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   contacts: state.phoneBook.items,
// });

// const mapDispatchToProps = dispatch => ({
//   onAddContact: data => dispatch(phoneBookActions.addContact(data)),
// });

// ContactForm.propTypes = {
//   onAddContact: PropTypes.func.isRequired,
//   contacts: PropTypes.array.isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

// OldRedux

// import PropTypes from 'prop-types';
// import { Component } from 'react';
// import { connect } from 'react-redux';
// import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';

// import s from './ContactForm.module.css';

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     console.log(this.state);
//     console.log(evt);
//     this.validateData();
//     this.reset();
//   };

//   validateData = () => {
//     const { name, number } = this.state;
//     const { contacts } = this.props;

//     const normalizedFilter = name.toLowerCase();
//     const msg = contacts.find(
//       contact => contact.name.toLowerCase() === normalizedFilter,
//     );
//     console.log(msg);

//     if (!name || !number) {
//       alert('Введите правильное имя и телефон');
//       return;
//     }

//     if (msg) {
//       alert('Taкое имя уже есть');
//       return;
//     } else {
//       this.props.onAddContact(this.state);
//       // console.log(this.props.contacts);
//     }
//   };

//   handleNameChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({
//       [name]: value,
//     });
//     // console.log(name);
//     // console.log(value);
//   };

//   reset = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit} className={s.form}>
//         <label className={s.label}>
//           Name
//           <input
//             className={s.input}
//             type="text"
//             name="name"
//             value={name}
//             placeholder="Enter contact name"
//             onChange={this.handleNameChange}
//           ></input>
//         </label>
//         <label className={s.label}>
//           Number
//           <input
//             className={s.input}
//             type="tel"
//             name="number"
//             value={number}
//             placeholder="Enter contact number"
//             onChange={this.handleNameChange}
//           ></input>
//         </label>
//         <button type="submit" className={s.button}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   contacts: state.phoneBook.items,
// });

// const mapDispatchToProps = dispatch => ({
//   onAddContact: data => dispatch(phoneBookActions.addContact(data)),
// });

// ContactForm.propTypes = {
//   onAddContact: PropTypes.func.isRequired,
//   contacts: PropTypes.array.isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
