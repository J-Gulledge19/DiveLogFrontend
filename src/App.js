import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My DiveLog</h1>
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
