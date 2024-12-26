import { Input } from "@/components/ui/input";
import React, { HTMLProps } from "react";

const CustomInput = (props: HTMLProps<HTMLInputElement>) => {
  return (
    <Input
      className="bg-transparent border-input-stroke-color placeholder-red-500 text-primary-text-color"
      {...props}
    />
  );
};

export default CustomInput;
