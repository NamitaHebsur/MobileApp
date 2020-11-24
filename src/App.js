import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './MobileNew/Login/Login'
import Home from './MobileNew/Home/Home'
import Show from './MobileNew/Show/Show'

function App() {
  return (
    <div className="App">
       <Router>

<Switch>
 <Route exact path="/" component={Home}/>
 <Route path="/login" component={Login}/>
 <Route path="/show" component={Show}/>
 <Route path="/Home" component={Home}/>
 </Switch>
</Router>
    </div>
  );
}

export default App;
