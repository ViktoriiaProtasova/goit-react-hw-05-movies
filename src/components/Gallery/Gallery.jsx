import PropTypes from 'prop-types';
import GalleryList from './GalleryList';
import { GallerySection, MoviesContainer } from './Gallery.styled';

const Gallery = ({ data }) => {
  return (
    <>
      {data && (
        <GallerySection>
          <MoviesContainer>
            {data.map(results => (
              <GalleryList key={results.id} results={results} />
            ))}
          </MoviesContainer>
        </GallerySection>
      )}
    </>
  );
};

Gallery.propTypes = {
  data: PropTypes.array,
};

Gallery.defaultProps = {
  data: [],
};

export default Gallery;
