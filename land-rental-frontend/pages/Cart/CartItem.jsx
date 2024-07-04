import React, { useContext } from "react";
import { ShopContext } from "../shop-context";
import Image from "next/image";

const CartItem = (props) => {
  const { id, productName, productDescription, Price, productImage } =
    props.data;
  console.log(props.data);
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <table className="w-full">
      <tbody>
        <tr className="rounded-sm shadow-md my-2 bg-white border border-b-green-600">
          <td className="p-2 w-1/5">
            <Image
              src={productImage}
              alt={productName}
              width={80}
              height={80}
              className="rounded"
            />
          </td>
          <td className="p-4 text-md font-bold w-1/5">
            <p>{productName}</p>
          </td>
          <td className="p-4 text-[14px]  w-1/5">
            <p>{productDescription}</p>
          </td>
          <td className="p-4 text-lg font-bold text-green-600 w-1/5">
            <p>{Price} tk</p>
          </td>
          <td className="p-4 w-1/5">
            <div className="flex items-center">
              <button
                onClick={() => removeFromCart(id)}
                className="px-2 py-1 border"
              >
                -
              </button>
              <input
                value={cartItems[id]}
                onChange={(e) =>
                  updateCartItemCount(Number(e.target.value), id)
                }
                className="w-12 text-center font-bold mx-2"
              />
              <button
                onClick={() => addToCart(id)}
                className="px-2 py-1 border"
              >
                +
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartItem;
