import React from "react";
import styled from "@emotion/styled";

const ContainHeader = styled.header`
  background-color: #26c6da;
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
`;
const TitleHeader = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: "Slabo 27px", serif;
  text-align: center;
`;

const Headering = ({ titulo }) => {
  return (
    <ContainHeader>
      <TitleHeader>{titulo}</TitleHeader>
    </ContainHeader>
  );
};

export default Headering;
