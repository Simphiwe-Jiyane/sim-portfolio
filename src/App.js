import '../src/app.css'
import About from "./components/about/about";
import Intro from "./components/introduction/Intro";
import Motivation from './components/motivation/Motivation';
import Projects from './components/prevProjects/projects';

function App() {
  return (
    <div>
      <Intro/>
      <About/>
      <Projects/>
      <Motivation/>
    </div>
  );
}

export default App;
