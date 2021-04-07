import React, { useEffect } from "react";
import Collapsible from "react-collapsible";

import AccordionContent from "../AccordionContent";
import AccordionTitle from "../AccordionTitle";

import { ReactComponent as Whatsapp } from "../../assets/whatsapp.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import kognitif from "../../assets/kognitif.jpg";

function Faq({ setNav, ...props }) {
  useEffect(() => {
    setNav(true);
  }, [setNav]);

  return (
    <div className="p-6">
      <div className="page-title mt-4 mb-8">
        <h2 className="text-heading font-bold text-2xl">
          Frequently Asked
          <br />
          Questions
        </h2>
      </div>

      <Collapsible
        trigger={<AccordionTitle title="Gimana cara order gleGlek?" />}
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
        trigger={<AccordionTitle title="Gimana cara penyajian gleGlek?" />}
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

      <div className="mt-10 text-center">
        <h3 className="text-heading font-bold">Hubungi Kami</h3>
        <div className="flex items-center justify-center mt-2">
          <a
            href="https://www.instagram.com/glegleg.id/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10 h-10 mr-2 p-2 bg-white rounded-md shadow-md flex items-center justify-center">
              <Instagram />
            </div>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=6281233637974&text=Halo%20gleGleg%20:)"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10 h-10 ml-2 p-2 bg-white rounded-md shadow-md flex items-center justify-center">
              <Whatsapp />
            </div>
          </a>
        </div>
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-heading font-bold">Website dibuat oleh</h3>
        <a href="https://kognitif.id" target="_blank" rel="noopener noreferrer">
          <div
            className="rounded-md shadow-md px-4 py-2 w-3/5 mx-auto mt-2"
            style={{ backgroundColor: "#F2F2F2" }}
          >
            <img src={kognitif} alt="Logo kognitif.id" className="" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Faq;
