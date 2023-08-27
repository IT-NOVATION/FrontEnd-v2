import { FaStarHalfAlt } from 'react-icons/fa';

type Props = {
  color: string;
};

export default function HalfStarFillIcon({ color }: Props) {
  return <FaStarHalfAlt className='absolute' color={color} size={55} />;
}
