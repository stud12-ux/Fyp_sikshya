"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // default styling

export default function CountryInput({ className }: { className?: string }) {
  return (
    <div className="max-w-sm">
      <div className="phone-input-wrapper">
        <PhoneInput
          country={"np"}
          enableSearch={true}
          inputClass="!w-64 px-4 !py-5 text-black bg-white border border-gray-300 !rounded-sm"
          containerClass={`${className}`}
          buttonClass="bg-white border-r border-gray-300"
          dropdownClass="text-black bg-white"
          searchClass="text-black"
          placeholder="Enter phone number"
          onChange={(value, country, e, formattedValue) => {
            console.log(value);
          }}
        />
      </div>
    </div>
  );
}
