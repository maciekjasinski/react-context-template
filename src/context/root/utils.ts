import { createContext } from "react";
import { RootContextInterface, State } from "./types";

export const RootStateContext = createContext<RootContextInterface | undefined>(undefined);

export const initialValues = {
  name: 'Joe Doe',
} satisfies State;
