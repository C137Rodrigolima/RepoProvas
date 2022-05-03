import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useFilter from "../../hooks/useFilter";
import api from "../../services/api";
import Instructors from "./Instructors";
import { Container } from "./style";

export default function InstructorTests(){
  const {token} = useAuth();
  const {change} = useFilter();
  const [allInstructors, setAllInstructors] = useState([]);
  useEffect(()=> getAllInstructorTests, [change])

  async function getAllInstructorTests(){
    try {
      const {data} = await api.getInstructorTests(token);

      setAllInstructors(data);
    } catch (error) {
      console.log(error);
      alert("Could not get tests, try again.");
    }
  }

  return (
    <Container>
      <Instructors allInstructors={allInstructors}/>
    </Container>
  );
}