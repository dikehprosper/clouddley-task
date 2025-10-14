import React from "react";

const ExchangeIcon = ({ width = 43, height = 42, className = "", ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 43 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect x="0.5" width="42" height="42" rx="8" fill="#195CE1" />
    <rect
      x="0.5"
      width="42"
      height="42"
      rx="8"
      fill="url(#paint0_linear_131_30650)"
      fillOpacity="0.15"
    />
    <path
      d="M27.354 21.16C26.971 21.6105 26.2631 21.6138 25.8165 21.1671L21.3329 16.6835C20.8862 16.2369 20.8895 15.529 21.34 15.146L22.571 14.0994C23.4559 13.347 24.5349 12.8482 25.7044 12.6509L26.4294 12.5286C27.114 12.4131 27.8339 12.6522 28.3475 13.1658L29.3342 14.1525C29.8478 14.6661 30.0869 15.386 29.9714 16.0706L29.8491 16.7956C29.6518 17.9651 29.153 19.0441 28.4006 19.929L27.354 21.16Z"
      fill="white"
      stroke="white"
      strokeWidth="1.15"
    />
    <path d="M29 13.5L31 11.5L29 13.5Z" fill="white" />
    <path
      d="M29 13.5L31 11.5"
      stroke="white"
      strokeWidth="1.15"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12 30.5L14 28.5L12 30.5Z" fill="white" />
    <path
      d="M12 30.5L14 28.5"
      stroke="white"
      strokeWidth="1.15"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.646 20.84C16.029 20.3895 16.7369 20.3862 17.1835 20.8329L21.6671 25.3165C22.1138 25.7631 22.1105 26.471 21.66 26.854L20.429 27.9006C19.5441 28.653 18.4651 29.1518 17.2956 29.3491L16.5706 29.4714C15.886 29.5869 15.1661 29.3478 14.6525 28.8342L13.6658 27.8475C13.1522 27.3339 12.9131 26.614 13.0286 25.9294L13.1509 25.2044C13.3482 24.0349 13.847 22.9559 14.5994 22.071L15.646 20.84Z"
      fill="white"
      stroke="white"
      strokeWidth="1.15"
    />
    <path
      d="M18 21.5L20 19.5L18 21.5ZM21 24.5L23 22.5L21 24.5Z"
      fill="white"
    />
    <path
      d="M18 21.5L20 19.5M21 24.5L23 22.5"
      stroke="white"
      strokeWidth="1.15"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_131_30650"
        x1="21.5"
        y1="0"
        x2="21.5"
        y2="42"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export default ExchangeIcon;
