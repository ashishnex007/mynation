import React from "react";
import { Image } from "@nextui-org/react";

const Card2 = () => {
  return (
    <div>
      <div className="py-10 pt-20 mx-2 flex justify-center">
        <div className='flex space-x-2'>
          <h1 className='text-5xl font-semibold text-saffron-100 ' data-aos="fade-down">MyNation</h1>
          <h1 className='text-5xl font-semibold' data-aos="fade-down">Agenda</h1>
        </div>
      </div>
      <div className="flex justify-center space-x-10">
        <div>
            <Image
                className="object-cover"
                src="https://i.ibb.co/M6C4qvg/tihar-44-082712094155.jpg"
                height={300}
                width={300}
                data-aos="fade-right"
            />
        </div>
        <div>
            <Image
                className="object-cover"
                src="https://i.ibb.co/M1VgtS9/2019-12-largeimg-628604900.jpg"
                height={300}
                width={300}
                data-aos="zoom-in"
            />
        </div>
        <div>
            <Image
                className="object-cover"
                src="https://i.ibb.co/znhtW55/2-1.jpg"
                height={300}
                width={300}
                data-aos="fade-left"
            />
        </div>
      </div>
      <div className="text-center py-20 px-40 text-xl" data-aos="fade-up">
      Creating awareness among the people about the Productline of Prison made Goods and  a Network of all the prisons in India, an E-Commerce sector to sell prison made goods across India online and Transform the Prison-Made Products Industry through Digitalization.
      </div>
    </div>
  );
};

export default Card2;
