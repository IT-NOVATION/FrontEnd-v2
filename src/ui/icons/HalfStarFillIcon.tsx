import { FaStarHalfAlt } from 'react-icons/fa';

type Props = {
  color: string;
  size?: number;
};

export default function HalfStarFillIcon({ color, size = 55 }: Props) {
  return <FaStarHalfAlt className="absolute" color={color} size={size} />;
}
