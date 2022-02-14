/* eslint-disable no-param-reassign */
import { useRef, MutableRefObject, ChangeEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../shared/Button';
import FormField from '../shared/FormField';
import { loginAPI } from './login.service';
import {
  LoginContainer,
  LoginContent,
  LogoContainer,
  LogoImage,
  FormContainer,
  ButtonContainer,
} from './styles';

function Login() {
  const loginRef = useRef<string>('');
  const passwordRef = useRef<string>('');
  const navigation = useNavigate();

  const { setState } = useAuth();

  function handleOnChange(
    event: ChangeEvent<HTMLInputElement>,
    reference: MutableRefObject<string>,
  ) {
    reference.current = event.target.value;
  }

  const handleClickLogin = useCallback(async () => {
    const login = loginRef.current;
    const password = passwordRef.current;

    if (!login || !password) {
      alert('Preencha todos os campos');
      return;
    }

    try {
      await loginAPI({ login, password });
      localStorage.setItem('user', JSON.stringify({ email: login }));

      setState({ email: login });
      navigation('/');
    } catch (err) {
      alert('Login ou senha incorretos');
    }
  }, [navigation, loginRef, passwordRef]);

  const handleClickSignUp = useCallback(() => {
    navigation('/signup');
  }, [navigation]);

  return (
    <LoginContainer>
      <LoginContent>
        <LogoContainer>
          <LogoImage />
        </LogoContainer>

        <FormContainer>
          <FormField
            label="E-mail"
            textAlign="center"
            onChange={e => handleOnChange(e, loginRef)}
          />
          <FormField
            label="Password"
            textAlign="center"
            type="password"
            onChange={e => handleOnChange(e, passwordRef)}
          />
        </FormContainer>

        <ButtonContainer>
          <Button title="Login" onClick={handleClickLogin} />
          <Button title="Sign Up" onClick={handleClickSignUp} />
        </ButtonContainer>
      </LoginContent>
    </LoginContainer>
  );
}

export default Login;
