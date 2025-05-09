"use client";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import table from "@/assets/images/table.png"

export default function ChemistryBook() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <div className="max-w-4xl mx-auto bg-gray-100 rounded-lg p-6 shadow-md">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left column with image and user info */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          {/* Book preview image */}
          <div className="relative rounded-lg overflow-hidden border-2 border-blue-300">
            <img 
              src={table.src} 
              alt="Chemistry book preview showing desk with laptop, coffee, and notebook"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 w-full bg-white bg-opacity-80 p-2 text-center">
              <h3 className="text-purple-800 font-medium">Pioneer chemistry</h3>
              <button 
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="absolute right-2 bottom-2 text-gray-400 hover:text-gray-600"
              >
                {isBookmarked ? "★" : "☆"}
              </button>
            </div>
          </div>
          
          {/* User profile section */}
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3 pb-2 border-b border-gray-300">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-blue-200">
                <img src="/api/placeholder/40/40" alt="User avatar" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold text-gray-800">BIPLAV BHATTA</div>
                <div className="text-sm text-gray-600">biplavbhatta@gmail.com</div>
              </div>
            </div>
            
            {/* Action buttons */}
            <button className="w-full bg-blue-800 text-white py-2 rounded-md mb-2 uppercase font-medium text-sm">Read</button>
            <button className="w-full bg-blue-800 text-white py-2 rounded-md mb-2 uppercase font-medium text-sm">Download</button>
            <div className="text-center text-gray-500 my-2">OR</div>
            <button className="w-full bg-blue-800 text-white py-2 rounded-md flex items-center justify-center gap-2 uppercase font-medium text-sm">
              <MessageCircle size={16} />
              Message
            </button>
          </div>
        </div>
        
        {/* Right column with book details */}
        <div className="w-full md:w-2/3 bg-white rounded-lg p-4 shadow-sm">
          <div className="grid grid-cols-1 gap-2">
            {/* Book metadata fields */}
            <MetadataField label="File Name" value="Pioneer chemistry" />
            <MetadataField label="Institute Name" value="Global College" />
            <MetadataField label="Course" value="High School Courses" />
            <MetadataField label="Type" value="Chemistry" />
            <MetadataField label="Language" value="English" />
            <MetadataField label="Time" value="04/04/2025" />
            <MetadataField label="Document" value="READ BOOK" />
            
            {/* Book description */}
            <div className="mt-2">
              <div className="font-medium text-gray-600">About</div>
              <div className="text-sm text-gray-700 border rounded-md border-gray-200 p-3 bg-gray-50 mt-1">
                Pioneer Chemistry typically refers to a textbook or resource designed to explore the fundamentals of chemistry in an accessible and engaging way. Authored or published by entities like Pearson or McGraw-Hill, it interweaves essential concepts of atomic structure, chemical bonding, reactions, the periodic table, and states of matter. It might also emphasize practical applications or historical context from pioneers like Lavoisier or Mendeleev—scientific theory with real-world relevancy. Aimed at learners, it is crafted to build a strong foundation in the subject, making it a go-to for anyone diving into the science of matter and its transformations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component for metadata fields
function MetadataField({ label, value }:any) {
  return (
    <div>
      <div className="font-medium text-gray-600">{label}</div>
      <div className="text-sm border rounded-md border-gray-200 p-2 bg-gray-50">{value}</div>
    </div>
  );
}