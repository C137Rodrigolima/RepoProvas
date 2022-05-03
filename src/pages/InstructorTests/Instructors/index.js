import useFilter from "../../../hooks/useFilter";
import DisciplinesByInstructor from "../DisciplinesByInstructor";
import { Instructor } from "../style";
import { NavBox } from "../style";

export default function Instructors({allInstructors}){
  const {filter} = useFilter();

  const instructors = filterSeachInstructors(filter, allInstructors);

  return (
    <NavBox>
    {
      instructors.map((instructor)=>
      <>
        <Instructor key={instructor.id}>
        {instructor.name}
        <DisciplinesByInstructor 
        disciplinesByInstructors={instructor.disciplinesTeachers}
        />
        </Instructor>
        <br />
      </>
      )
    }
    </NavBox>
  );
}

function filterSeachInstructors(filter, instructors){
if(filter.length < 3) return instructors;

const filteredBySeach = [];
for(let i=0; i<instructors.length; i++){
if(
instructors[i].name.toLocaleLowerCase()
.includes(filter.toLocaleLowerCase())){
filteredBySeach.push(instructors[i]);
}
}
return filteredBySeach;
}