export interface IAccountInfo {
  email?: string;
  password?: string;
  verifyPassword?: string;
  nickname?: string;
  introduction?: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface ISignupForm {
  email: string;
  password: string;
  verifyPassword?: string;
}

export interface IAddProfileForm {
  email?: string;
  nickname: string;
  introduction: string;
}

export interface IGetCodeForm {
  email: string;
  code?: string;
}

export interface IChangePasswordForm {
  email?: string;
  password: string;
  verifyPassword?: string;
}

export interface ILoginState {
  loginState: boolean;
  userId: number | null;
  nickname: string | null;
  profileImg: string | null;
}
