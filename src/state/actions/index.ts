import { ActionType } from "../action-types";

interface searchRepositoriesAction {
  type: ActionType.search_repositories;
}

interface searchRepositoriesSuccessAction {
  type: ActionType.search_repositories_success;
  payload: string[];
}

interface searchRepositoriesErrorAction {
  type: ActionType.search_repositories_error;
  payload: string;
}

//以上のinterfaceをまとめる
export type Action =
  | searchRepositoriesAction
  | searchRepositoriesSuccessAction
  | searchRepositoriesErrorAction;
