import DisciplineTeachers from "../DisciplineTeachers";

export default function Disciplines({disciplines}){
  return (
    <>
    {
      disciplines.map((discipline) => 
          <div key={discipline.id}>
            {discipline.name}
            <DisciplineTeachers testsAndTeachers={discipline.disciplinesTeachers}/>
          </div>
      )
    }
    </>
  )
}