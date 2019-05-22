import React from 'react';
import '../css/App.css';
import Title from './components/Title';
import SearchBox from './components/SearchBox';
import CommentList from './components/CommentList';  

function App() {
  return (
    <div className="App">
      <Title/>
      <SearchBox/>
      <CommentList/>
    </div>
  );
}

export default App;
