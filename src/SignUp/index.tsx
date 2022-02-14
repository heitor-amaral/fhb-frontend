/* eslint-disable no-param-reassign */
import { useRef, MutableRefObject, ChangeEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../shared/Button';
import FormField from '../shared/FormField';
import { signUpAPI } from './signup.service';
import {
  Container,
  Content,
  LogoContainer,
  LogoImage,
  FormContainer,
  ButtonContainer,
} from './styles';

function SignUp() {
  const nameRef = useRef<string>('');
  const emailRef = useRef<string>('');
  const passwordRef = useRef<string>('');
  const navigation = useNavigate();

  function handleOnChange(
    event: ChangeEvent<HTMLInputElement>,
    reference: MutableRefObject<string>,
  ) {
    reference.current = event.target.value;
  }

  const handleClickSignUp = useCallback(async () => {
    const login_email = emailRef.current;
    const password = passwordRef.current;
    const name = nameRef.current;

    if (!login_email || !password || !name) {
      alert('Preencha todos os campos');
      return;
    }

    try {
      await signUpAPI({ login_email, name, password });
      navigation('/');
    } catch (err) {
      alert('Login ou senha incorretos');
    }
  }, [navigation, emailRef, passwordRef, nameRef]);

  const handleCancel = useCallback(() => {
    navigation('/login');
  }, [navigation]);

  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoImage />
        </LogoContainer>

        <FormContainer>
          <FormField
            label="Name"
            textAlign="center"
            onChange={e => handleOnChange(e, nameRef)}
          />
          <FormField
            label="E-mail"
            textAlign="center"
            onChange={e => handleOnChange(e, emailRef)}
          />
          <FormField
            label="Password"
            textAlign="center"
            type="password"
            onChange={e => handleOnChange(e, passwordRef)}
          />
        </FormContainer>

        <ButtonContainer>
          <Button title="Sign Up" onClick={handleClickSignUp} />
          <Button title="Cancel" onClick={handleCancel} />
        </ButtonContainer>
      </Content>
    </Container>
  );
}

export default SignUp;
