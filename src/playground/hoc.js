// Higer Order Component (HOC) - A compenent that renders another component 

import React from 'react';
import ReactDOM from 'react-dom';

 const Info =(props) => (
   <div>    
   <h1>INFO</h1>
   <p> The info is : {props.info} </p>
   </div>
 )

//  const withAdminWarning = (WrappedComponent) =>{
//   return (props)=>( //return HOC component, {...props} to pass the props to the child
//     <div>
//       {props.isAdmin  &&  <p> this is private info. Please don't share!</p> }
//       <WrappedComponent {...props}/> 
//     </div>
//   )  
//  }
//  const AdminInfo = withAdminWarning(Info); // HOC component

 // requireAuthentication

const requireAuthentication = (WrappedComponent)=>{
  return (props)=> (
    <div>
    {
     props.isAuthenticated ? (<WrappedComponent {...props}/>) :(<p> Please sign in to enter</p>)
    }   
    </div>
  )
}

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info= 'These are the details'/> , document.getElementById('app'));
 ReactDOM.render(<AuthInfo isAuthenticated={true} info= 'These are the details'/> , document.getElementById('app'));

