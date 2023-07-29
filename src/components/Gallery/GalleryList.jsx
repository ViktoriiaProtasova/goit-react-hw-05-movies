import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { MovieItem, ToMovieLink } from './GalleryList.styled';

const GalleryList = ({ results }) => {
  const location = useLocation();
  const { title, name, id } = results;
  const path = location.pathname;

  return path === '/' ? (
    <ToMovieLink to={`movies/${id}`} state={{ from: location }}>
      <>{title ? <li>{title}</li> : <li>{name}</li>}</>
    </ToMovieLink>
  ) : (
    <ToMovieLink to={`${id}`} state={{ from: location }}>
      <>
        {title ? <MovieItem>{title}</MovieItem> : <MovieItem>{name}</MovieItem>}
      </>
    </ToMovieLink>
  );
};

GalleryList.propTypes = {
  data: PropTypes.object,
};

GalleryList.defaultProps = {
  data: {},
};

export default GalleryList;
