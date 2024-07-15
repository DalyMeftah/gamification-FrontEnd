export interface User {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  role: {
    id: string;
    name: string;
  };
  status: {
    id: string;
    name: string;
  };
  xpPoints: number;
}

export interface AuthResponse {
  token: string;
  refreshToken: string;
  tokenExpires: number;
  user: User;
}

export interface SignUpData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface LoginData {
  email: string;
  password: string;
}
