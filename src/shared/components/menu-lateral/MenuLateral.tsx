import { Avatar, Drawer, useTheme, Divider, List, ListItemButton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

interface IMenuLateralProps {
    children: React.ReactNode
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
  const theme = useTheme();

  return(
    <>
      <Drawer open={true} variant='permanent'>
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">

          <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center"> 
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12)}}
              src="%PUBLIC_URL%/favicon.ico" 
            />
          </Box>
          
          
          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                
              </ListItemButton>
            </List>
          </Box>
          
        </Box>
      </Drawer>

      <Box height='100vh' marginLeft={theme.spacing(28)}>
        {children}
      </Box>

    </>
  );
};