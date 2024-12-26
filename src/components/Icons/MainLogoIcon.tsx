import React, { SVGProps } from "react";

const MainLogoIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_58_5)">
        <path
          d="M3 17L12 22L21 17V14L12 19L3 14V11L12 16L21 11V8L12 13L3 8L12 3L17.418 6.01"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_58_5">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MainLogoIcon;
