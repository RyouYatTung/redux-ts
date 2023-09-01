import { Action } from "../actions";
import { ActionType } from "../action-types";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

//stateの中にdata/loading/errorの状態
//actionはapiのデータ
const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  //switch (action.type) > return state
  switch (action.type) {
    case ActionType.search_repositories:
      //loading状態
      return { loading: true, error: null, data: [] };
    case ActionType.search_repositories_success:
      //成功の場合、apiデータはdataに格納
      return { loading: false, error: null, data: action.payload };
    case ActionType.search_repositories_error:
      //失敗の場合、errorメッセージ + dataはreset
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
