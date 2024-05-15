import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GetAllPatientsComponent from './components/GetAllPatientsComponent/GetAllPatientsComponent';
import AddNewPatientsComponent from './components/AddNewPatientsComponent/AddNewPatientsComponent';
import EditPatientsComponent from './components/EditPatientsComponent/EditPatientsComponent';

function App() {
  return (
    <Router>
            <div className="container">
              <h1>Hospital App</h1>
              
            <nav className="nav-menu">
                <Link to="/" >Home</Link>
                <Link to="/admin/add" >Add Patients</Link>
                <Link to="/admin/edit" >Edit Patients</Link>
            </nav>
           <Routes>
                 <Route exact path='/' element={<GetAllPatientsComponent/>}></Route>
                 <Route path='/admin/add' element={<AddNewPatientsComponent/>}></Route>
                 <Route path='/admin/edit' element={<EditPatientsComponent/>}></Route>
          </Routes>
          </div>
       </Router>
  );
}

export default App;
