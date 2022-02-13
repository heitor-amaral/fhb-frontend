import api from '../App/app.service';

type LoginAPIProps = {
  login: string;
  password: string;
};

export function loginAPI({ login, password }: LoginAPIProps) {
  return api.post('/user/login', { login, password }).catch(console.log);
}
