// action types

export const login_data = "data"


export const LoginList = (data)=>{

    return {
        type : login_data,
        payload : data,
    }
}

// Action Creators
