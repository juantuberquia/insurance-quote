import React, { Fragment } from "react";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";

const Overview = (dataOverview) => {
  let { quote, carBrand, year, plan } = dataOverview.dataOverview;

  if (quote === "" || carBrand === "" || year === "" || plan === "") {
    return null;
  }

  //estilos al componente del resumen de datos
  const ContainerMain = styled.div`
    width: 100%;
  `;

  const ContentOverview = styled.div`
    text-align: center;
    background-color: #00838f;
    color: #fff;
    padding-top: 1%;
    padding-bottom: 3%;
    width: 81%;
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
      {/* <ContentOverview>
        <h2> Resumen de cotizacion </h2>
        <ul>
          <li> Marca : {carBrand}</li>
          <li> Año: {year} </li>
          <li> Plan : {plan} </li>
        </ul>
      </ContentOverview> */}
      <TransitionGroup className="result">
        <CSSTransition
          key={uuidv4()}
          timeout={{ enter: 900, exit: 900 }}
          classNames="result"
        >
          <ContainerMain>
            <ContentOverview>
              <h2> Resumen de cotizacion </h2>
              <ul>
                <li> Marca : {carBrand}</li>
                <li> Año: {year} </li>
                <li> Plan : {plan} </li>
              </ul>
            </ContentOverview>
            <Resul>
              <TextResul>Total a Pagar : $ {quote} </TextResul>
            </Resul>
          </ContainerMain>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
};

export default Overview;
