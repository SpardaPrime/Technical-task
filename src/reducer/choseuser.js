const defaultState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
};

const choseuser = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD":
      const index = state.users.findIndex(({ id }) => id === action.user.id);
      localStorage.getItem("users") && localStorage.removeItem("users");
      let data;
      if (index !== -1) {
        data = [
          ...state.users.slice(0, index),
          ...state.users.slice(index + 1),
        ];
        localStorage.setItem("users", JSON.stringify(data));
        return { users: data };
      }
      data = [...state.users, action.user];
      localStorage.setItem("users", JSON.stringify(data));
      return { users: data };
    default:
      return state;
  }
};

export default choseuser;
