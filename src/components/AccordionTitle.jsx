import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as Dropdown } from "../assets/dropdown.svg";

function AccordionTitle(props) {
  return (
    <div className="bg-white px-4 py-5 mt-6 flex justify-between items-center rounded-xl shadow-lg relative z-10">
      <p className="text-sm w-11/12">{props.title}</p>
      <Dropdown />
    </div>
  );
}

AccordionTitle.propTypes = {
  title: PropTypes.string,
};

export default AccordionTitle;
