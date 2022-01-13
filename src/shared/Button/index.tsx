import { AnchorHTMLAttributes } from 'react';
import { ButtonContainer } from './styles';

function Button({ title, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a {...props}>
      <ButtonContainer>{title}</ButtonContainer>
    </a>
  );
}

export default Button;
