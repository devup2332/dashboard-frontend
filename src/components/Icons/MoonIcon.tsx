import React, { SVGProps } from "react";

const MoonIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_158_40)">
        <path
          d="M12 3C12.132 3 12.263 3 12.393 3C11.1084 4.19371 10.2826 5.79985 10.0593 7.53923C9.83602 9.2786 10.2293 11.0412 11.1708 12.5207C12.1122 14.0002 13.5424 15.103 15.2126 15.6375C16.8829 16.1719 18.6876 16.1042 20.313 15.446C19.6878 16.9505 18.6658 18.257 17.3562 19.2263C16.0466 20.1955 14.4985 20.791 12.8769 20.9494C11.2554 21.1077 9.62129 20.823 8.14892 20.1254C6.67654 19.4279 5.42114 18.3437 4.51661 16.9886C3.61209 15.6335 3.09238 14.0583 3.01291 12.431C2.93345 10.8037 3.29721 9.1853 4.0654 7.74852C4.83359 6.31174 5.97739 5.11043 7.37479 4.27274C8.77219 3.43505 10.3708 2.9924 12 2.992V3Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_158_40">
          <rect width="24" height="24" fill="red" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MoonIcon;
