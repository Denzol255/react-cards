import { Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import CardButtons from "./CardButtons";

const LikedList = () => {
  const { liked } = useSelector((state: RootState) => state.card);

  return (
    <div>
      <Row xs={1} sm={2} lg={5} className='g-4'>
        {liked.map((card) => (
          <Col key={card.id}>
            <Card className='h-100'>
              <Card.Img variant='top' src={card.url} alt='card' />
              <Card.Body className='d-flex flex-column'>
                <Card.Title className='flex-grow-1 mb-3'>
                  {card.title}
                </Card.Title>
                <CardButtons cardId={card.id} cardLiked={card.liked} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default LikedList;
