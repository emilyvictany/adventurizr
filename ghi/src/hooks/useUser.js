import { useEffect, useState } from "react";

import sleep from '../utils/sleep'

const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userObj = JSON.parse(localStorage.getItem("user"));
    setUser(userObj);
  }, []);

  const saveUser = async () => {
    try {
      await sleep(2000);

      const response = await fetch(`${process.env.REACT_APP_API_HOST}/token`, {
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        const newUser = JSON.stringify(data.account);
        localStorage.setItem("user", newUser);
        setUser(data.account);

        return newUser
      }
    } catch (err) {
      console.log("Error while saving user: ", err);
    }
  };

  return { user, saveUser };
};

export default useUser;

