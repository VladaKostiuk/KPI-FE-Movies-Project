import { Button } from "react-bootstrap";

const ResetFilters = (props) => {
  const onClickHandler = () => {
    props.resetFilters();
  };

  return (
    <Button
      className="w-100"
      variant="outline-secondary"
      onClick={onClickHandler}
    >
      Reset Filters
    </Button>
  );
};

export default ResetFilters;
