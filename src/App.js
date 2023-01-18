import logo from './logo.svg';
import Start from './Pages/Start'
import Main from './Pages/Main'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<Start />}></Route>
          <Route path='/main' element={<Main />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
