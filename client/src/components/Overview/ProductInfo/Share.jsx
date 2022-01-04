import React, {useState, useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';
import AppContext from '../../App/AppContext.jsx';

const Share = () => {
  const { styles } = useContext(OverviewContext);
  const { product } = useContext(AppContext);

  return (
    <div>
      <div>Share</div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <a href="http://www.google.com" className="fa fa-facebook" target="_blank"></a>
      <a href="http://www.fllt.org/wp-content/uploads/2018/07/Luna-moth_Colden-Knapp.jpg" target="_blank" className="fa fa-twitter"></a>
      <a href="http://www.google.com" className="fa fa-pinterest" target="_blank"/>
    </div>
  )
}

export default Share