import { useEffect, useState } from "react"
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import Disciplines from "./Disciplines";

export default function DisciplineTests(){
  const {token} = useAuth();
  const [testsTerms, setTestsTerms] = useState([]);

  useEffect(()=> {getTests()}, [])

  async function getTests(){
    const {data} = await api.getAllTests(token);
    console.log(data);
    setTestsTerms(data);
  }
  
  if(testsTerms.lenght === 0){
    return <div>Loading</div>
  }

  return (
    <>
    <div>
      {testsTerms.map((term)=> 
        <div key={term.id}>{`${term.number}0 Período`}
        <Disciplines disciplines={term.disciplines}/>
        </div>
      )}
    </div>
    </>
  )
}