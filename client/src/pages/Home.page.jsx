import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// Layout
import HomepageLayout from "../layouts/HomepageLayout"

// components
import Delivery from "../components/Delivery";
import Dining from "../components/Dining";
import Night from "../components/Night"
import Nutrition from "../components/Nutrition";

// redux
// import { useDispatch } from "react-redux";
// import { getRestaurant } from "../redux/reducers/restaurant/restaurant.action";

const Home = () => {
  const { type } = useParams();

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getRestaurant());
  // }, []);

  return (
    <>
      <div className="my-5 mb-20 md:mb-10">
        {type === "delivery" && <Delivery />}
        {type === "dining" && <Dining />}
        {type === "night" && <Night />}
        {type === "nutri" && <Nutrition />}
      </div>
    </>
  );
};

export default HomepageLayout(Home);