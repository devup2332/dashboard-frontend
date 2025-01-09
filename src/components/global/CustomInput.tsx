import { cn } from "@/lib/utils";
import React, { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLInputElement> {
  Icon: React.ReactNode;
  containerClassName?: string;
}

const CustomInput = (props: Props) => {
  const { Icon, containerClassName, className, ...others } = props;
  return (
    <div
      className={cn(
        "border-input-stroke-color border-[1px] px-3 py-2 border-solid rounded-md flex gap-3 ",
        containerClassName,
      )}
    >
      {Icon}
      <input
        className={cn(
          "border-none font-raleway text-primary-text-color bg-transparent outline-none text-sm w-full",
          className,
        )}
        {...others}
      />
    </div>
  );
};

export default CustomInput;
