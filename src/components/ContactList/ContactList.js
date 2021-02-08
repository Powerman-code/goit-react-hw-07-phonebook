import { connect, useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import s from './ContactList.module.css';
import {
  getLoadingStatus,
  // getContacts,
  // getFilter,
  getVisibleContacts,
  getErrorMessage,
} from '../../redux/phoneBook/phoneBook-selectors';
import * as phoneBookOperations from '../../redux/phoneBook/phoneBook-operations';
import { useEffect } from 'react';

// const getVisibleContacts = (contacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   console.log(filter);

//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

export default function ContactList() {
  const visibleContacts = useSelector(getVisibleContacts);
  const loadingStatus = useSelector(getLoadingStatus);
  const error = useSelector(getErrorMessage);
  // const contacts = useSelector(state => state.phoneBook.items);
  // const filter = useSelector(state => state.phoneBook.filter);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(phoneBookOperations.deleteContact(id));

  // const visibleContacts = getVisibleContacts(contacts, filter);

  useEffect(() => {
    dispatch(phoneBookOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      {error && <h1>Error</h1>}
      {loadingStatus && <h1>Loading, please wait</h1>}
      <ul>
        {visibleContacts &&
          visibleContacts.map(({ id, name, number }) => (
            <li key={id}>
              <p>
                {name} {number}
              </p>
              <button
                type="button"
                id={id}
                onClick={() => onDeleteContact(id)}
                className={s.button}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}

// OldRedux

// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
// import s from './ContactList.module.css';

// function ContactList({ onDeleteContact, contacts }) {
//   // const filteredContacts = visibleContacts;
//   return (
//     <ul>
//       {contacts &&
//         contacts.map(({ id, name, number }) => (
//           <li key={id}>
//             <p>
//               {name} {number}
//             </p>
//             <button
//               type="button"
//               id={id}
//               onClick={() => onDeleteContact(id)}
//               className={s.button}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//     </ul>
//   );
// }

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   console.log(filter);

//   return allContacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = state => {
//   const { filter, items } = state.phoneBook;
//   const visibleContacts = getVisibleContacts(items, filter);
//   // items.filter(item => item.name.toLowerCase().includes(normalizedFilter));

//   return {
//     // contacts: state.phoneBook.items,
//     contacts: visibleContacts,
//   };
// };

// // Упрощенный вариант
// // const mapStateToProps = ({ phoneBook: { items, filter } }) => ({
// //   contacts: getVisibleContacts(items, filter),
// // });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(phoneBookActions.deleteContact(id)),
// });

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
