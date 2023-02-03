import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import QRCodeGenerator from './QRCodeGenerator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <QRCodeGenerator />
    
    {/* <RandomPic /> */}
    
    {/* <Card
      image='https://randomuser.me/api/portraits/med/men/31.jpg'
      name='Ali'
      category='Developer'
      description='He is a hard working developer'
      year_joined='2010'
      friends={230}
    />

    <Card
      image='https://randomuser.me/api/portraits/med/men/32.jpg'
      name='Haseeb'
      category='Senior Developer'
      description='He is really very hard working developer'
      year_joined='2008'
      friends={290}
    /> */}

    {/* <Counter /> */}
      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
