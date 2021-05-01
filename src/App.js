import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Menu/Navbar'
import Productos from './Pages/Productos';
import Roles from './Pages/Roles';
import Usuarios from './Pages/Usuarios';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/usuarios' exact component={Usuarios} />
        <Route path='/roles' exact component={Roles} />
        <Route path='/productos' exact component={Productos} />
      </Switch>
    </Router>
  );
}

export default App;
