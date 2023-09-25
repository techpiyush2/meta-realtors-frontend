import React, { Fragment } from "react";

import TestimonialItems from "../Data/TestimonialItems";

import Client1 from "../../assets/clients/client.jpg";
import Client2 from "../../assets/clients/client1.jpg";
import Client3 from "../../assets/clients/client2.jpg";
import Client4 from "../../assets/clients/client3.jpg";

const testimonialData = [
  {
    id: "p1",
    text: "Meta Realtors team provided excellent service and is very professional. They assisted me in getting the best price for my property when I sold it and helped me acquire a new home based on the needs of my family on the same day. Vishal Vij of Meta Realtors is someone I would suggest to anyone considering buying or selling in and around Mohali!",
    image: Client1,
    name : 'Amrita Kaur'
  },
  {
    id: "p4",
    text: "Vishal kept us up to date on all the details we needed to be aware of when searching for the business property that suited our needs. He valued our opinions even though we were conducting our own research, which is extremely uncommon. He performed amazingly.",
    name: "Ajaipal Sethi",
    image: Client4,
  },
  {
    id: "p2",
    text: "They have stayed the same – professional, personable, and straightforward – from the first time I met and worked with Meta Realtors to the present, when I am making my second purchase with them. They will continue to be at the top of my list of real estate brokers.",
    name: "Priyanka Puri",
    image: Client2,
  },
  {
    id: "p3",
    text: "Extremely professional. Mohali's top real estate agent. We had many unanswered questions about buying our property because we were first-time buyers. We appreciate you answering a lot of them and offering us wise counsel over the houses we visited.",
    name: "Balbir Singh",
    image: Client3,
  },

];

const Testimonial = () => {
  const mappedList = <TestimonialItems data={testimonialData} />;
  return (
    <Fragment>
      <section className="mx-auto bg-silverLite px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="flex flex-col md:flex-row justify-between px-auto">
          <div>
            <h1 className="font-Poppins font-bold text-3xl text-left mb-3">
              What Our Client <span className="text-blue">Say</span>
            </h1>
            <p className="text-left text-ash">
            Our client was extremely satisfied with the property and described it as their dream home come true.
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-col lg:flex-row my-6">
          {mappedList}
        </div>
      </section>
    </Fragment>
  );
};

export default Testimonial;
