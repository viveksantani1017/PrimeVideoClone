import AddOperation from './addOperation'
import Content from './Content'
import Logo from '../images/primeicon.png'
import * as React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import {useState} from 'react'
import './admin.css'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function Admin() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div className='Admin'>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
          <img style={{marginLeft:'40%'}} src={Logo} className="LG" alt="Logo" />
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              style={{backgroundColor:'white'}}
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
              centered>
                <Tab label="Home" {...a11yProps(0)} />
                <Tab label="Insert Data" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <Content/>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <AddOperation/>
                </TabPanel>
        </Box>
    </div>
  )
}
export default Admin