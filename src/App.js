// import logo from './logo.svg';
import './App.css';
// import HelloCamp from './Views/HelloComponent';
// import { CardComponent } from './Views/CardComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Count from './Views/Count';
import Home from './container/Home';
// import StopWatch from './Views/StopWatch';
import Profile from './Pages/Profile'


function App() {
  return (
    <div className="App">
      {/* <HelloCamp/>
      <CardComponent/> */}
      {/* <Home/>
      <Count />
      <br />
      <StopWatch /> */}
      <Router>
        <Routes>
          <Route exact path='/' element = {<Home/>}/>
          <Route path='/Profile' element = {<Profile/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;

