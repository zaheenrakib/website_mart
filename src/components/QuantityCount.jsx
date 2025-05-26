import React from "react";

const QuantityCount = ({ quantity, onQuantityChange }) => {
  // Handle increment
  const incrementQuantity = () => {
    onQuantityChange(quantity + 1);
  };

  // Handle decrement
  const decrementQuantity = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="flex items-center space-x-2 px-4 py-2">
      <div
        className="px-2 py-1 border border-gray-300 rounded cursor-pointer"
        onClick={decrementQuantity}
      >
        -
      </div>
      <div className="px-3 py-1 border border-gray-300 rounded">{quantity}</div>

      <div
        className="px-2 py-1 border border-gray-300 rounded cursor-pointer"
        onClick={incrementQuantity}
      >
        +
      </div>
    </div>
  );
};

export default QuantityCount;
