"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { MessageCircle } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import useUserStore from "@/store/useUserStore";
import bookImage from "@/assets/images/book1.png";
import { apiRequest } from "@/utils/index"; // Import your apiRequest function

const BookCard = ({ name, pdf, desc, _id }: {name:string; pdf:string; desc:string; _id:string;}) => {
  const user = useUserStore((state) => state.user);
  const { items: cart, addToCart } = useCartStore();

  const formatSlug = (name: string | undefined) =>
    (name ?? "").toLowerCase().replace(/ /g, "-");

  const [comments, setComments] = useState<any[]>([]);
  const [newComment, setNewComment] = useState("");
  const [showAll, setShowAll] = useState(false);

  const handleAddToCart = () => {
    const productToAdd = { name, pdf, desc, id: _id };
    const itemExists = cart.some((item) => item.id === _id);

    if (itemExists) {
      toast.info("Note already exists!!");
    } else {
      addToCart(productToAdd);
      toast.success("Note saved to WishList");
    }
  };

  const fetchComments = async () => {
    try {
      const response = await apiRequest({
        url: `/comment/get-comments?bookId=${_id}`,
        method: "GET",
        data: {},
      });

      if (response?.success) {
        setComments(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch comments", error);
    }
  };

  const submitComment = async () => {
    if (!newComment.trim()) return;

    if (!user || !user.id) {
      toast.error("Please log in to comment");
      return;
    }

    console.log("Submitting comment with data:", {
      comment: newComment,
      userId: user.id,
      noteId: _id
    });

    try {
      const response = await apiRequest({
        url: `/comment/commentBook`,
        method: "POST",
        data: {
          comment: newComment,
          userId: user.id,
          noteId: _id,
        },
      });

      console.log("Response from server:", response);

      if (response?.success) {
        toast.success("Comment posted!");
        setNewComment(""); // Clear the comment box
        fetchComments(); // Reload comments
      }
    } catch (error) {
      console.error("Failed to submit comment", error);
      console.log("This is the id", _id)
    }
  };

  useEffect(() => {
    fetchComments();
  }, [_id]);

  return (
    <div className="bg-[#f9fafb] rounded-2xl shadow-lg p-5 transition hover:shadow-2xl group">
      <Link href={`/product/${formatSlug(name)}`}>
        <div className="cursor-pointer flex justify-center mb-4">
          <Image
            src={bookImage}
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

        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition duration-300"
        >
          View PDF
        </a>
      </div>

      {/* COMMENT SECTION */}
      <div className="mt-6">
        <div className="flex items-center space-x-1 text-gray-500 mb-2">
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-semibold">Comments</span>
        </div>

        {/* Add Comment */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={submitComment}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg"
          >
            Submit
          </button>
        </div>

        {/* Show Comments */}
        <div className="space-y-3 max-h-40 overflow-y-auto">
          {(showAll ? comments : comments.slice(0, 2)).map((com) => (
            <div key={com._id} className="bg-white rounded-md p-2 shadow-sm">
              <p className="text-sm font-medium text-gray-800">
                {com.userId?.firstName ?? "Unknown"}{" "}
                {com.userId?.lastName ?? ""}
              </p>
              <p className="text-sm text-gray-600">{com.comment}</p>
            </div>
          ))}
        </div>

        {comments.length > 2 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-500 text-xs mt-2 hover:underline"
          >
            {showAll ? "Show Less" : "View All Comments"}
          </button>
        )}
      </div>
    </div>
  );
};

export default BookCard;
