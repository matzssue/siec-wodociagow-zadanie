import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';

import ErrorBoundary from './modules/ErrorBoundary/ErrorBoundary';

import { Error404 } from './pages/Error404/Error404';

import { lazy } from 'react';
import './App.scss';
import { Loader } from './common/Loader/Loader';

const LazyGraph = lazy(() => import('./pages/Graph'));
const LazyDashborad = lazy(() => import('./pages/Dashobard'));

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const App = () => (
  <>
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<Error404 />} path='*' />
            <Route element={<LazyGraph />} path='/' />
            <Route element={<LazyDashborad />} path='/dashboard' />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  </>
);

export default App;
