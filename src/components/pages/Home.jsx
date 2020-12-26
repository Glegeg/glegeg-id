import React, { useEffect } from "react";
import ItemReg from "../ItemReg";
import logo from "../../assets/logo.jpg";
import HomeHighlight from "../HomeHighlight";
import products from "../../products";

export default function Home(props) {
  useEffect(() => {
    props.setNav(true);
  }, [props]);

  const date = new Date();
  const currentHour = date.getHours();
  // console.log(currentHour);

  function outputHour(hour) {
    switch (hour) {
      case hour >= 0 && hour < 4:
        return "Pagi kak!";

      case hour >= 4 && hour < 10:
        return "Pagi kak!";

      case hour >= 10 && hour < 14:
        return "Siang kak!";

      case hour >= 14 && hour < 18:
        return "Sore kak!";

      case hour >= 18 && hour < 24:
        return "Malam kak!";

      default:
        return "Pagi kak!";
    }
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
