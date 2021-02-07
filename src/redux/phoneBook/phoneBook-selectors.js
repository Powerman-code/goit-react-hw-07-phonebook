export const getContacts = state => state.phoneBook.items;
export const getFilter = state => state.phoneBook.filter;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();
  console.log(filter, contacts);

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};
