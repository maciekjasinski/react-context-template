import { useState } from 'react';
import { RootProvider, useRoot } from './context/root';
import './App.css'

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

function App() {
  return (
    <RootProvider>
      <div>
        <h1>React Context Template</h1>
        <Component />
      </div>
    </RootProvider>
  )
}

export default App
