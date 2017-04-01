import { SAVE_PARKS } from '../actions';

function saveParks(state=[], action) {
  switch(action.type) {
    case SAVE_PARKS :
      const parksData = action.data;
      return [parksData]
    default:
      return state;
  }
}

export default saveParks;
