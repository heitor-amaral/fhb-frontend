import api from '../App/app.service';

type LoginAPIProps = {
  login_email: string;
  password: string;
  name: string;
};

export function signUpAPI({ login_email, password, name }: LoginAPIProps) {
  return api.post('/user', { login_email, password, name });
}
