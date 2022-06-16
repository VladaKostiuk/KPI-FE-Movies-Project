import { useCallback, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import { getFilmById } from "../../utils/api";
import * as CONSTANTS from "../../utils/constants";
import NotFoundPage from "../NotFoundPage";
import styles from "./FilmPage.module.scss";

const FilmPage = () => {
  const { id: filmId } = useParams();
  const [filmData, setFilmData] = useState();
  const [error, setError] = useState(false);

  const filmReleaseYear = filmData?.release_date.split("-")[0];
  const filmReleaseDate = filmData?.release_date.split("-").join("/");

  const fetchFilmData = useCallback(async () => {
    try {
      const { movie_results } = await getFilmById(filmId);
      const data = movie_results[0];
      setFilmData(data);
    } catch (error) {
      setError(true);
    }
  }, [filmId]);

  useEffect(() => {
    fetchFilmData();
  }, [fetchFilmData]);

  if (error) {
    return <NotFoundPage />;
  }

  if (!filmData) {
    return (
      <div className={styles.spinner}>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      {filmData && (
        <>
          <Row className={styles.content} xs={2} md={2}>
            <Col xs md={4}>
              <div className={styles.poster}>
                <img
                  src={`${CONSTANTS.IMAGE_DOMAIN}${filmData.poster_path}`}
                  alt="Poster"
                />
              </div>
            </Col>
            <Col md={8}>
              <div className={styles.info}>
                <h2>
                  {filmData.title}
                  &nbsp;
                  <span className={styles.filmReleaseYear}>
                    ({filmReleaseYear})
                  </span>
                </h2>
                <p className={styles.filmReleaseDate}>
                  {filmReleaseDate}
                  &nbsp;
                  <span className={styles.originCountry}>
                    ({filmData.original_language})
                  </span>
                </p>
                <p className={styles.overview}>
                  <span>Overview:</span>
                  <br />
                  {filmData.overview}
                </p>
              </div>
            </Col>
          </Row>
          <div className={styles.background}>
            <img
              src={`${CONSTANTS.IMAGE_DOMAIN}${filmData.backdrop_path}`}
              alt="Backdrop"
            />
          </div>
        </>
      )}
    </>
  );
};

export default FilmPage;
