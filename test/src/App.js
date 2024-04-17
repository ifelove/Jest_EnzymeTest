import logo from './logo.svg';
import React from "react";
import './App.css';
import UserForm from './UserForm';
import UserInput from './UserInput';


function App() {
  const [users ,setUsers]=React.useState([])
  const onUserAdd=(newUser)=>{
setUsers([...users,newUser])
  }
  return (
    <div className="App">
    <UserForm onUserAdd={onUserAdd}/>
    <hr />
    <UserInput users={users}/>
    
    </div>
  );
}

export default App;
