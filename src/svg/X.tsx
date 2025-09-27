import type { JSX } from "react";

interface XProps {
  className?: string;
}

const X = ({ className }: XProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      fill="none"
      className={className}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1 13 13 1M1 1l12 12"
      />
    </svg>
  );
};

export default X;
