import {Outlet} from 'react-router-dom';
import Header from './pages/Header';

import reset from './assets/style/reset.scss';
import Footer from './components/Footer';

function App() {
 

  return (
    <div className="App">
      <Header/>
    <Outlet/>
    <Footer/>
    </div> 
  )
}

export default App
