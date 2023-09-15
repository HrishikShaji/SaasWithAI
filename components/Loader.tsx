import React from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center ">
      <Loader2 className="w-6 h-6 relative animate-spin" />
    </div>
  );
};
