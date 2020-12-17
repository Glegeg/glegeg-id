import React from "react";
import PropTypes from "prop-types";
import Collapsible from "react-collapsible";

import AccordionContent from "../AccordionContent";
import AccordionTitle from "../AccordionTitle";

function Faq(props) {
  return (
    <div>
      <div className="page-title mt-4 mb-8">
        <h2 className="text-heading font-bold text-2xl">
          Frequently Asked
          <br />
          Questions
        </h2>
      </div>

      <Collapsible
        trigger={<AccordionTitle title="Gimana cara order gleGek?" />}
        triggerStyle={{ cursor: "pointer" }}
        transitionTime={200}
        easing="ease-in-out"
      >
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
          suscipit nisl, nec vulputate velit. Praesent ut libero nec lorem
          facilisis pellentesque sagittis at risus.{" "}
        </AccordionContent>
      </Collapsible>

      <Collapsible
        trigger={<AccordionTitle title="Gimana cara order gleGek?" />}
        triggerStyle={{ cursor: "pointer" }}
        transitionTime={200}
        easing="ease-in-out"
      >
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
          suscipit nisl, nec vulputate velit. Praesent ut libero nec lorem
          facilisis pellentesque sagittis at risus.{" "}
        </AccordionContent>
      </Collapsible>
    </div>
  );
}

Faq.propTypes = {};

export default Faq;
