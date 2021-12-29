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
      {styles.length &&
      <>
      <div className='stylePics' stlye={stylePics}>
       {styles.map(style => <StylePic pic={style.photos[0]}/>)}
      </div>
      </>
      }
    </div>
  )
}

let stylePics = {
  height: 5
}

export default StyleOptions