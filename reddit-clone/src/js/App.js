import React from 'react';
import '../css/App.css';
import Title from './components/Title';
import SearchBox from './components/SearchBox';
  
function App() {
  return (
    <div className="App">
      <Title/>
      <SearchBox/>
    </div>
  );
}

export default App;
