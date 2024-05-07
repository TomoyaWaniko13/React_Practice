import Child from './components/Child';
import { createContext } from 'react';

export const MyContext = createContext('value from Example component');
const Example = () => {
  const value = 'hello';

  return (
    <div>
      <Child value={value} />;
    </div>
  );
};

export default Example;
