import React from 'react';

const RocketShapeIcon = ({ className = '' }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M49.1719 27.0395L55.3619 20.8497C62.3315 13.88 71.4561 10.989 81.1127 10.5166C84.869 10.3329 86.7469 10.241 88.2527 11.747C89.759 13.253 89.6669 15.131 89.4832 18.887C89.0107 28.5438 86.1198 37.6684 79.1502 44.6379L72.9602 50.8279C67.8627 55.9254 66.4136 57.375 67.4836 62.9042C68.5398 67.1279 69.5619 71.2179 66.4907 74.2892C62.7652 78.0146 59.3669 78.0146 55.6415 74.2892L25.7106 44.3583C21.9852 40.6328 21.9851 37.2346 25.7106 33.5091C28.7818 30.4379 32.8719 31.4602 37.0955 32.5162C42.6248 33.5864 44.0744 32.137 49.1719 27.0395Z"
        fill="white"
        stroke="white"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M70.8159 29.1667H70.8534"
        stroke="#0D0D0D"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4165 89.5833L31.2498 68.75"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M35.4165 89.5833L43.7498 81.25"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M10.4165 64.5833L18.7498 56.25"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default RocketShapeIcon;
