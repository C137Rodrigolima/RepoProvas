export default function TestAndTeacher({tests, teacher}){
  return (
    <>
    {
      tests.map((test) =>
        <div key={test.id}>{`${test.name} ${teacher}`}</div>
      )
    }
    </>
  );
}