import React from "react";

interface IFacebookIconProps {
  width?: number;
  height?: number;
}

const FacebookIcon: React.FC<IFacebookIconProps> = ({
  width = 28,
  height = 29,
}) => {
  return (
    <div style={{ display: "inline-block", margin: "0 10px 0 10px" }}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 28 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="0.439941"
          width="28"
          height="28"
          rx="4"
          fill="url(#paint0_linear)"
        />
        <path
          d="M16 15.9399H18.5L19.5 11.9399H16V9.93994C16 8.90994 16 7.93994 18 7.93994H19.5V4.57994C19.174 4.53694 17.943 4.43994 16.643 4.43994C13.928 4.43994 12 6.09694 12 9.13994V11.9399H9V15.9399H12V24.4399H16V15.9399Z"
          fill="black"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="-12.5"
            y1="14.4399"
            x2="33"
            y2="14.4399"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B3FFAB" />
            <stop offset="1" stopColor="#12FFF7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default FacebookIcon;
