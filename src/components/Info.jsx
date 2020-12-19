import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as InfoLogo } from "../assets/info-logo.svg";

function Info(props) {
  return (
    <div className="info-container w-64 rounded-xl mx-auto my-8 bg-white px-3 py-4 flex items-center">
      <InfoLogo />
      <div className="info-inner ml-4">
        <h4 className="text-heading font-bold">Periode Pre-order:</h4>
        <small>15 - 30 Desember 2020</small>
      </div>
    </div>
  );
}

Info.propTypes = {};

export default Info;
