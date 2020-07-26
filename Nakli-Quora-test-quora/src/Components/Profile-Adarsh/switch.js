import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function DisabledTabs() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        style  = {{position:'absolute', top:'8cm',left: '7.6cm', right: 'cm'}}
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Profile" />
        <Tab label="Your Answers"/>
        <Tab label="Your Questions" />
        <Tab label="Following" />
        
      </Tabs>
    </Paper>
  );
}