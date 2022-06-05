import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Dashboard from './components/Dashboard';

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Dashboard pages = {
        <Routes>
          <Route path='page1' element={<Page1 />} />
          <Route path='page2' element={<Page2 />} />
          <Route path='page3' element={<Page3 />} />
        </Routes>}
      />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;