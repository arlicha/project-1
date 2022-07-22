import React from 'react';
import { Link } from 'react-router-dom';
// import './Banner.css'
import'./ManageItem.css'

const ManageItem = () => {
    return (
        <div>

            {/* <h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, minus voluptatem aspernatur porro debitis libero nesciunt a. Ratione temporibus consequatur, id soluta illum, iste quae accusamus dicta, ullam ea placeat?
            </h1> */}
                
            <Link to="/addItem">
                <button id='addItem' class="  hover:rounded-lg font-bold   my-20 ml-20 rounded  btn-active btn-ghost">Add product</button>
            
            </Link>


           
        </div>
    );
};

export default ManageItem;