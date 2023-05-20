interface State {
  isMenuOpen: boolean;
}
type Action = { type: "OPEN_MOBILE_MENU" };
export const AppReducer = (state: State, action: Action): any => {
  if (action.type === "OPEN_MOBILE_MENU") {
    return { ...state, isMenuOpen: !state.isMenuOpen };
  }

  return state;
};
