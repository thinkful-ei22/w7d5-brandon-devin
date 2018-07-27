import Actions from '../actions';

const initialState = {
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: 35
      //Math.round(Math.random() * 100) + 1
}

export const gameReducer = (state = initialState, action) => {

    switch (action.type) {
        case Actions.RESTART_GAME: 

            break;
        case Actions.MAKE_GUESS:

            break;
        case Actions.GENERATE_AURAL_UPDATE:

            break;
        default: 

        
    }


return state;
}