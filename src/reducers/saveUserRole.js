import { SAVE_ROLE_ID } from '../actions';

function saveUserRole(state=[], action) {
  switch(action.type) {
    case SAVE_ROLE_ID :
      const roleData = action.data;
      return [roleData]
    default:
      return state;
  }
}

export default saveUserRole;
