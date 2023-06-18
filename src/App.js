import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {HashRouter  as Router,Routes,Route, BrowserRouter} from 'react-router-dom';
import Task4 from './component/Task4.js';
import Task1 from './component/Task1.js';
import Task5 from './component/Task5.js';
import Task3 from './component/Task3.js';
import Task2 from './component/Task2.js';
import Index from './component/Index.js';


import Portfolio from './component/Portfolio.js';
import About from './component/About.js';
import Contact from './component/Contact.js';
import Projects from './component/Projects.js';
function App() {
  return (
   
    <div class="t1">
      <Router>
      
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>


        <Route path="/" element={<Index/>}/>
        <Route path="/task-1" element={<Task1/>}/>
        <Route path="/task-2" element={<Task2 name={["green","red","yellow","orange","pink","blue"]}/>}/>
        <Route path="/task-3" element={<Task3/>}/>
        <Route path="/task-4" element={<Task4/>}/>
        <Route path="/task-5" element={<Task5/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
      </Router>
      
   
    </div>
  );
}

export default App;
