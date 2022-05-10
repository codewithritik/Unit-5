export const Form = "RES"


export const Resaction = (data) =>{
  return {
      type: Form,
      payload:data
  };
};


export const Loginactio = (data) => {
  return {
    type: "login",
    payload:data
};
}