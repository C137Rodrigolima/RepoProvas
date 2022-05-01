export default function TestAndDiscipline({tests, discipline}){
  return (
    <>
      {
        tests.map((test)=>
          <div key={test.id}>{`${test.name} ${discipline}`}</div>
        )
      }
    </>
  );
}