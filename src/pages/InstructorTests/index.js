import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import Instructors from "./Instructors";

export default function InstructorTests(){
  const {token} = useAuth();
  const [allInstructors, setAllInstructors] = useState([]);
  useEffect(()=> getAllInstructorTests, [])

  function getAllInstructorTests(){
    
    const promise = api.getInstructorTests(token);
    promise.then(({data}) =>{
      console.log(data);
      setAllInstructors(data);
    }).catch((error)=>{
      console.log(error);
      alert("Could not get tests, try again.");
    })
  }

  return (
    <>
    <Instructors allInstructors={allInstructors}/>
    </>
  );
}