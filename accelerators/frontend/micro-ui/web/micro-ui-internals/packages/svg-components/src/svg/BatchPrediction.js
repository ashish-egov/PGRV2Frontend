import React from "react";
import PropTypes from "prop-types";

export const BatchPrediction = ({ className, height = "24", width = "24", style = {}, fill = "#F47738", onClick = null }) => {
  return (
    <svg width={width} height={height} className={className} onClick={onClick} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_105_148)">
        <path
          d="M17 8H7C5.9 8 5 8.9 5 10V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V10C19 8.9 18.1 8 17 8ZM13 20.5H11V19H13V20.5ZM13 18H11C11 16.5 8.5 15 8.5 13C8.5 11.07 10.07 9.5 12 9.5C13.93 9.5 15.5 11.07 15.5 13C15.5 15 13 16.5 13 18ZM18 6.5H6C6 5.67 6.67 5 7.5 5H16.5C17.33 5 18 5.67 18 6.5ZM17 3.5H7C7 2.67 7.67 2 8.5 2H15.5C16.33 2 17 2.67 17 3.5Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_105_148">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};



BatchPrediction.propTypes = {
  /** custom width of the svg icon */
  width: PropTypes.string,
  /** custom height of the svg icon */
  height: PropTypes.string,
  /** custom colour of the svg icon */
  fill: PropTypes.string,
  /** custom class of the svg icon */
  className: PropTypes.string,
  /** custom style of the svg icon */
  style: PropTypes.object,
  /** Click Event handler when icon is clicked */
  onClick: PropTypes.func,
};
