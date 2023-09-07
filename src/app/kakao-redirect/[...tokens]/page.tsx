'use client';

import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type Props = {
  params: {
    tokens: string[];
  };
};

export default function SocialRedirectPage({ params: { tokens } }: Props) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [accessToken, refreshToken] = tokens;
  const handleRedirect = async () => {
    await queryClient.invalidateQueries();
    router.push('/');
  };
  useEffect(() => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    handleRedirect();
  }, []);
  return <div></div>;
}
