import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

const Card1 = () => {
  return (
    <div>
      <div className="px-2">
        <div className="flex space-x-20">
          <div className="mx-20 my-16">
            <div>
              <div className="flex space-x-4">
                <h1 className="text-6xl font-semibold "data-aos="fade-right">Who</h1>
                <h1 className="text-6xl font-semibold text-saffron-100" data-aos="fade-right">
                  Are we?
                </h1>
              </div>
            </div>
            <div className="mx-2 my-4" style={{ width: "20rem" }}>
              <p className="text-xl" data-aos="fade-right">
              MyNation, an e-tail platform for network of prisons in India focuses on reformation, rejuvenation, rehabilitation & reintegration of prisoners
              </p>
            </div>
          </div>
          <div className="flex">
            <div data-aos="fade-left">
              <Card isFooterBlurred radius="lg" className="border-none carde ">
                <Image
                  className="object-cover"
                  src="https://i.ibb.co/CwR655b/Screenshot-20231220-061709.png"
                  width={500}
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
