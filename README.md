# React Context Template Documentation
## Project Overview
This is a minimal React + TypeScript template that demonstrates the usage of React Context for state management. The project includes a simple example of managing a user's name through context.


## Getting Started
### Installation
1. Clone the repository
2. Install dependencies:
```
yarn install
``` 

### Running the Project
To start the development server:
```
yarn dev
```

## Project Structure
**Key Files**
- `src/context/root/` - Contains all context-related files
- `src/App.tsx` - Main application component with example usage

## Understanding the Context Implementation
### 1. Context setup
The root context is set up in multiple files:
- **Types `(src/context/root/types.ts)`:**
```ts
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
```
Defines the structure of the state and actions.

- **Initial State `(src/context/root/utils.ts)`:**
```ts
export const initialValues = {
  name: 'Joe Doe',
} satisfies State;
```
Sets the default values.

### 2. ContextProvider
The `RootProvider` component wraps the application and provides the context:
```ts
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
```

### 3. Context usage example
The main example in `App.tsx` demonstrates how to use the context:
```tsx
const Component = () => {
  const { name, rootDispatch } = useRoot();

  const [value, setValue] = useState(name)

  const updateName = () => {
    return rootDispatch({
      type: 'setName',
      name: value,
    })
  };

  return (
    <div className="container">
      <p>
        Name from context: {name}
      </p>
      <input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
      <button onClick={updateName}>Update name</button>
   </div>
  )
}
```

## How rootDispatch works
Let's break down the example in `App.tsx`:
1. Context Access:
    ```tsx
    const { name, rootDispatch } = useRoot();
    ```
    This line retrieves the current name value and dispatch function from context.

2. Local State Management:
    ```tsx
    const [value, setValue] = useState(name)
    ```
    Maintains a local state for the input field.

3. Dispatch Action:
    The `updateName` function demonstrates how to dispatch an action:
    ```tsx
    const updateName = () => {
      return rootDispatch({
        type: 'setName',
        name: value,
      })
    };
    ```
    When the button is clicked:
    1. The `updateName` function is called
    2. It dispatches an action with:
        - `type: 'setName'` - Identifies the action type
        - `name: value` - Passes the new name value
    3. The reducer processes this action:
    ```ts
    export const rootReducer = (state: State, action: Action): State => {
      switch (action.type) {
        case 'setName': {
          return {
            ...state,
            name: action.name,
          }
        }
        default: {
          throw Error(`Error - unknown action type: ${action.type}`);
        }
      }
    }
    ```
4. The state is updated, and all components using the context are re-rendered with the new value

## Extending the Context
To add more state properties, update `State` and `initialValues`:
```ts
export interface State {
  name: string;
  age: number; // New property
}
export const initialValues = {
  name: "Joe Doe",
  age: 25, // New value
} satisfies State;
```

To make the state updateable, add a new action:
```ts
type Action = { type: "setAge"; age: State["age"] };
```
And handle a new action in the `rootReducer`:
```ts
case 'setAge': {
  return {
    ...state,
    age: action.age,
  }
}
```
