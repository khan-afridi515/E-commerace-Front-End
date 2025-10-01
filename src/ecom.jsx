import React, { useState, useRef, useEffect} from 'react'
import Sign from './SignUp/Sign'
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import Shop from './shopping/shop'
import Abouttt from './About/Aboutt'
import Contact from './contact/Contact';
import Cartt from './cart/Cartt';
import Foot from './footer/foot';
import Home from './home/home';
import ProductItems from './Data';
import Login from './SignUp/login';
import ProtectedRoute from './ProtectedRoute';
import Profile from './profile/profilee';
import Layout from './layout';



const Ecom = () => {


// const nav = useNavigate();

const getData = () =>{
  let myData = localStorage.getItem("allData");
  if(myData){
    return(JSON.parse(myData))
  }else{
    return[];
  }
 }

  const [myArr, setMyArr] = useState(getData);
  const [protection, setProtection] = useState()
  const [allProducts, setAllProducts] = useState(0)
  const [username, setUsername] = useState('');
  const [work, setWork] = useState(false);
  // const reverse = () => {
  //   setMyArr(ProductItems);
  //   nav('/');
  // }
  

  useEffect(()=>{
    const allQty = myArr.reduce((sum, line)=>sum + line.qty, 0);
    holeQty(allQty);
  },[myArr])
   
  
  
  

useEffect(()=>{
  localStorage.setItem("allData",JSON.stringify(myArr))
},[myArr])

  let length = myArr.length;
  console.log("Items count",length);
  const [myItem, setMyItem] = useState(ProductItems);
  console.log(myItem);

  const [inpVal, setInpVal] = useState("");

  const search = (text)=>{
    const filterItem = myItem.filter((single)=> single.name.toLowerCase() === text.toLowerCase())
    console.log("myfilter",filterItem);
    setMyItem(filterItem);
    setWork(true);
    setInpVal("");
  }

  function holeQty(num){
     myArr.length > 0 && setAllProducts(num)
  }
  
const Add = (product) => {
  const ItemExist = myArr.find((one)=> one.id === product.id)
  console.log("Product Exist", ItemExist)
  if(ItemExist){
    setMyArr(myArr.map((search)=> (search.id === product.id ? {...ItemExist, qty:ItemExist.qty + 1} : search)))
  }else{
    setMyArr([...myArr, {...product, qty:1}]);
  }
   
}

const decItem = (product) => {
  const ItemExist = myArr.find((one)=> one.id === product.id)
  

  if(ItemExist.qty === 1){
      setMyArr(myArr.filter((pItem) => pItem.id !== product.id))
      
  }else{
    setMyArr(myArr.map((search)=> (search.id === product.id ? {...ItemExist, qty:ItemExist.qty - 1} : search)))
  }
  
}

function clear(){
  setMyArr([]);
}


const [mode, setMode] = useState(true);

let given = useRef();

function shown(){
  if(mode){
    given.current.style.display="block";
    setMode(false)
  }else{
    given.current.style.display="none";
    setMode(true);
  }
  
}

function remove(){
  given.current.style.display="none";
}



function finsih(){
  localStorage.clear();
  setUsername('');
  remove();
}


useEffect(()=>{
  if(!work){
    setMyItem(ProductItems);
  }
},[work])

// function finish(){
//   setProtection(null);
// }

// console.log("This is my protection", protection);

  
  return (
    <div>
      <BrowserRouter>
      {/* <Layout > */}
      <Layout found={search} lengthed={length} functt={shown} producted={allProducts} myUsers={username} setMyUsers={setUsername} inpVall={inpVal} setInpVall={setInpVal}>
      <Routes>
      <Route path="/" element={<Home functt={shown} match={given} clear={finsih} />}></Route>
      <Route path="/sign" element={<Sign/>}></Route>
      <Route path="/login" element={<Login myPro={setUsername}/>}></Route>
      <Route path="/shop" element={<ProtectedRoute ><Shop  shopItem={Add} myItem={myItem}  work={work} funct={setWork} /></ProtectedRoute>}></Route>
      <Route path="/about" element={<ProtectedRoute ><Abouttt/></ProtectedRoute>}></Route>
      <Route path="/profile" element={<ProtectedRoute ><Profile userpro={username} userprofile={setUsername} /></ProtectedRoute>}></Route>
      <Route path="/contact" element={<ProtectedRoute ><Contact/></ProtectedRoute>}></Route>
      <Route path="/cart" element={<ProtectedRoute ><Cartt array={myArr} cart={Add} decrease={decItem}  clear={clear} /></ProtectedRoute>}></Route>
      </Routes>
      </Layout>
      {/* <Navbar find={search} length={length} funct={shown} product={allProducts} myUser={username} setMyUser={setUsername} inpVal={inpVal} setInpVal={setInpVal}/> */}
      
      {/* <Foot/> */}
      
      </BrowserRouter>
      
      
      
    </div>
  )
}

export default Ecom
