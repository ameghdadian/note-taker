import store from "store";

export const loadUserToken = () => {
  if (store.get("token")) {
    return store.get("token");
  }
};
