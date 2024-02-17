import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
 
  const navigate = useNavigate()
  const submitForm = async (e) => {
    e.preventDefault()
  const userDetails = {username, password}
  const apiUrl = "https://rsfpsoftware.gowild.co.in/dashboard/login/"
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userDetails),
  };
  const response = await fetch(apiUrl, options);
  if(response.status == 200) {
    navigate("/")
  }
  const data = await response.json();
  console.log(data.token)
  }

  return (
    <div className="login-container">
      <div className="text-container">
        <h1 className="rspl-heading">RSFP</h1>
        <h4 className="h4"> Log into your account </h4>
        <p className="login-user">
          {" "}
          Enter your Username and password to login{" "}
        </p>
        <form >
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setName(e.target.value)}
            className="login-input"
          />

          <input
            type="text"
            placeholder="username"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />

          <button className="button" onClick={submitForm} >Login</button>
        </form>
      </div>
      <div>
        <img
          src="https://media.istockphoto.com/id/1135341047/vector/login-page-on-laptop-screen-notebook-and-online-login-form-sign-in-page-user-profile-access.jpg?s=612x612&w=0&k=20&c=EsJEsevxVZujj_IU_nLz4tZcvmcXTy7sQt03bpfz3ZQ="
          className="login-img"
        />
      </div>
    </div>
  );
};

export default Login;
