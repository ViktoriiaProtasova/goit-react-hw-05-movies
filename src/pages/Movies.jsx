import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getSearchQuery } from '../requests';
import { ColorRing } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import Gallery from '../components/Gallery/Gallery';
import { LoaderWrapper } from '../components/commonCss.styled';
import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Movies.styled';

const Movies = () => {
  const location = useLocation();
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchQuery) return;

    async function getSearch() {
      setIsLoading(true);

      try {
        const response = await getSearchQuery(searchQuery);
        if (response.results.length !== 0) {
          setSearchedMovies([...response.results]);
        } else {
          toast.error('Please enter a valid query.', {
            position: 'top-center',
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
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
    }
    getSearch();
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });

    form.reset();
  };

  return (
    <>
      <Searchbar>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormInput type="text" name="query" />
          <SearchFormButton type="submit">Search</SearchFormButton>
        </SearchForm>
      </Searchbar>
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
      <Gallery data={searchedMovies} state={{ from: location }} />
    </>
  );
};

export default Movies;
