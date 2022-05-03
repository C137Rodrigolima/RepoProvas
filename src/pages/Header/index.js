import { useLocation, useNavigate } from "react-router-dom";
import { pathsWithoutHeader } from "../../App";
import useAuth from "../../hooks/useAuth";
import useFilter from "../../hooks/useFilter";

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
    <div>
    {
      location.pathname === "/tests/create"?
      <div>Add a test</div>
      :
      <input 
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
    <button onClick={handleSignOut}>signOut</button>
    </div>
    
    <div>
      <button onClick={() =>navigate("/tests")}>Por Disciplina</button>
      <button onClick={() => navigate("/tests/instructor")}>Por Professor</button>
      <button onClick={() =>navigate("/tests/create")}>Adicionar Prova</button>
    </div>
    </>
  );
}