const NetworkIcon = ({ className = "", ...props }) => (
  <svg
    width="43"
    height="42"
    viewBox="0 0 43 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props }
  >
    <rect x="0.5" width="42" height="42" rx="8" fill="#195CE1" />
    <rect
      x="0.5"
      width="42"
      height="42"
      rx="8"
      fill="url(#paint0_linear_131_30681)"
      fillOpacity="0.15"
    />
    <path
      d="M11.5 20C13.8317 17.5578 17.1432 17.4428 19.5 20M17.9951 13.5C17.9951 14.8807 16.8742 16 15.4915 16C14.1088 16 12.988 14.8807 12.988 13.5C12.988 12.1193 14.1088 11 15.4915 11C16.8742 11 17.9951 12.1193 17.9951 13.5Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M23.5 31C25.8317 28.5578 29.1432 28.4428 31.5 31M29.9951 24.5C29.9951 25.8807 28.8742 27 27.4915 27C26.1089 27 24.988 25.8807 24.988 24.5C24.988 23.1193 26.1089 22 27.4915 22C28.8742 22 29.9951 23.1193 29.9951 24.5Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12.5 23C12.5 26.87 15.63 30 19.5 30L18.5 28"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24.5 12H30.5M24.5 15H30.5M24.5 18H28"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_131_30681"
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

export default NetworkIcon;
