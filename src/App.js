import logo from './logo.svg';
import './App.css';
import {Router,Route,Switch} from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Manual from './components/Manual'

function App() {
  return (
    <div>
      <Nav></Nav>
        <div className="content">
        <Switch >
          <Route  exact path="/" component={Home} ></Route>
          <Route path="/manual" component={Manual}></Route>
        </Switch>
        </div>
    </div>
  );
}

export default App;
