import React from 'react';
import NavigationBar from './components/NavigationBar';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Table from './pages/Table';

function App() {
  return (
    <div className="sb-nav-fixed">
      <NavigationBar />
      <Table />
    </div>
  );
}

export default App;
