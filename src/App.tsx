import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Board } from './components/Board';
import { WaitingRoom } from './components/WaitingRoom';

const App = () => {
  return (
    <Provider store={store}>
      <div className='grid-container'>
        <WaitingRoom team='a' />
        <Board />
        <WaitingRoom team='b' />
      </div>
    </Provider >
  );
}

export default App;
