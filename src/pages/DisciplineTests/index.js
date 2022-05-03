import { useEffect, useState } from "react"
import useAuth from "../../hooks/useAuth";
import useFilter from "../../hooks/useFilter";
import api from "../../services/api";
import Disciplines from "./Disciplines";
import { Container, NavBox, Terms } from "./style";

export default function DisciplineTests(){
  const {token} = useAuth();
  const {change} = useFilter();
  const [testsTerms, setTestsTerms] = useState([]);

  useEffect(()=> {getTests()}, [change])

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
    <Container>
      <NavBox>
        {testsTerms.map((term)=> 
          <>
          <Terms key={term.id}>
            {`${term.number}0 Período`}
            <Disciplines disciplines={term.disciplines}/>
          </Terms>
          <br />
          </>
        )}
      </NavBox>
    </Container>
    </>
  )
}
