import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ToMovieLink = styled(Link)`
  color: #bf4f74;
  &:visited {
    color: #665fac;
  }
`;

export const MovieItem = styled.li`
  font-weight: bold;
  font-size: 14px;
  list-style: none;
`;
