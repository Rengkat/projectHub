import { createContext, useReducer, useEffect } from "react";
import { AppReducer } from "./Reducer";
interface AppState {
  isMenuOpen: boolean;
}

const initialState: any = {
  isMenuOpen: false,
};
interface ProviderProps {
  children: React.ReactNode;
}
export const AppContext = createContext(initialState);
const AppProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const openMobileMenu = () => {
    dispatch({ type: "OPEN_MOBILE_MENU" });
  };

  return (
    <AppContext.Provider value={{ ...state, openMobileMenu }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
