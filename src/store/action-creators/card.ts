import axios from "axios";
import { Dispatch } from "redux";
import { ICard } from "../../models/ICard";
import { CardsAction, CardsActionTypes } from "./../../types/cards";

export const fetchCards = () => {
  return async (dispatch: Dispatch<CardsAction>) => {
    try {
      dispatch({ type: CardsActionTypes.FETCH_CARDS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos?_limit=10"
      );
      const cards = response.data.map((card: ICard) => ({
        ...card,
        liked: false,
      }));
      setTimeout(() => {
        dispatch({
          type: CardsActionTypes.FETCH_CARDS_SUCCESS,
          payload: cards,
        });
      }, 500);
    } catch (e) {
      dispatch({
        type: CardsActionTypes.FETCH_CARDS_ERROR,
        payload: "Произошла ошибка при загрузке данных",
      });
    }
  };
};

export const deleteCard = (payload: ICard[]) => {
  return (dispatch: Dispatch<CardsAction>) => {
    dispatch({
      type: CardsActionTypes.DELETE_CARD,
      payload,
    });
  };
};

export const deleteLikedCard = (payload: ICard[]) => {
  return (dispatch: Dispatch<CardsAction>) => {
    dispatch({
      type: CardsActionTypes.DELETE_LIKED_CARD,
      payload,
    });
  };
};

export const likeCard = (payload: ICard[]) => {
  return (dispatch: Dispatch<CardsAction>) => {
    dispatch({ type: CardsActionTypes.LIKE_CARD, payload });
  };
};

export const addToLikedList = (payload: ICard[]) => {
  return (dispatch: Dispatch<CardsAction>) => {
    dispatch({ type: CardsActionTypes.ADD_TO_LIKED_CARDS, payload });
  };
};

export const setFilterCards = (payload: string) => {
  return (dispatch: Dispatch<CardsAction>) => {
    dispatch({ type: CardsActionTypes.SET_FILTER_CARDS, payload });
  };
};
