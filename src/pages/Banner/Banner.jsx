import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/drSh1L6/banner-1.jpg"
          className="w-[500px]"
        />
        <div>
          <h1 className="text-5xl font-bold">
            Manage work <br />{" "}
            <span className="text-[#d88531]">Efficiently.</span>{" "}
          </h1>
          <br />
          <h1 className="text-3xl font-bold">
            Plan, Track and Organise your work.
          </h1>
          <p className="py-6">
            An Intranet platform to Manage projects, organise work <br /> and
            focus on what’s important.
          </p>
          <Link to="/dashboard">
            <button className="btn bg-[#d88531] text-white">
              Let’s Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
