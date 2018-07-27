export const RESTART_GAME = 'RESTART_GAME';

export const MAKE_GUESS = 'MAKE_GUESS';

export const GENERATE_AURAL_UPDATE='GENERATE_AURAL_UPDATE';

export const restartGame = (guesses, feedback, auralStatus, correctAnswer) => ({

    type: RESTART_GAME,
    guesses, feedback, auralStatus, correctAnswer
});

export const makeGuess = (guesses, feedback) => ({
type: MAKE_GUESS,
feedback,guesses
});

export const generateAuralUpdate = (auralStatus) => ({
type: GENERATE_AURAL_UPDATE,
auralStatus
});