export interface Props {
  className?: string;
  size?: string | number;
}

export function TailwindIcon({ className, size = 48 }: Props) {
  return (
    <svg
      height={size}
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.1667 20.55C15.5667 14.95 19.0667 12.15 24.6667 12.15C33.0667 12.15 34.1167 18.45 38.3167 19.5C41.1167 20.2 43.5667 19.15 45.6667 16.35C44.2667 21.95 40.7667 24.75 35.1667 24.75C26.7667 24.75 25.7167 18.45 21.5167 17.4C18.7167 16.7 16.2667 17.75 14.1667 20.55ZM3.66669 33.15C5.06669 27.55 8.56669 24.75 14.1667 24.75C22.5667 24.75 23.6167 31.05 27.8167 32.1C30.6167 32.8 33.0667 31.75 35.1667 28.95C33.7667 34.55 30.2667 37.35 24.6667 37.35C16.2667 37.35 15.2167 31.05 11.0167 30C8.21669 29.3 5.76669 30.35 3.66669 33.15Z"
        fill="#44A8B3"
      />
    </svg>
  );
}