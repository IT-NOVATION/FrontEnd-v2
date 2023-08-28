import { SERVER_URI, getAccessTokenHeader } from './instance';

const FOLLOW_URI = '/push/follow';

export const mutateFollow = (data: { targetUserId: number }) =>
  fetch(`${SERVER_URI}${FOLLOW_URI}`, {
    method: 'POST',
    headers: getAccessTokenHeader(),
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status} 에러 발생`);
    }
    return res;
  });
