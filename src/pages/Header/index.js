import { useLocation, useNavigate } from "react-router-dom";
import { pathsWithoutHeader } from "../../App";

export default function Header(){
  const navigate = useNavigate();
  const location = useLocation();

  if (pathsWithoutHeader.includes(location.pathname)) {
    return null;
  }

  return (
    <>
    <div>
        <button onClick={() =>navigate("/tests")}>Por Disciplina</button>
        <button onClick={() => navigate("/tests/instructor")}>Por Professor</button>
        <button>Adicionar Prova</button>
    </div>
    </>
  );
}