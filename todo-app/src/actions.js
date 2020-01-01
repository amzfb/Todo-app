//actionCreatorで生成されるactionの定義

/*
 * action types
 */
//タスク追加
export const ADD_TODO = 'ADD_TODO'
//タスクの完了・未完了の切り替え
export const TOGGLE_TODO = 'TOGGLE_TODO'
//タスク一覧をソート
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */
//ソートフィルター一覧
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */
//textとtype:ADD_TODOを返す
export function addTodo(text) {
  return { type: ADD_TODO, text }
}
//indexとtype:TOGGLE_TODOを返す
export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}
//filterとSET_VISIBILITY_FILTERを返す
export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}