type Props = {
  className: string;
};

export default function Exit({ className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.80527 14.2517L14.1948 3.75176"
        stroke="#323232"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M3.80469 3.75L14.1942 14.25"
        stroke="#323232"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}
