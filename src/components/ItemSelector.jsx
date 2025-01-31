import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Btn, RedHatDisplay } from './Styled';
import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined';

const idioma = {
  'ES': '/',
  'EN': '/en'
};
const options = Object.keys(idioma);

export default function ItemSelector() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);

  React.useEffect(() => {
    const currentPath = window.location.pathname;
    const index = currentPath.startsWith('/en') ? 1 : 0; // Asumiendo que solo tienes dos opciones
    setSelectedIndex(index);
  }, []);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  
    const currentPath = window.location.pathname;
    let newPath;
  
    // Si estamos en el idioma español ('/'), reemplazamos con '/en' si se selecciona inglés
    // Si estamos en el idioma inglés ('/en'), reemplazamos con '/' si se selecciona español
    if (index === 1) { // Si selecciona inglés
      newPath = currentPath.startsWith('/en') ? currentPath : `/en${currentPath}`;
    } else { // Si selecciona español
      newPath = currentPath.startsWith('/en') ? currentPath.replace('/en', '') : currentPath;
    }
  
    window.location.href = newPath;
  };  

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List component="nav" aria-label="Language settings">
          <Btn
            vargridgap='4px'
            varcolor='#585DCC'
            backgcolor='#7fffd400'
            varpadding = '2px'
            borderradius ='0px'
            varfontsize = '16px'
            vardropshadow = 'none'
            varfontsizemobile = '14px'
            onClick={handleClickListItem}
          >
            <ListItemText secondary={options[selectedIndex]} color='#585DCC' />
            <ExpandMoreOutlined fontSize="small" />
          </Btn>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            <RedHatDisplay
              varcolor = '#585DCC'
              varfontsize = '16px'
            >
              {option}  
            </RedHatDisplay>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}