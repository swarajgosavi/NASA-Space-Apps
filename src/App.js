import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "./pages";
import './App.css';
import Home from './pages/Home';
import Know from "./pages/KM";
import Navbar from './pages/Navbar';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetail from './pages/ProjectDetail';
import CPP from './pages/CCP';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/know" element={<Know />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
        <Route path="/project" element={<ProjectDetail />}></Route>
        <Route path="/cpp" element={<CPP />}></Route>
      </Routes>
    </div>
  );
}

export default App;