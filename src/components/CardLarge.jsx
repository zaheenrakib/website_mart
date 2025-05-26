import React, { useContext } from "react";
import { UserContext }
 from "../context/UseContext";
import Image from "next/image";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const CardLarge = ({ item, handleQuantityChange, quantities, handleSelectItem, selectedItems }) => {
  const { removeFromCart } = useContext(UserContext);
  
  return (
    <div>
      <div
        key={item.id}
        className="flex border-bottom border-danger justify-between items-center"
      >
        <div className="flex justify-center ">
          <div className="flex justify-center items-center">
            <input 
              type="checkbox" 
              className="form-check-input" 
              checked={selectedItems.includes(item.id)}
              onChange={() => handleSelectItem(item.id)}
            />
              <Image
                src={ BASE_URL + item?.image}
                alt="saturday item"
                height={80}
                width={80}
                className="m-2 rounded-lg"
              />
          </div>
          <div className="mt-2">
            <p className="font-bold text-[14px]">{item.productName}</p>
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

        <div className="d-flex justify-content-between  ">
          <div>
            <div className="">
              <p className="fw-bold text-[15px] pt-2">
                ৳ {
                  (Number(item.price) || 0) * (quantities[item.id] || 1)
                }
              </p>
              { item.salesPrice && <del><p className='text-red-600 '>৳{(Number(item.salesPrice) || 0)*(quantities[item.id] || 1) }</p></del>}
            </div>

            <div className="d-flex justify-content-end"></div>
            <div className="d-flex justify-content-end mt-1">
              <button
                onClick={() => removeFromCart(item.id)}
                className="btn-custom1 mt-1 mb-3"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLarge;
