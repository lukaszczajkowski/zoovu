//React router dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Recoil 
import { RecoilRoot }from 'recoil';

//Components
import WelcomePage from './components/templates/WelcomePage';
import GamePage from './components/templates/GamePage';


//CSS
import './css/styles.css';


function App() {
  return (
    <RecoilRoot>
    <Router>
    <div className="App">
    <Switch>
     <Route path = "/"
      exact
      component = {WelcomePage}
      />
      <Route path = "/game"
      exact
      component = {GamePage}
      />
      </Switch>

    </div>
    </Router>
    </RecoilRoot>
  );
}

export default App;
