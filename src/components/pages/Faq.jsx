import React, { useEffect } from "react";
import Collapsible from "react-collapsible";

import AccordionContent from "../AccordionContent";
import AccordionTitle from "../AccordionTitle";

import { ReactComponent as Whatsapp } from "../../assets/whatsapp.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import kognitif from "../../assets/kognitif.jpg";
import faq from "../../settings/faq";

function Faq({ setNav, ...props }) {
  useEffect(() => {
    setNav(true);
  }, [setNav]);

  return (
    <div className="p-6 mb-32">
      <div className="page-title mt-4 mb-8">
        <h2 className="text-heading font-bold text-2xl">
          Frequently Asked
          <br />
          Questions
        </h2>
      </div>

      {faq.map((item, index) => {
        return (
          <Collapsible
            trigger={<AccordionTitle title={item.judul} />}
            triggerStyle={{ cursor: "pointer" }}
            transitionTime={200}
            easing="ease-in-out"
            key={index}
          >
            <AccordionContent>
              {item.isi.map((faqItem, idx) => (
                <p
                  className={item.isi.length - 1 === idx ? "" : "mb-4"}
                  key={idx + 100}
                >
                  {faqItem}
                </p>
              ))}
            </AccordionContent>
          </Collapsible>
        );
      })}

      <div className="mt-10 text-center">
        <h3 className="text-heading font-bold">Hubungi Kami</h3>
        <div className="flex items-center justify-center mt-2">
          <a
            href="https://www.instagram.com/glegleg.id/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10 h-10 mr-2 p-2 bg-white rounded-lg shadow-md flex items-center justify-center">
              <Instagram />
            </div>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=6281233637974&text=Halo%20gleGleg%20:)"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10 h-10 ml-2 p-2 bg-white rounded-lg shadow-md flex items-center justify-center">
              <Whatsapp />
            </div>
          </a>
        </div>
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-heading font-bold">Website dibuat oleh</h3>
        <a href="https://kognitif.id" target="_blank" rel="noopener noreferrer">
          <div className="bg-white rounded-md shadow-md px-4 py-2 w-3/5 mx-auto mt-2">
            <img src={kognitif} alt="Logo kognitif.id" className="" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Faq;
