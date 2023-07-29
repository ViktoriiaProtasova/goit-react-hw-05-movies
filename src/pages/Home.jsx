import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { ColorRing } from 'react-loader-spinner';
import { getTrendingMovies } from '../requests';
import Gallery from '../components/Gallery/Gallery';
import { LoaderWrapper } from '../components/commonCss.styled';
import { PageTitle } from '../components/Gallery/Gallery.styled';

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    setIsLoading(true);

    try {
      const data = await getTrendingMovies();
      setData([...data.results]);
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

  return (
    <div>
      <PageTitle>Trending Today</PageTitle>
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
      <Gallery data={data} />
    </div>
  );
};

export default Home;
