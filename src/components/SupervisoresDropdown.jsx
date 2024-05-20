import React, { useState } from 'react';
import {Button, Menu, MenuItem, Fade} from '@mui/material/';

const SupervisoresDropdown = ({ supervisores, onSelect, selectedSupervisorId }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (id) => {
    setAnchorEl(null);
    if (id !== undefined) {
      onSelect(id);
    }
  };

  const selectedSupervisor = supervisores.find(s => s.id === selectedSupervisorId);

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{"color":"white", "fontWeight":"white", "border": "1px solid black", "borderRadius":"5px", "padding":"5px"}}
      >
        {selectedSupervisor ? selectedSupervisor.nombre + "   " + "▼" : "Seleccione un Supervisor  ▼"}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        TransitionComponent={Fade}
      >
        {supervisores.map(supervisor => (
          <MenuItem
            key={supervisor.id}
            onClick={() => handleClose(supervisor.id)}
          style={{"fontSize":"14px", "fontWeight":"bold", "color":"white", "backgroundColor":"black"}}>
            {supervisor.nombre}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default SupervisoresDropdown;
