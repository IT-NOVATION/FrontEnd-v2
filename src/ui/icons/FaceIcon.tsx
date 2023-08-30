type Props = {
  color?: string;
};

export default function FaceIcon({ color = 'black' }: Props) {
  return (
    <svg
      className="color-inherit"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M12.9267 7.5C12.9733 7.77333 13 8.04667 13 8.33333C13 11.2733 10.6067 13.6667 7.66667 13.6667C4.72667 13.6667 2.33333 11.2733 2.33333 8.33333C2.33333 8.3 2.34 8.26667 2.33333 8.24C4.06667 7.58667 5.46 6.24667 6.16 4.54C8.41333 7.3 11.4733 7.02667 12.1533 6.94667L11.56 5.66C11.4733 5.66667 8.48 5.91333 6.77333 3.08667C7.44667 2.98 7.91333 2.98667 8.5 3.08C10.18 2.31333 9.78667 2.48667 10.34 2.24C9.52 1.86667 8.62 1.66667 7.66667 1.66667C3.98667 1.66667 1 4.65333 1 8.33333C1 12.0133 3.98667 15 7.66667 15C11.3467 15 14.3333 12.0133 14.3333 8.33333C14.3333 7.38 14.1333 6.48 13.7733 5.66L12.9267 7.5ZM5.05333 3.68667C4.63333 4.94667 3.75333 6 2.61333 6.64667C3.03333 5.38667 3.91333 4.33333 5.05333 3.68667Z"
        fill={color || 'black'}
      />
      <path
        d="M9.66667 9.83333C10.1269 9.83333 10.5 9.46024 10.5 9C10.5 8.53976 10.1269 8.16667 9.66667 8.16667C9.20643 8.16667 8.83333 8.53976 8.83333 9C8.83333 9.46024 9.20643 9.83333 9.66667 9.83333Z"
        fill={color || 'black'}
      />
      <path
        d="M5.66667 9.83333C6.1269 9.83333 6.5 9.46024 6.5 9C6.5 8.53976 6.1269 8.16667 5.66667 8.16667C5.20643 8.16667 4.83333 8.53976 4.83333 9C4.83333 9.46024 5.20643 9.83333 5.66667 9.83333Z"
        fill={color || 'black'}
      />
      <path
        d="M15 3.33333L13.4 2.6L12.6667 1L11.9333 2.6L10.3333 3.33333L11.9333 4.06667L12.6667 5.66667L13.4 4.06667L15 3.33333Z"
        fill={color || 'black'}
      />
    </svg>
  );
}
