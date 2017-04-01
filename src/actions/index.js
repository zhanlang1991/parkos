// action types

export const SAVE_CUSTLOGIN = 'SAVE_CUSTLOGIN';
export const SAVE_ROLE_ID = 'SAVE_ROLE_ID';
export const SAVE_PARKS = 'SAVE_PARKS';



// action creators
//保存用户登录信息
export function saveUserLogin(data) {
  return { type: SAVE_CUSTLOGIN, data }
}

//保存用户角色信息
export function saveUserRole(data) {
  return { type: SAVE_ROLE_ID, data }
}

//保存停车场、停车组
export function saveParks(data) {
  return { type: SAVE_PARKS, data }
}
