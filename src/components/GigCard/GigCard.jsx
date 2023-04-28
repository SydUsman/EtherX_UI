// import "./GigCard.scss";
// import { Link } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import newRequest from "../../utils/newRequest";
// import React from "react";
// const GigCard = ( item ) => {
//   const { isLoading, error, data } = useQuery({
//     queryKey: [item.userId],
//     queryFn: () =>
//       newRequest.get(`/users/${item.userId}`).then((res) => {
//         return res.data;
//       }),
//   });
//   return (
//     <Link to={`/gig/${item._id}`} className="link">
//       <div className="gigCard">
//         <img src={item.cover} alt="" />
//         <div className="info">
//           {isLoading ? (
//             "loading"
//           ) : error ? (
//             "Something went wrong!"
//           ) : (
//             <div className="user">
//               <img src={data.img || "/images/noavatar.jpg"} alt="" />
//               <span>{data.username}</span>
//             </div>
//           )}
//           <p>{item.desc}</p>
//           <div className="star">
//             <img src="./images/star.png" alt="" />
//             <span>
//               {!isNaN(item.totalStars / item.starNumber) &&
//                 Math.round(item.totalStars / item.starNumber)}
//             </span>
//           </div>
//         </div>
//         <hr />
//         <div className="detail">
//           <img src="./images/heart.png" alt="" />
//           <div className="price">
//             <span>STARTING AT</span>
//             <h2>$ {item.price}</h2>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default GigCard;

//You can use below code its just the UI Above code functionality is not completed by usman 

import React from "react";
import { useEffect } from "react";
import "./GigCard.scss";
import { Link} from "react-router-dom";

const GigCard = ({ item }) => {

  return (
    <Link to="/gig/123" className="link">
      <div className="gigCard">
        <img src={item.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="star">
            <img src="./images/star.png" alt="" />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src="./images/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>
              $ {item.price}
              <sup>99</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;