import DOMPurify from 'dompurify';

type Props = {
  text: string;
};

export default function MainText({ text }: Props) {
  return (
    <article
      className="mt-[27px] mb-[90px] text-theme-lightBlack text-[16px] font-[300] leading-[32px]"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(text),
      }}
    ></article>
  );
}
