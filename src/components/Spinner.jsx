import React from "react";
import "./Spinner.css";
import PropTypes from "prop-types";

const Spinner = ({ spinner }) => {
  if (!spinner) {
    return null;
  }

  return (
    <div className="spinner">
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="rect3"></div>
      <div className="rect4"></div>
      <div className="rect5"></div>
    </div>
  );
};

Spinner.propTypes = {
  spinner: PropTypes.bool.isRequired,
};

export default Spinner;
