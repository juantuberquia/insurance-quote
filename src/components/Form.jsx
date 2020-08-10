import React, { useState } from "react";
import styled from "@emotion/styled";
import Error from "./Error";
import { costYear, costBrand, costPlan } from "../helper";

const TagDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const TextItems = styled.label`
  flex: 0 0 100px;
`;

const ContentForm = styled.div`
  margin-left: 10%;
  margin-right: 10%;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Boton = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  font-weight: bold;
  border: none;
  transition: background-color 0.2s ease;
  margin-top: 2rem;

  &:hover {
    cursor: pointer;
    background-color: #26c6da;
  }
`;

const Form = ({ setDataOverview, setSpinner }) => {
  // obtengo los datos del form
  const [dataForm, SetDataForm] = useState({
    carBrand: "",
    year: "",
    plan: "",
  });

  //validar datos ingresados formulario
  const [validateForm, setValidateForm] = useState(false);

  // diferencia en años
  const [diferenceYear, setDiferenceYear] = useState(0);

  // tipo de marca
  const [typeBrand, setBrand] = useState("");

  // tipo de plan
  const [typePlan, setTypePlan] = useState("");

  const getData = (e) => {
    SetDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const { carBrand, year, plan } = dataForm;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (carBrand.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setValidateForm(true);

      return;
    } else {
      setValidateForm(false);
    }

    setDiferenceYear(costYear(year));
    setBrand(costBrand(carBrand));
    setTypePlan(costPlan(plan));

    setSpinner(true);

    setTimeout(() => {
      setSpinner(false);
      // pasar datos de la cotizacion y mostrarlas
      setDataOverview({
        quote: parseFloat(diferenceYear * typeBrand * typePlan).toFixed(2),
        carBrand,
        year,
        plan,
      });
    }, 1500);
  };

  return (
    <ContentForm>
      <form onSubmit={handleSubmit}>
        {validateForm ? (
          <Error message="Favor diligenciar todos los campos" />
        ) : null}
        <TagDiv>
          <TextItems> Marca: </TextItems>
          <Select name="carBrand" onChange={getData}>
            <option> --seleccionar --</option>
            <option> Americano </option>
            <option> Asiatico </option>
            <option> Europeo </option>
          </Select>
        </TagDiv>
        <TagDiv>
          <TextItems>Año: </TextItems>
          <Select name="year" onChange={getData}>
            <option value="">-- Seleccionar --</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
          </Select>
        </TagDiv>
        <TagDiv>
          <TextItems> Plan: </TextItems>
          <InputRadio
            type="radio"
            value="basico"
            name="plan"
            onChange={getData}
          />
          basico
          <InputRadio
            type="radio"
            value="premiun"
            name="plan"
            onChange={getData}
          />
          Premiun
        </TagDiv>
        <Boton type="submit">Cotizar</Boton>
      </form>
    </ContentForm>
  );
};

export default Form;
