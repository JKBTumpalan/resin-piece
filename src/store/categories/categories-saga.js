import { takeLatest, call, put, all } from "redux-saga/effects";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./categories-action";

export function* fetchCategoriesAsync() {
  try {
    const categoryMap = yield call(getCategoriesAndDocuments, "collecitons");

    yield put(fetchCategoriesSuccess(categoryMap));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest("SET_CATEGORIES_START", fetchCategoriesAsync);
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
