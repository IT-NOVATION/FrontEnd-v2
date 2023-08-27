import { Grade } from '@/interface/user';
import Vip from './Vip';
import Premium from './Premium';
import Special from './Special';
import Standard from './Standard';

type Props = {
  grade: Grade;
  className?: string;
};

export default function Badge({ grade, className }: Props) {
  return (
    <div className={className}>
      {grade === 'VIP' ? (
        <Vip />
      ) : grade === 'PREMIUM' ? (
        <Premium />
      ) : grade === 'SPECIAL' ? (
        <Special />
      ) : (
        <Standard />
      )}
    </div>
  );
}
