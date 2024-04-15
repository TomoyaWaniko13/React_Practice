// Importing produce from immer
import {produce} from 'immer';

// Initial state object
const state = {
    name: 'Tom', // Initial name
    hobbies: ['tennis', 'soccer'] // Initial hobbies
}

/**
 * newState is a new state object produced from the initial state.
 * It uses the produce function from immer to create a draft of the state,
 * modifies the draft's name property, and then returns the new state.
 *
 * @type {object}
 */
const newState = produce(state, draft => {
    draft.name = 'John'; // Changing the name in the draft
    draft.hobbies[0] = 'baseball';
    console.log(draft);
    return
});

console.log(newState); // Logging the new state
console.log(newState === state); // false