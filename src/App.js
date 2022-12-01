import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Fate from './pages/Fate';
import Result from './pages/Result';
import Today from './pages/Today';
import NotFound from './pages/NotFound';
import Nav from './components/Nav';
import './App.css';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <Nav />
      <AnimatePresence>
        <Routes className="Contents">
          <Route path="/" element={<Home />} />
          <Route path="/fate" element={<Fate />} />
          <Route path="/result" element={<Result />} />
          <Route path="/today" element={<Today />}>
            <Route path="money" element={<div>재물운</div>} />
            <Route path="love" element={<div>애정운</div>} />
            <Route path="work" element={<div>직장운</div>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
