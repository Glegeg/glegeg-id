import React from "react";
import ItemReg from "../ItemReg";
import product from "../../assets/product.png";
import logo from "../../assets/logo.jpg";
import HomeHighlight from "../HomeHighlight";

export default function Home() {
  return (
    <div>
      <img src={logo} alt="" className="w-24 text-center block m-auto" />
      <h4 className="font-bold mt-4 text-lg text-heading">Pagi kak!</h4>
      <p className="text-defocus">Mari dibeli gleGeg nya 😁</p>

      <HomeHighlight />

      <h3 className="font-bold text-lg mt-8 mb-3 text-heading">Menu</h3>
      <ItemReg img={product} title="Original Red Velvet" price="Rp 15.000" />
      <ItemReg img={product} title="Matcha Latte" price="Rp 18.000" />
    </div>
  );
}
