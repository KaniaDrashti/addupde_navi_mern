import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import axios from "axios";
import Login  from "./component/Login";
import  Addproduct  from "./component/Addproduct";
//import display from "./component/display";

function App() {
  const user = {
    username: "",
    email: "",
    password: "",
    mobile: "",
    dob: "",
  }
  const registeruser = (e) => {
    e.preventDefault();
    axios.post("/api/registier", user).then((res) => console.log(res.data));
  }
  const fetchuser = (e) => {
    e.preventDefault();
    axios.get("/api/fetch").then((res) => console.log("data", res));
  }
  var deletename = "";
  const deleteuser = () => {
    axios.delete("/api/delete" + deletename)
      .then((res) => console.log(res));
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route exact path="/Addproduct" element={<Addproduct/>} />
          <Route exact path="/display" element={<display/>}/>
        </Routes>
      </BrowserRouter>

      <h1>Registration Form</h1>
      <input type="text" placeholder="username"
        onChange={(e) => {
          user.username = e.target.value;
        }} />
      <input type="text" placeholder="email"
        onChange={(e) => {
          user.email = e.target.value;
        }} />
      <input type="password" placeholder="password"
        onChange={(e) => {
          user.password = e.target.value;
        }} />
      <input type="text" placeholder="mobile"
        onChange={(e) => {
          user.mobile = e.target.value;
        }} />
      <input type="text" placeholder="dob"
        onChange={(e) => {
          user.dob = e.target.value;
        }} />
        <br/><br/>
         <button class="btn btn-primary" onClick={registeruser}>Register</button> &nbsp;   
         <br/><br/>
        <h1>Here Enter Uname For Deleteuser</h1>
      <input placeholder="uname"
        onChange={(e) => {
          deletename = e.target.value;
        }} />
        <br/><br/>
     
      <button class="btn btn-primary" onClick={fetchuser}>Display</button> &nbsp;
      <button onClick={deleteuser}>Delete</button>
    </div>
  );
}
export default App;
