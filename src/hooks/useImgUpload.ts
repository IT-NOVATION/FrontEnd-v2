import AWS from 'aws-sdk';

const REGION = process.env.NEXT_PUBLIC__AWS_S3_BUCKET_REGION;
const ACCESS_KEY = process.env.NEXT_PUBLIC__AWS_S3_BUCKET_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY =
  process.env.NEXT_PUBLIC__AWS_S3_BUCKET_SECRET_ACCESS_KEY;
const CLOUDFRONT_URL = process.env.NEXT_PUBLIC_CLOUDFRONT_URL;

// aws에 파일 업로드하고 가져오는 하는 로직이 특정 컴포넌트에 존재하는 것보다 분리하는 것이 낫다고 판단했습니다
export default function useImgUpload(
  setImg: React.Dispatch<React.SetStateAction<string>>
) {
  const uploadImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.currentTarget?.files?.[0];
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
          Key: `profileImgs/${date}`,
          Body: file,
        },
      });
      const url_key = await upload.promise().then((res) => res.Key);
      setImg(CLOUDFRONT_URL + url_key);
    } catch (error) {
      console.log(error);
    }
  };
  return uploadImg;
}
