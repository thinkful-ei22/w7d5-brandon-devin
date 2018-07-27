import {SET_LANGUAGE} from '../actions';


const initialState = {
 
  language: 'en'
}

export const languageReducer = (state = initialState, action) => {
  if (action.type === SET_LANGUAGE){
   const newState = Object.assign({}, state, { language: action.language });
    return newState;
  }
  return state;
};
