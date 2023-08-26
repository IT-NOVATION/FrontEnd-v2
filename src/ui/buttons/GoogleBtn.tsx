import Image from 'next/image';
import google from '../../../public/images/google.png';

export default function GoogleBtn() {
  return <Image alt="google" src={google} />;
}
