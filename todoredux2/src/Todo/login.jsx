import { useState } from "react";
import { useNavigate } from "react-router-dom";



export const Login  = ()=>{
    const [show, setshow] = useState();
    const nav  = useNavigate()
    const handlechange = (e)=>{
        setshow({...show, [e.target.id]:e.target.value})
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(show)
    };
    const Handlesubmit  = (e)=>{
   
            e.preventDefault();
    
            fetch("https://masai-api-mocker.herokuapp.com/auth/login",requestOptions)
             .then((response) => {
            if(!response.status == 200) {
                    alert("sgjljds")
            }
            else{
      
             return response.json();
            }
             })
            .then((data) => {
                localStorage.setItem('token', JSON.stringify(data.token));
                nav('/todolist')
                // dispatch(Loginactio(data.data));
            })
            .catch((error) => {
            console.log('error: ' + error)
                
           
        });
    
    }

    return (<div className='logindiv'>
        <form onSubmit={Handlesubmit}>
          <h3>Sign In</h3>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="password"
              id="password"
              onChange={handlechange}
            />
          </div>
          <div className="mb-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="username"
              id="username"
              onChange={handlechange}
            />
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
           <input type="submit" onChange={Handlesubmit} />
          </div>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
        </div>
      )
    };