import React from "react";
import styled from "@emotion/styled";

const Summary = ({ getData }) => {
  const { carBrand, year, plan } = getData;

  if (carBrand === "" || year === "" || plan === "") {
    return null;
  }

  const ContentOverview = styled.div`
    text-align: center;
    background-color: #00838f;
    color: #fff;
    padding-top: 1%;
    padding-bottom: 3%;
    width: 81%;
    margin: 1rem 3rem;
  `;

  return (
    <ContentOverview>
      <h2> Resumen de cotizacion </h2>
      <ul>
        <li> Marca : {carBrand}</li>
        <li> Año: {year} </li>
        <li> Plan : {plan} </li>
      </ul>
    </ContentOverview>
  );
};

export default Summary;
