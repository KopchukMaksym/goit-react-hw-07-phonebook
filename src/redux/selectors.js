export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectIsloading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;
