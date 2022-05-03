import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import { Container } from "./style";

export default function CreateTest(){
  const navigate = useNavigate();
  const  {token} = useAuth();
  const [disabled, setDisabled] = useState(false);
  const [openOption, setOpenOption] = useState("");
  const [options, setOptions] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    pdfUrl: "",
    category: "",
    categoryId: 0,
    discipline: "",
    disciplineId: 0,
    teacher: "",
    teacherId: 0,
  });
  console.log(formData);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleOption(optionName, optionId, value){
    setFormData({...formData, [`${optionName}Id`]: optionId, [optionName]: value});
    setOpenOption("");
  }

  async function openOptions(e) {
    try {  
      const {data} = await api.getNamesOptions(e.target.name, token);
      setOptions(data);
      if(openOption === e.target.name) return setOpenOption("");
      setOpenOption(e.target.name)
    } catch (error) {
       console.log(error);
       alert("could not seach for input options. Try later.") 
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setDisabled(true);
    try {
      await api.createNewTest({ ...formData }, token);
      
      alert("Test created with Sucess!");
      navigate("/tests");
    } catch (error) {
        console.log(error);
        alert("Could not create new test. Try later.");
        setDisabled(false);
    }
  }

  return (
    <Container>
    <form onSubmit={(e)=> handleSubmit(e)}>
      <InputRelative
        placeholder="Titulo da Prova"
        type="text"
        onChange={(e) => handleChange(e)}
        name="title"
        value={formData.title}
        required
      />
      <InputRelative
        placeholder="PDF da Prova"
        type="url"
        onChange={(e) => handleChange(e)}
        name="pdfUrl"
        value={formData.pdfUrl}
        required
      />
      <InputRelative
        placeholder="Categoria"
        type="text"
        onClick={(e) => openOptions(e)}
        name="category"
        value={formData.category}
        required
      />
      { 
        openOption === "category"?
        <InputOptions>
          {
            options.map((option) =>
              <div 
              key={option.id} 
              onClick={()=> handleOption("category", option.id, option.name)}>
                {option.name}
              </div>
            )
          }
        </InputOptions>
        :
        <></>
      }
      <InputRelative
        placeholder="Disciplina"
        type="text"
        onClick={(e) => openOptions(e)}
        name="discipline"
        value={formData.discipline}
        required
      />
      { 
        openOption === "discipline" ?
        <InputOptions>
          {
            options.map((option) =>
              <div 
              key={option.id} 
              onClick={()=> handleOption("discipline", option.id, option.name)}>
                {option.name}
              </div>
            )
          }
        </InputOptions>
        :
        <></>
      }
      <InputRelative
        placeholder="pessoa Instrutora"
        type="text"
        onClick={(e) => openOptions(e)}
        name="teacher"
        value={formData.teacher}
        required
      />
      { 
        openOption === "teacher" ?
        <InputOptions>
          {
            options.map((option) =>
              <div 
              key={option.id} 
              onClick={()=> handleOption("teacher", option.id, option.name)}>
                {option.name}
              </div>
            )
          }
        </InputOptions>
        :
        <></>
      }
      <button type="submit" disabled={disabled}>SEND</button>
    </form>
    </Container>
  );
}
const InputRelative = styled.input`
  display: flex;
  position: relative;
  `
const InputOptions = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
`