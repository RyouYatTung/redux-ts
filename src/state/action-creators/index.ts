import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.search_repositories,
    });

    try {
      //get api
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        { params: { text: term } }
      );
      //成功したら、apiのpackage.nameをdataに入れる
      const names = data.object.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.search_repositories_success,
        payload: names,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.search_repositories_error,
        payload: err.message,
      });
    }
  };
};
