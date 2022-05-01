import { useLocation, useNavigate } from "react-router-dom";
import { pathsWithoutHeader } from "../../App";
import useFilter from "../../hooks/useFilter";

export default function Header(){
  const navigate = useNavigate();
  const location = useLocation();
  const {filter, setFilter} = useFilter();

  if (pathsWithoutHeader.includes(location.pathname)) {
    return null;
  }

  return (
    <>
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
    <div>
      <button onClick={() =>navigate("/tests")}>Por Disciplina</button>
      <button onClick={() => navigate("/tests/instructor")}>Por Professor</button>
      <button>Adicionar Prova</button>
    </div>
    </>
  );
}