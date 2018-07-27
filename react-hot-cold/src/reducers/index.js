import {RESTART_GAME, MAKE_GUESS, GENERATE_AURAL_UPDATE} from '../actions';

const initialState = {
      guesses: [],
      feedback: 'Make your guess, BOYO!',
      auralStatus: '',
      correctAnswer: 35
      //Math.round(Math.random() * 100) + 1
}

export const gameReducer = (state = initialState, action) => {

    switch (action.type) {
        case RESTART_GAME: 
            console.log('Restart!');
            const newStateRestart = Object.assign({}, state, {
                guesses: [],
                feedback: 'Make your guess, NERD!',
                auralStatus: '',
                correctAnswer: Math.round(Math.random() * 100) + 1
            });
            return newStateRestart;
            
        case MAKE_GUESS:
            const newStateMakeGuess = Object.assign({}, state, {
                guesses: [...state.guesses, action.guess],
                feedback: action.feedback
            });
            return newStateMakeGuess;
            
        case GENERATE_AURAL_UPDATE:
            const newStateAuralUpdate = Object.assign({}, state, {
                auralStatus: action.auralStatus
            });
            return newStateAuralUpdate;

        default: 

        
    }


return state;
}