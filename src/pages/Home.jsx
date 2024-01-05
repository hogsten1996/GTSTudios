import React from "react";

const Home = () => {
  return (
    <div className="pt-[6rem] min-h-screen">
      <div className="px-2">
        <h1 className="text-3xl font-extrabold text-center py-1 md:text-[40px] md:py-3">
          Gospel Tech Studios
        </h1>
        <p className="text-lg font-bold text-center py-1 md:text-[30px] md:py-3">
          The Solution For Your Organizations Website Needs
        </p>
        <p className="text-center italic py-1 md:text-[20px] md:py-3">
          Whatever you do, work heartily, as for the Lord and not for men -{" "}
          <strong>Colossians 3:23</strong>
        </p>
        <div className="flex justify-center items-center py-3">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Our Work
          </button>
        </div>
      </div>
      <div className="px-2 text-center md:text-start">
        <h1 className="text-3xl font-bold max-w-full my-4 md:text-[40px] md:max-w-[80%] mx-auto">We Provide</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-full md:max-w-[80%] mx-auto">
          <div className="span-cols-1 my-2 md:mx-3">
            <p className="text-2xl my-1 font-bold">Responsive Design</p>
            <img
              src="https://www.searchenginejournal.com/wp-content/uploads/2021/10/responsive-web-design-1-61f01c4b64c5f-sej.png"
              alt=""
              className="h-[200px] w-full object-cover object-center rounded-2xl"
            />
            <p className="text-lg font-semibold">A website that functions and looks great on all screen sizes</p>
          </div>
          <div className="span-cols-1 my-2 md:mx-3">
            <p className="text-2xl my-1 font-bold">Website Hosting</p>
            <img
              src="https://www.wpbeginner.com/wp-content/uploads/2017/12/domainandhosting.png"
              alt=""
              className="h-[200px] w-full object-cover object-center rounded-2xl"
            />
            <p className="text-lg font-semibold">Don't Worry about finding a host, we have you covered</p>
          </div>
          <div className="span-cols-1 my-2 md:mx-3">
            <p className="text-2xl font-bold my-1">Website Maintenace</p>
            <img
              src="https://www.cloudways.com/blog/wp-content/uploads/How-to-Sell-Website-Maintenance-Services.jpg"
              alt=""
              className="h-[200px] w-full object-cover object-center rounded-2xl"
            />
            <p className="text-lg font-semibold">Need changes done to your website? We have you covered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
