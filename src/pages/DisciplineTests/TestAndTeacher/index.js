import api from "../../../services/api";
import useAuth from "../../../hooks/useAuth";
import useFilter from "../../../hooks/useFilter";

export default function TestAndTeacher({tests, teacher}){
  const {token} = useAuth();
  const {change, setChange} = useFilter();

  async function handleTest(id, url){
    try {
      api.viewsIncrement(id, token);
      window.open(url, '_blank');
      setChange(!change);
    } catch (error) {
      console.log(error);
      alert("could not increment tests views.")
    }
  }
  return (
    <>
    {
      tests.map((test) =>
        <div key={test.id} onClick={()=> handleTest(test.id, test.pdfUrl)}>
          {`${test.name} ${teacher} ${test.viewsCount}views`}
        </div>
      )
    }
    </>
  );
}