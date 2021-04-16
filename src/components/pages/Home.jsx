import React, { useEffect } from "react";
import ItemReg from "../ItemReg";
import logo from "../../assets/logo.jpg";
import HomeHighlight from "../HomeHighlight";
import products from "../../settings/products";

export default function Home({ setNav, ...props }) {
  useEffect(() => {
    setNav(true);
  }, [setNav]);

  const date = new Date();
  const currentHour = date.getHours();

  function outputHour(hour) {
    if (hour >= 0 && hour < 4) {
      return "Pagi kak!";
    }
    if (hour >= 4 && hour < 10) {
      return "Pagi kak!";
    }
    if (hour >= 10 && hour < 14) {
      return "Siang kak!";
    }
    if (hour >= 14 && hour < 18) {
      return "Sore kak!";
    }
    if (hour >= 18 && hour < 24) {
      return "Malam kak!";
    }
    return "Halo kak!";
  }

  return (
    <div className="p-6">
      <img src={logo} alt="" className="w-24 text-center block m-auto" />
      <h4 className="font-bold mt-4 text-lg text-heading">
        {outputHour(currentHour)}
      </h4>
      <p className="text-defocus">Mari dibeli gleGeg nya 😁</p>

      <HomeHighlight />

      <div className="pb-20">
        <h3 className="font-bold text-lg mt-8 mb-3 text-heading">Menu</h3>
        {products.map((product, idx) => (
          <ItemReg
            key={idx}
            img={product.img}
            title={product.name}
            price={product.price}
            path={product.path}
          />
        ))}
      </div>
    </div>
  );
}
