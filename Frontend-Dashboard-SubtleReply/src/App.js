// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardNavbar from './components/DashboardNavbar';
import DashboardFooter from './components/DashboardFooter';
import DashboardMyProject from './pages/DashboardMyProject';
import ProjectDashboard from './pages/ProjectDashboard';



function App() {
  return (
    <Router>
      <div className="SubtleReplyDashboard">
        <DashboardNavbar />
        <Routes>
          <Route path="/" element={<DashboardMyProject />} />
          <Route path="/project-dashboard" element={<ProjectDashboard />} />
        </Routes>
        <DashboardFooter />
      </div>
    </Router>
  );
}

export default App;
