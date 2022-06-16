import { Formik } from "formik";
import { useContext, useState } from "react";
import { Button, Form, InputGroup, Modal, Spinner } from "react-bootstrap";
import * as yup from "yup";
import AuthContext from "../../store/auth-context";
import {
  createRequestToken,
  createSession,
  getFavoriteFilms,
  getUserData,
  validateWithLogin,
} from "../../utils/api";
import styles from "./AuthModal.module.scss";
import * as CONSTANTS from "../../utils/constants";

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().min(6).required(),
});

const AuthModal = (props) => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const authCtx = useContext(AuthContext);

  const onSubmitHandler = ({ username, password }) => {
    setError(undefined);
    setIsFetching(true);
    authenticationHandler(username, password, setError, setIsFetching);
  };

  const onChangeHandler = () => {
    setError(undefined);
  };

  const authenticationHandler = async (
    username,
    password,
    setError,
    setIsFetching
  ) => {
    try {
      const requestToken = await createRequestToken();

      const validation = await validateWithLogin(
        username,
        password,
        requestToken
      );

      if (validation.success) {
        const newSession = await createSession(requestToken);

        if (newSession.success) {
          const sessionId = newSession.session_id;

          const userData = await getUserData(sessionId);
          const favoriteFilms = await getFavoriteFilms(sessionId);

          authCtx.setUserName(userData.username);
          authCtx.setFavoriteFilms(favoriteFilms);
          authCtx.login(sessionId, userData.username, favoriteFilms);
          setIsFetching(false);
          props.onHideModal();
        }
      } else {
        setIsFetching(false);
      }
    } catch (error) {
      setIsFetching(false);
      setError(error.message);
    }
  };

  return (
    <>
      <Modal show={props.modalIsShown} onHide={props.onHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            validationSchema={schema}
            onSubmit={onSubmitHandler}
            initialValues={{
              username: "test123test",
              password: "test123test",
            }}
          >
            {({ handleSubmit, handleChange, values, errors }) => (
              <Form
                noValidate
                onSubmit={handleSubmit}
                onChange={onChangeHandler}
              >
                <Form.Group md="4" controlId="validationFormikUsername">
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      isInvalid={!!errors.username}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group md="4" controlId="validationFormikPassword">
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      aria-describedby="inputGroupPrepend"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group className={styles.footer}>
                  {error && <p>{error}</p>}
                  {isFetching ? (
                    <Spinner className="mx-10 mt-2" animation="grow" />
                  ) : (
                    <Button
                      className="w-100 mt-4"
                      type="submit"
                      variant="outline-dark"
                    >
                      Sign in
                    </Button>
                  )}
                </Form.Group>

                <Form.Group className="mt-2">
                  <Form.Text>Don't have an account yet?</Form.Text>
                  &nbsp;
                  <a
                    className=""
                    href={CONSTANTS.REGISTRATION_HREF}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#6c757d" }}
                  >
                    Register!
                  </a>
                </Form.Group>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AuthModal;
