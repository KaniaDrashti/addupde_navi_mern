import axios from "axios";
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Addproduct() { 
  const product = {
    pname: "",
    pdesc: "",
    pimg: "",
    pprice: "",
  }
  const navigate = useNavigate ();
 const Addproduct=(e)=>{
  e.preventDefault();
  axios.post("/api/Addproduct", product).then(res => alert(res.data.data));
 }
  
  return (
    <div className="App">
      <form>
        <h1>Product Form</h1>
        <input type="text" placeholder="pname"
          onChange={(e) => {
            product.pname = e.target.value;
          }} />
        <input type="text" placeholder="pdesc"
          onChange={(e) => {
            product.pdesc = e.target.value;
          }} />
        <input type="text" placeholder="pimg"
          onChange={(e) => {
            product.pimg = e.target.value;
          }} />
        <input type="text" placeholder="price"
          onChange={(e) => {
            product.pprice = e.target.value;
          }} />

        <button onClick={Addproduct}>Add product</button>
        <button type="submit" class="btn btn-primary" onClick={() => navigate('/display')}>Go to Display</button>
      </form>
    </div>

  );
}

export default Addproduct;