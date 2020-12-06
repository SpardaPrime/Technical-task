const allusers = (state = { data: null }, action) => {
  switch (action.type) {
    case "LOAD":
      return { data: action.data };
    default:
      return state;
  }
};
export default allusers;
