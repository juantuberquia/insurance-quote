import React from "react";
import Headering from "./components/Headering";
import styled from "@emotion/styled";
import Form from "./components/Form";

const MainTag = styled.div`
  width: 600px;
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 10%;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
  text-align: center;
`;

function App() {
  return (
    <MainTag>
      <Headering titulo="Cotiza tu Seguro" />
      <FormContainer>
        <Form />
      </FormContainer>
    </MainTag>
  );
}

export default App;
