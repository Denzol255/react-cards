import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.scss";
import { Container } from "react-bootstrap";
import CardList from "./components/CardList";
import FilterButton from "./components/FilterButton";
import Loader from "./components/Loader";
import { useSelector } from "react-redux";
import { RootState } from "./store/reducers";
import { useEffect } from "react";
import { useActions } from "./hooks/useAction";
import LikedList from "./components/LikedList";

function App() {
  const { loading, error, filter, cards } = useSelector(
    (state: RootState) => state.card
  );
  const { fetchCards } = useActions();

  useEffect(() => {
    fetchCards();
  }, []);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className='App'>
      <Container className='pt-4'>
        {cards.length ? (
          <>
            <FilterButton />
            {filter === "all" ? <CardList /> : <LikedList />}
          </>
        ) : (
          <div className='d-flex justify-content-center'>
            <span className='display-5'>Список карт пуст</span>
          </div>
        )}
      </Container>
    </div>
  );
}

export default App;
