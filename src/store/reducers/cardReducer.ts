import { CardsAction, CardsActionTypes, CardsState } from "../../types/cards";

const initialState: CardsState = {
  cards: [],
  loading: false,
  error: null,
  liked: [],
  filter: "all",
};

export const cardReducer = (
  state = initialState,
  action: CardsAction
): CardsState => {
  switch (action.type) {
    case CardsActionTypes.FETCH_CARDS:
      return {
        loading: true,
        cards: [],
        error: null,
        liked: [],
        filter: "all",
      };
    case CardsActionTypes.FETCH_CARDS_SUCCESS:
      return {
        loading: false,
        cards: action.payload,
        error: null,
        liked: [],
        filter: "all",
      };
    case CardsActionTypes.FETCH_CARDS_ERROR:
      return {
        loading: false,
        cards: [],
        error: action.payload,
        liked: [],
        filter: "all",
      };
    case CardsActionTypes.DELETE_CARD:
      return {
        ...state,
        cards: action.payload,
      };
    case CardsActionTypes.DELETE_LIKED_CARD:
      return {
        ...state,
        liked: action.payload,
      };
    case CardsActionTypes.LIKE_CARD:
      return {
        ...state,
        cards: action.payload,
      };
    case CardsActionTypes.ADD_TO_LIKED_CARDS:
      return {
        ...state,
        liked: action.payload,
      };
    case CardsActionTypes.SET_FILTER_CARDS:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};
