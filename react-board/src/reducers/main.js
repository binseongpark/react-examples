const initialState = {
  test: 'test'
};

export const DEFAULT_ASSIGN = "main/DEFAULT_ASSIGN";

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
