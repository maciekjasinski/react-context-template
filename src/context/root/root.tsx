import { useReducer } from "react";
import { rootReducer } from "./reducer";
import { initialValues, RootStateContext } from "./utils";
import { RootProviderProps } from "./types";

export const RootProvider = ({
  children,
}: RootProviderProps) => {
  const [state, dispatch] = useReducer(rootReducer, initialValues)

  const value = {
    ...state,
    rootDispatch: dispatch,
  };

  return <RootStateContext.Provider value={value}>{children}</RootStateContext.Provider>
};
