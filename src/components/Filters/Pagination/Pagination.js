import React from "react";
import { Button } from "react-bootstrap";
import * as CONSTANTS from "../../../utils/constants";
import styles from "./Pagination.module.scss";

const Pagination = (props) => {
  const onClickHandler = (changeType) => {
    props.setPageFilter(changeType, props.filteredPage);
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.buttons}>
        <Button
          variant="outline-secondary"
          className="m-1 w-100"
          onClick={() => {
            onClickHandler(CONSTANTS.PAGINATION_DECREASE);
          }}
        >
          «
        </Button>
        <Button
          variant="outline-secondary"
          className="m-1 w-100"
          onClick={() => {
            onClickHandler(CONSTANTS.PAGINATION_INCREASE);
          }}
        >
          »
        </Button>
      </div>
      <p className={styles.pages}>
        <span>Page:</span> {props.filteredPage} of {props.totalPages}
      </p>
    </div>
  );
};

export default Pagination;
