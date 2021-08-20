import { useEffect, useState } from 'react';
import './App.css';
import { OrgChartComponent } from './OrgChart';
import { SelectionCard } from './SelectionCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <SelectionCard /> */}
        <OrgChartComponent
        //data={data} 
        />
      </header>
    </div>
  );
}

export default App;
