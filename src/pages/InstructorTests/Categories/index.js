import TestAndDiscipline from "../TestAndDiscipline";

export default function Categories({allTests, discipline}){
  const categories = filteredCategories(allTests);
  const tests = filteredTests(allTests, categories);
  
  return (
    <>
    {
      categories.map((category)=>
        <>
          <div key={category}>{category}</div>
          <TestAndDiscipline tests={tests[category]} discipline={discipline}/>
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

function filteredTests(tests, categories){
  const testsByCategory = {};

  for(let i=0; i<categories.length; i++){
    testsByCategory[categories[i]] = [];
  }

  for(let h=0; h<tests.length; h++){
    testsByCategory[tests[h].category.name].push(tests[h]);
  }

  return testsByCategory;
}