import { call, put, takeEvery, takeLatest, select } from "@redux-saga/core/effects";
import * as types from "reducers/main";
import request from "utils/request";


export function* getListFlow(payload) {
  let res = null
  try {
    const { page, size } = payload.data

    res = yield call(request, '/mock.json', {})
    console.log('@@@@ res: ', res)
    console.log(res.list)
    let list = res.list.slice(page * size, page * size + size)
    console.log('@@@@ list: ', list)

    yield put({
      type: types.DEFAULT_ASSIGN,
      data: {
        list: list
      }
    })
  } catch (e) {
    console.error('ERR: ', e)
  }
}

export function* publishPostFlow(payload) {
  try {

  } catch (e) {
    console.error('ERR: ', e)
  }
}

export default function* watch() {
  yield takeEvery(types.GET_LIST, getListFlow)
  yield takeEvery(types.PUBLISH_POST, publishPostFlow)
}
