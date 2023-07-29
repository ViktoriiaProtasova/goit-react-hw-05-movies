import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ColorRing } from 'react-loader-spinner';
import { getMovieDetails } from '../requests';
import { LoaderWrapper } from '../components/commonCss.styled';
import {
  GalleryContainer,
  BackLink,
  MovieImage,
  MovieTitle,
  GalleryContentWrapper,
} from '../components/MovieDetails/MovieDetails.styled';

import {
  ToMovieLink,
  MovieItem,
} from '../components/Gallery/GalleryList.styled';
import { MoviesContainer } from '../components/Gallery/Gallery.styled';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { poster_path, title, name, vote_average, overview, genres } =
    movie || {};

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (!movieId) return;

    const getMovie = async () => {
      setIsLoading(true);

      try {
        const data = await getMovieDetails(movieId);

        setMovie({ ...data });
      } catch (error) {
        toast.error('Something went wrong. Try again later.', {
          position: 'top-center',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, [movieId]);

  return (
    <GalleryContainer>
      {isLoading && (
        <LoaderWrapper>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </LoaderWrapper>
      )}
      <GalleryContentWrapper>
        <div>
          <BackLink to={backLinkRef.current}>Go back</BackLink>
          <MovieImage
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />
        </div>
        <div>
          <MovieTitle>{title || name}</MovieTitle>
          <p>User score: {vote_average && vote_average.toFixed(2)}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genres && genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </GalleryContentWrapper>
      <p>
        <b>Additional information</b>
      </p>
      <MoviesContainer>
        <MovieItem>
          <ToMovieLink to={`cast`}>Cast</ToMovieLink>
        </MovieItem>
        <MovieItem>
          <ToMovieLink to={`reviews`}>Reviews</ToMovieLink>
        </MovieItem>
      </MoviesContainer>
      <Suspense
        fallback={
          <LoaderWrapper>
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          </LoaderWrapper>
        }
      >
        <Outlet />
      </Suspense>
    </GalleryContainer>
  );
};

export default MovieDetails;
