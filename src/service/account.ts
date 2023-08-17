import { IAddProfileForm, ILoginForm, ISignupForm } from '@/interface/account';
import { SERVER_URI } from './instance';

const LOGIN_URI = '/account/login';
const SIGNUP_URI = '/account/signup';
const ADD_PROFILE_URI = '/user/profile';

export const login = (data: ILoginForm) =>
  fetch(`${SERVER_URI}${LOGIN_URI}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => {
    console.log(res);
    if (!res.ok) {
      throw new Error(`${res.status} 에러 발생`);
    }
    return res;
  });

export const signup = (data: ISignupForm) =>
  fetch(`${SERVER_URI}${SIGNUP_URI}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => {
    console.log(res);
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
    console.log(res);
    if (!res.ok) {
      throw new Error(`${res.status} 에러 발생`);
    }
    return res;
  });
