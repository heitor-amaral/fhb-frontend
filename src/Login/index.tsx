/* eslint-disable no-param-reassign */
import { useRef, MutableRefObject, ChangeEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../shared/Button';
import FormField from '../shared/FormField/intex';
import {
  LoginContainer,
  LoginContent,
  LogoContainer,
  LogoImage,
  FormContainer,
  ButtonContainer,
} from './styles';

function Login() {
  const userRef = useRef<string>('');
  const passwordRef = useRef<string>('');
  const navigation = useNavigate();

  function handleOnChange(
    event: ChangeEvent<HTMLInputElement>,
    reference: MutableRefObject<string>,
  ) {
    reference.current = event.target.value;
  }

  const handleClickLogin = useCallback(() => {
    navigation('/');
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
            onChange={e => handleOnChange(e, userRef)}
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
        </ButtonContainer>
      </LoginContent>
    </LoginContainer>
  );
}

export default Login;
