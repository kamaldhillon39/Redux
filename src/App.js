import React from 'react';
import './App.css';
import { User, User2, User3 } from './Component/User';

function App() {
  return (
    <div className="App">
     <h1>Start learning redux</h1>
     <User/>


     {/* props */}

     <User2 data={{name:'Kamaldeep'}}/>
     <User3 AGEdata={{age:30}}/>
    </div>
  );
}

export default App;
