import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaCcPaypal,FaCcVisa,FaCcMastercard } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";

function Footer() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div>
      <footer className="text-gray-600 body-font bg-red-100" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '',}}>
      <h1 className='text-slate-700' style={{textAlign:'center',paddingTop:'1vmax',paddingBottom:'1vmax',fontSize:'1.5vmax',fontWeight:'bolder',color: mode === 'dark' ? 'white' : '' ,}}>Burmese Naturals Skin Care and Beauty</h1>
        <div className="container px-5 py-5 mx-auto" >
         
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3 ps-5" style={{ color: mode === 'dark' ? 'white' : '' ,cursor:'pointer'}}>CATEGORIES</h2>
              <nav className="list-none mb-10 ps-5" style={{cursor:'pointer',}}>
                <li>
                  <a className="text-stone-800 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '',fontWeight:'500',fontSize:'1.2vmax' }}>Home</a>
                </li>
                <li>
                  <a className="text-stone-800 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' ,fontWeight:'500',fontSize:'1.2vmax'}}>Order</a>
                </li>
                <li>
                  <a className="text-stone-800 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '',fontWeight:'500',fontSize:'1.2vmax' }}>Local For Vocal</a>
                </li>
                <li>
                  <a className="text-stone-800 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '',fontWeight:'500',fontSize:'1.2vmax' }}>Cart</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3 uppercase" style={{ color: mode === 'dark' ? 'white' : '' ,cursor:'pointer'}}>Customer Service</h2>
              <nav className="list-none mb-10 ps-5" style={{cursor:'pointer'}}>
                <li>
                  <Link to={'/returnpolicy'} className="text-stone-800 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '' ,fontWeight:'500',fontSize:'1.2vmax'}}>Return Policy</Link>
                </li>
                <li>
                  <Link to={'/about'} className="text-stone-800 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '',fontWeight:'500',fontSize:'1.2vmax' }}>About</Link>
                </li>
                <li>
                  <Link to={'/contact'} className="text-stone-800 hover:text-gray-800" style={{ color: mode === 'dark' ? 'white' : '',fontWeight:'500',fontSize:'1.2vmax' }}>Contact Us</Link>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3" style={{ color: mode === 'dark' ? 'white' : '',cursor:'pointer' }}>Follow Us</h2>
              <nav className="list-none mb-10" style={{fontSize:'1.5vmax',display:'flex',flexDirection:'column',gap:'.5vmax',textAlign:'center',cursor:'pointer'}}>
                <li style={{textAlign:'center'}}>
                <div className='text-slate-700' style={{ color: mode === 'dark' ? 'white' : '' ,cursor:'pointer'}}>
                  <FaFacebookF className="icons ms-7" />
                </div>
                </li>
                <li>
                <div className='text-slate-700' style={{ color: mode === 'dark' ? 'white' : '' ,cursor:'pointer'}}>
                  <FaInstagram className="icons ms-7" />
                </div>
                </li>
                <li>
                <div className='text-slate-700' style={{ color: mode === 'dark' ? 'white' : '' ,cursor:'pointer'}}>
                  <FaWhatsapp className="icons ms-7" />
                </div>
                </li>

              </nav>
            </div>
            {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <img src="https://ecommerce-sk.vercel.app/pay.png" alt="" />
            </div> */}
             <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-lg mb-3 uppercase" style={{ color: mode === 'dark' ? 'white' : '' ,cursor:'pointer'}}>Payment Methods</h2>
              <nav className="list-none mb-10 ps-5" style={{cursor:'pointer',fontSize:'1.7vmax',display:'flex',flexDirection:'column',gap:'.5vmax',textAlign:'center'}}>
                <li className='text-slate-700' style={{ color: mode === 'dark' ? 'white' : '' ,cursor:'pointer'}}>
                <FaCcPaypal className="icons ms-12" />
                </li>
                <li className='text-slate-700' style={{ color: mode === 'dark' ? 'white' : '' ,cursor:'pointer'}}>
                <FaCcVisa className="icons ms-12" />
                </li>
                <li className='text-slate-700' style={{ color: mode === 'dark' ? 'white' : '' ,cursor:'pointer'}}> 
                <FaCcMastercard className="icons ms-12" />
                </li>
                {/* <li>
                <SiPaytm className="icons" />
                </li> */}
              </nav>
            </div>


           </div>
        
           <p className='text-center footer-bottom-p'>
                @{new Date().getFullYear()} Burmese Naturals Skin Care & Beauty. All Rights Reserved
              </p>
        </div>

       
      </footer>
    </div>
  )
}

export default Footer