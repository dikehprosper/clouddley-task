const LinkChainIcon = ({ width = 43, height = 42, className = "", ...props }) => (
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
      fill="url(#paint0_linear_131_30671)"
      fillOpacity="0.15"
    />
    <path
      d="M19.5 22.229C19.6416 22.4609 19.8097 22.6804 20.0042 22.8828C21.2117 24.1395 23.0522 24.336 24.4576 23.4722C24.718 23.3121 24.9634 23.1157 25.1872 22.8828L28.4266 19.5114C29.8578 18.0218 29.8578 15.6068 28.4266 14.1172C26.9953 12.6276 24.6748 12.6276 23.2435 14.1172L22.53 14.8598"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M20.4703 27.14L19.7565 27.8828C18.3253 29.3724 16.0047 29.3724 14.5735 27.8828C13.1422 26.3932 13.1422 23.9782 14.5735 22.4886L17.8129 19.1172C19.2441 17.6276 21.5647 17.6276 22.9959 19.1172C23.1904 19.3195 23.3584 19.539 23.5 19.7708"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_131_30671"
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

export default LinkChainIcon;
