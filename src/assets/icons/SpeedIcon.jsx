const SpeedIcon = ({ className = "", ...props }) => {
  return (
    <svg
      width="10"
      height="15"
      viewBox="0 0 10 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M0.645133 7.04738L5.144 0.983897C5.49583 0.50968 6.15538 0.804835 6.15538 1.43652V6.12968C6.15538 6.50813 6.41398 6.81488 6.73303 6.81488H8.92123C9.41825 6.81488 9.68323 7.51005 9.35488 7.95263L4.856 14.0161C4.50418 14.4903 3.84463 14.1952 3.84463 13.5635V8.87033C3.84463 8.49188 3.58603 8.18513 3.26698 8.18513H1.0788C0.581713 8.18513 0.316746 7.48995 0.645133 7.04738Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SpeedIcon
