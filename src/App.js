import React from 'react';
import DemoList from './components/Demo/DemoList';
import  './App.css'; 

const App = () => {
  const items = [10, 9, 5, 3, 1];

  return (
    <div className='App'>
      <h1 className='App.header'>My Title</h1>
      <DemoList title="Change List Title" items={items} />
    </div>
  );
};

export default App;