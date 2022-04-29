import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { 
  Container,
  FormContainer,
  Logo,
  Title,
  Input,
  InteractBox,
  Button,
  StyledLink
} from "../../FormComponents";
import api from "../../services/api";
import logo from "../../assets/Logo.png";

export default function SignUp(){
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmation: ""
  });
  const [disabled, setDisabled] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if(formData.password !== formData.confirmation){
      return alert("Passwords don't match. Try again...")
    }
    setDisabled(true);
    try {
      delete formData.confirmation;
      await api.register({ ...formData });
      setDisabled(false);
      navigate("/");
    } catch (error) {
      if(error.response.status === 409){
        alert("Unauthorized. Email already registered.")
      } else{
        alert("Could not register. Try later.");
      }
      setDisabled(false);
    }
  }

  return (
    <>
      <Container>
        <FormContainer onSubmit={handleSubmit}>
          <Logo>
            <img src={logo} alt="logo"/>
          </Logo>
          <Title>Register</Title>
          <Input 
            placeholder="E-mail"
            type="email"
            onChange={(e) => handleChange(e)}
            name="email"
            value={formData.email}
            required
          />
          <Input 
            placeholder="Password"
            type="password"
            onChange={(e) => handleChange(e)}
            name="password"
            value={formData.password}
            required
          />
          <Input 
            placeholder="Confirm Password"
            type="password"
            onChange={(e) => handleChange(e)}
            name="confirmation"
            value={formData.confirmation}
            required
          />
          <InteractBox>
            <StyledLink to={"/"}>Switch back to login</StyledLink>
            <Button disabled={disabled}>REGISTER</Button>
          </InteractBox>
        </FormContainer>
      </Container>
    </>
  )
}