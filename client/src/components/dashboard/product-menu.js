import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function ProductMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Products
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
<MenuItem onClick={handleClose}>Full Flared Maxi Dress</MenuItem>
<MenuItem onClick={handleClose}>Button Down Mini Dress</MenuItem>
<MenuItem onClick={handleClose}>Frill Detailed Maxi Dress</MenuItem>
<MenuItem onClick={handleClose}>Printed Bodycon Maxi Dress</MenuItem>
<MenuItem onClick={handleClose}>Tie Up Shoulder Dress</MenuItem>
<MenuItem onClick={handleClose}>Front Slit Maxi Dress</MenuItem>
<MenuItem onClick={handleClose}>Off Shoulder Maxi Dress</MenuItem>

        
      </Menu>
    </div>
  );
}
