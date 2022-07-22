import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const meniItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link  to='/blog'>Blog</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/manageItem'>Manage Item </Link></li>
        <li><Link to='/additem'>Add Item</Link></li>
        <li><Link to='/myitem'>MyItem Item</Link></li>
        <li><Link to='/login'>login</Link></li>
        
        
    </>
    return (
        <div class="navbar  bg-neutral text-neutral-content ">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        
                        {meniItem}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">Laptop</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {meniItem}
                </ul>
            </div>
            
        </div>
    );
};

 export default Navbar;
