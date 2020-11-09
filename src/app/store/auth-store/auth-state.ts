import { GoogleData } from '../../services/auth.service';

export const authInitialState: AuthState = {
  userData: null,
  isLoading: false,
  error: null,
};

export interface AuthState {
  userData: GoogleData;
  isLoading: boolean;
  error: boolean;
}
