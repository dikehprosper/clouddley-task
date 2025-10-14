const GearIcon = ({ className = "", color = "currentColor" }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M74.3916 50.6667C72.7957 52.5437 69.8461 52.5575 67.9853 50.6962L49.3036 32.0146C47.4424 30.1536 47.4561 27.2042 49.3332 25.6082L54.4624 21.2475C58.1495 18.1127 62.6453 16.0343 67.5182 15.2121L70.539 14.7024C73.3915 14.2211 76.3911 15.2175 78.5311 17.3574L82.6424 21.469C84.7824 23.6088 85.7786 26.6084 85.2974 29.461L84.7878 32.4816C83.9657 37.3546 81.8874 41.8504 78.7524 45.5375L74.3916 50.6667Z"
      fill={color}
      stroke={color}
      strokeWidth="3"
    />
    <path
      d="M81.25 18.75L89.5833 10.4167"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.4167 89.5833L18.7501 81.25"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25.6081 49.3333C27.2041 47.4563 30.1535 47.4425 32.0145 49.3038L50.6962 67.9854C52.5574 69.8463 52.5437 72.7958 50.6666 74.3917L45.5374 78.7525C41.8503 81.8875 37.3545 83.9658 32.4815 84.7879L29.4609 85.2975C26.6083 85.7788 23.6087 84.7825 21.4689 82.6425L17.3573 78.5313C15.2174 76.3913 14.221 73.3917 14.7023 70.5392L15.212 67.5183C16.0342 62.6454 18.1126 58.1496 21.2474 54.4625L25.6081 49.3333Z"
      fill={color}
      stroke={color}
      strokeWidth="3"
    />
    <path
      d="M35.4167 52.0833L43.7501 43.75M47.9167 64.5833L56.2501 56.25"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default GearIcon
