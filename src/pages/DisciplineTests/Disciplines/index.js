import useFilter from "../../../hooks/useFilter";
import DisciplineTeachers from "../DisciplineTeachers";

export default function Disciplines({disciplines}){
  const {filter} = useFilter();

  const allDisciplines = filterSeachDisciplines(filter, disciplines);
  return (
    <>
    {
      allDisciplines.map((discipline) => 
          <div key={discipline.id}>
            {discipline.name}
            {
              discipline.disciplinesTeachers[0]?
              <DisciplineTeachers testsAndTeachers={discipline.disciplinesTeachers}/>
              :
              <div>There's no tests on this discipline Category</div>
            }
          </div>
      )
    }
    </>
  )
}

function filterSeachDisciplines(filter, disciplines){
  if(filter.length < 3) return disciplines;

  const filteredBySeach = [];
  for(let i=0; i<disciplines.length; i++){
    if(
      disciplines[i].name.toLocaleLowerCase()
      .includes(filter.toLocaleLowerCase())){
      filteredBySeach.push(disciplines[i]);
    }
  }
  return filteredBySeach;
}