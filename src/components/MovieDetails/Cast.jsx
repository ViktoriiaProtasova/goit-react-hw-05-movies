import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import { getCastDetails } from 'requests';
import { LoaderWrapper } from '../commonCss.styled';
import { MovieItem } from '../Gallery/GalleryList.styled';
import {
  MovieItemWrapper,
  Actorcard,
  ActorName,
  ActorRole,
  ActorItem,
} from './Cast.styled';
import { MovieImage } from './MovieDetails.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [castData, setCastData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (!movieId) return;

    const getCast = async () => {
      setIsLoading(true);

      try {
        const data = await getCastDetails(movieId);
        setCastData(data.cast);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <>
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
      <MovieItemWrapper>
        {castData && castData.length !== 0 ? (
          castData.map(({ profile_path, name, character, id }) => (
            <Actorcard key={id}>
              <ActorItem>
                <MovieImage
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : defaultImg
                  }
                  width={150}
                  alt="poster"
                />
                <div>
                  <ActorName>{name}</ActorName>
                  <ActorRole>{character}</ActorRole>
                </div>
              </ActorItem>
            </Actorcard>
          ))
        ) : (
          <MovieItem>
            <p>OOPS...</p>
            <p>We are very sorry!</p>
            <p>We don't have any reviews for this movie.</p>
          </MovieItem>
        )}
      </MovieItemWrapper>
    </>
  );
};

export default Cast;
