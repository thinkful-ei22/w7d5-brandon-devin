import {ADD_ITEM, UPDATE_ITEM, DELETE_ITEM} from '../actions';

const initialState = {
    items: []
};

export const crudReducer = (state=initialState, action) => {
    // Add code which handles each action here
    if (action.type === ADD_ITEM) {
      const newState = Object.assign({}, state, {
        items: [...state.items, action.item]
      });
      return newState;
    }
    else if (action.type === UPDATE_ITEM) {
      const newItems = state.items.map(item => {
        if (item.id === action.item.id) return action.item;
        return item;
      });
      
      const newState = Object.assign({}, state, {
        items: newItems
      });
      
      return newState;
    }
    else if (action.type === DELETE_ITEM) {
      const newItems = state.items.filter(item=> item.id !== action.item.id);
      
      const newState = Object.assign({}, state, {
        items: newItems
      });
      
      return newState;
    }
    return state;
};
