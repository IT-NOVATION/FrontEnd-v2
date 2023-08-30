import { FaStar } from 'react-icons/fa';

type Props = {
  color: string;
  size?: number;
};

export default function StarFillIcon({ color, size = 55 }: Props) {
  return <FaStar className="absolute" color={color} size={size} />;
}
