const service = async (url) => {
  let res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, received ${res.status}`);
  }
  return await res.json();
};

const transformUsers = ({ id, firstName, lastName, dob }) => {
  return {
    id,
    firstName,
    lastName,
    dob: {
      day: new Date(dob).getDate(),
      mounth: new Date(dob).getMonth(),
      year: new Date(dob).getFullYear(),
    },
    checked: false,
  };
};

const usersData = (url) => {
  return service(url).then((res) => res.map((item) => transformUsers(item)));
};

export default usersData;
