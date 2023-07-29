import { HeaderContainer, Navigation, StyledLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
