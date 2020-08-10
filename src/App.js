import React, { useState } from "react";
import Headering from "./components/Headering";
import styled from "@emotion/styled";
import Form from "./components/Form";
import Overview from "./components/Overview";
import Spinner from "./components/Spinner";

const MainTag = styled.div`
  width: 600px;
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 2%;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
  text-align: center;
`;

function App() {
  const [dataOverview, setDataOverview] = useState({
    quote: "",
    carBrand: "",
    year: "",
    plan: "",
  });

  const [spinner, setSpinner] = useState(false);

  return (
    <MainTag>
      <Headering titulo="Cotiza tu Seguro" />
      <FormContainer>
        <Form setDataOverview={setDataOverview} setSpinner={setSpinner} />
        <Spinner spinner={spinner} />
        <Overview dataOverview={dataOverview} />
      </FormContainer>
    </MainTag>
  );
}

export default App;
