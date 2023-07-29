import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 10px;
  background: papayawhip;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 50px;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  color: #665fac;
  font-size: 18px;
  font-weight: bold;
  padding: 20px;
  &.active {
    color: #bf4f74;
  }
`;
