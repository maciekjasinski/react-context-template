import { ReactNode } from "react";

export type Action = {
  type: 'setName',
  name: State['name'];
};

export interface State {
  name: string;
}

type Dispatch = (action: Action) => void;

export interface RootContextInterface extends State {
  rootDispatch: Dispatch;
}

export interface RootProviderProps {
  children: ReactNode;
}
