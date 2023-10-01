import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

import { Graph } from './pages/Graph';
import { Dashobard } from './pages/Dashobard';

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback='Loading...'>
          <Routes>
            <Route path='/' element={<Graph />} />
            <Route path='/dashboard' element={<Dashobard />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
