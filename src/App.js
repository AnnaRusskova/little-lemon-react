import './App.css';
import {BrowserRouter} from 'react-router-dom';

import Nav from './components/Nav';
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter> {/* Оборачиваем все компоненты в BrowserRouter */}
      <Nav />
      <Main />
      <Menu />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
