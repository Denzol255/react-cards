import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { faHeart as solid } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faHeart as regular } from "@fortawesome/free-regular-svg-icons";
import { useActions } from "../hooks/useAction";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers";

interface CardButtonsProps {
  cardId: number;
  cardLiked: boolean;
}

const CardButtons: React.FC<CardButtonsProps> = ({ cardId, cardLiked }) => {
  const { deleteCard, likeCard, addToLikedList, deleteLikedCard } =
    useActions();
  const { cards, liked } = useSelector((state: RootState) => state.card);

  const handleClickDelete = (): void => {
    const newList = cards.filter((card) => card.id !== cardId);
    const newLikedList = liked.filter((card) => card.id !== cardId);
    deleteCard(newList);
    deleteLikedCard(newLikedList);
  };
  const handleClickLike = (): void => {
    const newList = cards.map((card) => {
      if (card.id === cardId) {
        card.liked = !card.liked;
      }
      return card;
    });
    const newLikedList = cards.filter((card) => card.liked);
    addToLikedList(newLikedList);
    likeCard(newList);
  };

  return (
    <div className='d-flex justify-content-between align-items-center'>
      <Button
        onClick={handleClickLike}
        className='bg-light text-primary rounded-circle like-btn'>
        <FontAwesomeIcon icon={cardLiked ? solid : regular} />
      </Button>
      <Button onClick={handleClickDelete} variant='danger'>
        Delete
      </Button>
    </div>
  );
};

export default CardButtons;
