import React, {useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';
import { FaRing, FaTree} from 'react-icons/fa';


const CarouselEx = (props) => {
  const{currentPic, setCurrentPic} = useContext(OverviewContext);

  function handleClick (event) {
    setCurrentPic(props.picEx.url)
  }

  return (
    <span>

    {currentPic === props.picEx.url ?
     <FaRing className='faRing' onClick={event => handleClick(event)}/> :
     <FaTree className='faCircle' onClick={event => handleClick(event)}/>
    }
    </span>
  )
}

export default CarouselEx;