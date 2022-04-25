import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { StyledLink } from "../../FormComponents";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";

export default function SignIn(){
  const navigate = useNavigate();
  const {persistToken} = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setDisabled(true);
    try {
      const { data } = await api.login({ ...formData });
      
      persistToken(data);
      setDisabled(false);
      navigate("/tests");
    } catch (error) {
        console.log(error);
        alert("Could not login. Try later.");
        setDisabled(false);
    }
  }

  return (
      <>
    <form onSubmit={handleSubmit}>
      <input 
        placeholder="E-mail"
        type="email"
        onChange={(e) => handleChange(e)}
        name="email"
        value={formData.email}
        required
      />
      <input 
        placeholder="Password"
        type="password"
        onChange={(e) => handleChange(e)}
        name="password"
        value={formData.password}
        required
        />
      <button disabled={disabled}>Login</button>
      <StyledLink to={"/signup"}>Register Here</StyledLink>
    </form>
        </>
  )
}

