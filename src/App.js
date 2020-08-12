import React, { useState, Fragment } from "react";
import Headering from "./components/Headering";
import styled from "@emotion/styled";
import Form from "./components/Form";
import Overview from "./components/Overview";
import Spinner from "./components/Spinner";
import Summary from "./components/Summary";

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
  const [spinner, setSpinner] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [getData, setGetData] = useState({
    carBrand: "",
    year: "",
    plan: "",
  });

  // valor $$ segun años, plan, marca
  const [diferenceYear, setDiferenceYear] = useState(0);
  const [typeBrand, setBrand] = useState(0);
  const [typePlan, setTypePlan] = useState(0);

  return (
    <MainTag>
      <Headering titulo="Cotiza tu Seguro" />
      <FormContainer>
        <Form
          setSpinner={setSpinner}
          setShowOverview={setShowOverview}
          setDiferenceYear={setDiferenceYear}
          setBrand={setBrand}
          setGetData={setGetData}
          setTypePlan={setTypePlan}
        />
        <Spinner spinner={spinner} />
        {showOverview ? (
          <Fragment>
            <Summary getData={getData} />
            <Overview
              diferenceYear={diferenceYear}
              typeBrand={typeBrand}
              typePlan={typePlan}
            />
          </Fragment>
        ) : null}
      </FormContainer>
    </MainTag>
  );
}

export default App;
