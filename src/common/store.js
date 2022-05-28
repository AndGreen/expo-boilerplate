import {createStore, persist} from 'easy-peasy';
import {asyncstorage} from './asyncstorage';

window.requestIdleCallback = null;

export const store = createStore(
  persist(
    {
      // restoreBackup: action((state, {routines, colors, history}) => {
      //   state.routines = routines;
      //   state.history = history;
      //   state.colors = colors;
      // })
    },
    {storage: asyncstorage, allow: ['']},
  ),
  {middleware: []},
);
