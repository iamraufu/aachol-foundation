import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import About from './Components/AboutUs/About';
import Events from './Components/AboutUs/Events';
import Publications from './Components/AboutUs/Publications';
import HomeEconomics from './Components/Chapters/HomeEconomics';
import EdenMohila from './Components/Chapters/EdenMohila';
import JNU from './Components/Chapters/JNU';
import ProjectSurfaid from './Components/Projects/ProjectSurfaid';
import ProjectAwaj from './Components/Projects/ProjectAwaj';
import ProjectHappiness from './Components/Projects/ProjectHappiness';
import ProjectLinchpin from './Components/Projects/ProjectLinchpin';
import Members from './Components/Members/Members';
import Blogs from './Components/Blogs/Blogs';
import Blog1 from './Components/Blogs/Blog1';
import Blog2 from './Components/Blogs/Blog2';
import Blog3 from './Components/Blogs/Blog3';
import Blog4 from './Components/Blogs/Blog4';
import Blog5 from './Components/Blogs/Blog5';
import OfficialApp from './Components/OfficialApp/OfficialApp';
import Register from './Components/Register/Register';
import Media from './Components/AboutUs/Media';

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/events'>
          <Events />
        </Route>

        <Route path='/publications'>
          <Publications />
        </Route>

        <Route path='/home-economics'>
          <HomeEconomics />
        </Route>

        <Route path='/eden-mohila-college'>
          <EdenMohila />
        </Route>

        <Route path='/jagannath-university'>
          <JNU />
        </Route>

        <Route path='/project-awaj'>
          <ProjectAwaj />
        </Route>

        <Route path='/project-surfaid'>
          <ProjectSurfaid />
        </Route>

        <Route path='/project-happiness'>
          <ProjectHappiness />
        </Route>

        <Route path='/project-linchpin'>
          <ProjectLinchpin />
        </Route>

        <Route path='/members'>
          <Members />
        </Route>

        <Route path='/blogs'>
          <Blogs />
        </Route>

        <Route path='/blog1'>
          <Blog1 />
        </Route>

        <Route path='/blog2'>
          <Blog2 />
        </Route>

        <Route path='/blog3'>
          <Blog3 />
        </Route>

        <Route path='/blog4'>
          <Blog4 />
        </Route>

        <Route path='/blog5'>
          <Blog5 />
        </Route>

        <Route path='/app'>
          <OfficialApp />
        </Route>

        <Route path='/registration'>
          <Register />
        </Route>

        <Route path='/media'>
          <Media />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
