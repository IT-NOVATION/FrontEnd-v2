'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AWS from 'aws-sdk';
import ImageResize from 'quill-image-resize';
import { useFormContext } from 'react-hook-form';

Quill.register('modules/ImageResize', ImageResize);

export default function ReviewEditor() {
  const { register, setValue: setMainTextValue } = useFormContext();
  register('reviewMainText');
  const quillRef = useRef(null);
  const [value, setValue] = useState('');

  useEffect(() => {
    setMainTextValue('reviewMainText', value);
  }, [value]);

  const imageHandler = async () => {
    // 1. 이미지를 저장할 input type=file DOM을 만든다.
    const input = document.createElement('input');
    // 속성 써주기
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.addEventListener('change', async () => {
      console.log('온체인지');
      const file = input.files?.[0];
      const formData = new FormData();
      formData.append('img', file as any);
      try {
        AWS.config.update({
          region: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_REGION,
          accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_ACCESS_KEY_ID,
          secretAccessKey:
            process.env.NEXT_PUBLIC_AWS_S3_BUCKET_SECRET_ACCESS_KEY,
        });
        const date = Date.now();
        const upload = new AWS.S3.ManagedUpload({
          params: {
            ACL: 'public-read',
            Bucket: 'itsmovietime',
            Key: `reviewImgs/${date}`,
            Body: file,
          },
        });
        const IMG_URL = await upload.promise().then((res) => res.Location); //저장과 동시에 저장된 url을 가져온다
        const current = quillRef.current as any;
        const editor = current.getEditor(); // 에디터 객체 가져오기

        const range = editor.getSelection();
        editor.insertEmbed(range.index, 'image', IMG_URL);
      } catch (error) {}
    });
  };

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ['link', 'image', 'video'],
          [{ align: [] }],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ],
          [{ header: [1, 2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      ImageResize: {
        parchment: Quill.import('parchment'),
      },
    };
  }, []);

  return (
    <ReactQuill
      ref={quillRef}
      className="w-[900px] h-[1000px] mt-[100px]"
      placeholder="인상깊은 내용/배우에 대해 글을 작성해주세요!"
      theme="snow"
      value={value}
      onChange={setValue}
      modules={modules}
    />
  );
}
