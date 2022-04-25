import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { StyledLink } from "../../FormComponents";
import api from "../../services/api";

export default function SignUp(){
  const navigate = useNavigate();
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
    
    try {
      setDisabled(true);
      await api.register({ ...formData });
      navigate("/");
    } catch (error) {
        alert("Could not register. Try later.");
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
        <button disabled={disabled}>Register</button>
        <StyledLink to={"/"}>Login Here</StyledLink>
      </form>
    </>
  )
}