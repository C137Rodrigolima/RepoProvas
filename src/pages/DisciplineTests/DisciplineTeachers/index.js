export default function DisciplineTeachers({testsAndTeachers}){
  console.log(testsAndTeachers);
  const categories = repartCategories(testsAndTeachers);
  
  return(
    <>
      {
        categories.map((category)=>
          <div key={category}>
            {category}
          </div>
        )
      }
    </>
  )
}

function repartCategories(testsAndTeachers){
  let tests = testsAndTeachers[0].teste;

//   let tests = [];
//   for(let i=0; i<testsAndTeachers.length; i++){
//     tests.push(testsAndTeachers[i].teste);
//   }
//   console.log(tests)

  let categoryArr = [];
  for(let h=0; h<tests.length; h++){
    if(categoryArr.includes(tests[h].category.name)){
      continue;
    }
    categoryArr.push(tests[h].category.name)
  }

  return categoryArr;
}