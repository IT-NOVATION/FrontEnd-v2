import dynamic from 'next/dynamic';
const EditorComponent = dynamic(
  () => import('@/components/WriteReview/ReviewEditor/ReviewEditor'),
  {
    loading: () => <div className="w-[900px] h-[1000px]"></div>,
    ssr: false,
  }
);
export default EditorComponent;
