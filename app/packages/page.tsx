import TailwindSelect from "@/components/TailwindSelect";
import UploadthingCustomButton from "@/components/UploadthingCustomButton";
import React from "react";

export default function page() {
  return (
    <div>
      <h2 className="text-center px-4 pt-12 mb-1 ">Packages</h2>
      <UploadthingCustomButton />
      <TailwindSelect />
    </div>
  );
}
