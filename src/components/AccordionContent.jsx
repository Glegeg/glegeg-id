import React from "react";
import PropTypes from "prop-types";

function AccordionContent(props) {
  return (
    <div className="w-11/12 m-auto bg-white px-6 py-5 rounded-b-xl">
      <p className="text-sm">{props.children}</p>
    </div>
  );
}

AccordionContent.propTypes = {
  children: PropTypes.array,
  source: PropTypes.string,
};

export default AccordionContent;

// {
//   parse(DOMPurify.sanitize(props.children)) || (
//     <>
//       <Skeleton width="80%" />
//       <Skeleton width="90%" />
//       <Skeleton width="70%" />
//     </>
//   );
// }
