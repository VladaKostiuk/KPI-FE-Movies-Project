import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import styles from "./FilmsListItem.module.scss";
import { IMAGE_DOMAIN, ERROR_IMAGE_URL, ROUTES } from "../../utils/constants";
import "../../utils/fontawasome";
import { Link } from "react-router-dom";

const FilmsListItem = (props) => {
  const { isLoggedIn } = useContext(AuthContext);

  const iconType = props.isFavorite ? "fas" : "far";

  return (
    <>
      <Card className={styles.card}>
        {props.backdropPath && (
          <Card.Img
            variant="top"
            src={`${IMAGE_DOMAIN}${props.backdropPath}`}
            alt={props.backdropPath}
          />
        )}
        {!props.backdropPath && (
          <Card.Img variant="top" src={ERROR_IMAGE_URL} />
        )}
        <Card.Body className={styles.body}>
          <Card.Title as={Link} to={`${ROUTES.FILM_PAGE}/${props.id}`}>
            {props.title}
          </Card.Title>
          <Card.Text>Rating: {props.rating}</Card.Text>
        </Card.Body>
        {isLoggedIn && (
          <Card.Footer>
            <FontAwesomeIcon
              icon={[iconType, "star"]}
              onClick={() => {
                props.setFavoriteFilm(props.id, props.isFavorite);
              }}
            />
          </Card.Footer>
        )}
      </Card>
    </>
  );
};

export default FilmsListItem;
