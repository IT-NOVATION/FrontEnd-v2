import { IAddProfileForm, ISignupForm } from '@/interface/account';
import { SERVER_URI } from './instance';

export const signup = (data: ISignupForm) =>
  fetch(`${SERVER_URI}/account/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

export const addProfile = (data: IAddProfileForm) =>
  fetch(`${SERVER_URI}/user/profile`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
