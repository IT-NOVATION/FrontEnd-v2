type Props = {
  className?: string;
};
export default function SearchBigIcon({ className }: Props) {
  return (
    <svg
      className={className}
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 14.8224C1.5 20.454 2.51148 23.6204 4.41077 25.4518C6.32297 27.2957 9.50357 28.1484 14.8261 28.1484C20.1486 28.1484 23.3292 27.2957 25.2414 25.4518C27.1407 23.6204 28.1522 20.454 28.1522 14.8224C28.1522 9.19073 27.1407 6.02433 25.2414 4.19288C23.3292 2.34897 20.1486 1.49626 14.8261 1.49626C9.50357 1.49626 6.32297 2.34897 4.41077 4.19288C2.51148 6.02433 1.5 9.19073 1.5 14.8224Z"
        stroke="#5F5F5F"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.6518 29.6508L26.2822 26.2812"
        stroke="#5F5F5F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
