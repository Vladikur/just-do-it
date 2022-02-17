const defaultState = {
  cards: [],
}

const ADD_CARD = "ADD_CARD"
const REMOVE_CARD = "REMOVE_CARD"
const UPDATE_CARD = "UPDATE_CARD"

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {...state, cards: [action.payload, ...state.cards ]}
    case REMOVE_CARD:
      return {...state, cards: [...state.cards].filter((c) => c.id !== action.payload.id)}
    case UPDATE_CARD:
      return {...state, cards: [...state.cards].map((c) => {
        if(c.id === action.payload.id) {
          c.title = action.payload.title
          c.completed = action.payload.completed
          return c
        } else {
          return c
        }
      })}
    default:
      return state
  }
}

export const addCardAction = (payload) => ({type: ADD_CARD, payload})
export const removeCardAction = (payload) => ({type: REMOVE_CARD, payload})
export const updateCardAction = (payload) => ({type: UPDATE_CARD, payload})