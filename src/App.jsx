import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderComponent from "./Component/HeaderComponent/HeaderComponent";
import MainComponent from "./Component/HeaderComponent/MainComponent/MainComponent";
import Main2Component from "./Component/Main2Component/Main2Component";
import Testi from "./Component/Tes/testi";
import FooterComponent from "./Component/FooterComponent/FooterComponent";
import QuoteComponent from "./Component/QuoteComponent/QuoteComponent";
import quote from './Component/QuoteComponent/quote';

function App() {
  return (
    <Router basename="/geekHomePage">
      <div>
        <HeaderComponent />

        <Switch>
          <Route exact path="/">
            <MainComponent />
            <Main2Component />
            <Testi />
          </Route>
          <Route path="/quote">
            <QuoteComponent {...quote}/>
          </Route>
        </Switch>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
