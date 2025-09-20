import './App.css';
import { Routes, Route, useMatch } from 'react-router-dom';

// Student pages
import Home from './pages/student/Home';
import CoursesList from './pages/student/CoursesList';
import CourseDetails from './pages/student/CourseDetails';
import MyEnrollments from './pages/student/Enrollments';
import Player from './pages/student/Player';
import Loading from './components/student/Loading';
import Navbar from './components/student/Navbar';
import Footer from './components/student/Footer';

// Educator pages
import Educator from './pages/educator/Educator';
import Dashboard from './pages/educator/Dashboard';
import AddCourse from './pages/educator/AddCourse';
import MyCourses from './pages/educator/MyCourses';
import StudentsEnrolled from './pages/educator/StudentsEnrolled';

function App() {
  const isEducatorRoute = useMatch('/educator/*');

  return (
    <div className="text-default min-h-screen bg-white flex flex-col">
      {/* Navbar only for student routes */}
      {!isEducatorRoute && <Navbar />}

      {/* Main content */}
      <div className="flex-1">
        <Routes>
          {/* Student routes */}
          <Route path="/" element={<Home />} />
          <Route path="/course-list" element={<CoursesList />} />
          <Route path="/course-list/:input" element={<CoursesList />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/my-enrollments" element={<MyEnrollments />} />
          <Route path="/player/:courseId" element={<Player />} />
          <Route path="/loading/:path" element={<Loading />} />

          {/* Educator routes */}
          <Route path="/educator" element={<Educator />}>
            <Route index element={<Dashboard />} />
            <Route path="add-course" element={<AddCourse />} />
            <Route path="my-courses" element={<MyCourses />} />
            <Route path="students-enrolled" element={<StudentsEnrolled />} />
          </Route>
        </Routes>
      </div>

      {/* Footer only for student routes */}
      {!isEducatorRoute && <Footer />}
    </div>
  );
}

export default App;
