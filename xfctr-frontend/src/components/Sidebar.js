import React from 'react';
import { List, ListItem, ListItemText, Divider, Drawer } from '@mui/material';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <List>
        <ListItem button>
          <ListItemText primary="Discover strategies" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="My Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="My Rewards" />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
};

export default Sidebar;