import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Login } from './components/login/Login'
import { Signup} from './components/signup/Signup'
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { Projects } from './pages/projects/Projects';
import { Contact } from './pages/contact/Contact';

const App =()=> {

  return (
    <BrowserRouter>
       <div>
        <Navbar className="" />

        <Switch>
          <Route exact path="/" component ={ Home }/>

          <div className="main d-flex justify-content-center align-items-center"> 
            <Route path="/login" component ={ Login }/>
            <Route path="/signup" component ={ Signup }/> 
            <Route path="/projects" component ={ Projects } />
            <Route path="/contacts" component ={ Contact }/> 
          </div> 
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
