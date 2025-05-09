"use client";
import PageHeader from "@/components/PageHeader";
import { ChevronDown, ChevronRight, LayoutGrid } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import BookCard from "@/components/BookCard";
import SectionHeader from "@/components/SectionHeader";
import NewBookCard from "@/components/NewBookCard";

// Book interface
interface NoteData {
  title: string;
  author?: string;
  description?: string;
  pdf: string; // URL to PDF
  [key: string]: any;
}

interface BookData {
  title: string;
  author?: string;
  description?: string;
  image: string; // URL to PDF
  [key: string]: any;
}

// Sample categories
const categories = [
  {
    label: "Share Books",
    path: "/notes",
  },
  {
    label: "Read Books",
    path: "/books",
  },
  {
    label: "Study Notes",
    path: "/others",
  },
];

export default function Product() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [notes, setNotes] = useState<NoteData[]>([]);
  const [books, setBooks] = useState<NoteData[]>([]);
  const [loading, setLoading] = useState(true);

  const toggleSubMenu = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8800/note/fetch-notes"
      );
      setNotes(response.data);
    } catch (error) {
      console.error("Failed to fetch Notes", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchNotes = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8800/note/fetch-books"
      );
      setBooks(response.data);
    } catch (error) {
      console.error("Failed to fetch Books", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
    fetchNotes();
  }, []);

  return (
    <main className="w-full">
      <PageHeader title="Books" />

      <section className="pt-10 bg-[#F5F5F5] px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="container flex flex-col md:flex-row gap-4">
          {/* Sidebar */}
          <aside className="w-full md:w-1/4">
            <div className="mb-2 bg-white p-4 rounded-sm shadow-lg">
              <div className="flex items-center gap-4">
                <LayoutGrid color="#173f5f" size={35} />
                <span className="font-semibold text-xl md:text-2xl">
                  Categories
                </span>
              </div>
              <hr className="mt-3 mb-1 border-2 border-secondary" />
              <ul>
                {categories.map((item, index) => (
                  <li key={index} className="w-full">
                    <div
                      onClick={() => toggleSubMenu(item.label)}
                      className="cursor-pointer flex items-center justify-between p-2 hover:bg-quinary text-black hover:text-white rounded-sm"
                    >
                      <Link href={item.path} className="font-semibold">
                        {item.label}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Book Display */}
          <div className="w-full md:w-3/4 mb-10 h-full">
            <SectionHeader smallTitle="Read Books / Notes" className="mb-4" />
            {loading ? (
              <p className="text-center">Loading notes...</p>
            ) : (
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {notes.map((book) => (
                  <BookCard
                    key={book._id}
                    name={book.name}
                    pdf={book.pdf}
                    desc={book.desc}
                    _id={book._id}
                  />
                ))}
              </div>
            )}
            <SectionHeader smallTitle="Share Books" className="my-4" />
            {loading ? (
              <p className="text-center">Loading books...</p>
            ) : (
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {books.map((book) => (
                  <NewBookCard
                    name={book.name}
                    image={book.image}
                    desc={book.desc}
                    id={book.id}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
