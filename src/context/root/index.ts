import { useContext } from 'react';
import { RootStateContext } from './utils';
import { RootProvider } from './root';

const useRoot = () => {
  const context = useContext(RootStateContext);
  if (context === undefined) {
    throw new Error('useRoot must be used within an RootProvider');
  }
  return context;
};

export { RootProvider, useRoot };
