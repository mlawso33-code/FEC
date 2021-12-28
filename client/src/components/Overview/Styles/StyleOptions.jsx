import React, {useState, useContext} from 'react';
import AppContext from '../../App/AppContext.jsx';
import OverviewContext from '../OverviewContext.jsx';
import StylePic from './StylePic.jsx';

const StyleOptions = () => {
  const { styles } = useContext(OverviewContext);

  return (
    <div>
      {console.log("StOPt:::", styles)}
      Options!
      {styles.map((style) => {
        <StylePic pic={style}/>
      })}
    </div>
  )
}

export default StyleOptions