import React from "react";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  // getItemCurrentQuantity,
  increaseItemQuantity,
} from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  // const currentQuantity = useSelector(getItemCurrentQuantity(pizzaId));

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}
