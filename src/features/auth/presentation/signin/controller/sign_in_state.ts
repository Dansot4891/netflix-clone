export interface SignInState {
  email: string;
  password: string;
  rememberMe: boolean;
  isLoading: boolean;
  error?: string;
}