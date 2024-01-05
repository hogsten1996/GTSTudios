import React from "react";

const About = () => {
  return (
    <div className="min-h-screen pt-[6rem] w-full mx-auto px-4 md:px-0 md:w-[80%]">
      <h1 className="text-4xl font-bold text-center md:text-5xl">
        Who Are We?
      </h1>
      <p className="text-lg md:text-xl w-full md:w-3/4 mx-auto mt-4 mb-8">
        At GTStudios, we are not just a web development company; we are a team
        driven by Christian values and a passion for creating meaningful digital
        experiences. Founded on principles of honesty, integrity, and service,
        we take pride in providing responsive design solutions, reliable website
        hosting, and meticulous maintenance services. Our commitment extends
        beyond technical expertise to a genuine desire to serve churches and
        small businesses with the highest standards of excellence. Rooted in the
        belief of treating others with love and respect, we approach every
        project with dedication, aiming to make a positive impact on our clients
        and their communities. Join us on this journey where faith meets
        technology, and together, let's bring your vision to life on the digital
        frontier.
      </p>

      <h1 className="text-4xl font-bold text-center md:text-5xl">
        Our Core Values
      </h1>

      <div className="text-lg md:text-xl w-full md:w-3/4 mx-auto py-3">
        <h1 className="text-2xl font-bold md:text-3xl">Integrity</h1>
        <ul className="list-disc pl-6">
          <li>Uphold honesty and transparency in all business dealings.</li>
          <li>
            Prioritize ethical practices and make decisions based on strong
            moral principles.
          </li>
          <li>
            Build trust with clients through consistent integrity in actions and
            communication.
          </li>
        </ul>
      </div>

      <div className="text-lg md:text-xl w-full md:w-3/4 mx-auto py-3">
        <h1 className="text-2xl font-bold md:text-3xl">Service Excellence</h1>
        <ul className="list-disc pl-6">
          <li>
            Strive for excellence in every aspect of website development,
            providing high-quality solutions.
          </li>
          <li>
            Prioritize customer satisfaction by understanding and meeting the
            unique needs of churches and small businesses.
          </li>
          <li>
            Continuously improve skills, technologies, and processes to deliver
            outstanding service.
          </li>
        </ul>
      </div>

      <div className="text-lg md:text-xl w-full md:w-3/4 mx-auto py-3">
        <h1 className="text-2xl font-bold md:text-3xl">Kingdom Impact</h1>
        <ul className="list-disc pl-6">
          <li>
            Recognize the potential of technology to spread the message of faith
            and contribute positively to the community.
          </li>
          <li>
            Align business goals with a greater purpose, seeking to make a
            positive impact on churches, businesses, and individuals.
          </li>
          <li>
            Actively engage in projects that support Christian values and
            contribute to the greater good.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;

