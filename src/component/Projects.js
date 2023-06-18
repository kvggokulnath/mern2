import Nav from './Nav.js';
import Task1 from './Task1.js';
import Task2 from './Task2.js';
import Task3 from './Task3.js';
import Task5 from './Task5.js';
function Projects(){
    return(<div class="bg-info">
        <Nav/>
        <h1>My React projects</h1>
        <br/><br/>
   <div class="row">

<div class="col-6 border border-primary">
<Task1/>
</div>
<div class="col-6 border border-primary">
<Task5/>
</div>
</div>
<br/><br/>
<div class="row" >
<div class="col-12">
<Task2 name={["green","red","yellow","orange","pink","blue"]}/>
<p>click pick a color button to change background color of that button with fun</p>
</div>
</div>
<br/><br/>
<div class="row border border-primary">
   <div class="col-12">
<Task3/>
</div>
   </div>
   <br/><br/>
   <h1>My HTML,Javascript,CSS and bootstrap hosted web pages</h1>
   <div class="row">
    <div class="col-3">
    <table cellpadding="3" class="w-50 text-center">
<tr><th colspan="2">HTML tasks</th></tr>
<tr><th>name</th><th>links</th></tr>
<tr><td>task1</td> <td><a href="https://kvggokulnath.github.io/task1_html">view</a></td></tr>
<tr><td>task2</td> <td><a href="https://kvggokulnath.github.io/task2_html">view</a></td></tr>
<tr><td>task3</td> <td><a href="https://kvggokulnath.github.io/task3_html">view</a></td></tr>
<tr><td>task4</td> <td><a href="https://kvggokulnath.github.io/task4_html">view</a></td></tr>
<tr><td>task5</td> <td><a href="https://kvggokulnath.github.io/task6_html">view</a></td></tr>
<tr><td>task6</td> <td><a href="https://kvggokulnath.github.io/task7_html">view</a></td></tr>
<tr><td>task7</td> <td><a href="https://kvggokulnath.github.io/task8_html">view</a></td></tr>
<tr><td>task8</td> <td><a href="https://kvggokulnath.github.io/task9_html">view</a></td></tr>
<tr><td>task9</td> <td><a href="https://kvggokulnath.github.io/task10_html">view</a></td></tr>
<tr><td>task10</td> <td><a href="https://kvggokulnath.github.io/task11_html">view</a></td></tr>
</table>
</div>
<div class="col-3">
<table   class="w-50 text-center">
<tr><th colspan="2">CSS tasks</th></tr>
<tr><th>name</th><th>links</th></tr>
<tr><td>task1</td> <td><a href="https://kvggokulnath.github.io/task1_css">view</a></td></tr>
<tr><td>task2</td> <td><a href="https://kvggokulnath.github.io/task2_css">view</a></td></tr>
<tr><td>task3</td> <td><a href="https://kvggokulnath.github.io/task3_css">view</a></td></tr>
<tr><td>task4</td> <td><a href="https://kvggokulnath.github.io/task4_css">view</a></td></tr>
<tr><td>task5</td> <td><a href="https://kvggokulnath.github.io/task5_css">view</a></td></tr>
<tr><td>task6</td> <td><a href="https://kvggokulnath.github.io/task6_css">view</a></td></tr>
<tr><td>task7</td> <td><a href="https://kvggokulnath.github.io/task7_css">view</a></td></tr>
<tr><td>task8</td> <td><a href="https://kvggokulnath.github.io/task8_css">view</a></td></tr>
<tr><td>task9</td> <td><a href="https://kvggokulnath.github.io/task9_css">view</a></td></tr>
<tr><td>task10</td> <td><a href="https://kvggokulnath.github.io/task10_css">view</a></td></tr>
<tr><td>task11</td> <td><a href="https://kvggokulnath.github.io/task11_css">view</a></td></tr>
<tr><td>task12</td> <td><a href="https://kvggokulnath.github.io/task12_css">view</a></td></tr>
</table>
</div>
<div class="col-3">
<table  class="w-50 text-center">
<tr><th colspan="2">Bootstrap tasks</th></tr>
<tr><th>name</th><th>links</th></tr>
<tr><td>task1</td> <td><a href="https://kvggokulnath.github.io/task1_bs">view</a></td></tr>
<tr><td>task2</td> <td><a href="https://kvggokulnath.github.io/task2_bs">view</a></td></tr>
<tr><td>task3</td> <td><a href="https://kvggokulnath.github.io/task3_bs">view</a></td></tr>
<tr><td>task4</td> <td><a href="https://kvggokulnath.github.io/task4_bs">view</a></td></tr>
<tr><td>task5</td> <td><a href="https://kvggokulnath.github.io/task5_bs">view</a></td></tr>
<tr><td>task6</td> <td><a href="https://kvggokulnath.github.io/task6_bs">view</a></td></tr>
<tr><td>task7</td> <td><a href="https://kvggokulnath.github.io/task7_bs">view</a></td></tr>
<tr><td>task8</td> <td><a href="https://kvggokulnath.github.io/task8_bs">view</a></td></tr>
</table>
</div>

<div class="col-3">
<table class="w-50 text-center">
<tr><th colspan="2">javascript tasks</th></tr>
<tr><th>name</th><th>links</th></tr>
<tr><td>task1</td> <td><a href="https://kvggokulnath.github.io/task1_js">view</a></td></tr>
<tr><td>task2</td> <td><a href="https://kvggokulnath.github.io/task2_js">view</a></td></tr>
<tr><td>task3</td> <td><a href="https://kvggokulnath.github.io/task3_js">view</a></td></tr>
<tr><td>task4</td> <td><a href="https://kvggokulnath.github.io/task4_js">view</a></td></tr>
<tr><td>task5</td> <td><a href="https://kvggokulnath.github.io/task5_js">view</a></td></tr>
<tr><td>task6</td> <td><a href="https://kvggokulnath.github.io/task6_js">view</a></td></tr>
<tr><td>task7</td> <td><a href="https://kvggokulnath.github.io/task7_js">view</a></td></tr>
<tr><td>task8</td> <td><a href="https://kvggokulnath.github.io/task8_js">view</a></td></tr>
<tr><td>task9</td> <td><a href="https://kvggokulnath.github.io/task9_js">view</a></td></tr>
<tr><td>task10</td> <td><a href="https://kvggokulnath.github.io/task10_js">view</a></td></tr>
<tr><td>task11</td> <td><a href="https://kvggokulnath.github.io/task11_js">view</a></td></tr>
</table>
</div>
    </div><br/><br/>
        click <a href="./task-4">here</a> to see my table formate of json file representation
   
    
    </div>);
}
export default Projects;