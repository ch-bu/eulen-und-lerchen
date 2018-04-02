import React from 'react';
import ReactDom from 'react-dom';

// Get body tag with id of container
const app = document.getElementById('app-container');

// Fire up the app
ReactDom.render(<h1>This is my app</h1>, app);
