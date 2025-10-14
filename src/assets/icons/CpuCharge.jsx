const CpuCharge = ({ className = "", ...props }) => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M7.125 2V3.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.875 2V3.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.125 15.5V17" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.875 15.5V17" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.5 11.375H15" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 7.625H1.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 11.375H1.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.5 7.625H15" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M3 9.5C3 6.67157 3 5.25736 3.87868 4.37868C4.75736 3.5 6.17157 3.5 9 3.5C11.8284 3.5 13.2427 3.5 14.1213 4.37868C15 5.25736 15 6.67157 15 9.5C15 12.3284 15 13.7427 14.1213 14.6213C13.2427 15.5 11.8284 15.5 9 15.5C6.17157 15.5 4.75736 15.5 3.87868 14.6213C3 13.7427 3 12.3284 3 9.5Z"
        fill="currentColor" 
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.52041 6.875L7.95216 8.77798C7.78409 8.9819 7.90454 9.27537 8.17859 9.32967L9.82139 9.6551C10.1136 9.713 10.225 10.0378 10.0207 10.2361L8.07494 12.125"
        stroke="#0D0D0D"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CpuCharge
