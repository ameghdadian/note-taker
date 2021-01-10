import store from "store";

export const loadUserToken = () => {
  if (store.get("token")) {
    return store.get("token");
  }
  setTimeout(() => console.log("Just waitin"), 1000);
  return " ";
};
