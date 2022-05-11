import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useAction";
import { RootState } from "../store/reducers";

const FilterButton = () => {
  const { liked, cards } = useSelector((state: RootState) => state.card);
  const { setFilterCards } = useActions();

  const setLikedFilter = (): void => {
    setFilterCards("liked");
  };
  const setAllFilter = (): void => {
    setFilterCards("all");
  };

  return (
    <Button
      disabled={!liked.length || liked.length === cards.length}
      className='mb-5'
      onMouseDown={setLikedFilter}
      onMouseUp={setAllFilter}
      onMouseLeave={setAllFilter}>
      Только лайкнутые
    </Button>
  );
};

export default FilterButton;
