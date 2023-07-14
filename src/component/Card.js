import React from 'react';
import {FcLike} from "react-icons/fc";


const Card = ({course}) => {
  return (
    <div className='bg-[#071952] w-[300px] rounded-md overflow-hidden bg-opacity-80'> 
      <div>
        <img src={course.image.url} alt='user'></img>
        <div>
          <button>
            <FcLike />
          </button>
        </div>
      </div>

      <div>
        <p>{course.title}</p>
        <p>{course.description}</p>
      </div>
    </div>
  )
}

export default Card;