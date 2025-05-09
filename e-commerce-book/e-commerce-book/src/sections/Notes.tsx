"use client";
import SectionHeader from "../components/SectionHeader";
import { IoIosArrowRoundForward } from "react-icons/io";

import PageHeader from "@/components/PageHeader";
import { ChevronDown, ChevronRight, LayoutGrid } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import BookCard from "@/components/BookCard";

interface BookData {
  title: string;
  author?: string;
  description?: string;
  pdf: string; // URL to PDF
  [key: string]: any;
}

export default function Blogs() {
  const [books, setBooks] = useState<BookData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8800/note/fetch-notes"
      );
      setBooks(response.data);
    } catch (error) {
      console.error("Failed to fetch books", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <>
      <SectionHeader smallTitle="Books & Notes" />
      <section className="w-full flex_center flex-col font-jakarta py-10 lg:px-0 px-4 lg:gap-12 container gap-6">
        {loading ? (
          <p className="text-center">Loading books...</p>
        ) : (
          <div className="w-full grid lg:grid-cols-3 overflow-hidden grid-cols-1  gap-8">
            {books.slice(0,3).map((book) => {
              return (
                <BookCard
                  key={book._id}
                  name={book.name}
                  pdf={book.pdf}
                  desc={book.desc}
                  _id={book._id}
                />
              );
            })}
          </div>
        )}
        <button className="bg-secondary group text-white py-3 px-6 rounded-md  overflow-hidden transition duration-300">
          <a
            href="/books"
            className="flex items-center justify-center gap-2 hover:text-2xl text-xl font-normal"
          >
            View All{" "}
            <IoIosArrowRoundForward className="me-2 scale-125 group-hover:scale-150 transition-all duration-300" />
          </a>
        </button>
      </section>
    </>
  );
}
