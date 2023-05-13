import React from "react";
import "./Gig.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import Reviews from "../../components/Reviews/Reviews";

function Gig() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  // const createdAt = new Date(data.createdAt);
  // const options = { year: "numeric", month: "short" };
  // const formattedTime = `${createdAt.toLocaleString(
  //   "en-US",
  //   options
  // )}`;

  const userId = data?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });

  return (
    <div className="gig">
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="container">
          <div className="lefty">
            <div className="left">
              <div className="mySlider">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  loop={true}
                  pagination={{
                    clickable: true,
                    enabled: true,
                  }}
                  navigation={false}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  {data.images.map((img) => (
                    <SwiperSlide key={img}>
                      <img key={img} src={img} alt="" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="price">
                <h3>{data.shortTitle}</h3>
                <h2>$ {data.price}</h2>
              </div>
              <p>{data.shortDesc}</p>
              <div className="details">
                <div className="item">
                  <img src="/images/clock.png" alt="" />
                  <span>{data.deliveryTime} Days Delivery</span>
                </div>
                <div className="item">
                  <img src="/images/recycle.png" alt="" />
                  <span>{data.revisionNumber} Revisions</span>
                </div>
              </div>
              <div className="features">
                {data.features.map((feature) => (
                  <div className="item" key={feature}>
                    <img src="/images/greencheck.png" alt="" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="payButton">
                <Link to={`/pay/${id}`}>
                  <button className="usd">Pay in $USD</button>
                </Link>
                <Link to={`/`}>
                  <button className="crypto">Pay in ₿itcoin</button>
                </Link>
              </div>
            </div>
            <Reviews gigId={id} />
          </div>

          <div className="right">
            <h1>{data.title}</h1>
            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <div className="user">
                <img
                  className="pp"
                  src={dataUser.img || "/images/noavatar.jpg"}
                  alt=""
                />
                <span>{dataUser.username}</span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((item, i) => (
                        <img src="/images/star.png" alt="" key={i} />
                      ))}
                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                )}
              </div>
            )}
            {/* <Swiper
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              pagination={{
                clickable: true,
                enabled: true,
              }}
              navigation={false}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {data.images.map((img) => (
                <SwiperSlide key={img}>
                  <img key={img} src={img} alt="" />
                </SwiperSlide>
              ))}
            </Swiper> */}
            <h2>About This Gig</h2>
            <p>{data.desc}</p>
            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <div className="seller">
                <h2>About The Seller</h2>
                <div className="user">
                  <img src={dataUser.img || "/images/noavatar.jpg"} alt="" />
                  <div className="info">
                    <h3>{dataUser.username}</h3>
                    {!isNaN(data.totalStars / data.starNumber) && (
                      <div className="stars">
                        {Array(Math.round(data.totalStars / data.starNumber))
                          .fill()
                          .map((item, i) => (
                            <img src="/images/star.png" alt="" key={i} />
                          ))}
                        <span>
                          {Math.round(data.totalStars / data.starNumber)}
                        </span>
                      </div>
                    )}                    
                  </div>
                </div>
                <div className="box">
                  <div className="items">
                    <div className="item">
                      <span className="title">From</span>
                      <span className="desc">
                        {dataUser.country.toUpperCase()}
                      </span>
                    </div>
                    <div className="item">
                      <span className="title">Member since</span>
                      <span className="desc">
                        {new Date(dataUser.createdAt).toLocaleString("en-US", {
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="item">
                      <span className="title">Languages</span>
                      <span className="desc">English</span>
                    </div>
                  </div>
                  <hr />

                  <p>{dataUser.desc}</p>
                </div>
              </div>
            )}

            {/* <Reviews gigId={id} /> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Gig;
