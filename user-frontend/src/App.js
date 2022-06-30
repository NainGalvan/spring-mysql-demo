import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route} from 'react-router-dom'
import { React, components} from 'react'
import ListUsers from './components/list-users.component';
import Home from './components/home.component';
import AddUser from './components/add-user.component';

function App() {
  return (
    <div className="App">
      <header className="App-header1">
        <div className='page-header text-center'>
          <h2>User Registration</h2>
        </div> 
      </header>
      <br/>
      <div className='container-fluid'>
        <nav className='navbar bg-primary justify-content-center'>
          <div className='col-sm'>
          </div>
          <a href='/' className='col-sm btn btn-outline-light' role={"button"}>HOME</a>
          <div className='col-sm'></div>
          <a href='/list-all-users' className='col-sm btn btn-outline-light' role={"button"}>List All Users</a>
          <div className='col-sm'></div>
          <a href='/add-user' className='col-sm btn btn-outline-light' role={"button"}>Add User</a>
        </nav>
        <br/>
        <div className='container mt-3'>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/list-all-users" element={<ListUsers/>}/>
            <Route exact path="/add-user" element={<AddUser/>}/>
            </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;


