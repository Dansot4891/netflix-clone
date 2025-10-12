export interface SignInState {
  email: string;
  password: string;
  isLoading: boolean;
  error?: string;
}