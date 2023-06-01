import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import Form from './components/Form/Form';
import Details from './components/Details/Details';
import Nav from './components/Nav/Nav';


function App() {
  const location = useLocation();
  return (
    //<BrowserRouter>
    <div className="App"> 
    {location.pathname !== "/" && <Nav/>}       
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route  path="/home" exact component={Home}/>
        <Route path="/form" exact component={Form}/>
        <Route path="/home/:id" component={Details}/>        
      </Switch>    
    </div>
   // </BrowserRouter>
  );
}

export default App;

