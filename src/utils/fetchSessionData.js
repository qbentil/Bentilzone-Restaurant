export const fetchSessionUser = () => {
  const user =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

    return user;
  // return null
};
