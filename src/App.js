import Home from './Home';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tables from './Tables';
import Forms from './Forms';
import TodoList from './TodoList';
import API from './API';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/api" element={<API />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
