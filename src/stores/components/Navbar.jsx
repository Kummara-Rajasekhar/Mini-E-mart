import React from 'react'

import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const {cartItems}=useCart()
  return (
    <>
    <div className='navSection'>
        <div className="title">
            <h2>E-Mart</h2>
        </div>
        <div className="search">
            <input type="text" placeholder='search...' />

        </div>
        <div className="user">
            <div className="user-details">
                SignIn/SignUp
            </div>
           <Link to='/addtocart'>
           <div className="cart">
                Cart
                <span>{cartItems.length}</span>
            </div>
            </Link>
        </div>
    </div>
    <div className="subMenu">
        <ul>
            <Link to='/mobiles'><li>Mobiles</li></Link>
            <Link to='/ac'><li>AC</li></Link>
            <Link to='/men'> <li>Men Wear</li></Link>
            <Link to='/woman'> <li>Woman Wear</li></Link>
           
            
            <Link to="/furniture"><li>Furniture</li></Link>
            <Link to='/ac'><li>AC</li></Link>
            
            <Link to="/kitchen"><li>Kitchen</li></Link>
            <Link to="/fridges"><li>Fridges</li></Link>
            <Link to="/speakers"><li>Speakers</li></Link>
            
            <Link to="/tv"><li>TV</li></Link>
            <Link to="/watch"><li>Watches</li></Link>
            <Link to='/men'> <li>Men Wear</li></Link>
            <Link to='/woman'> <li>Woman Wear</li></Link>
            <Link to="/furniture"><li>Furniture</li></Link>
            <Link to='/computers'><li>Computers</li></Link>
            
            
        </ul>
    </div>
    </>
    
  )
}

export default Navbar ;