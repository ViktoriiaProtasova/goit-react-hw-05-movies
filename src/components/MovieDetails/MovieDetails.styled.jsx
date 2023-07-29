import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const GalleryContainer = styled.div`
  padding: 10px;
`;

export const GalleryContentWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const BackLink = styled(Link)`
  display: block;
  font-size: 14px;
  font-weight: bold;
  color: #bf4f74;
  &:visited {
    color: #665fac;
  }
  padding-bottom: 15px;
`;

export const MovieImage = styled.img`
  display: block;
`;

export const MovieTitle = styled.h2`
  color: #7c2f48;
`;
