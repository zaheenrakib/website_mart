import React, { useContext } from "react";
import { UserContext } from "../context/UseContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const CardSmall = ({  item, handleQuantityChange, quantities, handleSelectItem, selectedItems  }) => {
  const { removeFromCart } = useContext(UserContext);
  
  return (
    <div className="block md:hidden">
      <div
        key={item.id}
        className="flex border-b border-red-500 justify-between items-center p-2"
      >
        <div className="flex">
          <div className="flex items-center">
            <input 
            type="checkbox" 
            className="form-check-input" 
            checked={selectedItems.includes(item.id)}
            onChange={() => handleSelectItem(item.id)}
            />
            <Image
              src={BASE_URL + item?.image}
              alt={item?.productName || "Product"}
              height={80}
              width={80}
              className="m-2 rounded-lg"
            />
          </div>
          <div className="mt-2">
            <p className="font-bold text-[14px] w-28 truncate">{item.productName}</p>
            <p className="m-1">
              <button
                type="button"
                className="px-[5px] rounded-md bg-slate-600 text-xl"
                onClick={() => handleQuantityChange(item.id, 1)}
              >
                +
              </button>
              <span className="px-2">{quantities[item.id]}</span>
              <button
                type="button"
                className="px-[7px] rounded-md bg-slate-600 text-xl"
                onClick={() => handleQuantityChange(item.id, -1)}
              >
                -
              </button>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <p className="font-bold text-[15px] pt-2">
            ৳ {
              (Number(item.price) || 0) * (quantities[item.id] || 1)  
            }
          </p>
          { item.salesPrice && <del><p className='text-red-600 '>৳{(Number(item.salesPrice) || 0)*(quantities[item.id] || 1) }</p></del>}

          <button 
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 mt-2"
            >
              <FontAwesomeIcon icon={faTrashCan} className="text-lg" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default CardSmall;
