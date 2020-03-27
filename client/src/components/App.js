import React from 'react';
import NavBar from './NavBar.js';
import SideMenu from './SideMenu.js';
import ModeBar from './ModeBar.js';

function App() {
  return (
    <div>
      <NavBar title="My Portfolio"/>
      <SideMenu />
      <ModeBar />
    </div>
  );
}

export default App;
