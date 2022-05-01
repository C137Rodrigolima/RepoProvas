import TestAndDiscipline from "../TestAndDiscipline";

export default function Categories({allTests, discipline}){
  const categories = filteredCategories(allTests);
  
  return (
    <>
    {
      categories.map((category)=>
        <>
          <div key={category}>{category}</div>
          <TestAndDiscipline tests={allTests} discipline={discipline}/>
        </>
      )
    }
    </>
  );
}

function filteredCategories(test){
  const categoriesArr = []

  for(let i=0; i<test.length; i++){
    if(categoriesArr.includes(test[i].category.name)) continue;
    categoriesArr.push(test[i].category.name);
  }

  return categoriesArr;
}