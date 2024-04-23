// Importing produce from immer
import { produce } from 'immer';

// Initial state object
const state = {
  name: 'Tom', // Initial name
  hobbies: ['tennis', 'soccer'], // Initial hobbies
};

// The basic idea is that with Immer you will apply all your
// changes to a temporary draft, which is a proxy of the currentState.
// Once all your mutations are completed, Immer will produce the nextState
// based on the mutations to the draft state. This means that you can interact
// with your data by simply modifying it while keeping all the benefits of
// immutable data.
const newState = produce(state, (draft) => {
  draft.name = 'John'; // Changing the name in the draft
  draft.hobbies[0] = 'baseball';
  console.log(draft);
  return;
});

console.log(newState); // Logging the new state
console.log(newState === state); // false
