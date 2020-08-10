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

  const [showOverview, setShowOverview] = useState(false);

  // solucionar el porbelma de valor del seguro en el 1 click
  // precio segun años
  const [diferenceYear, setDiferenceYear] = useState(0);

  // precio segun tipo de marca
  const [typeBrand, setBrand] = useState(0);

  // precio segun plan
  const [typePlan, setTypePlan] = useState(0);

  return (
    <MainTag>
      <Headering titulo="Cotiza tu Seguro" />
      <FormContainer>
        <Form
          setDataOverview={setDataOverview}
          setSpinner={setSpinner}
          setShowOverview={setShowOverview}
        />
        <Spinner spinner={spinner} />
        {showOverview ? <Overview dataOverview={dataOverview} /> : null}
      </FormContainer>
    </MainTag>
  );
}

export default App;
