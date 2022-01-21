const initialState = {
  list: []
};

export const DEFAULT_ASSIGN = "main/DEFAULT_ASSIGN";
export const GET_LIST = 'main/GET_LIST'
export const PUBLISH_POST = 'main/PUBLISH_POST'

function main(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ASSIGN:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
}

export default main;
