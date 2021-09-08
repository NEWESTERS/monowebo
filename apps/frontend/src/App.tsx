import { FC } from 'react';
import { greet } from '@monowebo/utilities';

const App: FC = () => {
	return <h1>{greet('NEWESTERS')}</h1>;
};

export default App;
