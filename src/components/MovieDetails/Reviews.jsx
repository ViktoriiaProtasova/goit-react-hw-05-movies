import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import { getReviewsDetails } from 'requests';
import { LoaderWrapper } from '../commonCss.styled';
import { OopsContent, ReviewItem } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsData, setReviewsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const getReviews = async () => {
      setIsLoading(true);

      try {
        const data = await getReviewsDetails(movieId);
        setReviewsData(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <ul>
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
      {reviewsData && reviewsData.length !== 0 ? (
        reviewsData.map(({ author, content, id }) => (
          <ReviewItem key={id}>
            <h4>{author}</h4>
            <p>{content}</p>
          </ReviewItem>
        ))
      ) : (
        <OopsContent>
          <p>OOPS...</p>
          <p>We are very sorry!</p>
          <p>We don't have any reviews for this movie.</p>
        </OopsContent>
      )}
    </ul>
  );
};

export default Reviews;
