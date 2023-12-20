import React from "react";
import { Image } from "@nextui-org/react";
import { useState } from "react";

const Card4 = () => {
  const [displayText, setDisplayText] = useState("Our Workflow");

  const handleClick = (newText) => {
    setDisplayText(newText);
  };

  return (
    <div>
      <div className="py-10 pt-20 mx-2 flex justify-center">
        <div className="flex space-x-2">
          <h1 className="text-5xl font-semibold">How</h1>
          <h1 className="text-5xl font-semibold text-saffron-100 ">
            We operate?
          </h1>
        </div>
      </div>
      <div className="flex justify-center space-x-6">
        <div>
          <Image
            className="object-cover carde"
            src="https://admin.kumsalajans.com/storage/media/1100/oped-1549452385562.jpg"
            width={150}
            onClick={() => handleClick("Production of materials in jail")}
            
          />
          <h2 className="text-center">Produce</h2>
        </div>
        <div className="my-12">
        <img style={{width:"5rem"}} src="https://cdn-mybharat.dl6.in/mybharat/assets/img/yuva_landing/Ellipse_1.png"/>
        </div>
        <div>
          <Image
            className="object-cover carde"
            src="https://images.shiksha.com/mediadata/images/articles/1699357162phpW3vER0.jpeg"
            width={150}
            onClick={() => handleClick("Management of produced goods")}
          />
          <h2 className="text-center">Manage</h2>
        </div>
        <div className="my-12">
          <img style={{width:"5rem"}} src="https://cdn-mybharat.dl6.in/mybharat/assets/img/yuva_landing/Ellipse_2.png"/>
        </div>
        <div>
          <Image
            className="object-cover carde"
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_Inventory_Management.jpg"
            width={150}
            onClick={() => handleClick("Inventory Management")}
          />
          <h2 className="text-center">Store</h2>
        </div>
        <div className="my-12">
          <img style={{width:"5rem"}} src="https://cdn-mybharat.dl6.in/mybharat/assets/img/yuva_landing/Ellipse_1.png"/>
        </div>
        <div>
          <Image
            className="object-cover carde"
            src="https://www.odtap.com/wp-content/uploads/2019/03/delivery.png"
            width={150}
            onClick={() => handleClick("Delivers to your home")}
          />
          <h2 className="text-center">Delivery</h2>
        </div>
      </div>
      <div className="text-center py-32 px-40 text-4xl">{displayText}</div>
    </div>
  );
};

export default Card4;
