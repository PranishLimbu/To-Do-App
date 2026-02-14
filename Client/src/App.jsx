import './App.css'
import Body from './Components/Body';
import CounterApp from './Components/CounterApp';
import CourseCard from './Components/CourseCard';
import NavbarComponent from './Components/NavbarComponent';

const courses = [
  {
    title: "mern stack",
    desc: "any thing",
    duration: 2,
  },
  {
    title: "web dev",
    desc: "any thing",
    duration: 3
  }
]

function App() {
  return (
    <>
      <div>
        <h1>Course Management System</h1>
        <CounterApp/>
      </div>
      {/* Pass the courses data as a prop */}
      <CourseCard courses={courses}/>
    </>
  );
}

export default App;