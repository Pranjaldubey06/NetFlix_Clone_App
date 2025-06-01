import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const faqs = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
  },
  {
    question: "How much does netflix cost ",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
  },
  {
    question: "Where can i watch?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
  },
  {
    question: "How do i cancel",
    answer:
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    question: "What can i watch on netflix",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },

  {
    question: "Is netflix is good for kids",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];

function Question() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
      <h1 className=" dark:text-white lg:text-4xl text-3xl lg:leading-9 leading-7 text-white font-semibold ml-10">
        Frequently Asked Questions
      </h1>

      {/* <div className="lg:mt-12 bg-gray-100 dark:bg-gray-800 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto">
         <div className="flex justify-between md:flex-row flex-col">
           <div className="md:mb-0 mb-8 md:text-left text-center">
            <h2 className="font-medium dark:text-white text-xl leading-5 text-gray-800 lg:mb-2 mb-4">
              Questions
            </h2>
            <p className="font-normal dark:text-gray-300 text-sm leading-5 text-gray-600 md:w-8/12 md:ml-0 w-11/12 mx-auto">
              If you don’t find your answer, Please contact us or Leave a Message, we’ll be more than happy to assist you.
            </p>
          </div> 

          <div className="flex justify-center items-center">
            <div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex bg-white md:justify-center justify-between items-center px-4 py-3 w-full">
              <input
                className="focus:outline-none bg-white"
                type="text"
                placeholder="Search"
              />
              <img
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg1.svg"
                alt="search"
              />
            </div>
          </div>
        </div> 
      </div> */}

      <div className="lg:w-8/12 w-full mx-auto ">
        {faqs.map((item, index) => (
          <div key={index}>
            <hr className="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />
            <div className="w-full md:px-6 ">
              <div className="flex justify-between items-center w-full">
                <p
                  className={`flex justify-center items-center dark:text-white font-medium text-base text-white ${
                    activeIndex === index ? "font-semibold" : ""
                  }`}
                >
                  <span className="lg:mr-6 mr-4 dark:text-white lg:text-2xl md:text-xl text-2xl font-semibold text-white ">
                    Q{index + 1}.
                  </span>
                  {item.question}
                </p>
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-label="toggler"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                  {/* <img
                    className={`transform dark:hidden transition-transform duration-300 text-white ${activeIndex === index ? 'rotate-180' : ''}`}
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                    alt="toggle"
                  />
                  <img
                    className={`transform dark:block hidden transition-transform duration-300 text-white ${activeIndex === index ? 'rotate-180' : ''}`}
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg"
                    alt="toggle-dark" 
                  />*/}
                  <IoMdAdd className="text-white" size={42} />
                </button>
              </div>
              {activeIndex === index && (
                <div className="mt-6 w-full">
                  <p className="text-base leading-6 text-white dark:text-gray-300 font-normal">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
        <hr className="w-full lg:mt-10 my-8" />
      </div>
    </div>
  );
}

export default Question;
