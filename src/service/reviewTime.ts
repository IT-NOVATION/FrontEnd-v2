import { getLoginState, getRefreshedTokens } from './account';
import { SERVER_URI, getAccessTokenHeader } from './instance';

const GET_REVIEW_TIME_URI = '/top/yesterday/user';

export const getReviewTime = () =>
  fetch(`${SERVER_URI}${GET_REVIEW_TIME_URI}`, {
    headers: getAccessTokenHeader(),
  }).then((res) => {
    if (!res.ok) {
      if (res.status === 401) {
        return getRefreshedTokens(getLoginState);
      }
      throw new Error(`${res.status} 에러 발생`);
    }
    return res.json();
  });
