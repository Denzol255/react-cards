import { ICard } from "../models/ICard";

export interface CardsState {
  cards: ICard[];
  loading: boolean;
  error: null | string;
  liked: ICard[];
  filter: string;
}
export enum CardsActionTypes {
  FETCH_CARDS = "FETCH_CARDS",
  FETCH_CARDS_SUCCESS = "FETCH_CARDS_SUCCESS",
  FETCH_CARDS_ERROR = "FETCH_CARDS_ERROR",
  DELETE_CARD = "DELETE_CARD",
  LIKE_CARD = "LIKE_CARD",
  ADD_TO_LIKED_CARDS = "ADD_TO_LIKED_CARDS",
  DELETE_LIKED_CARD = "DELETE_LIKED_CARD",
  SET_FILTER_CARDS = "SET_FILTER_CARDS",
}
interface FetchCardsAction {
  type: CardsActionTypes.FETCH_CARDS;
}
interface FetchCardsErrorAction {
  type: CardsActionTypes.FETCH_CARDS_ERROR;
  payload: string;
}
interface FetchCardsSuccessAction {
  type: CardsActionTypes.FETCH_CARDS_SUCCESS;
  payload: ICard[];
}
interface DeleteCardAction {
  type: CardsActionTypes.DELETE_CARD;
  payload: ICard[];
}
interface DeleteLikedCardAction {
  type: CardsActionTypes.DELETE_LIKED_CARD;
  payload: ICard[];
}
interface LikeCardAction {
  type: CardsActionTypes.LIKE_CARD;
  payload: ICard[];
}
interface AddToLikedCardsAction {
  type: CardsActionTypes.ADD_TO_LIKED_CARDS;
  payload: ICard[];
}
interface SetFilterAction {
  type: CardsActionTypes.SET_FILTER_CARDS;
  payload: string;
}

export type CardsAction =
  | FetchCardsAction
  | FetchCardsErrorAction
  | FetchCardsSuccessAction
  | DeleteCardAction
  | DeleteLikedCardAction
  | LikeCardAction
  | AddToLikedCardsAction
  | SetFilterAction;
