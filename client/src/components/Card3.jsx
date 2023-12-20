import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

const Card3 = () => {
  return (
    <div>
      <div className="flex space-x-20">
        <div>
          <div>
            <Card isFooterBlurred radius="lg" className="border-none">
              <Image
                alt="Woman listing to music"
                className="object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnFuLt6nKtG8SyE0lQ3z3FlkDYDOauGY_V-A&usqp=CAU"
                width={400}
              />
            </Card>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div className="flex space-x-4">
                <h1 className="text-5xl font-semibold ">Enhanced</h1>
                <h1 className="text-5xl font-semibold text-saffron-100">
                  Public Awareness
                </h1>
              </div>
            </div>
            <div className="mx-2 my-4" style={{ width: "50rem" }}>
            Government marketing allows agencies to raise awareness about various programs, policies, and initiatives that directly impact citizens' lives. It ensures that vital information reaches the target audience effectively.
            </div>
          </div>
        </div>
      </div>
      <div className="flex my-10 space-x-16">
        <div>
        <div>
          <div>
            <div>
              <div className="flex space-x-4">
                <h1 className="text-5xl font-semibold ">Transparency and </h1>
                <h1 className="text-5xl font-semibold text-saffron-100">
                  Trust
                </h1>
              </div>
            </div>
            <div className="mx-2 my-4" style={{ width: "50rem" }}>
            Effective marketing fosters transparency in government operations by sharing information and progress updates with the public. This, in turn, helps build trust between citizens and the government
            </div>
          </div>
        </div>
        </div>
        <div>
        <div>
          <div>
            <Card isFooterBlurred radius="lg" className="border-none">
              <Image
                alt="Woman listing to music"
                className="object-cover"
                src="https://www.newsvoir.com/images/article/image1/7287_TJ%20(2)-compressed.jpg"
                width={400}
              />
            </Card>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
