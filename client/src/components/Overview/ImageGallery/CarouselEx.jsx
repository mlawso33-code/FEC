import React, {useContext} from 'react';
import OverviewContext from '../OverviewContext.jsx';
import { FaRing, FaTree} from 'react-icons/fa';


const CarouselEx = (props) => {
  const{currentPic, setCurrentPic} = useContext(OverviewContext);

  function handleClick () {
    setCurrentPic(props.picEx.url)
  }

  return (
    <span>

    {currentPic === props.picEx.url ?
     <FaRing className='faRing' onClick={() => handleClick()}/> :
     <FaTree className='faCircle' onClick={() => handleClick()}/>
    }
    </span>
  )
}

export default CarouselEx;