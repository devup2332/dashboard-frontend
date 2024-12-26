import React, { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLInputElement> {
  Icon: React.ReactNode;
}

const InputIcon = (props: Props) => {
  const { Icon, ...others } = props;
  return (
    <div className="border-input-stroke-color border-[1px] px-3 py-2 border-solid rounded-md flex gap-3 w-60 2xl:w-80">
      {Icon}
      <input
        className="border-none text-primary-text-color bg-transparent outline-none text-sm"
        {...others}
      />
    </div>
  );
};

export default InputIcon;
