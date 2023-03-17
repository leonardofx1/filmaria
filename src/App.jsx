import {Outlet} from 'react-router-dom';
import Header from './pages/Header';


import reset from './assets/style/reset.scss'
function App() {
 

  return (
    <div className="App">
      <Header/>
    <Outlet/>
    </div> 
  )
}

export default App
