import React, { Fragment } from "react";

import FAQsItem from "../Data/FAQsItem";

const faqsData = [
  {
    id: "q1",
    que: "Why Meta Realtors ?",
    ans: "Meta Realtors is the No. 1 Real Estate Company of Mohali. We value integrity, openness, commitment, and professionalism as the top real estate brokers in Mohali. In our daily interactions with our clients, we illustrate our basic principles. Numerous clients choose us for their real estate needs because of our dedication and reactivity. We operate in all areas of Tri City, Starting from Mohali, Kharar, Kurali, Zirakpur, Panchkula and Chandigarh.",
  },
  {
    id: "q2",
    que: "Is property a safe investment?",
    ans: "Yes, it is the safest and the best investment ever. Investing in property increases your money several times. Investing in property can help you in achieving your short and long term Goals, may it be your kids’ education, kids Marriage, your retirement plan.",
  },
  {
    id: "q3",
    que: "When is the right time to purchase a property?",
    ans: "It is always today, the right time to buy a property. It is the day, when you start thinking about investing in Real Estate. Postponing of investment in Real Estate, keeps on Increasing the price of property on regular basis. So, Always plan to invest in real estate today. Tomorrow is always a late.",
  },
  {
    id: "q4",
    que: "Which Property to Choose for Residential Purpose?",
    ans: "Many Times, we get confused, either to choose a Flat, a Plot, a Villa, a Kothi or a Floor for residential purpose. See every option has its own benefits. But, for that you need to have genuine property advisor, who can understand your needs by giving you appropriate time for discussion. For that contact Mr. Vishal Vij - 7973740282",
  },
];

const FAQs = () => {
  const mappedList = faqsData.map((item) => (
    <FAQsItem key={item.id} id={item.id} que={item.que} ans={item.ans} />
  ));

  return (
    <Fragment>
      <section className="mx-auto bg-silver px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <h1 className="font-Poppins font-bold text-3xl text-center mb-10">
          Frequently Asked <span className="text-blue">Questions</span>
        </h1>
        <div className="lg:mx-28 mx-0">{mappedList}</div>
      </section>
    </Fragment>
  );
};

export default FAQs;
