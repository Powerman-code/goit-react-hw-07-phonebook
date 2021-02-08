// import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} from '../phoneBook/phoneBook-actions';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchContactsRequest());

    await axios
      .get('/contacts')
      // console.log(response);
      .then(({ data }) => dispatch(fetchContactsSuccess(data)));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

export const addContact = (name, number) => async dispatch => {
  const contact = {
    name,
    number,
  };
  console.log(name, number);
  try {
    dispatch(addContactRequest());

    await axios
      .post('/contacts', contact)
      // console.log(response);
      .then(({ data }) => dispatch(addContactSuccess(data)));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};
// обычный фетч
// export const addContact = (name, number) => dispatch => {
//   const contact = {
//     name,
//     number,
//   };

//   dispatch(addContactRequest());

//   axios
//     .post('/contacts', contact)
//     .then(({ data }) => dispatch(addContactSuccess(data)))
//     .catch(error => dispatch(addContactError(error)));
// };

export const deleteContact = id => async dispatch => {
  try {
    dispatch(deleteContactRequest());

    await axios
      .delete(`/contacts/${id}`)
      // console.log(response);
      .then(() => dispatch(deleteContactSuccess(id)));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
