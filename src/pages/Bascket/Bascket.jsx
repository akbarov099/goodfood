import React from "react";
import Cart from "./Cart/Cart";
import { BsArrowLeftSquare } from "react-icons/bs";
import { CardActionArea } from "@mui/material";

export const Bascket = () => {
  return (
    <section>
      <div className="cart__naviget">
        <div>
          <CardActionArea>
            <BsArrowLeftSquare className="cart_icon" />
          </CardActionArea>
        </div>
        <h1 className="cart_title">Basket</h1>
      </div>
      <Cart />
    </section>
  );
};
