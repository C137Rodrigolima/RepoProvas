import useFilter from "../../../hooks/useFilter";
import DisciplinesByInstructor from "../DisciplinesByInstructor";

export default function Instructors({allInstructors}){
  const {filter} = useFilter();

  const instructors = filterSeachInstructors(filter, allInstructors);

  return (
    <>
    {
      instructors.map((instructor)=>
      <>
        <div key={instructor.id}>
        {instructor.name}
        <DisciplinesByInstructor 
        disciplinesByInstructors={instructor.disciplinesTeachers}
        />
        </div>
        <br />
      </>
      )
    }
    </>
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