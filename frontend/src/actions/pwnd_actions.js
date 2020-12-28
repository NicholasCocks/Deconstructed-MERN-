import * as PwndAPI from '../util/pwnd_util';

export const RECEIVE_BREACHES = "RECEIVE_BREACHES";

const receiveBreaches = (res) => {
  debugger
  return {
    type: RECEIVE_BREACHES,
    dataclasses: res.data
  }
}

export const fetchBreaches = (account) => dispatch => {
  debugger
  return PwndAPI.fetchBreaches(account)
    .then(res => dispatch(receiveBreaches(res)))
}