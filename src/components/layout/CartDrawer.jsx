import React from 'react'
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../context/UseContext";
import Image from "next/image";
import Link from 'next/link';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


const CartDrawer = ({ setIsCartOpen }) => {
    const { cart, removeFromCart, updateQuantity } = useContext(UserContext);
    return (
    <div className="flex flex-col h-full p-4">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Shopping Cart</h2>
            <button
                onClick={() => setIsCartOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
            >
                <FontAwesomeIcon icon={faXmark} className="text-xl" />
            </button>
        </div>

        <div className="flex-grow overflow-y-auto">
            {cart.length === 0 ? (
                <div className="text-center py-6">
                <p className="text-sm">Your cart is empty</p>
                </div>
            ) : (
                <div className="space-y-1.5">
                    {cart.map((item) => (
                    <div key={item.id} className="flex gap-2 bg-[#333] p-1.5 rounded-lg">
                    <Image
                        src={baseUrl + item.image}
                        alt={item.productName}
                        width={50}
                        height={50}
                        className="rounded-md object-cover"
                    />
                    <div className="flex justify-between">
                        <div className='flex flex-col items-start '> 
                            <h3 className="font-medium text-sm truncate">{item.productName}</h3>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={() => updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
                                    className="text-gray-400 hover:text-white text-xs p-1"
                                >
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <span className="w-5 text-center text-xs">{item.quantity || 1}</span>
                                <button
                                    onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                                    className="text-gray-400 hover:text-white text-xs p-1"
                                >
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                        </div>
                        
                    </div>
                    <div className='flex ml-auto gap-4'>
                        <div className='flex flex-col items-center justify-center  gap-x-1'>
                            <p className="text-red-600 text-sm font-bold">৳{item.price*item.quantity}</p>
                            { item.salesPrice && <del><p className='text-white'>৳{item.salesPrice*item.quantity}</p></del>}
                        </div>

                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto my-1 text-red-500 hover:text-red-600 text-lg"
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                    
                </div>
                ))}
            </div>
        )}
    </div>

    {cart.length > 0 && (
        <div className="mt-4 space-y-3">
            <div className="flex justify-between text-base font-semibold">
                <span>Total:</span>
                <span>৳{cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0)}</span>
            </div>
            <Link href="/my-cards" className="w-full">
                <button
                    onClick={() => {
                        setIsCartOpen(false);
                    }}
                    className="w-full rac_btn hover:text-red-600 py-2.5 rounded-lg transition-colors text-sm"
                    >
                    Proceed to Checkout
                </button>
            </Link>
        </div>
        )}
    </div>
    )
}

export default CartDrawer