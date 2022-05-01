import Categories from "../Categories";

export default function DisciplinesByInstructor({disciplinesByInstructors, instructorName}){
  instructorName = false;
  return (
    <>
      {
        disciplinesByInstructors.map((disciplineByInstructor)=>
          <Categories 
            allTests={disciplineByInstructor.teste} 
            discipline={disciplineByInstructor.discipline.name}
          />
        )
      }
    </>
  );
}