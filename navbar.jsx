import React, { Component } from 'react';
//Stateless Functional Component
const NavBar = ({totalCounter}) => {
    return (  <nav className="navbar navbar-light bg-light">
  
    <a className="navbar-brand" href="#">TOTAL COUNT <span className="badge badge-pill badge-secondary">{totalCounter}</span></a>
 
</nav>  );
};
 
export default NavBar ;
// class NavBar extends Component {
//     render() { 
//         return ( 
//             <nav className="navbar navbar-light bg-light">
  
//     <a className="navbar-brand" href="#">TOTAL COUNT <span className="badge badge-pill badge-secondary">{this.props.totalCounter}</span></a>
 
// </nav>
//          );
//     }
// }
 
// export default NavBar;