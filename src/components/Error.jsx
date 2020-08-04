import React from "react";
import styled from "@emotion/styled";

const ContentMessage = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

const Error = ({ message }) => {
  return <ContentMessage>{message} </ContentMessage>;
};

export default Error;
