import {
  IAddProfileForm,
  IChangePasswordForm,
  IGetCodeForm,
  ILoginForm,
  ISignupForm,
} from '@/interface/account';
import {
  SERVER_URI,
  getAccessTokenHeader,
  getRefreshTokenHeader,
} from './instance';

const LOGIN_URI = '/account/login';
const SIGNUP_URI = '/account/signup';
const ADD_PROFILE_URI = '/user/profile';
const SEND_CODE_URI = '/email/password-find/email-send';
const CHECK_CODE_URI = '/email/password-find/final-check';
const CHANGE_PASSWORD_URI = '/email/password-find/rewrite-pw';
const LOGIN_STATE_URI = '/user/state';
const LOGOUT_URI = '/account/custom-logout';

// 액세스 토큰 갱신
export const getRefreshedTokens = (callback: () => Promise<any>) =>
  fetch(`${SERVER_URI}${LOGIN_STATE_URI}`, {
    headers: getRefreshTokenHeader(),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`${res.status} 에러 발생`);
      }
      return res.json();
    })
    .then((json) => {
      // const { accessToken, refreshToken } = json;
      // localStorage.setItem('accessToken', accessToken);
      // localStorage.setItem('refreshToken', refreshToken);
      localStorage.deleteItem('accessToken');
      localStorage.deleteItem('refreshToken');

      return callback();
    });

// 로그인 상태
export const getLoginState = () =>
  fetch(`${SERVER_URI}${LOGIN_STATE_URI}`, {
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

export const login = (data: ILoginForm) =>
  fetch(`${SERVER_URI}${LOGIN_URI}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status} 에러 발생`);
    }
    return res.json();
  });

export const logout = () =>
  fetch(`${SERVER_URI}${LOGOUT_URI}`, {
    headers: getAccessTokenHeader(),
  }).then((res) => {
    if (!res.ok) {
      if (res.status === 401) {
        return getRefreshedTokens(getLoginState);
      }
      throw new Error(`${res.status} 에러 발생`);
    }
  });

export const signup = (data: ISignupForm) =>
  fetch(`${SERVER_URI}${SIGNUP_URI}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status} 에러 발생`);
    }
    return res;
  });

export const addProfile = (data: IAddProfileForm) =>
  fetch(`${SERVER_URI}${ADD_PROFILE_URI}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status} 에러 발생`);
    }
    return res;
  });

export const sendCode = (data: IGetCodeForm) =>
  fetch(`${SERVER_URI}${SEND_CODE_URI}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status} 에러 발생`);
    }
    return res;
  });
export const checkCode = (data: IGetCodeForm) =>
  fetch(`${SERVER_URI}${CHECK_CODE_URI}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status} 에러 발생`);
    }
    return res;
  });
export const changePassword = (data: IChangePasswordForm) =>
  fetch(`${SERVER_URI}${CHANGE_PASSWORD_URI}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`${res.status} 에러 발생`);
    }
    return res;
  });
