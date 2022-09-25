export interface LoginDTO {
  email: string;
  password: string;
}

export interface ChangePasswordDTO{
  password: string;
  newPassword: string;
  confirmPassword: string;
}