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
  verifyPassword: string;
}
