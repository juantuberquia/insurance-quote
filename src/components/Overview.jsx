import React, { Fragment } from "react";
import styled from "@emotion/styled";

const Overview = (dataOverview) => {
  let { quote, carBrand, year, plan } = dataOverview.dataOverview;

  if (quote === "" || carBrand === "" || year === "" || plan === "") {
    console.log("entra al ciclo");
    return null;
  }

  //estilos al componente del resumen de datos
  const ContentOverview = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    width: 74%;
    margin: 1rem 3rem;
  `;

  const Resul = styled.div`
    text-align: center;
    padding: 0.5rem;
    border: 1px solid #26c6da;
    background-color: rgb(127, 224, 237);
    position: relative;
    margin: 1rem 3rem;
  `;

  const TextResul = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
  `;
  return (
    <Fragment>
      <ContentOverview>
        <h2> Resumen de cotizacion </h2>
        <ul>
          <li> Marca : {carBrand}</li>
          <li> Año: {year} </li>
          <li> Plan : {plan} </li>
        </ul>
      </ContentOverview>

      <Resul>
        <TextResul> Total a Pagar : $ {quote}</TextResul>
      </Resul>
    </Fragment>
  );
};

export default Overview;
