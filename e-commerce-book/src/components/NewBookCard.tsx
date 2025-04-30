"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCartStore } from "@/store/useCartStore";
import { MessageCircle } from "lucide-react";

const NewBookCard = ({ name, image, desc, id }: any) => {
  const formatSlug = (name: string | undefined) =>
    (name ?? "").toLowerCase().replace(/ /g, "-");

  const { items: cart, addToCart } = useCartStore();

  const handleAddToCart = () => {
    const productToAdd = { name, image, desc, id };
    const itemExists = cart.some((item) => item.id === id);

    if (itemExists) {
      toast.info("Item already in Wishlist!");
    } else {
      addToCart(productToAdd);
      toast.success("Item added to Wishlist!");
    }
  };

  return (
    <div className="bg-[#f9fafb] rounded-2xl shadow-lg p-5 transition hover:shadow-2xl group">
      <Link href={`/product/${formatSlug(name)}`}>
        <div className="cursor-pointer flex justify-center mb-4">
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            className="rounded-xl w-48 h-40 object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      <div className="text-left mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600 mt-2">{desc}</p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition duration-300"
        >
          Save to WishList
        </button>

        <Link
          href="/bookPage"
          className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition duration-300"
        >
          Request to Borrow
        </Link>
      </div>

      <div className="flex justify-end mt-4">
        <div className="flex items-center space-x-1 text-gray-500 cursor-pointer hover:text-gray-700 transition">
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm">Comment</span>
        </div>
      </div>
    </div>
  );
};

export default NewBookCard;
