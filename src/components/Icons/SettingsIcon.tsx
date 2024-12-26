import React, { SVGProps } from "react";

const SettingsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_71_126)">
        <path
          d="M19 6.84C19.3068 7.01793 19.561 7.27399 19.7366 7.58209C19.9123 7.8902 20.0032 8.23935 20 8.594V15.149C20 15.877 19.606 16.549 18.97 16.902L12.97 20.746C12.6733 20.9111 12.3395 20.9977 12 20.9977C11.6605 20.9977 11.3267 20.9111 11.03 20.746L5.03 16.902C4.71785 16.7282 4.45779 16.4741 4.27671 16.1661C4.09563 15.8581 4.0001 15.5073 4 15.15V8.593C4 7.865 4.394 7.194 5.03 6.84L11.03 3.258C11.3356 3.08712 11.6799 2.99741 12.03 2.99741C12.3801 2.99741 12.7244 3.08712 13.03 3.258L19.03 6.84H19Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_71_126">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SettingsIcon;
