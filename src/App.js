import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router-dom";
import AuthModal from "./components/AuthModal";
import Layout from "./components/Layout";
import FilmPage from "./pages/FilmPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const [modalIsShown, setModalIsShown] = useState(false);

  const hideModalHandler = () => setModalIsShown(false);

  const showModalHandler = () => setModalIsShown(true);

  const portalElement = document.getElementById("overlays");

  return (
    <>
      {ReactDOM.createPortal(
        <AuthModal
          modalIsShown={modalIsShown}
          onHideModal={hideModalHandler}
        />,
        portalElement
      )}

      <Layout onShowModal={showModalHandler}>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="film/:id" element={<FilmPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
