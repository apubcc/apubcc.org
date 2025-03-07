const ResourcesSvg = ({
  width = 265,
  height = 337,
  className = "",
  fill = "white",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 265 337"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M132.965 19.2571C137.758 19.2571 142.127 17.3795 145.425 14.2959C154.245 6.04697 158.656 1.9225 159.635 1.35348C161.461 0.292574 160.364 0.725675 162.422 0.25334C163.526 0 164.871 0 167.561 0H240C253.807 0 265 11.1929 265 25V312C265 325.807 253.807 337 240 337H25C11.1929 337 0 325.807 0 312V25C0 11.1929 11.1929 0 25 0H98.3684C101.059 0 102.404 0 103.508 0.25334C105.566 0.725675 104.469 0.292573 106.295 1.35348C107.274 1.9225 111.684 6.04697 120.505 14.2959C123.803 17.3795 128.172 19.2571 132.965 19.2571Z"
        fill={fill}
      />
    </svg>
  );
};

export default ResourcesSvg;
