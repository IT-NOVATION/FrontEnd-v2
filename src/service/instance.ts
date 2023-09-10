export const SERVER_URI = 'https://api.its-movietime.com/api/v1';
export const getAccessTokenHeader = () => {
  // 페이지가 client에 마운트될 때까지 기다렸다가 localStorage 접근한다.
  if (typeof window !== 'undefined') {
    const accessToken = localStorage.getItem('accessToken');
    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken || ''}`,
    };
  }
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer `,
  };
};

export const getRefreshTokenHeader = () => {
  if (typeof window !== 'undefined') {
    const refreshToken = localStorage.getItem('refreshToken');
    return {
      'Authorization-refresh': `Bearer ${refreshToken}`,
      'Content-Type': 'application/json',
    };
  }
  return {
    'Content-Type': 'application/json',
    'Authorization-refresh': `Bearer `,
  };
};
