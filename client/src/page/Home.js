import React from "react";
import { useSelector } from "react-redux";
import DeliveryImage from "../assest/img/delivery.png";
import HeaderProduct from "../components/HeaderProduct";
import { headerData } from "../database/headerData";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Background from "../assest/img/jailback (1).jpg";
import { ReactComponent as Logo } from "../assest/img/country.svg";

const Home = () => {
  const notHaveData = new Array(7).fill(null)
    // console.log(notHaveData)
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200 });
  }, []);

  const productItem = useSelector((state) => state.productItem.productItem);
  const productLoading = useSelector(
    (state) => state.productItem.productLoading
  );

  // console.log(productItem)
  return (
    <section className="my-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 overflow-hidden p-2 md:p-4">
      <div className="flex-1 flex flex-col items-start  justify-center gap-5 py-3 pd-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 overflow-hidden p-2 md:p-4"
      data-aos="fade-right"
      data-aos-anchor-placement="top-center">
        <p className="text-4xl font-bold tracking-wider  text-headingColor md:text-5xl lg:text-6xl">
          Behind Bars
          <span className="text-red-600 text-4xl md:text-5xl lg:text-6xl">
            {" "}
            Beyond Expectations
          </span>
        </p>
      </div>
        <p data-aos="fade-up-right" className="text-base text-color text-center md:text-left md:w-4/5 px-4">
          Empowering jail inmates and developing their skills
          Creating a dynamic marketplace where customers can access a wide range of high-quality, unique products produced by inmates.
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-red-400 to-red-500 w-full md:w-auto px-6 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out font-semibold  duration-300 flex justify-center md:justify-self-start hover:scale-105 "
          onClick={()=>navigate('/menu')}
        >
          Order Now
        </button>
      </div>

      <div data-aos="fade-left" className="p-10 md:pt-10  flex-1 designHomeRight h-full px-34 ">
        <div className="flex  flex-wrap justify-center items-center gap-1 md:gap-6" >
                <div data-aos="fade-down">
                  <Logo size={2000}
                  style={{width:"20rem"}}
                  />
                </div>
        </div>
      </div>
      <div>
      </div>
    </div>
    <div>
    </div>
    </section>
  );
};

export default Home;
