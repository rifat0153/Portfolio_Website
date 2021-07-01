import { Grid } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>

    <App />
    {/* <Grid container style={{ height: '100vh', backgroundColor: 'blueviolet', width: '100vw' }} >

    </Grid> */}
  </React.StrictMode>,
  document.getElementById('root')
);

