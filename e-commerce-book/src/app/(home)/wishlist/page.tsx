"use client";
import React from "react";
import { useCartStore } from "@/store/useCartStore";
// import Checkout from "@/components/Checkout";
import PageHeader from "@/components/PageHeader";
import bookImage from "@/assets/images/book1.png";

const WishList = () => {
  const { items, removeFromCart, updateQuantity, clearCart } = useCartStore();

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  return (
    <main className="w-full bg-[#F5F5F5]">
      <PageHeader title="WishList" />
      <div className="w-full px-2 md:px-4 py-4 space-y-4 container min-h-screen overflow-auto">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Side */}
          <div className="w-full md:w-2/3 space-y-4">
            {items.length === 0 ? (
              <p className="text-center text-lg mt-11">Your cart is empty</p>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-lg shadow-md gap-4"
                  >
                    {/* Image */}
                    <img
                      src={bookImage.src}
                      alt={item.name}
                      className="w-20 h-20 lg:w-60 lg:h-48 group-hover:scale-105 object-cover rounded-lg"
                    />

                    {/* Info + Quantity */}
                    <div className="flex-1 w-full">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-semibold text-ascent-1 px-4 py-2  bg-secondary rounded-lg text-white transition"
                    >
                      View PDF
                    </a>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="mt-4 sm:mt-0 font-semibold px-4 py-2 border-2 border-[#691417] rounded-sm hover:bg-secondary hover:text-white transition"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/3 space-y-4">
            {items.length > 0 && (
              <>
                <button
                  onClick={() => clearCart()}
                  className="w-full  font-semibold px-4 py-2 rounded-sm bg-secondary text-white transition"
                >
                  Clear WishList
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default WishList;
