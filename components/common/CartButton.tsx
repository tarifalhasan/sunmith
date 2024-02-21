"use client";

import CartContext, { CartContextProps } from "@/context/cart";
import { IProductItem } from "@/interfaces/product";
import { FC, useContext } from "react";
import { Button } from "../ui/button";

const CartButton: FC<IProductItem> = ({
  name,
  feturesImage,
  title,
  slug,
  price,
}) => {
  const cartContext = useContext(CartContext) as CartContextProps | undefined;

  if (!cartContext) {
    // Handle the case when CartContext is undefined
    return null;
  }

  const { addItemToCart } = cartContext;
  return (
    <>
      <Button
        onClick={() =>
          addItemToCart({ name, price, slug, image: feturesImage })
        }
        className="bg-primary"
      >
        Add to Cart
      </Button>
    </>
  );
};

export default CartButton;
