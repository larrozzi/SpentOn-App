import React from 'react';
import {Link}from 'react-router-dom';

const NotFoundPage=()=>(
    <div>
        404 Error!  <Link to = "/">Go Home </Link> {/*}<a href="/"> Go Home</a> for js link but it doesnt do client side routing*/}
    </div>
) 

export default NotFoundPage;