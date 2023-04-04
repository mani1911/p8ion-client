import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useLocalStorage } from "./useLocalStorage";

export interface User {
  id: string;
  name: string;
  email: string;
  authToken?: string;
}

export const useUser = () => {
  const { user, login, logout } = useContext(AuthContext);
  const { setItem } = useLocalStorage();

  const addUser = (user: User | null) => {
    setItem("user", JSON.stringify(user));
  };

  const removeUser = () => {
    setItem("user", "");
  };

  return { user, addUser, removeUser };
};
