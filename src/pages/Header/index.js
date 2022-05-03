import { useLocation, useNavigate } from "react-router-dom";
import { pathsWithoutHeader } from "../../App";
import useAuth from "../../hooks/useAuth";
import useFilter from "../../hooks/useFilter";
import { Button, Container, Input, NavBox } from "./style";
import {GoSignOut} from "react-icons/go";

export default function Header(){
  const navigate = useNavigate();
  const location = useLocation();
  const {signOut} = useAuth();
  const {filter, setFilter} = useFilter();

  function handleSignOut(){
    signOut();
    navigate("/");
  }

  if (pathsWithoutHeader.includes(location.pathname)) {
    return null;
  }

  return (
    <>
    <Container>
      <NavBox>
      {
        location.pathname === "/tests/create"?
        <h1>Add a test</h1>
        :
        <Input 
          placeholder=
          { location.pathname === "/tests"?
          "Seach for Discipline"
          :
          "Seach for Teacher"
          }
          type="text"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        />
      }
      <GoSignOut size={"35px"} onClick={handleSignOut}/>
      </NavBox>
      
      <NavBox>
        <Button onClick={() =>navigate("/tests")} 
        path={location.pathname === "/tests"? true: false}>
          Por Disciplina
        </Button>
        <Button onClick={() => navigate("/tests/instructor")} 
        path={location.pathname === "/tests/instructor"? true: false}>
          Por Professor
        </Button>
        <Button onClick={() =>navigate("/tests/create")}
        path={location.pathname === "/tests/create"? true: false}>
          Adicionar Prova
        </Button>
      </NavBox>
    </Container>
    </>
  );
}