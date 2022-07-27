import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar , faStarHalf  } from '@fortawesome/free-regular-svg-icons'
import React from 'react'

function Rating({value , text}) {
  return (
    <div className='rating'>
    {[1, 2, 3, 4, 5].map((rate , ind) => (
      <span key={ind}>
        {/* <i
          
          className={
            `text-main-yellow 
            ${
                value + 1 === rate + 0.5
                ? "fas fa-star-half-alt"
                : value >= rate
                ? "fas fa-star"
                : "far fa-star"
            }
            `
          }
        ></i> */}
        <FontAwesomeIcon
            className='text-main-yellow'
        icon={
             value + 1 === rate + 0.5
             ? faStarHalf 
             :  value >= rate
             ? faStar
             : ""
        } />

      </span>
    ))}
    <span>{text && text}</span>
  </div>
  )
}

export default Rating


// const Rating = ({ value, text, color }) => {
//   return (
//     <div className='rating'>
//       {[1, 2, 3, 4, 5].map((rate) => (
//         <span key={uuidv4()}>
//           <i
//             style={{ color }}
//             className={
//               value + 1 === rate + 0.5
//                 ? "fas fa-star-half-alt"
//                 : value >= rate
//                 ? "fas fa-star"
//                 : "far fa-star"
//             }
//           ></i>
//         </span>
//       ))}
//       <span>{text && text}</span>
//     </div>
//   );
// };