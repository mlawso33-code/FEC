import React, {useState, useContext} from 'react';
import { FaTwitter, FaFacebook, FaPinterest} from 'react-icons/fa';

const Share = () => {

  return (
    <div>
      <div>Share</div>

      <a href="https://i.pinimg.com/originals/e2/61/94/e26194b16bc0cbdb2a4366d94dc49c01.jpg" target="_blank">
      <FaFacebook className='faFacebook overviewFA'/>
      </a>
      <a href="http://www.fllt.org/wp-content/uploads/2018/07/Luna-moth_Colden-Knapp.jpg" target="_blank">
      <FaTwitter className='faTwitter overviewFA'/>
      </a>
      <a href="https://images.squarespace-cdn.com/content/v1/587501b89f7456c5d579c54a/1626792701824-2BPMOD6MH0PL0VZTJE1M/luna+moth+%283%29.jpg" target="_blank">
      <FaPinterest className='faPinterest overviewFA'/>
      </a>
    </div>
  )
}

export default Share