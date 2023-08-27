import { FaStar } from 'react-icons/fa';

type Props = {
  color: string;
};

export default function StarFillIcon({ color }: Props) {
  return <FaStar className='absolute' color={color} size={55} />;
}
