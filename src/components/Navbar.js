import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>InvestMate</Typography>
        <Button color="inherit" component={Link} to="/">Dashboard</Button>
        {/* <MenuItem onClick={() => { handleMenuClose(); navigate('/profile'); }}>
  Profile
</MenuItem> */}

        <Button color="inherit" component={Link} to="/profile">Profile</Button>
        <Button color="inherit" component={Link} to="/login">Logout</Button>
      </Toolbar>
    </AppBar>
  );
}

// import React, { useContext, useState } from 'react';
// import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Avatar } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// export default function Navbar() {
// //   const { user, logout } = useContext(AuthContext);
// //   const [anchorEl, setAnchorEl] = useState(null);

// //   const handleMenuOpen = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };
// //   const handleMenuClose = () => {
// //     setAnchorEl(null);
// //   };
// //   const handleLogout = () => {
// //     logout();
// //     handleMenuClose();
// //   };

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           <Button color="inherit" component={Link} to="/" sx={{ textTransform: 'none' }}>
//             InvestMate
//           </Button>
//         </Typography>

//         {user ? (
//           <>
//             <IconButton
//               size="large"
//               edge="end"
//               color="inherit"
//               onClick={handleMenuOpen}
//               aria-controls="profile-menu"
//               aria-haspopup="true"
//             >
//               <Avatar>{user.email.charAt(0).toUpperCase()}</Avatar>
//             </IconButton>
//             <Menu
//               id="profile-menu"
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={handleMenuClose}
//               anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//               transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//             >
//               <MenuItem disabled>{user.email}</MenuItem>
//               <MenuItem onClick={handleLogout}>Logout</MenuItem>
//             </Menu>
//           </>
//         ) : (
//           <>
//             <Button color="inherit" component={Link} to="/login">
//               Login
//             </Button>
//             <Button color="inherit" component={Link} to="/register">
//               Register
//             </Button>
//           </>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }

