import { Button, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import lostConnectionImage from "../../assets/lost-connection.gif";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <Container>
      <Row>
        <div className={styles.image}>
          <Image src={lostConnectionImage} />
        </div>
        <div className={styles.bottomContainer}>
          <h4>Looks like you're lost</h4>
          <p>the page you are looking for is not available!</p>
          <Link to="/">
            <Button variant="outline-dark">Go Home</Button>
          </Link>
        </div>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
