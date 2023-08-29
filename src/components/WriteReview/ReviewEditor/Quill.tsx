import dynamic from 'next/dynamic';
const EditorComponent = dynamic(
  () => import('@/components/WriteReview/ReviewEditor/ReviewEditor'),
  {
    loading: () => <div></div>,
    ssr: false,
  }
);
export default EditorComponent;
