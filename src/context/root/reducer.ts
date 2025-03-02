import { Action, State } from "./types";

export const rootReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setName': {
      return {
        ...state,
        name: action.name,
      }
    }
    default: {
      throw Error(`Error - unknown action type: ${action.type}`);
    }
  }
}
