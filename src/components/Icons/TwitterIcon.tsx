import React from "react";

interface ITwitterIconProps {
  width?: number;
  height?: number;
}

const TwitterIcon: React.FC<ITwitterIconProps> = ({
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
          d="M8.26999 10.0699C9.55691 9.79223 10.7099 9.08205 11.5368 8.05765C12.3638 7.03326 12.8149 5.75648 12.815 4.43994H15.845V9.59194H19.482V13.2279H15.846V18.6819C15.846 19.1969 16.043 19.8889 16.755 20.3489C17.229 20.6559 18.239 20.8069 19.785 20.8039V24.4399H15.543C14.946 24.4401 14.3549 24.3226 13.8034 24.0943C13.2518 23.8659 12.7507 23.5312 12.3285 23.1091C11.9064 22.687 11.5715 22.186 11.3431 21.6345C11.1146 21.083 10.997 20.4919 10.997 19.8949V13.2279H8.26999V10.0699Z"
          fill="black"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="-22.5"
            y1="14.4399"
            x2="36"
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

export default TwitterIcon;
