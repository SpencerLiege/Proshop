import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export default function StarRating({ value, text }){
  return(
    <>
      <div className="flex items-center gap-1">
        <div className="flex text-yellow-500">
          <span>
            <i className=''>
              {value>=1 ? <FaStar /> : value>=0.5 ? <FaStarHalfAlt /> : <FaRegStar /> }
            </i>
          </span>
          <span>
            <i className=''>
              {value>=2 ? <FaStar />: value>=1.5 ? <FaStarHalfAlt /> : <FaRegStar />  }
            </i>
          </span>
          <span>
            <i className=''>
              {value>=3 ? <FaStar />: value>=2.5 ? <FaStarHalfAlt /> : <FaRegStar />  }
            </i>
          </span>
          <span>
            <i className=''>
              {value>=4 ? <FaStar />: value>=3.5 ? <FaStarHalfAlt /> : <FaRegStar />  }
            </i>
          </span>
          <span>
            <i className=''>
              {value>=5 ? <FaStar />: value>=4.5 ? <FaStarHalfAlt /> : <FaRegStar />  }
            </i>
          </span>
        </div>
        <span>{text && text}</span>
        
      </div>

    </>
  )
}