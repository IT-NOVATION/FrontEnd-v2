import { useFormContext } from 'react-hook-form';

export default function SpoilerCheckbox() {
  const { register } = useFormContext();

  return (
    <div className="flex gap-[4px]">
      <input {...register('hasSpoiler')} id="hasSpoiler" type="checkbox" />
      <label htmlFor="hasSpoiler" className="text-body4">
        스포일러 포함
      </label>
    </div>
  );
}
