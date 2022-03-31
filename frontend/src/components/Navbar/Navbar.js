import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../components/Navbar.css'
import {navItems} from '../components/NavbarItems'
import Dropdown from '../components/Dropdown';



 

const Navbar = () => {
   const [selected,setselected] = React.useState("");

   // serach function
   const [loading,setloading] = useState(false);
   const [posts,setpost] = useState([]);
   const [serachtitle,setserachtitle] = useState("");


   useEffect(()=>{
      const loadPosts = async () =>{
         setloading(true);
         const response = await axios.get("http://localhost:5500/star");
         console.log(response.data);
         setpost(response.data);
         setloading(false);
      }
      loadPosts();
   },[]);

   return(
       <>
        <nav>
           <div className='navbar'>
           <Link to ="/"><img src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/25/website-logo.png" width="100px"></img></Link>
           
         <Dropdown selected={selected} setselected={setselected}/>
         <form className="d-flex">
         <input className="serach_option_bar" type="search" placeholder="Search for Restaurants,Offers,Deals Or Events....." aria-label="Search" onChange={(e) => setserachtitle(e.target.value)}/>
            {/* {loading ? (
               <h4>Loading ....</h4>
            ):(
               star.filter((value) =>{
                  if(serachtitle === ""){
                     return value
                  }else if (value.title.toLowerCase().include(serachtitle.toLowerCase())
                  ){
                         return value
                  }
               })
               .map((item)=> <h5 key={item.id}>{item.title}</h5>)
            )} */}
        {/* <input className="serach_option_bar" type="search" placeholder="Search for Restaurants,Offers,Deals Or Events....." aria-label="Search"/> */}
        <button className="search_button" type="submit">Search</button>
          </form>
           <Link to=""><button className='log_button'>Login</button></Link>
           </div>
           
           <div className='navbar2'>
           <ul className='nav-items'>
              {navItems.map(item => {
                 return(
                <li key ={item.id} className={item.cName}>
                   <Link to={item.path}>{item.title}</Link>
                </li>
                 )
              })}
           </ul>
           </div>
        </nav>
       </>
   )
}

export default Navbar;