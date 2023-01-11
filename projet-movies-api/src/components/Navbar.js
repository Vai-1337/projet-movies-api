// import React from "react";
// import "../css/navbar.css";
// import { NavLink } from "react-router-dom";
// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <ul>
//         <li>
//         <NavLink  className={({ isActive }) => (isActive ? "active" : "inactive")}  to="/">
//           <button>ANIME</button>
//           </NavLink>        </li>
//         <li>
//           <NavLink  className={({ isActive }) => (isActive ? "active" : "inactive")}  to="/">
//           <button>LOGIN</button>
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='navbar'>

      <img className="logonav" src="/logotest.png" alt="" />


    <div className="buttonblock">
      <Button className='animebutton'
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Anime
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
    </div>
  );
}
export default Navbar