import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addContactRequest = createAction('phoneBook/AddRequest');

export const addContactSuccess = createAction(
  'phoneBook/AddSuccess',
  ({ name, number }) => ({
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  }),
);

export const addContactError = createAction('phoneBook/AddError');

export const deleteContactRequest = createAction('phoneBook/DeleteRequest');
export const deleteContactSuccess = createAction('phoneBook/DeleteSuccess');
export const deleteContactError = createAction('phoneBook/DeleteError');

export const fetchContactsRequest = createAction(
  'phoneBook/fetchContactsRequest',
);

export const fetchContactsError = createAction('phoneBook/fetchContactsError');

export const fetchContactsSuccess = createAction(
  'phoneBook/fetchContactsSuccess',
);

export const changeFilter = createAction('phoneBook/ChangeFilter');

// old redux

// import { v4 as uuidv4 } from 'uuid';
// import types from './phoneBook-types';

// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

// console.log(addContact.payload);

// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

// export default { addContact, deleteContact, changeFilter };
