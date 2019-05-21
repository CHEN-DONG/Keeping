const searchValue = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH':
      return action.value;
    default:
      return state;
  }
};

export default searchValue;
