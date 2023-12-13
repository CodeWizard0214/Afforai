import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Home } from './pages/HomePage';

export const Routers = () => {
  return(
    <Router>
      <Routes>
        <Route
          path="/"
          Component={Home}
        />
      </Routes>
    </Router>
  )
};