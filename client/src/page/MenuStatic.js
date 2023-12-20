import React from "react";
import { MdOutlineStarPurple500, MdOutlineStarHalf } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import Menu from "../components/Menu";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCartProduct } from "../redux/cartSlice";

const MenuStatic = () => {
  const productItem = useSelector(state => state.productItem.productItem)
//   const params = useParams()
  const navigate = useNavigate()

  const data = productItem.filter(product => product.id ===  "1703024606976" ,[])[0]
  // console.log(data)

  const dispatch = useDispatch()
  const cartProduct = useSelector(state => state.cartProduct)

  const handleCartProduct = (e)=>{
    e.stopPropagation()
    e.preventDefault()
    dispatch(setCartProduct(data))  
  }

  const handleBuyProduct = (e)=>{
      handleCartProduct(e)
      navigate("/cart")

  }


  return (
    <div className="h-full">
      <div className="py-6">
        <Menu heading={"All Products"} filterbyProps={data.category} />
      </div>
    </div>
  );
};

export default MenuStatic;
