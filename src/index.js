import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

// import App from './App';

import Header from './LandingPage/header/Header';
import Main from './LandingPage/main/Main';
import Footer from './LandingPage/Footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* Landing Page */}
    <Header />
    <Main />
    <Footer 
      copyrightText={"© Copyright TraveleR. All rights reserved."}

      f_link_1={"About"}
      f_link_2={"Contact"}
      f_link_3={"Terms of Use"}
      f_link_4={"Privacy Policy"}
    />











    {/* <GamingHeader />
    <GamingGamesSection />
    <GamingMenu /> */}

    {/* <Card
      image='https://randomuser.me/api/portraits/med/men/31.jpg'
      name='Ali'
      category='Developer'
      description='He is a hard working developer'
      year_joined='2010'
      friends={230}
    /> */}

    {/* <Card
      image='https://randomuser.me/api/portraits/med/men/32.jpg'
      name='Haseeb'
      category='Senior Developer'
      description='He is really very hard working developer'
      year_joined='2008'
      friends={290}
    /> */}

  </React.StrictMode>
);

reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
