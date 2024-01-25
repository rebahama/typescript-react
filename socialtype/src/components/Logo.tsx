// Logo.js
import { useEffect, useState } from 'react';

interface IMoonProps {
  colors: string;
}

const Logo: React.FC<IMoonProps> = () => {
  const [colors, setColors] = useState<string>('#a25757');

  const handleClick = () => {
    setColors((prevColor) => (prevColor === 'yellow' ? '#a25757' : 'yellow'));
  };

  useEffect(() => {
    // Update body background color when fillColor changes
    if (colors === 'yellow') {
      document.body.classList.add('background-theme');
    } else {
      document.body.classList.remove('background-theme');
    }

    // Cleanup the effect when the component unmounts
    return () => {
      document.body.classList.remove('background-theme'); // Reset to default background color
    };
  }, [colors]);

  return (
    <svg
      width="30px"
      height="30px"
      viewBox="-5 0 32 32"
      version="1.1"
      onClick={handleClick}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>moon</title>
        <desc>Created with Sketch Beta.</desc>
        <defs></defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Icon-Set-Filled"
            transform="translate(-575.000000, -829.000000)"
            fill={colors}
          >
            <path
              d="M586.256,845 C586.256,838.1 590.735,832.236 597,829.991 C595.243,829.361 593.353,829 591.372,829 C582.33,829 575,836.164 575,845 C575,853.837 582.33,861 591.372,861 C593.353,861 595.243,860.639 597,860.009 C590.735,857.764 586.256,851.901 586.256,845"
              id="moon"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Logo;
