import {login_data}  from "./actions"
const init = {
login:[]

};


export const reducer = (store=init , { type, payload }) => {
  switch (type) {
    case login_data:
      return {
          ...store, login:[...store.login, payload]
      };

    default:
      return store;
  }
};


