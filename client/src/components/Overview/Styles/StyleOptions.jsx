import React, {useState, useContext} from 'react';
import AppContext from '../../App/AppContext.jsx';
import OverviewContext from '../OverviewContext.jsx';
import StylePic from './StylePic.jsx';

const StyleOptions = () => {
  const { styles } = useContext(OverviewContext);

  return (
    <div style={{display: 'inline-block', height: 'auto'}}>
      <div style={{marginBottom: '2%', fontSize: '1.1em'}}>Options</div>
      {styles.length &&
      <>
      <div className='stylePics'>
       {styles.map(item => <StylePic key={item.name} item={item}/>)}
      </div>
      </>
      }
    </div>
  )
}

export default StyleOptions