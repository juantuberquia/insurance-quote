import React, { Fragment } from "react";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Overview = ({ typePlan, typeBrand, diferenceYear }) => {
  if (typeBrand === "" || diferenceYear === "" || typePlan === "") {
    return null;
  }

  //estilos al componente del resumen de datos
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
      <TransitionGroup className="result">
        <CSSTransition
          key={uuidv4()}
          timeout={{ enter: 900, exit: 900 }}
          classNames="result"
        >
          <Resul>
            <TextResul>
              Total a Pagar : $
              {(typeBrand * diferenceYear * typePlan).toFixed(2)}
            </TextResul>
          </Resul>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
};

Overview.propTypes = {
  typePlan: PropTypes.number.isRequired,
  typeBrand: PropTypes.number.isRequired,
  diferenceYear: PropTypes.number.isRequired,
};

export default Overview;
