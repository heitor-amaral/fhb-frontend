import { Link } from 'react-router-dom';
import {
  AsideContainer,
  HeaderContainer,
  LinkButton,
  LogoContainer,
  LogoImage,
} from './styles';

type HeaderProps = {
  actionButton: {
    title: string;
    navigateTo: string;
    onClick?: () => void;
  }[];
};

function Header({ actionButton }: HeaderProps) {
  return (
    <HeaderContainer to="/">
      <LogoContainer>
        <LogoImage />
      </LogoContainer>

      <AsideContainer>
        {actionButton &&
          actionButton.map(button => (
            <Link to={button.navigateTo}>
              <LinkButton onClick={button.onClick} style={{ marginRight: 20 }}>
                {button.title}
              </LinkButton>
            </Link>
          ))}
      </AsideContainer>
    </HeaderContainer>
  );
}

export default Header;
