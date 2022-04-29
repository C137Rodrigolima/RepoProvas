import TestAndTeacher from "../TestAndTeacher";

export default function DisciplineTeachers({testsAndTeachers}){
  const categories = repartCategories(testsAndTeachers[0].teste);
  const categoryHashTable = repartTestsByCategory(testsAndTeachers[0].teste, categories);
  
  return(
    <>
      {
        categories.map((category)=>
          <div key={category}>
            {category}
            <TestAndTeacher 
              tests={categoryHashTable[category]} 
              teacher={testsAndTeachers[0].teacher.name}
            />
          </div>
        )
      }
    </>
  )
}

function repartCategories(tests){
  let categoryArr = [];
  for(let h=0; h<tests.length; h++){
    if(categoryArr.includes(tests[h].category.name)){
      continue;
    }
    categoryArr.push(tests[h].category.name)
  }

  return categoryArr;
}

function repartTestsByCategory(tests, categories){
  let categoryHashTable = {};

  for(let i=0; i<categories.length; i++){
    const auxTestsArr = tests.filter((test) => {
      return test.category.name === categories[i]
    })
    categoryHashTable[categories[i]] = auxTestsArr;
  }

  return categoryHashTable;
}