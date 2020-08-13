import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

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

Summary.propTypes = {
  getData: PropTypes.bool.isRequired,
};

export default Summary;
