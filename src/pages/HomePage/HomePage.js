import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import FilmsList from "../../components/FilmsList";
import Filters from "../../components/Filters";
import useMovies from "../../hooks/useMovies";
import { getFilms, getGenres } from "../../utils/api";
import { defaultFiltersState } from "../../utils/constants";

const HomePage = () => {
  const [filters, setFilters] = useState(defaultFiltersState);
  const [allGenresList, setAllGenresList] = useState([]);
  const { sendRequest, status, data } = useMovies(getFilms, filters);

  const fetchGenres = async () => {
    const genres = await getGenres();
    setAllGenresList(genres);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <Row>
      <Col xs="5" md="4" lg="3">
        <Filters
          status={status}
          allGenresList={allGenresList}
          totalPages={data.total_pages}
          filters={filters}
          setFilters={setFilters}
          defaultFiltersState={defaultFiltersState}
        />
      </Col>
      <Col>
        <FilmsList status={status} films={data.results} />
      </Col>
    </Row>
  );
};

export default HomePage;
