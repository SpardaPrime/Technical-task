export const load = (data) => {
  return {
    type: "LOAD",
    data,
  };
};

export const add = (user) => {
  return {
    type: "ADD",
    user,
  };
};
