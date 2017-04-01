import { SAVE_CUSTLOGIN } from '../actions';

function saveLogin(state=[], action) {
  switch(action.type) {
    case SAVE_CUSTLOGIN :
      const loginData = action.data;
      return [loginData]
    default:
      return state;
  }
}

export default saveLogin;
